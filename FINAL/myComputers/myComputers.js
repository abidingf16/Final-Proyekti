(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')
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
let users = JSON.parse(localStorage.getItem("users")) || []
let user = JSON.parse(localStorage.getItem("user")) || 0
let createForm = document.querySelector(".createForm")
let kateqoriya = document.querySelector("#kateqoriya")
let compAd = document.querySelector("#ad")
let qiymet = document.querySelector("#qiymet")
let tesvir = document.querySelector("#tesvir")
let yenilik = document.querySelector("#yenilik")
let sekil = document.querySelector("#sekil")
let emeliYaddas = document.querySelector("#emeliYaddas")
let merkeziProsessor = document.querySelector("#merkeziProsessor")
let daimiYaddas = document.querySelector("#daimiYaddas")
let daimiYaddasTipi = document.querySelector("#daimiYaddasTipi")
let emeliyyatSistemi = document.querySelector("#emeliyyatSistemi")
let videoKart = document.querySelector("#videoKart")
let form = document.querySelector(".createForm")
let createComp = new bootstrap.Modal(document.querySelector(".createComp"))
let editComp = new bootstrap.Modal(document.querySelector(".editComp"))

let comps = JSON.parse(localStorage.getItem("comps")) || []

console.log(user);


let table = new DataTable('#myTable');

function generateId() {
  if (comps.length > 0) {
    return comps[comps.length - 1].id + 1
  } else {
    return 1
  }
}

function checkUser() {
  if (typeof user === "object") {
    let checkUser = users.some(function (e) {
      return e.istifadeciAdi === user.istifadeciAdi && e.sifre === user.sifre
    })
    if (!checkUser) {
      location.href = "../signIn/singIn.html"
      console.log("salam");
    }
  }
  else {
    location.href = "../signIn/singIn.html"
  }
}

checkUser()

let myComps = comps.filter(comp => comp.compSahibi == user.istifadeciAdi)

function removeComp(compId) {
  console.log(compId);

  comps = comps.filter(function (item) {
    console.log(item);

    return item.id != compId
  })
  localStorage.setItem("comps", JSON.stringify(comps))
  const row = event.target.closest('tr')
  table.row(row).remove().draw()
  console.log(comps);

}


function displayComps() {
  table.clear();
  myComps.forEach(comp => {
    table.row.add([
      comp.kateqoriya,
      comp.ad,
      `<img style="width:50px;height:50px" src="${comp.sekil}" alt="comp Image">`,
      comp.qiymet,
      `<button onclick="removeComp(${comp.id}, event)" class="btn btn-danger">Sil</button>
       <button style="margin-left:5px" onclick="editCompBtn(${comp.id})" class="btn btn-success">Edit</button>`
    ]).draw();
  });

}

let inpErrorModal = new bootstrap.Modal(document.querySelector(".inpErrorModal"))
displayComps()
form.addEventListener("submit", (e) => {
  e.preventDefault()
  let comp = {
    id: generateId(),
    kateqoriya: kateqoriya.value,
    ad: ad.value,
    qiymet: qiymet.value,
    tesvir: tesvir.value,
    yenilik: yenilik.value,
    sekil: sekil.value,
    emeliYaddas: emeliYaddas.value,
    merkeziProsessor: merkeziProsessor.value,
    daimiYaddas: daimiYaddas.value,
    daimiYaddasTipi: daimiYaddasTipi.value,
    emeliyyatSistemi: emeliyyatSistemi.value,
    videoKart: videoKart.value,
    compSahibi: user.istifadeciAdi,
  }
  comps.push(comp)
  localStorage.setItem("comps", JSON.stringify(comps))
  createComp.hide()

  if (ad.value && kateqoriya.value && qiymet.value && tesvir.value && yenilik.value && sekil.value && emeliYaddas.value && merkeziProsessor.value && daimiYaddas.value && daimiYaddasTipi.value && emeliyyatSistemi.value) {
    table.row.add([
      kateqoriya.value, ad.value, `<img onclick="openImg(${comp.id})" src="${sekil.value}">`, qiymet.value, `<button onclick="removeComp(${comp.id})" class="btn btn-danger">Sil</button><button style="margin-left:5px;" onclick="editCompBtn(${comp.id})" class="btn btn-success">Edit</button>`
    ]).draw()

  }
  else {
    inpErrorModal.show()
  }
  form.reset()

})

displayComps()

let checkImg2 = document.querySelector(".checkImg2")
sekil.addEventListener("input", (e) => {
  checkImg2.src = e.target.value
})




let editKateqoriya = document.querySelector("#editKateqoriya")
let editCompAd = document.querySelector("#editAd")
let editQiymet = document.querySelector("#editQiymet")
let editTesvir = document.querySelector("#editTesvir")
let editYenilik = document.querySelector("#editYenilik")
let editSekil = document.querySelector("#editSekil")
let editEmeliYaddas = document.querySelector("#editEmeliYaddas")
let editMerkeziProsessor = document.querySelector("#editMerkeziProsessor")
let editDaimiYaddas = document.querySelector("#editDaimiYaddas")
let editDaimiYaddasTipi = document.querySelector("#editDaimiYaddasTipi")
let editEmeliyyatSistemi = document.querySelector("#editEmeliyyatSistemi")
let editVideoKart = document.querySelector("#editVideoKart")
let editForm = document.querySelector(".editForm")
function editCompBtn(compId) {
  let findedComp = comps.find(function (comp) {
    return comp.id == compId
  })
  secilmisComp = compId
  editKateqoriya.value = findedComp.kateqoriya
  editCompAd.value = findedComp.compAd
  editQiymet.value = findedComp.qiymet
  editTesvir.value = findedComp.tesvir
  editYenilik.value = findedComp.yenilik
  editEmeliyyatSistemi.value = findedComp.emeliyyatSistemi
  editEmeliYaddas.value = findedComp.emeliYaddas
  editMerkeziProsessor.value = findedComp.merkeziProsessor
  editDaimiYaddas.value = findedComp.daimiYaddas
  editDaimiYaddasTipi.value = findedComp.daimiYaddasTipi
  editEmeliyyatSistemi.value = findedComp.emeliyyatSistemi
  editVideoKart.value = findedComp.videoKart
  editComp.show()
}

editForm.addEventListener("submit", (e) => {
  e.preventDefault()
  if (editForm.checkValidity()) {
    comps = comps.map(function (comp) {
      if (comp.id == secilmisComp) {
        return {
          ...comp,
          kateqoriya: editKateqoriya.value,
          compAd: editCompAd.value,
          qiymet: editQiymet.value,
          tesvir: editTesvir.value,
          yenilik: editYenilik.value,
          emeliyyatSistemi: editEmeliyyatSistemi.value,
          emeliYaddas: editEmeliYaddas.value,
          merkeziProsessor: editMerkeziProsessor.value,
          daimiYaddas: editDaimiYaddas.value,
          daimiYaddasTipi: editDaimiYaddasTipi.value,
          sekil: editSekil.value,
          videoKart: editVideoKart.value,

        }

      }
      return comp

    })
    localStorage.setItem("comps", JSON.stringify(comps))
    location.reload()
  }


})


let checkImg = document.querySelector(".checkImg")
editSekil.addEventListener("input", (e) => {
  checkImg.src = e.target.value
})

let compImgOpen = document.querySelector(".compImgOpen")
let imgModal = new bootstrap.Modal(document.querySelector(".imgModal"))



function openImg(compId) {
  let comp = comps.find(function (item) {
    return item.id == compId;
  });    imgModal.innerHTML = `
       <img class="compImgOpen" src="${sekil.value}" alt="">      
      `;
  
}