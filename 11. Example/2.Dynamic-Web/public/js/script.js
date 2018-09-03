var my =(test)=>{
	return test
}

console.log(my('abc') );
var menu = document.getElementsByClassName('menu')[0];
var profile = document.getElementsByClassName('profile')[0];

menu.addEventListener('click', (e) => {
	e.preventDefault()
	if(profile.classList.value == "profile show"){
		profile.classList.value = "profile hide"
	} else{
		profile.classList.value = "profile show"
	}
})
