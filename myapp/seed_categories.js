const axios = require('axios');

const BASE_URL = 'http://localhost:5078/api';

const categories = [
    { title: "Wedding Services", image: "wedding.jpg" },
    { title: "Engagement Services", image: "engagement.jpg" },
    { title: "Birthday Services", image: "birthday.jpg" },
    { title: "Veg Catering Services", image: "veg.jpg" },
    { title: "NonVeg Catering Services", image: "nonveg.jpg" },
    { title: "Photography Service", image: "photo.jpg" }
];

async function seedCategories() {
    console.log("🌱 Seeding Categories...");

    try {
        // First check
        try {
            const res = await axios.get(`${BASE_URL}/Categories/GetAll`);
            if (res.data && res.data.length >= 6) {
                console.log("✅ Categories seem to be present. Skipping seeding.");
                return;
            }
        } catch (e) {
            console.log("Check failed, proceeding to seed.");
        }

        for (const cat of categories) {
            console.log(`🔹 Adding: ${cat.title}`);
            // Note: DTO expects CategoryName
            await axios.post(`${BASE_URL}/Categories/Add`, {
                CategoryName: cat.title,
                ParentCategory: 0 // WEDDING (Assuming logic)
            });
        }
        console.log("✅ Categories Seeded!");

    } catch (error) {
        console.error("❌ Seeding Failed:", error.response ? error.response.data : error.message);
    }
}

seedCategories();
