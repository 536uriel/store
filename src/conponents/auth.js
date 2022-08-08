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
        return localStorage.getItem('login')
    }
}

export default new Auth()