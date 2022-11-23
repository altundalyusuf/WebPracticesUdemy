document.getElementById("change").addEventListener("click",exchange);

function exchange(){

    const xhr = new XMLHttpRequest();
    
    xhr.open("GET","https://api.exchangerate.host/latest");


    xhr.onload = function(){
        if(this.status){
            
            const response = JSON.parse(this.responseText)

            const amount = document.getElementById("amount")
            const tl = document.getElementById("tl")
            
            tl.value = Number(amount.value)*Number(response.rates.TRY)
        }
    };


    xhr.send();


}