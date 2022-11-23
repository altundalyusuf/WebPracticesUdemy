class Request{
    
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    get(url,callback){

        this.xhr.open("GET",url)

        this.xhr.onload = ()=>{
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText)
            }
            else{
                callback("HATAAAA!",null)
            }
        }

        this.xhr.send();
    }


}

let request = new Request();
let url = "https://jsonplaceholder.typicode.com/albums241"

request.get(url,function(err,response){
    if(err === null){
        console.log(response)
    }
    else{
        console.log(err)
    }
});