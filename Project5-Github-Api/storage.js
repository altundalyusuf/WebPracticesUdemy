class Storage{

    // Storage'da github key ile bir kayıt varsa getir, yoksa oluştur.
    static initializeStorage(){

        let github;

        if(JSON.parse(localStorage.getItem("github")) === null){
            github = [];
        }
        else{
            github = JSON.parse(localStorage.getItem("github"))
        }

        return github;
    }

    static addToStorage(githubPofile){
        // Aranan kişi storage'da yok ise count 1 olacak
        let count = 0;
        // Storage'dan son arananlar verisini al
        let github = this.initializeStorage();
        // Aranan kişi storage'da var mı kontrol et
        if(!github.includes(githubPofile)){
            count = 1;
            // Yok ise diziye ekle ve count = 1 yap
            github.push(githubPofile);
            // Storage'a geri yükle
            localStorage.setItem("github",JSON.stringify(github))
            // UI'da kullanmak için 1 dön
            return 1;
        }
        else{
            // Kişi zaten var ise UI'da tekrar eklememek için 0 dön 
            return 0;
        }

    }
    
    // Storage' ı tamamen temizle 
    static deleteStorage(){
        localStorage.clear()
    }
}