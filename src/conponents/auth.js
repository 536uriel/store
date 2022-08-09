class Auth {
    constructor(){
        //need to change to false
        localStorage.setItem('login',true)
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