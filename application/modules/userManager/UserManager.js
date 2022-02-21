class userManager {
    constructor(){
        this.users = [];
    }
     
    registration(login, password) {
        console.log(login);
        console.log(password);
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
            if(this.users.login === login && this.users.password === password){
                return true; 
            }
        } 
        return false;
    }
}

module.exports = userManager;