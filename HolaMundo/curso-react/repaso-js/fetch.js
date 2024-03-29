const url = 'https://jsonplaceholder.typicode.com/users';
//
//fetch(url, {
//    method: 'POST',
//    headers: {
//        'Content-Type': 'application/json',
//        'Authorization': 'Bearer acadebieseexistiruntokendeautorizacion'
//    },
//    body: JSON.stringify({
//        name: 'marcos',
//        website: 'google.com'
//    })
//}).then((response) => response.json())
//.then(data => console.log(data));
//
const fn = async () => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer acadebieseexistiruntokendeautorizacion'
        },
        body: JSON.stringify({
            name: 'marcos',
            website: 'google.com'
        })
    })
    const data = await response.json();
    console.log(data);
}

fn()