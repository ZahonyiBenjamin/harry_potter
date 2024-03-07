fetch("https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json")
.then(x => x.json())
.then(y => megjelenit(y));


function megjelenit(y){
    console.log(y)
    var szoveg = ""
    var i = 0
    for (const elem of y) {

        szoveg += `
        
        <div class="col-lg-3 col-md-6 col-sm-12 text-center">
            <div class="dobozok">
                <p class="doboz-nevek">${elem.name}</p>
                <img src="${elem.image}" alt="" class="img-fluid kepek">
                <button type="button" data-bs-toggle="modal" data-bs-target="#modal${i}" id="${elem.name}">${elem.name}</button>
            </div>
        </div>
        `

        document.getElementById("modals").innerHTML += `
        <!-- The Modal -->
        <div class="modal" id="modal${i}">
          <div class="modal-dialog">
            <div class="modal-content">
        
              <!-- Modal Header -->
              <div class="modal-header">

                <h4 class="modal-title text-center" style="margin: auto;">${elem.name}</h4>

              </div>
        
              <!-- Modal body -->
              <div class="modal-body">
                <img src="${elem.image}" alt="" class="img-fluid kepek2">
                <br>
                <b>Actor: </b> <span>${elem.actor}</span>
                <br>
                <b>Date of birth: </b> <span id="dob${i}">${elem.dateOfBirth}</span>
                <br>
                <b>House: </b> <span id="house${i}">${elem.house}</span>
                <br>
                <b>Patronus: </b> <span id="patronus${i}">${elem.patronus}</span>
                <br>
                <b>Wand's material: </b> <span id="wand_mat${i}">${elem.wand.wood}</span>
                <br>
                <b>Wand's core: </b> <span id="wand_core${i}">${elem.wand.core}</span>
                <br>
              </div>
        
              <!-- Modal footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>
        
            </div>
          </div>`

        if (elem.dateOfBirth == "") {document.getElementById(`dob${i}`).innerHTML = "N/A"}
        if (elem.house == "") {document.getElementById(`house${i}`).innerHTML = "N/A"}
        if (elem.patronus == "") {document.getElementById(`patronus${i}`).innerHTML = "N/A"}
        if (elem.wand.wood == "") {document.getElementById(`wand_mat${i}`).innerHTML = "N/A"}
        if (elem.wand.core == "") {document.getElementById(`wand_core${i}`).innerHTML = "N/A"}
        i++
    }
document.getElementById("nevek").innerHTML=szoveg
}