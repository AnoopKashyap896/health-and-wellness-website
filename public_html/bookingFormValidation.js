function validateBookingForm(event) {
    if (event) {
        event.preventDefault();
    }

    // Retrieve form values
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const comment = document.getElementById("comment").value.trim();
    const activity = document.getElementById("activityInput").value;

    let isValid = true;

    // Validation checks
    if (fname === "" || fname.length > 50) {
        document.getElementById("fnameMsg").textContent = "First Name cannot be empty and must be less than 50 characters.";
        document.getElementById("fnameMsg").classList.add("text-danger");
        isValid = false;
    } else {
        document.getElementById("fnameMsg").textContent = "Valid first name.";
        document.getElementById("fnameMsg").classList.add("text-success");
        document.getElementById("fnameMsg").classList.remove("text-danger");
    }

    if (lname === "" || lname.length > 50) {
        document.getElementById("lnameMsg").textContent = "Last Name cannot be empty and must be less than 50 characters.";
        document.getElementById("lnameMsg").classList.add("text-danger");
        isValid = false;
    } else {
        document.getElementById("lnameMsg").textContent = "Valid last name.";
        document.getElementById("lnameMsg").classList.add("text-success");
        document.getElementById("lnameMsg").classList.remove("text-danger");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailMsg").textContent = "Please enter a valid email address.";
        document.getElementById("emailMsg").classList.add("text-danger");
        isValid = false;
    } else {
        document.getElementById("emailMsg").textContent = "Valid email.";
        document.getElementById("emailMsg").classList.add("text-success");
        document.getElementById("emailMsg").classList.remove("text-danger");
    }

    if (isNaN(age) || age < 6 || age > 95) {
        document.getElementById("ageMsg").textContent = "Valid age range is between 6 to 95.";
        document.getElementById("ageMsg").classList.add("text-danger");
        isValid = false;
    } else {
        document.getElementById("ageMsg").textContent = "Valid age.";
        document.getElementById("ageMsg").classList.add("text-success");
        document.getElementById("ageMsg").classList.remove("text-danger");
    }

    // If everything is valid, send the data
    if (isValid) {
        const formData = { fname, lname, email, age, comment, activity };

        fetch("http://localhost:3000/submitBooking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if (data.message === "Booking submitted successfully") {
                    document.getElementById("bookingForm").reset();
                    resetBookingForm();
                    // updated bookings
                    fetchBookings();
                }
            })
            .catch(error => {
                console.error("Error submitting booking:", error);
            });
    }
}


// Function to reset form and clear validation messages
function resetBookingForm() {
    // Clear all validation messages
    document.querySelectorAll(".form-text").forEach(msg => {
        msg.textContent = "";
        msg.classList.remove("text-danger", "text-success");
    });
}

// Function to fetch and display bookings in a table
function fetchBookings() {
    fetch("http://localhost:3000/viewBookings")
        .then(response => response.json())
        .then(data => {
            const bookingsContainer = document.getElementById("bookingsTable");
            if (data.message === "No bookings available") {
                bookingsContainer.innerHTML = "<h3>No bookings available</h3>";
            } else {
                const bookingsTable = `
                    <table class="table table-striped">
                        <thead style="background-color:rgba(79, 75, 75, 0.43) !important;">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Activity</th>
                                <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.bookings.map(booking => `
                                <tr>
                                    <td>${booking.fname}</td>
                                    <td>${booking.lname}</td>
                                    <td>${booking.email}</td>
                                    <td>${booking.age}</td>
                                    <td>${booking.activity || 'No Activity'}</td>
                                    <td>${booking.comment || 'No Comment'}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                `;
                bookingsContainer.innerHTML = bookingsTable;
            }
        })
        .catch(error => {
            console.error("Error fetching bookings:", error);
        });
}