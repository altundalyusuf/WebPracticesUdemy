class Ui{

    constructor(){
        // İsim girdikten sonra ekrana gelecek profil
        this.githubProfile = document.getElementById("profile");
        // En son repolar
        this.lastRepos = document.getElementById("repos");
        // Son aramalar
        this.lastSearches = document.getElementById("last-users");
    }
    // Ekrana github profili bastıran fonksiyon
    putProfileToUi(profile){
        // İlgili html alanını seçip fonksiyona gönderilen bilgi ile doldur
        this.githubProfile.innerHTML = `
        <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="${profile.html_url}" target = "_blank">
                         <img class="img-fluid mb-2" src="${profile.avatar_url}"> </a>
                         <hr>
                         <div id="fullName"><strong> ${profile.name}</strong></div>
                         <hr>
                         <div id="bio">${profile.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light">${profile.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light">${profile.following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light">${profile.public_repos}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${profile.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${profile.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="company">${profile.email}</span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div>
        
        `
    }
    // Kullanıcı bulunamazsa hata ver
    notFoundUser(){
        // Not Found User Alert
            this.githubProfile.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Kullanıcı Bulunamadı!
            </div>
            `
        // Remove all repos (Hatalı isim girildiğinde önceki kullanıcının repoları görünmesin diye)
            while (this.lastRepos.firstChild) {
                this.lastRepos.removeChild(this.lastRepos.lastChild);
              }
            //   2,5 sn sonra hata mesajını kaldır
            setTimeout(() => {
                this.githubProfile.firstElementChild.remove();
            }, "2500")
    }
    // Repoları ekrana göster
    putReposToUi(repos){
        // Gönderilen repo dizisi üzerinde dönüp hepsini tek tek ilgili alana ekle
        repos.forEach(repo=>{
            this.lastRepos.innerHTML += `
        <div class="mb-2 card-body">
        <div class="row">
            <div class="col-md-2">
            <span></span> 
            <a href="#" target = "_blank" id = "repoName">${repo.name}</a>
            </div>
            <div class="col-md-6">
                <button class="btn btn-secondary">
                    Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                </button>

                <button class="btn btn-info">
                    Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                </button>
        
            </div>
    </div>

    </div>
        `
        })
    }

    // Son arananları ekrana göster
    putLastSearches(name){
        // Li elementi oluştur
        const li = document.createElement("li");
        // Uygun class bilgisi gir
        li.className = "list-group-item";
        // İçeriğini girilen kullanıcı adı yap
        li.textContent = name;
        // UL listesine ekle
        this.lastSearches.appendChild(li);
    }

    // Son arananları ekrandan sil
    clearSearchesFromUi(){
        // İlk eleman kalmayana kadar listenin son elemanını sil
        while(this.lastSearches.firstChild){
            this.lastSearches.removeChild(this.lastSearches.lastChild)
        }
    }
}