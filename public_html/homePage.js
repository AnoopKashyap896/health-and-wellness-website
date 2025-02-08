document.addEventListener("DOMContentLoaded", function () {
    // **Trends Section**
    const trends = [
        { title: "Mindfulness Boom", details: "Guided meditation and stress relief are trending.", image: "images/Mindfullness.jpg" },
        { title: "Gut-Health Diets", details: "Holistic nutrition is transforming meal plans.", image: "images/gutHealth.jpeg" },
        { title: "Sleep Optimization", details: "Restorative sleep techniques are gaining popularity.", image: "images/sleepOptimization.jpg" },
        { title: "Sustainable Fitness", details: "Eco-friendly workouts and sustainable wellness practices are on the rise.", image: "images/sustainableFitness.jpg" },
        { title: "Holistic Skincare", details: "Natural skincare routines are becoming the go-to for healthy, glowing skin.", image: "images/holistic-skincare.jpg" },
        { title: "Mind-Body Fitness", details: "Combining mental health and physical fitness is the new wellness trend.", image: "images/mind-body-fitness.png" },
        // { title: "Functional Nutrition", details: "Nutrition focused on long-term health benefits, rather than just weight loss.", image: "images/Functional_Nutrition.jpg" },
        // { title: "Virtual Wellness Communities", details: "Online wellness groups are helping people stay connected and motivated.", image: "images/virtual-wellness-services.jpg" }
    ];
    const trendsContainer = document.getElementById("trends");
    trends.forEach(trend => {
        trendsContainer.innerHTML += `
            <div class="trend-item">
                <img src="${trend.image}" class="trend-image" alt="${trend.title}" height="200" width="300">
                <h5>${trend.title}</h5>
                <p>${trend.details}</p>
            </div>
        `;
    });

    // **Our Story**
    document.getElementById("story-text").innerText = `
        We founded Harmony Wellness in 2010 with a simple yet powerful vision to make holistic wellness accessible to everyone. What started as a small yoga studio in Sydney quickly became a thriving community where people could reconnect with their bodies, reduce stress, and embrace mindful living. From the very beginning, we wanted to create a welcoming space where wellness wasn’t just a routine but a way of life. 
        As more people joined our community, we realized that true well-being goes beyond yoga alone. 
        In 2015, we expanded our offerings to include personalized fitness programs, Pilates, aerobics, and guided meditation, allowing us to tailor experiences that met the unique needs of our members. Whether someone wanted to build strength, improve flexibility, or simply find moments of peace in their busy lives, we were committed to supporting their journey. 
        By 2020, we saw an opportunity to make wellness even more accessible. The world was changing, and we knew people needed ways to stay active and mindful no matter where they were. That year, we launched our online wellness coaching services, bringing our expert-led programs into homes across the globe. 
        Virtual yoga classes, live workout sessions, and one-on-one coaching allowed us to reach more people than ever before, creating a global community connected by a shared commitment to health and balance. Today, Harmony Wellness is no longer just a studio..it’s a movement. 
        In 2024, we reached an incredible milestone, opening over 30 wellness centers worldwide. From Sydney to New York, London to Singapore, we continue to grow, offering diverse classes and programs designed to nurture physical, mental, and emotional well-being. No matter where you are in your journey, we’re here to support you in every breath, every stretch, every step of the way.
    `;

    // **Stats Animation**
    const statsData = [
        { title: "Global Community Members", value: "50,000+" },
        { title: "Online Sessions", value: "600+" },
        { title: "Wellness Centers", value: "30+" },
        { title: "Certified Instructors", value: "150+" },
        { title: "Years of Experience", value: "14+" },
        { title: "Workshops Conducted", value: "1,200+" },
        { title: "Corporate Wellness Programs", value: "300+" },
        { title: "Holistic Wellness Programs", value: "25+" },
        { title: "Countries Reached", value: "20+" },
        { title: "Daily Active Users", value: "5,000+" },
        { title: "App Downloads", value: "100,000+" },
        { title: "Wellness Retreats Hosted", value: "50+" }
    ];

    const statsContainer = document.getElementById("stats");

    let currentIndex = 0;
    function displayStats() {
        statsContainer.innerHTML = ""; // Clear previous stats

        const visibleStats = statsData.slice(currentIndex, currentIndex + 6);
        visibleStats.forEach(stat => {
            statsContainer.innerHTML += `<br><br><br>
                <p style="font-family: 'Lobster', cursive; font-size: 3.5rem">${stat.value}</p>
                <p>${stat.title}</p>
            `;
        });

        currentIndex = (currentIndex + 6) % statsData.length; // Loop through the stats
    }

    displayStats(); // Show initial stats
    setInterval(displayStats, 5000); // Change stats every 5 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    // **Login Form Validation**
    const loginForm = document.getElementById("loginForm");
    const loginError = document.getElementById("loginError");
    
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const username = document.getElementById("loginUsername").value.trim();
        const password = document.getElementById("loginPassword").value.trim();
        
        if (username === "" || password === "") {
            loginError.textContent = "Please fill out all fields.";
            return;
        }
        
        loginError.textContent = "";
        // Process the login (You can add the login API call here)
        alert("Logged in successfully!");
    });

    // **Signup Form Validation**
    const signupForm = document.getElementById("signupForm");
    const signupError = document.getElementById("signupError");

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const username = document.getElementById("signupUsername").value.trim();
        const password = document.getElementById("signupPassword").value.trim();
        const dob = document.getElementById("signupDOB").value.trim();

        if (username === "" || password === "" || dob === "") {
            signupError.textContent = "Please fill out all fields.";
            return;
        }
        
        // Additional validation for date of birth can be added (e.g., minimum age)
        signupError.textContent = "";
        // Process the signup (You can add the signup API call here)
        alert("Signed up successfully!");
    });
});