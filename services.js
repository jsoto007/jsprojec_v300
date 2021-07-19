const URL = 'http://localhost:3000/payroll';

fetch(URL)
.then(response => response.json())
.then(data => {

  console.log(data);
  const ul = document.querySelector('#time_sheet');

    const userInfo = document.querySelector('#load_info_1')
    userInfo.parentElement.addEventListener('click', (event)=> {
        event.preventDefault()

        const foundEmp = data.find(employee => {
            return userInfo.innerText === employee.fullName
        })
        
        const empInfo = `${foundEmp.id} ${foundEmp.fullName}`;
        const li = document.createElement('li')
        li.textContent = empInfo
        ul.append(li);
    })
})


