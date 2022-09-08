class Storage{
    
    static getSearchedUsersFromStorage(){
        //Tüm Kullanıcıları Al
        let users;

        if(localStorage.getItem("searched") === null){
            users = [];
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;

    }
    static addSearchedUserToStorage(username){
        //Kullanıcı Ekle
        let users = Storage.getSearchedUsersFromStorage();

        //IndexOf = -1 users yok o zaman ekle
        if(users.indexOf(username) === -1){
            users.push(username);
        }
        // O zaman ekle
        localStorage.setItem("searched", JSON.stringify(users));
    }
    static clearAllSearchedUserFromStorage(){
        //Tüm Kullanıcıları Sil

        localStorage.removeItem("searched");
    }
}