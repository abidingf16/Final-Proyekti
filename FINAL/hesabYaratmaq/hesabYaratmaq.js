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

let ad = document.querySelector("#validationTooltip01")
let telefon = document.querySelector("#validationTooltip02")
let istifadeciAdi = document.querySelector("#validationTooltip03")
let sifre = document.querySelector("#validationTooltip04")
let form = document.querySelector("#registrationForm")
let esasSehife = document.querySelector(".esasSehife")
let successToast = new bootstrap.Toast(document.querySelector(".successToast"))
let errorToast = new bootstrap.Toast(document.querySelector(".errorToast"))

let users = JSON.parse(localStorage.getItem("users")) || []


form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (form.checkValidity()) {
        let check = users.some(function (item) {
            return istifadeciAdi.value == item.istifadeciAdi
        })
        console.log(check);
        if (check) {
            errorToast.show()
        }
        else {
            let user = {
                ad: ad.value,
                telefon: telefon.value,
                istifadeciAdi: istifadeciAdi.value,
                sifre: sifre.value,
            }
            users.push(user)
            localStorage.setItem("users", JSON.stringify(users))
            successToast.show()
            setTimeout(() => {
                location.href = "../signIn/singIn.html"
            }, 1000)


        }

    }
})



esasSehife.addEventListener("click", () => {
    location = "../index.html"
})