class Github{
    // Ana url
    constructor(){
        this.url = "https://api.github.com/users/";
    }
    // Veri çekmek için fetch ile async ve await kullandım
    async getProfile(username){

        // Kullanıcı bilgileri ve repo bilgilerini ayrı ayrı çektim
        // Gerekli linkler
        let githubUser = this.url + username;
        let githubRepo = githubUser + "/repos";

        // Fetch ile ikisinden de promise döndürdüm
        let fetchUser = await fetch(githubUser);
        let fetchRepo = await fetch(githubRepo);

        // Sonra bu promise'i json'a çevirdim
        let jsonUser = await fetchUser.json();
        let jsonRepo = await fetchRepo.json();

        // Hem github bilgilerini hem de repo bilgilerini döndürdüm
        return {
            jsonUser,
            jsonRepo
        }
        
    }

}