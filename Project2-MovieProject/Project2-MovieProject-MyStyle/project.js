const form = document.querySelector("#film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const firstCardBody = document.querySelector(".card-body")
const secondCardBody= document.querySelectorAll(".card-body")[1]



eventListeners();

function eventListeners(){

    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",UI.loadOnReload)
    secondCardBody.addEventListener("click",deleteFilm); 
   
}

function addFilm(e){
    
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){

        UI.alert("Bilgiler Yetersiz...","danger")

        titleElement.value  = "";
        directorElement.value = "";
        urlElement.value = "";
       
    }
    else{
        const newFilm = new Film(url,title,director)
        UI.addToUI(newFilm);
        Storage.addToStorage(newFilm);

        UI.alert("Film Eklendi...","success")

        titleElement.value  = "";
        directorElement.value = "";
        urlElement.value = "";
    }

    e.preventDefault();
}



function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.removeFilmFromUI(e.target)
        let textContent = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
        Storage.deleteFromStorage(textContent)

        // Silindi Alerti
        UI.alert("Film Başarıyla Silindi...","success")
    }
    else if(e.target.id === "clear-films"){
        // Silindi Alerti
        const tbody = document.querySelector("#films")
        if(tbody.firstElementChild !== null){
            UI.alert("Bütün Filmler Silindi...","success")
        }
        else{
            UI.alert("Silinecek Film Yok...","danger")
        }
        // Silme işlemi
        UI.removeAllFilms()
        Storage.deleteAll()
    }
    
}

