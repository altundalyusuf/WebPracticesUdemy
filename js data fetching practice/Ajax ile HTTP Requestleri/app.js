// Ajax, callback, http requests

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    // Get Request

    get(url,callback){
        this.xhr.open("GET",url); // Bağlantı açık

        this.xhr.onload = ()=>{
            if(this.xhr.status == 200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Hata oluştu...",null)
            }
        }
        this.xhr.send(); 
    }

    post(url,data,callback){
        this.xhr.open("POST",url);

        this.xhr.setRequestHeader("Content-type","application/json")

        this.xhr.onload = () =>{
            if(this.xhr.status === 201){
                callback(null,this.xhr.responseText)
            }
            else{
                callback("POST ATILAMADI...",null)
            }
        }

        this.xhr.send(JSON.stringify(data))

    }
    put(url,data,callback){
        this.xhr.open("PUT",url);

        this.xhr.setRequestHeader("Content-type","application/json")

        this.xhr.onload = () =>{
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText)
            }
            else{
                callback("Gönderi Güncellenemedi...",null)
            }
        }

        this.xhr.send(JSON.stringify(data))

    }

    delete(url,callback){
        this.xhr.open("DELETE",url); // Bağlantı açık

        this.xhr.onload = ()=>{
            if(this.xhr.status == 200){
                callback(null,`Veri Silme İşlemi Başarılı: ${this.xhr.responseText}`);
            }
            else{
                callback("SİLİNEMEDİ...",null)
            }
        }
        this.xhr.send(); 
    }
}

const request = new Request();

request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if(err === null){
        // Başarılı
        console.log(response)
    }
    else{
        // Hata
        console.log(err)
    }
});



// PUT REQUEST
// let putURL = "https://jsonplaceholder.typicode.com/albums/10"

// let data = {
//     userId: 132,
//     title: "Cuzarsif"
// }
// request.put(putURL,data,function(err,post){
//     if(err === null){
//         console.log(post)
//     }
//     else{
//         console.log(err)
//     }
// })




// // POST REQUEST
// let postURL = "https://jsonplaceholder.typicode.com/albums"

// let data = {
//     userId: 2,
//     title: "Deneme"
// }
// request.post(postURL,data,function(err,post){
//     if(err === null){
//         console.log(post)
//     }
//     else{
//         console.log(err)
//     }
// })




// GET REQUEST
// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     if(err === null){
//         // Başarılı
//         console.log(response)
//     }
//     else{
//         // Hata
//         console.log(err)
//     }
// });

