async function submitRegistration() {
    // Get form values from the HTML form inputs
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let country = document.getElementById('country').value;
    let state = document.getElementById('state').value;
    let city = document.getElementById('city').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let zoneId = document.getElementById('zone-id').value;
    let password = document.getElementById('password').value;

    // Create the request body object
    let bodyObj = {
        "city": city,
        "country": country,
        "email": email,
        "firstName": firstName,
        "gender": gender,
        "lastName": lastName,
        "password": password,
        "phone": phone,
        "state": state,
        "zoneId": zoneId
    };

    console.log(city, state, firstName, lastName, country, zoneId, phone, gender, email, password)

    const url = 'https://www.shoppersstack.com/shopping/shoppers?zoneId=ALPHA';


    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObj)
    };

    try {

        const response = await fetch(url, options)


        const result = await response.json();
        console.log(result)

    }
    catch {
        console.log("ERROR")
    }
}
