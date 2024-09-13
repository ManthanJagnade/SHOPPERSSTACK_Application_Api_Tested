async function submitLogin() {
    // Get form values from the HTML form inputs
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let role = document.getElementById('role').value; // Default role is SHOPPER

    // Create the request body object
    let bodyObj = {
        "email": email,
        "password": password,
        "role": role
    };

    console.log(email, password, role);

    const url = 'https://www.shoppersstack.com/shopping/users/login';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObj)
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log("ERROR");
    }
}
