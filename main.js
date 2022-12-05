const inputUser = document.querySelector(".user")
const inputPass = document.querySelector(".password")
const btn = document.querySelector(".continue-btn")
btn.onclick = function(){
	console.log("Email: " + inputUser.value)
	console.log("Password: " + inputPass.value)
}