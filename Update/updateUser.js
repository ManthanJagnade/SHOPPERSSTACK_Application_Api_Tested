document.getElementById("updateForm").addEventListener("submit", updateUser);

async function updateUser(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const userId = document.getElementById("userId").value;
    const url = `https://www.shoppersstack.com/shopping/shoppers/${userId}`;

    // Collect form data
    const userData = {
        city: document.getElementById("city").value,
        country: document.getElementById("country").value,
        email: document.getElementById("email").value,
        firstName: document.getElementById("firstName").value,
        gender: document.getElementById("gender").value,
        lastName: document.getElementById("lastName").value,
        password: document.getElementById("password").value,
        phone: parseInt(document.getElementById("phone").value),
        state: document.getElementById("state").value,
        zoneId: document.getElementById("zoneId").value
    };

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW50aGFuamFnbmRlMDA5QGdtYWlsLmNvbSBTSE9QUEVSIiwiZXhwIjoxNzI1ODkzMzY3LCJpYXQiOjE3MjU4NTczNjd9.qWuS9Rvrc7gmwE08e-0e_A0mz5CkDVKUCKJCFMFbew8'
        },
        body: JSON.stringify(userData)
    };

    try {
        console.log("Sending PATCH request:", userData);

        const response = await fetch(url, options);
        console.log('Response received:', response);

        if (!response.ok) {
            console.log('Response not ok:', response.status);
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Updated user data:', result);

        document.getElementById("responseMessage").textContent = "User data updated successfully!";
    } catch (error) {
        console.error('Error updating user data:', error);
        document.getElementById("responseMessage").textContent = "Failed to update user data. Please try again.";
    }
}
