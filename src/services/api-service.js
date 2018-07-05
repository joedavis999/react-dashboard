class ApiService {
    async apiMethod(data) {
        if(data.userName && data.password){
            return 'login success'
        } else {
            return 'login failure'
        }
    }
}

export default new ApiService();