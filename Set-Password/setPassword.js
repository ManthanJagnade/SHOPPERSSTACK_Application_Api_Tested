document.getElementById("setPasswordForm").addEventListener("submit", setPassword);

async function setPassword(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const password = document.getElementById("password").value;
    const token = document.getElementById("token").value;

    const url = `https://www.shoppersstack.com/shopping/users/verify-account?token=${token}`;

    const headers = {
        'Content-Type': 'application/json',
        'password': password
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
            document.getElementById("responseMessage").innerHTML = `<p>Password has been set successfully!</p>`;
        } else {
            document.getElementById("responseMessage").innerHTML = `<p>Error: ${result.message}</p>`;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("responseMessage").innerHTML = `<p>Failed to set password. Please try again.</p>`;
    }
}
