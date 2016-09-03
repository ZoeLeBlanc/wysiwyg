var famousPeople = [];
var userInputBtn = document.getElementById("userInput");
var userInputText = document.getElementById("inputText");
var outputEl = document.getElementById("outputEl");
var clickBio = "";
var finalOutput = "";
var outputDOM = "";

function famousPpl() {
famousPeople.push({
		title: document.getElementById('title').value,
		name: document.getElementById('name').value,
		bio: document.getElementById('bio').value,
		image: document.getElementById('image').value,
		lifespan: {
			birth: document.getElementById('birth').value,
			death: document.getElementById('death').value,
		}
});
getFamoustPpl(famousPeople);
}	
userInputBtn.addEventListener('click', famousPpl);

function getFamoustPpl(obj) {
	outputEl.innerHTML = "";
	for (var counter = 0; counter < obj.length; counter++) {
		outputEl.innerHTML += `<person class="person_container" id="person--${counter}"><header> ${obj[counter].title}: ${obj[counter].name}</header> <section><p class="bio" id="bio--${counter}">${obj[counter].bio}</p><img src="${obj[counter].image}"></section> <footer>${obj[counter].lifespan.birth} - ${obj[counter].lifespan.death}</footer></person>`; 
			//outputDOM += textInput;
	}
	personClick();
}


function personClick() {
	var containerEl = document.getElementsByClassName("person_container");
	for (var i = 0; i < containerEl.length; i++){
		containerEl[i].addEventListener("click", function(event) {
			var clickPerson = event.currentTarget;
			clickPerson.classList.toggle("dotted");
			userInputText.focus();
			clickBio = clickPerson.querySelector(".bio");
			userInputText.value = clickBio.innerHTML;
			console.log('clickBio', clickBio.innerHTML);
		});
	}
}
	
userInputText.addEventListener("keyup", function(e) {
	clickBio.innerHTML = userInputText.value;
	if (e.keyCode == "13"){
		userInputText.value ="";
	}

})
