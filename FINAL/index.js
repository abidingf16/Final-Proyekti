let istifadeciAdiIndex = document.querySelector(".istifadeciAdiIndex");

let user = JSON.parse(localStorage.getItem("user"));
let users = JSON.parse(localStorage.getItem("users"))
let cixis = document.querySelector(".cixis");
let komputerlerim = document.querySelector(".komputerlerim");
let daxilOl = document.querySelector(".daxilOL");

let successToastElement = document.querySelector(".successToast");
if (successToastElement) {
    let successToast = new bootstrap.Toast(successToastElement);
    successToast.show();
}

if (user && user.istifadeciAdi) {
    let istifadeci = user.istifadeciAdi;
    istifadeciAdiIndex.append(istifadeci);
}
    function checkUser() {
        if (typeof user === "object") {
            let checkUser = users.some(function (e) {
                return e.istifadeciAdi === user.istifadeciAdi && e.sifre === user.sifre
            })
            if (!checkUser) {
                cixis.style.display = "none"
                komputerlerim.style.display = "none"
                daxilOl.style.display = "block"
            }
            else {
                cixis.style.display = "block"
                komputerlerim.style.display = "block"
                daxilOl.style.display = "none"
            }
        }
        else {
    
        }
    }
    
    checkUser()

    cixis.addEventListener("click", () => {
        localStorage.removeItem(("user"))
        location.href = "../signIn/singIn.html"
      })
      