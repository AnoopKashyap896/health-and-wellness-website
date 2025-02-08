document.addEventListener('DOMContentLoaded', function () {
    const teamContent = `
        <div class="row">
            <div class="col-md-3 rounded text-center team-member p-2">
                <h5>Jane Doe</h5>
                <p>Certified Yoga Instructor</p>
                <button class="btn btn-light btn-sm" onclick="showTeamDetails('Jane Doe', 'Certified Yoga Instructor with 10+ years of experience specializing in mindfulness and Vinyasa Yoga.')">View Details</button>
            </div>
            <div class="col-md-3 rounded text-center team-member p-2">
                <h5>John Smith</h5>
                <p>Personal Trainer</p>
                <button class="btn btn-light btn-sm" onclick="showTeamDetails('John Smith', 'Specialist in strength training and cardiovascular fitness, focusing on personalized fitness plans.')">View Details</button>
            </div>
            <div class="col-md-3 rounded text-center team-member p-2">
                <h5>Priya Kapoor</h5>
                <p>Nutritionist</p>
                <button class="btn btn-light btn-sm" onclick="showTeamDetails('Priya Kapoor', 'Expert in crafting personalized nutrition and meal plans for diverse health goals.')">View Details</button>
            </div>
            <div class="col-md-3 rounded text-center team-member p-2">
                <h5>Liam Chen</h5>
                <p>Meditation Coach</p>
                <button class="btn btn-light btn-sm" onclick="showTeamDetails('Liam Chen', 'Guides individuals through mindfulness meditation and stress management techniques.')">View Details</button>
            </div>
        </div>
    `;
    document.getElementById('team').innerHTML = teamContent;

    // Function to dynamically show team member details in a modal
    window.showTeamDetails = function (name, details) {
        document.getElementById('teamModalLabel').textContent = name;
        document.getElementById('teamModalBody').textContent = details;
        const teamModal = new bootstrap.Modal(document.getElementById('teamModal'));
        teamModal.show();
    };
});
