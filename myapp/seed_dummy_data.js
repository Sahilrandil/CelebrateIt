const axios = require('axios');

const BASE_URL = 'http://localhost:5078';
const timestamp = Date.now();

// --- CONFIGURATION ---
const SERVICE_COUNT = 10;
const BOOKING_COUNT = 10;

// --- DATA GENERATORS ---
const categories = [
    { id: 1, name: "Wedding" },
    { id: 2, name: "Engagement" },
    { id: 3, name: "Birthday" },
    { id: 4, name: "Veg Catering" },
    { id: 5, name: "NonVeg Catering" },
    { id: 6, name: "Photography" }
];

const serviceTitles = [
    "Royal Palace Wedding", "Beachside Engagement", "Kids Superhero Party",
    "Golden Jubilee Celebration", "Premium Buffet Setup", "Gourmet Non-Veg Feast",
    "Candid Wedding Photography", "Corporate Event Shoot", "Destination Wedding Decor", "Intimate Garden Party"
];

const serviceImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1464366400600-7168b8af0bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
    "https://images.unsplash.com/photo-1530103862676-de3c9a59af57?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomDate() {
    const start = new Date();
    const end = new Date();
    end.setFullYear(end.getFullYear() + 1);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
}

// --- MAIN SCRIPT ---
async function seedData() {
    console.log("🌱 Starting Bulk Data Seeding...");

    try {
        // 1. Create Users
        const adminEmail = `admin_${timestamp}@seed.com`;
        const clientEmail = `client_${timestamp}@seed.com`;
        const password = "Password@123";

        console.log(`\n🔹 Creating Admin: ${adminEmail}`);
        await axios.post(`${BASE_URL}/register_user`, {
            UserName: "Seed Admin", Email: adminEmail, ContactNumber: "9998887776",
            Password: password, UserRole: 1, termsAccepted: true
        });

        console.log(`🔹 Creating Client: ${clientEmail}`);
        await axios.post(`${BASE_URL}/register_user`, {
            UserName: "Seed Client", Email: clientEmail, ContactNumber: "8887776665",
            Password: password, UserRole: 0, termsAccepted: true
        });

        // 2. Login to get Tokens
        const adminLogin = await axios.post(`${BASE_URL}/api/Auth`, { Email: adminEmail, Password: password });
        const adminToken = adminLogin.data;

        const clientLogin = await axios.post(`${BASE_URL}/api/Auth`, { Email: clientEmail, Password: password });
        const clientToken = clientLogin.data;

        // 3. Get Client ID
        const usersResponse = await axios.get(`${BASE_URL}/api/User`);
        const clientUser = usersResponse.data.find(u => u.email === clientEmail);
        const clientId = clientUser.id;

        // 4. Create Services
        console.log(`\n🔹 Creating ${SERVICE_COUNT} Services...`);
        const createdServices = [];

        for (let i = 0; i < SERVICE_COUNT; i++) {
            const category = categories[i % categories.length];
            const title = serviceTitles[i % serviceTitles.length] || `Custom Service ${i}`;

            const serviceData = {
                title: `${title} ${timestamp}`,
                description: `Experience the best ${category.name} service with our premium package. Includes full setup, management, and execution support.`,
                basePrice: Math.floor(Math.random() * 50000) + 10000,
                rating: Math.floor(Math.random() * 2) + 3, // Rating 3-5
                discount: Math.floor(Math.random() * 20),
                image: getRandomItem(serviceImages),
                categoryId: category.id
            };

            await axios.post(`${BASE_URL}/api/Facilities/Add`, serviceData, {
                headers: { Authorization: `Bearer ${adminToken}` }
            });
            process.stdout.write("."); // Progress dot
        }
        console.log(" Done!");

        // 5. Fetch Services to get IDs for Booking
        // We need to fetch from all categories to get a pool of IDs
        let allServiceIds = [];
        for (let cat of categories) {
            try {
                const res = await axios.get(`${BASE_URL}/api/Facilities/GetByCategory/${cat.id}`);
                if (res.data) allServiceIds = allServiceIds.concat(res.data);
            } catch (e) { }
        }

        if (allServiceIds.length === 0) throw new Error("No services found to book!");

        // 6. Create Bookings
        console.log(`\n🔹 Creating ${BOOKING_COUNT} Bookings...`);

        for (let i = 0; i < BOOKING_COUNT; i++) {
            const service = getRandomItem(allServiceIds);

            const bookingData = {
                eventLocation: "Seeded Location, City Center",
                pinCode: "500050",
                eventDate: getRandomDate(),
                eventDetails: "Bulk seeded booking event details.",
                totalPrice: service.basePrice - (service.basePrice * (service.discount / 100)),
                paymentMethod: i % 2 === 0 ? "card" : "upi",
                bookingStatus: i < 7 ? "confirmed" : "completed", // Mix of confirmed and completed
                userId: clientId,
                facilityId: service.facilityId,
                categoryId: service.categoryId
            };

            await axios.post(`${BASE_URL}/add`, bookingData, {
                headers: { Authorization: `Bearer ${clientToken}` }
            });
            process.stdout.write(".");
        }
        console.log(" Done!");

        console.log("\n✅ Data Seeding Completed Successfully!");
        console.log("-----------------------------------------");
        console.log(`Admin Login: ${adminEmail} / ${password}`);
        console.log(`Client Login: ${clientEmail} / ${password}`);
        console.log("-----------------------------------------");

    } catch (error) {
        console.error("\n❌ Seeding Failed:", error.response ? error.response.data : error.message);
    }
}

seedData();
