document.getElementById("forgotPasswordForm").addEventListener("submit", submitForgotPassword);

async function submitForgotPassword(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;

    const url = "https://www.shoppersstack.com/shopping/users/forgot-password";

    const headers = {
        'Content-Type': 'application/json',
        'email': email,
        'role': role
    };

    const options = {
        method: 'POST',
        headers: headers
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        console.log(result);

        if (response.ok) {
            document.getElementById("responseMessage").innerHTML = `<p>Password reset link sent successfully!</p>`;
        } else {
            document.getElementById("responseMessage").innerHTML = `<p>Error: ${result.message}</p>`;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("responseMessage").innerHTML = `<p>Failed to send password reset link.</p>`;
    }
}
