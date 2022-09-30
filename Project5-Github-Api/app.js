// Submit için formu seçtim
const form = document.getElementById("github-form");
// Input verisini almak için 
const input = document.getElementById("githubname");
// Son aramaları temizle
const clearLastSearchesButton = document.getElementById("clear-last-users"); 


// Github Objesi
const github = new Github();
// UI Objesi
const ui = new Ui();


// Call All Event Listeners
eventListeners();

function eventListeners(){

    // Arama butonuna tıklandığıynda çalış
    form.addEventListener("submit", getGithubToForm);
    // Sayfa yüklendiğinde çalış 
    document.addEventListener("DOMContentLoaded",loadLastSearches);
    // Son arananları temizle butonuna tıklanınca çalış
    clearLastSearchesButton.addEventListener("click",clearLastSearches);

}
// Github'dan veri çekip ekrana ve storage'a eklediğim fonksiyon.
function getGithubToForm(e){
    // Arama kısmına girilen adı github'da ara
    github.getProfile(input.value)
    .then(data =>{
        // Eğer var olan bir hesap ise çalış
        if(data.jsonUser.message !== 'Not Found'){    
            // Github profili ekrana göster
            ui.putProfileToUi(data.jsonUser)
            // Repo bilgilerini ekrana göster
            ui.putReposToUi(data.jsonRepo)
            // Eğer zaten storage'da olan bir kişi ise include 0 dönecek. Böylece son arananlara tekrar eklenmeyecek
            let include = Storage.addToStorage(input.value);
            // include 1 olursa son arananlara kişiyi yazdıracak yani daha önce aranmayan bir kişi ise
            if(include === 1){
                ui.putLastSearches(input.value)
            }
            // Arama çubuğunu temizle
            input.value = ""
        }
        // Kullanıcı bulunamazsa ekrana hata döndür
        else{
            ui.notFoundUser();         
        }
    })
    // Hataları yakalayıp ekrana bastır
    .catch(err => console.log(err))
    
    
    // Ara butonuna basıp submit edildiğinde sayfanın yenilenip verilerin gitmesini engelle
    e.preventDefault();
}

// Son aranan kişiler
function loadLastSearches(){
    // Storage'dan son arananları al
    let storage = Storage.initializeStorage();
    // Dizi üzerinde dönüp ekrana göster hepsini
    storage.forEach(value => {
        ui.putLastSearches(value);
    })
}

function clearLastSearches(){
    // Son arananları temizle butonuna basınca onay iste
    if(confirm("Son aramalar silinsin mi ?")){
        // Storage'dan sil
        Storage.deleteStorage();
        // Ekrandan son arananları sil
        ui.clearSearchesFromUi();
    }
}
