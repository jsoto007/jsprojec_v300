const URL = 'http://localhost:3000/payroll'

async function fetEmployeeInfo() {
    const response = await fetch(URL, {
        headers: {
            'Accepts': 'application/json'
        }
    })
    .then(res => res.json())

    const data = await response.json();
    console.log(data);
    const ul = document.querySelector('#time_sheet');
    data.forEach(payroll => {
        const timeSheet = `${payroll.id} ${payroll.rate} ${payroll.overTime}`;
        const li = document.createElement('li');
        li.textContent = timeSheet;
        ul.append(li);
    });
