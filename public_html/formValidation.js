function validateContactForm(event) {
    if (event) {
        event.preventDefault();
    }

    // Retrieve input values
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation flags
    let isValid = true;

    // First Name Validation
    if (fname === "" || fname.length > 50) {
        document.getElementById("fnameMsg").textContent = "First Name cannot be empty and must be less than 50 characters.";
        document.getElementById("fnameMsg").classList.add("text-danger");
        isValid = false;
    } else {
        document.getElementById("fnameMsg").textContent = "Valid first name.";
        document.getElementById("fnameMsg").classList.add("text-success");
        document.getElementById("fnameMsg").classList.remove("text-danger");
    }

    // Last Name Validation
    if (lname === "" || lname.length > 50) {
        document.getElementById("lnameMsg").textContent = "Last Name cannot be empty and must be less than 50 characters.";
        document.getElementById("lnameMsg").classList.add("text-danger");
        isValid = false;
    } else {
        document.getElementById("lnameMsg").textContent = "Valid last name.";
        document.getElementById("lnameMsg").classList.add("text-success");
        document.getElementById("lnameMsg").classList.remove("text-danger");
    }

    // Message Validation
    if (message === "" || message.length > 200) {
        document.getElementById("messageMsg").textContent = "Message cannot be empty and must be less than 100 characters.";
        document.getElementById("messageMsg").classList.add("text-danger");
        isValid = false;
    } else {
        document.getElementById("messageMsg").textContent = "Valid message.";
        document.getElementById("messageMsg").classList.add("text-success");
        document.getElementById("messageMsg").classList.remove("text-danger");
    }

    // If form is valid, show success message
    if (isValid) {
        alert("Your message has been submitted successfully!");
        document.getElementById("contactForm").reset();
        resetContactForm();
    }
}

function resetContactForm() {
    // Clear all validation messages
    document.querySelectorAll(".form-text").forEach(msg => {
        msg.textContent = "";
        msg.classList.remove("text-danger", "text-success");
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const signupError = document.getElementById("signupError");
    const viewUsersBtn = document.getElementById("viewUsersBtn");
    const usersTableDiv = document.getElementById("usersTable");

    // Signup Form Submission
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("signupUsername").value.trim();
        const password = document.getElementById("signupPassword").value.trim();
        const dob = document.getElementById("signupDOB").value.trim();

        if (!username || !password || !dob) {
            signupError.textContent = "Please fill out all fields.";
            return;
        }

        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password, dob }),
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if (data.message === "Signup successful!") {
                    signupForm.reset();
                }
            })
            .catch(error => {
                console.error("Error signing up:", error);
            });
    });

    // Fetch and Display Users
    viewUsersBtn.addEventListener("click", function () {
        fetch("http://localhost:3000/viewUsers")
            .then(response => response.json())
            .then(data => {
                if (data.users.length === 0) {
                    usersTableDiv.innerHTML = "<h3>No users found.</h3>";
                } else {
                    const usersTable = `
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Username</th>
                                    <th>Date of Birth</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data.users.map(user => `
                                    <tr>
                                        <td>${user.id}</td>
                                        <td>${user.username}</td>
                                        <td>${user.dob}</td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    `;
                    usersTableDiv.innerHTML = usersTable;
                }
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    });
});
