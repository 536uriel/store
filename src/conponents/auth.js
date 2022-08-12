class Auth {
    constructor(){
        //need to change to false
        localStorage.setItem('login',false)
    }

    login(){
        localStorage.setItem('login',true)
    }

    logout(){
        localStorage.setItem('login',false)
    }

    isAuthenticated(){
        if(localStorage.getItem('login') == 'true'){
            return true
        }else{
            return false
        }
    }
}

export default new Auth()