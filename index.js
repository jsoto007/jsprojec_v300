// const URL = 'http://localhost:3000/payroll';

fetch(URL)
.then(response => response.json())
.then(data => {

    console.log(data);
  const ul = document.querySelector('#time_sheet');

    const userInfo2 = document.querySelector('#load_info_2')
    userInfo2.addEventListener('click', (event)=> {
        event.preventDefault()
        
        const foundEmp2 = data.find(employee2 => {
            return userInfo2.innerText === employee2.fullName
        })
        
        const empInfo2 = `${foundEmp2.id} ${foundEmp2.fullName}`;
        const li = document.createElement('li')
        li.textContent = empInfo2
        ul.append(li);
        li.addEventListener('click', event => removeInfo2(event))
    })
    function removeInfo2(event){
        event.target.remove()
    }
})




fetch(URL)
.then(response => response.json())
.then(data => {

    console.log(data);
  const ul = document.querySelector('#time_sheet');

    const userInfo3 = document.querySelector('#load_info_3')
    userInfo3.addEventListener('click', (event)=> {
        event.preventDefault()
        
        const foundEmp3 = data.find(employee3 => {
            return userInfo3.innerText === employee3.fullName
        })
        
        const empInfo3 = `${foundEmp3.id} ${foundEmp3.fullName}`;
        const li = document.createElement('li')
        li.textContent = empInfo3
        ul.append(li);
        li.addEventListener('click', event => removeInfo3(event))
    })
    function removeInfo3(event){
        event.target.remove()
    }
})







// document.getElementById("lastN").addEventListener("submit", userInput);

// function userInput(event) {

//     event.preventDefault();

//    const userFName = document.getElementById("fName").value
//    const userLName = document.getElementById("lName").value

//    console.log(input.value);

   

// }

// const lastLP = document.querySelector('#lName')

// lastLP.parentElement.addEventListener('submit', (event)=> {
//     event.preventDefault()
//     console.log(input.value);
    
// })



