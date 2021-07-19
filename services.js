const URL = 'http://localhost:3000/payroll'

function fetEmployeeInfo() {
    return fetch(URL, {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
}

function postEmployeeInfo() {
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
    },
    body: JSON.stringify(body)
})

    .then(res => res.json())
}



    // const data = await response.json();
    // console.log(data);
    // const ul = document.querySelector('#time_sheet');
    // data.forEach(payroll => {
    //     const timeSheet = `${payroll.id} ${payroll.rate} ${payroll.overTime}`;
    //     const li = document.createElement('li');
    //     li.textContent = timeSheet;
    //     ul.append(li);
    // });
