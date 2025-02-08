document.addEventListener("DOMContentLoaded", () => {
    const subCategoryList = [
        "Yoga for Beginners",
        "Mindfulness Meditation",
        "High-Intensity Workouts",
        "Nutritional Guides",
        "Sleep Hygiene Tips",
        "Stress Management",
        "Sustainable Wellness Practices",
        "Intermittent Fasting",
        "Gut Health",
        "Work-Life Balance"
    ];

    const dropdownMenu = document.querySelector(".dropdown-menu");

    subCategoryList.forEach((subCategory) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.className = "dropdown-item";
        link.href = "#"; // Link to relevant section
        link.textContent = subCategory;

        listItem.appendChild(link);
        dropdownMenu.appendChild(listItem);
    });
});
