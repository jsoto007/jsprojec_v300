
document.getElementById("lastN").addEventListener("submit", userInput);

function userInput(event) {

    event.preventDefault();

   const userFName = document.getElementById("fName").value
   const userLName = document.getElementById("lName").value

   console.log(input.value);

   

}

const lastLP = document.querySelector('#lName')

lastLP.parentElement.addEventListener('submit', (event)=> {
    event.preventDefault()
    console.log(input.value);
})



