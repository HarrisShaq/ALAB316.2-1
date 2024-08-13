const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = myForm.querySelector("input").value;
})

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }