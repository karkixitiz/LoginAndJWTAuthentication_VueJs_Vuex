export function authHeader(){
	//return authorization header with jwt token
	let user=JSON.parse(localStorage.getItem('user'))
	if(user && user.token){
		return { 'Authorization':'kiran let you go'+ user.token}

	}else{
		return {}
	}
}