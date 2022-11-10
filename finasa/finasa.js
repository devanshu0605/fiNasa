showNotes();



let a = document.getElementById('a')


a.addEventListener("submit", function () {
    var addTxt = document.getElementById("addurl").value;
    var image = new Image();
    image.src = addTxt;
    image.addEventListener("load", () => {
        let addTxt = document.getElementById("addurl");
       console.log(addTxt)
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(addTxt.value);

        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";

        showNotes();
        alert("We found the Image !! \r\nTo Update the Image on Image section \r\nPress OK  ")

    })
    image.addEventListener("error", () =>  alert("INVALID URL "));
   })







function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-4 card" id="dev" style="width: 18rem;">
    <div class="card-body" id="container">
    <img src="${element}"  class="card-img-top" alt="INVALID URL.." >
        <h5 class="card-title" }>IMAGE ${index + 1}</h5>
        
        <button class="btn" id="${index}"onclick="deleteNote(this.id)" ><i class="fa fa-trash"></i></button>
        
      
    </div>
</div> 
        `;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

function deleteNote(index) {
    // console.log('I  am deleting', index);

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();
    alert("Are you sure you want to delete the Image!! \r\nIf yes then Press  'OK' ")

}
