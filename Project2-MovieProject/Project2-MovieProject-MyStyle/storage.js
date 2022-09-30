class Storage{
    static addToStorage(newFilm){

        let filmsFromStorage = getFromStorage();
        filmsFromStorage.push(newFilm);
        localStorage.setItem("films",JSON.stringify(filmsFromStorage));        

    }

    static deleteFromStorage(textContent){
       let filmList = getFromStorage();

        filmList.forEach((value,index)=>{

            console.log(value.title,index,textContent)
            if(value.title === textContent){
                filmList.splice(index,1);
            }
            localStorage.setItem("films",JSON.stringify(filmList))
        })

    }

    static deleteAll(){
        localStorage.removeItem("films");
    }
}

function getFromStorage(){

    let filmsFromStorage = JSON.parse(localStorage.getItem("films"))
    
    if(filmsFromStorage === null){
         filmsFromStorage = [];
    }
    return filmsFromStorage;
}