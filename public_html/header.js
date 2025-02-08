document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const signUpButton = document.getElementById('signUpButton');

    loginButton.addEventListener('click', function () {
        showModal('Login', 'Enter your credentials to log in.');
    });

    signUpButton.addEventListener('click', function () {
        showModal('Sign Up', 'Fill in your details to create an account.');
    });

    function showModal(title, message) {
        const modalHTML = `
            <div class="modal fade" id="dynamicModal" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalTitle">${title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>${message}</p>
                            <form>
                                <div class="mb-3">
                                    <label for="emailInput" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="emailInput" required>
                                </div>
                                <div class="mb-3">
                                    <label for="passwordInput" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="passwordInput" required>
                                </div>
                                <button type="submit" class="btn btn-success w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        const modalInstance = new bootstrap.Modal(document.getElementById('dynamicModal'));
        modalInstance.show();

        document.getElementById('dynamicModal').addEventListener('hidden.bs.modal', function () {
            document.getElementById('dynamicModal').remove();
        });
    }
});
