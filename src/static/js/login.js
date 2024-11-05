const formUser = document.querySelector("#formUser")
const emailInput = document.querySelector("#emailInput")
const passwordInput = document.querySelector("#passwordInput")
const submitButton = document.querySelector("#submitButton")


formUser.addEventListener("submit", (event)=>{
    event.preventDefault();
    fetch("", {
        method: "POST",
        body: JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
})