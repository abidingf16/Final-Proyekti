// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

let SignInForm = document.querySelector("#SignInForm")
let istifadeciAdi = document.querySelector("#validationTooltip03")
let sifre = document.querySelector("#validationTooltip04")

let users = JSON.parse(localStorage.getItem("users")) || []

let successToast = new bootstrap.Toast(document.querySelector(".successToast"))
let errorToast = new bootstrap.Toast(document.querySelector(".errorToast"))


SignInForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let user = users.find(function (e) {
        if (e.istifadeciAdi === istifadeciAdi.value && e.sifre === sifre.value) {
            return e
        }
    })

    if (user) {
        localStorage.setItem("user", JSON.stringify(user))
        successToast.show()
        setTimeout(() => {
            location.href = "../index.html"
        }, 1000)

    }

    else {
        errorToast.show()
    }

    console.log(user);

})