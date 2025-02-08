document.addEventListener("DOMContentLoaded", () => {
    const articles = [
        {
            title: "The Fibre Phenomenon",
            link: "https://www.theguardian.com/lifeandstyle/2025/jan/22/the-fibre-phenomenon-30-easy-ways-to-get-your-fill-of-this-life-changing-nutrient",
            image: "images/article1.jpg",
            description: "Discover 30 easy ways to incorporate more fiber into your diet and experience its life-changing benefits."
        },
        {
            title: "Looking for a Better Life? Follow Your Nose",
            link: "https://www.theguardian.com/lifeandstyle/2025/jan/20/the-big-idea-looking-for-a-better-life-follow-your-nose",
            image: "images/article 2.jpg",
            description: "Explore how your sense of smell can influence your well-being and lead you to a better life."
        },
        {
            title: "66 Days to Become a 5K Runner",
            link: "https://www.theguardian.com/lifeandstyle/2025/jan/25/66-days-to-become-a-5k-runner-it-was-a-truly-horrendous-experience",
            image: "images/article 3.jpg",
            description: "A personal journey detailing the challenges and triumphs of becoming a 5K runner in 66 days."
        },
        {
            title: "NSW Health Warning on Anti-Wrinkle Injections",
            link: "https://www.news.com.au/national/nsw-act/nsw-health-issue-public-warning-for-unregulated-anti-wrinkle-injections/news-story/47f254fb1c870e1fdd9c37596c197a34",
            image: "images/article 4.jpg",
            description: "NSW Health issues a public warning regarding unregulated anti-wrinkle injections and their potential risks."
        },
        {
            title: "Peak Fitness After 40 Without Injury",
            link: "https://www.smh.com.au/lifestyle/health-and-wellness/yes-you-can-hit-peak-fitness-after-40-here-s-how-to-do-it-without-injury-20250107-p5l2nf.html",
            image: "images/article 5.jpg",
            description: "Learn how to achieve peak fitness after 40 with strategies to avoid injury and maintain health."
        },
        {
            title: "I'm a doctor - this wellness fad can help you lose weight and get better sleep, plus 10 more benefits",
            link: "https://nypost.com/2025/01/21/health/wellness-fad-can-help-you-lose-weight-and-get-better-sleep-plus-10-more-benefits",
            image: "images/article 6.jpg",
            description: "Dry January, a challenge where participants abstain from alcohol for the month, has numerous physical and mental health benefits including improved sleep, increased energy, and enhanced overall appearance."
        },
        {
            title: "Wellness Trends Report 2025: Why Regenerative Health Is Such Big News",
            link: "https://www.forbes.com/sites/angelinavillaclarke/2025/01/23/wellness-trends-report-2025-why-regenerative-health-is-such-big-news",
            image: "images/article 7.jpg",
            description: "This article explores the growing trend of regenerative health, highlighting bespoke retreats and beauty treatments that delve into personalized wellness approaches."
        },
        {
            title: "Working Out to Stay Sharp: Can Exercise Keep Your Brain Healthier?",
            link: "https://newsinhealth.nih.gov/2025/01",
            image: "images/article 8.jpg",
            description: "Researchers are finding that exercise may not only benefit physical health but also improve brain health, potentially enhancing cognitive function and reducing the risk of cognitive decline."
        },
        {
            title: "25 Self Care Activities and Wellness Tips for 2025",
            link: "https://www.crisistextline.org/blog/2025/01/01/25-self-care-activities-and-wellness-tips-for-2025",
            image: "images/article 9.jpg",
            description: "Discover essential wellness tips and self-care activities to nurture your mind, body, and soul in 2025."
        }
    ];

    const articlesContainer = document.querySelector(".featured-articles");

    articles.forEach((article, index) => {
        const articleCard = document.createElement("div");
        articleCard.className = `col-md-6 mb-4 d-flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`;

        articleCard.innerHTML = `
            <div class="card w-100 h-100">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${article.image}" class="img-fluid rounded-start" alt="${article.title}" style="object-fit: cover; max-height: 180px;">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.description}</p>
                            <a href="${article.link}" target="_blank" class="btn btn-primary btn-sm">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        articlesContainer.appendChild(articleCard);
    });
});
