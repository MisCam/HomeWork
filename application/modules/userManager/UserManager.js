class userManager {
    constructor(){
        this.users = [];
    }
     
    registration(login, password) {
        for (let i = 0; i < this.users.length; i++){
            if(this.users[i].login === login){
                return false;
            }
        }
        
        if(login && password){
            const user = {login, password};
            this.users.push(user); 
        }
        return true; 
    }

    login(login, password){
        for(let i = 0; i < this.users.length; i++){
            if(this.users[i].login === login && this.users[i].password === password){
                return {
                    ok: true,
                    id: i
                }; 
            }
        } 
        return { ok: false };
    }
}

module.exports = userManager;