const localStorageHasToken = function(){
    //1、查看缓存是否有token
    return localStorage.getItem('token') !== ''
}

const linkHasToken = function(){
    //2、链接是否传入token
    return this.$router.history.current.query.token
}

const getToken = function(){
    //3、重新获取token
}

const localStorageSetToken = function(token){
    //把token存入缓存
    localStorage.setItem('token',token)
}

const initToken = function(){
    if(this.localStorageHasToken()){
        return
    }else if(this.linkHasToken()){
        this.localStorageSetToken(this.$router.history.current.query.token)
        return
    }else{
        this.getToken()
    }
}

export default {initToken}