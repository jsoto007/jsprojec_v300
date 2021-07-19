const URL = 'http://localhost:3000/payroll'


fetch('http://localhost:3000/payroll')
.then(response => response.json())
.then(data => {

console.log(data);

const ul = document.querySelector('#time_sheet')
data.forEach(payroll => {
    const timeSheet = `${payroll.id} ${payroll.rate} ${payroll.overTime}`;
    const li = document.createElement('li')
    li.textContent = timeSheet
    ul.append(li);
})

})
