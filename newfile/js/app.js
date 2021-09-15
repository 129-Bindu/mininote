console.log("Welcome to javascript");
showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){
    let addText = document.getElementById('addText');
    let notes = localStorage.getItem('notes');
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addText.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addText.value = "";
    //console.log(notesObj);
    showNotes();
})

//function to show notes

function showNotes() {
    let notes = localStorage.getItem('notes');
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
        html += `
        <div class="col-lg-4s col-md-6 col-sm-6 col-12 px-2">
        <div class="noteCard my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
            <h1 class="card-title"> Note ${index + 1} </h1>
            <p class="card-title"> ${element} </p>
            <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete note</button>
            </div>
        </div>
        </div>`
     });
     let notesElm = document.getElementById('notes');
        if(notesObj.length != 0)
            {
            notesElm.innerHTML = html; 
            }  
        else{
            notesElm.innerHTML = `Nothing to show.`;
        }
    }


//function to delete notes

    function deleteNotes(index){
        //console.log("I am deleteing", index);
        let notes = localStorage.getItem('notes');
        if(notes == null)
        {
            notesObj = [];
        }
        else{
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        showNotes();
       }

//function search

    let search = document.getElementById('searchTxt');
    search.addEventListener("input", function(){
        let inputVal = search.value.toLowerCase();
        //console.log("Search event clicked", inputVal);
        let noteCards = document.getElementsByClassName('noteCard');
        Array.from(noteCards).forEach(function(element){
            let cardTxt = element.getElementsByTagName("p")[0].innerText;
           // console.log(cardTxt);
           if(cardTxt.includes(inputVal)){
                element.style.display = "block";
            }
            else{
                element.style.display = "none";
            }

        })
    })
