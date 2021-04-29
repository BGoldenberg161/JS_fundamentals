// when user submits "form"
// pop up alert displaying name, email, message

const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`Name: ${name.value} Email: ${email.value} Message: ${message.value}`);
})

