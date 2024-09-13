document.getElementById("searchButton").addEventListener("click", searchUser);

async function searchUser(event) {
    event.preventDefault();
    console.log("Search user function called!");

    const userId = document.getElementById("userId").value;
    const url = `https://www.shoppersstack.com/shopping/shoppers/${userId}`;

    try {
        console.log(`Fetching data for User ID: ${userId}`);

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW50aGFuamFnbmRlMDA5QGdtYWlsLmNvbSBTSE9QUEVSIiwiZXhwIjoxNzI2MDAzOTM1LCJpYXQiOjE3MjU5Njc5MzV9.g3i_hG9AKmT8QA0sUCo9pQfB1UM6WZv5zvAsK_X8Qck' // Replace with actual token
            }
        });

        console.log('Response received:', response);

        if (!response.ok) {
            console.log('Response not ok:', response.status);
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Parsed data:', data);

        const userDataDiv = document.getElementById("userData");
        if (data.firstName && data.lastName && data.email) {
            userDataDiv.innerHTML = `
                <p><strong>First Name:</strong> ${data.firstName}</p>
                <p><strong>Last Name:</strong> ${data.lastName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
            `;
        } else {
            // userDataDiv.innerHTML = `<p>User data not found or incomplete.</p>`;
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        document.getElementById("userData").innerHTML = `<p>Failed to retrieve user data. Please check the User ID.</p>`;
    }
}
