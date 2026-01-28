const axios = require('axios');

const BASE_URL = 'http://localhost:5078';

// Unique timestamp to avoid duplicate errors
const timestamp = Date.now();
const adminUser = {
    UserName: "Test Admin",
    Email: `admin_${timestamp}@test.com`,
    ContactNumber: "9876543210",
    Password: "Password@123",
    UserRole: 1 // Admin
};

const clientUser = {
    UserName: "Test Client",
    Email: `client_${timestamp}@test.com`,
    ContactNumber: "1234567890",
    Password: "Password@123",
    UserRole: 0 // User
};

const newService = {
    title: `Luxury Test Event ${timestamp}`,
    description: "A verification service created automatically.",
    basePrice: 50000,
    rating: 5,
    discount: 10,
    image: "https://via.placeholder.com/300",
    categoryId: 1
};

async function verifyWorkflows() {
    console.log("🚀 Starting Workflow Verification & Data Seeding...");

    try {
        // --- 1. ADMIN REGISTRATION ---
        console.log(`\n🔹 Registering Admin: ${adminUser.Email}`);
        await axios.post(`${BASE_URL}/register_user`, adminUser);
        console.log("✅ Admin Registered");

        // --- 2. ADMIN LOGIN ---
        console.log(`🔹 Logging in Admin...`);
        const adminLogin = await axios.post(`${BASE_URL}/api/Auth`, {
            Email: adminUser.Email,
            Password: adminUser.Password
        });

        // Response string is the token
        const adminToken = adminLogin.data;
        console.log("✅ Admin Logged In. Token received.");

        // --- 3. ADD SERVICE ---
        console.log(`🔹 Adding Service: ${newService.title}`);
        await axios.post(`${BASE_URL}/api/Facilities/Add`, newService, {
            headers: { Authorization: `Bearer ${adminToken}` }
        });
        console.log("✅ Service Added");

        // --- 4. CLIENT REGISTRATION ---
        console.log(`\n🔹 Registering Client: ${clientUser.Email}`);
        await axios.post(`${BASE_URL}/register_user`, clientUser);
        console.log("✅ Client Registered");

        // --- 5. CLIENT LOGIN ---
        console.log(`🔹 Logging in Client...`);
        const clientLogin = await axios.post(`${BASE_URL}/api/Auth`, {
            Email: clientUser.Email,
            Password: clientUser.Password
        });
        const clientToken = clientLogin.data;
        console.log("✅ Client Logged In. Token received.");

        // --- 6. GET USER ID ---
        // Since we can't easily decode token without lib, fetch all users and find ours
        console.log("🔹 Fetching User ID...");
        const usersResponse = await axios.get(`${BASE_URL}/api/User`);
        const clientRecord = usersResponse.data.find(u => u.email === clientUser.Email);

        if (!clientRecord) throw new Error("Could not find registered client in database");
        const clientId = clientRecord.id;
        console.log(`✅ Found Client ID: ${clientId}`);

        // --- 7. GET SERVICE ID ---
        console.log("🔹 Fetching Service ID...");
        const services = await axios.get(`${BASE_URL}/api/Facilities/GetByCategory/1`);
        const createdService = services.data.find(s => s.title === newService.title);

        if (!createdService) throw new Error("Could not find the created service!");
        console.log(`✅ Found Service ID: ${createdService.facilityId}`);

        // --- 8. BOOK THE SERVICE ---
        const bookingData = {
            eventLocation: "Test Venue",
            pinCode: "400001",
            eventDate: new Date().toISOString().split('T')[0],
            eventDetails: "Automatic verification booking",
            totalPrice: 45000,
            paymentMethod: "card",
            bookingStatus: "confirmed",
            userId: clientId,
            facilityId: createdService.facilityId,
            categoryId: 1
        };

        console.log(`🔹 Booking Service...`);
        await axios.post(`${BASE_URL}/add`, bookingData, {
            headers: { Authorization: `Bearer ${clientToken}` }
        });
        console.log("✅ Service Booked Successfully");

        console.log("\n=========================================");
        console.log("✨ VERIFICATION SUCCESSFUL & DATA SEEDED ✨");
        console.log("=========================================");
        console.log("You can now login with these credentials to check the UI:");
        console.log(`👉 ADMIN:  ${adminUser.Email}  /  ${adminUser.Password}`);
        console.log(`👉 CLIENT: ${clientUser.Email}  /  ${clientUser.Password}`);
        console.log("=========================================");

    } catch (error) {
        console.error("❌ Verification Failed:", error.response ? error.response.data : error.message);
    }
}

verifyWorkflows();
