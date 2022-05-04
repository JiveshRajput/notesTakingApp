let addBtn = document.getElementById("addBtn");
showNotes();
addBtn.addEventListener("click", addTextInLocalStorage);

function addTextInLocalStorage() {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    let addTitle = document.getElementById("addTitle");
    // let notesTitle = localStorage.getItem("notesTitle");
    if (notes == null) {
        newNotes = [];
    }
    else {
        newNotes = JSON.parse(notes);
    }
    let groupTextTitle = {
        title: addTitle.value,
        text: addTxt.value
    }
    newNotes.push(groupTextTitle);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    addTitle.value = "";
    addTxt.value = "";
    showNotes();
}

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        newNotes = [];
    }
    else {
        newNotes = JSON.parse(notes);
    }

    let html = "";
    newNotes.forEach(function (element, index) {
        html +=
           `<div class="noteCard card my-2 mx-2" style="width: 21rem;">
                <div class="card-body">
                    <h5 class="card-title"> ${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-danger">Delete Notes</button>
                </div>
            </div>`
    });

    let notesDiv = document.getElementById("notes");
    if (newNotes.length != 0) {
        notesDiv.innerHTML = html;
    }
    else
    {
        notesDiv.innerHTML = "<p>Nothing to show!!! Kinding add a note.</p>"
    }
}

function deleteNotes(index){
    console.log("This is deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        newNotes = [];
    }
    else {
        newNotes = JSON.parse(notes);
    }
    newNotes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    showNotes();
}

let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", searchNote);

function searchNote(){
    let inpVal = searchTxt.value;
    let noteCards = document.getElementsByClassName("noteCard");
    
    
    Array.from(noteCards).forEach(function(element) {
        let cardTitle = element.getElementsByTagName("h5")[0].innerText;
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTitle.includes(inpVal) || cardTxt.includes(inpVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });


}





