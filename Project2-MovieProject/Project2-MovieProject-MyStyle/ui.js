class UI{
    static addToUI(newFilm) {

        const filmList = document.querySelector("#films")

        filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid h-auto w-50 img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
        </tr> 
        `
    }

    static removeFilmFromUI(e){
        e.parentElement.parentElement.remove();
    }

    static loadOnReload(){
        let films = getFromStorage();
        const filmList = document.querySelector("#films")

        films.forEach((value)=>{
            filmList.innerHTML += `
        <tr>
            <td><img src="${value.url}" class="img-fluid h-auto w-50 img-thumbnail"></td>
            <td>${value.title}</td>
            <td>${value.director}</td>
            <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
        </tr> 
        `
        })
    }

    static removeAllFilms(){
        const tbody = document.querySelector("#films")
        while(tbody.firstElementChild !== null){
            tbody.firstElementChild.remove()
        }
    }

    static alert(message,type){
        const alertDiv = document.createElement("div")
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message
        
        firstCardBody.appendChild(alertDiv)
        
        setTimeout(() => {
            alertDiv.remove();
        }, 1500);
    }


}