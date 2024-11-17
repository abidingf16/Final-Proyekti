let comps = JSON.parse(localStorage.getItem('comps')) || []
let compsPlace = document.querySelector(".compPlace")
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
let modalRight = document.querySelector(".modal-right")
let modalLeft = document.querySelector(".modal-left")
let compsParent = document.querySelector(".compsParent")

function compInfo(compId) {
  let comp = comps.find(function (item) {
    return item.id == compId;
  });
  if (comp) {
    modalRight.innerHTML = `
        <div class="compInfo">
          <div class="infoLeft">
            <img src="${comp.sekil}" alt="Comp Image">
          </div>
          <div class="infoRight">
            <p class="kateqoriya"><span>Kateqoriya:</span> ${comp.kateqoriya}</p>
            <p class="ad"><span>Ad:</span> ${comp.ad}</p>
            <p class="compSahibi"><span>Sahibi:</span> @${comp.compSahibi}</p>
            <p class="qiymet"><span>Qiymet:</span> ${comp.qiymet}</p>
            <p class="tesvir"><span>Tesvir:</span> ${comp.tesvir}</p>
            <p class="yenilik"><span>Yenilik:</span> ${comp.yenilik}</p>
            <p class="merkeziProsessor"><span>Merkezi Prosessor:</span> ${comp.merkeziProsessor}</p>
            <p class="emeliYaddas"><span>Emeli Yaddas:</span> ${comp.emeliYaddas}</p>
            <p class="daimiYaddas"><span>Daimi Yaddas:</span> ${comp.daimiYaddas}</p>
            <p class="daimiYaddasTipi"><span>Daimi Yaddas Tipi:</span> ${comp.daimiYaddasTipi}</p>
            <p class="emeliyyatSistemi"><span>Emeliyyat Sistemi:</span> ${comp.emeliyyatSistemi}</p>
            <p class="videoKart"><span>Video Kart:</span> ${comp.videoKart}</p>
          </div>
        </div>
      `;
  }
}


function displayComps(lastComps) {
  if (lastComps.length === 0) {
    compsParent.innerHTML = "<h1 style='text-align: center; margin-top: 20px;padding:250px'>Bu kategoriyada computer yoxdur</h1>";
  } else {
    let compdsHTML = '';  

    lastComps.forEach(comp => {
      compdsHTML += `
        <div class="col-4" style=" margin-top:25px;">
          <div class="card" style="width: 18rem; margin:auto; margin-top:20px;">
              <img src="${comp.sekil}" style="height:200px;" class="compd-img-top" alt="...">
              <div class="card-body">
                <h2>${comp.kateqoriya}</h2>
                <p class="card-text">${comp.ad}</p>
                <p class="card-text">${comp.tesvir}</p>
                <button onclick="compInfo(${comp.id})" class='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Tesvir</button>
              </div>
          </div>
        </div>`;
    });

    compsParent.innerHTML = compdsHTML;  
  }
}

displayComps(comps);



let input = document.querySelector(".searchInput")

input.addEventListener("input", () => {
  let filteredComps = comps.filter(function (comp) {
    return comp.kateqoriya.toLowerCase().includes(input.value.toLowerCase())
  })
  displayComps(filteredComps)
})

let listItems = document.querySelectorAll('.chooseComp li')

listItems.forEach(function (item) {
  item.addEventListener("click", (e) => {
    listItems.forEach(function (k) {
      k.classList.remove('active')
    })
    console.log(e.target.innerHTML);
    e.target.classList.add('active')
    let filteredComps = comps.filter(function (comp) {
      if (e.target.innerHTML.toLowerCase() == "hamisi") {
        return comps
      }
      else {
        return comp.kateqoriya.toLowerCase().includes(e.target.innerHTML.toLowerCase())
      }


    })

    displayComps(filteredComps)

  })
})