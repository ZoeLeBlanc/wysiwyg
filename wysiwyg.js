
var userInputText = document.getElementById("inputText");
var outputEl = document.getElementById("outputEl");
var clickBio = "";

var finalOutput = "";
var outputDOM = "";

var famousPeople = [{
		title: "Samurai",
  		name: "Tomoe Gozen",
  		bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  		image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  		lifespan: {
    		birth: 1747,
    		death: 1797
		}
		},
{
		title: "Samurai",
  		name: "Tomoe Gozen",
  		bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  		image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  		lifespan: {
    		birth: 1747,
    		death: 1797
		}
		}];
	

getFamoustPpl(famousPeople);
function getFamoustPpl(obj) {
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

	//outputPersonDiv.innerHTML = outputDOM;
	//console.log(outputPersonDiv.childNodes);
	//addTextArea();

	//getValue();	

// function addTextArea() {
	
// 	for (var i = 0; i < personDiv.length; i++){
// 		var inputUser = document.createElement("input");
// 		inputUser.id = "bioInput";
// 		inputUser.type = "text"
// 		personDiv[i].appendChild(inputUser);
// 	}
// 	getValue();
// }
// //var bioArea = document.getElementById("bioInput");
// function getValue() {
// 	var bioList = document.getElementsByClassName("bio");
// 	for (var i = 0; i < bioList.length; i++){
// 		bioInput[i].addEventListener("change", function() {
			
// 			//console.log(event.target.value);
// 			console.log(bioList.click);
// 		});
// 	}	
// }


// var counter = 0;
// function parseList(obj) { 
// 	for (; counter < 5; counter++){
// 		outputDOM += "<person class='person' id='person--${counter}'>" + obj + "</person>"
// 	}
// 	outputPersonDiv.innerHTML += outputDOM;
// }
// //userInputBtn.addEventListener('click', famousPpl);
// // var counter = 0;
// // function parseList(obj) {
// // 	for (var i = 0; i < obj.length; i++) {

// // 		outputDOM += "<person class='person' id='person--${i}'> <header>" + obj[i].title + ": " + obj[i].name + "</header> <section>" + "<p>" + obj[i].bio + "</p>"+ obj[i].image + "</section> <footer>" + obj[i].lifespan.birth + " - " + obj[i].lifespan.death + "</footer> <input type='text'></type></person>"; 
// // 		//outputDOM += textInput;

// // 	}
// // 	outputPersonDiv.innerHTML += outputDOM;
// // 	console.log(personDiv);
// // }

// for (var i = 0; i < personDiv.length; i++){
// 	personDiv[i].addEventListener("click", function(event) {
// 		event.target.classList.add("dotted");
// 	})
// }
// function clickingDiv(event) {
// 	personDiv.addEventListener("click", function(event) {
// 		console.log(event);
// 		console.log(event.target);
// 		console.log(event.currentTarget);

// 	});
//  }



// var counter = 0;
// var outputEl = document.getElementById("outputEl");
// for (; counter < 5; counter++) {
//   // Give each person element a unique identifier
//   outputEl.innerHTML += `<div class="person__container" id="person--${counter}"></div>`;
// }

// // Now containerEl will have elements in it
// var containerEl = document.getElementsByClassName("person__container");

// // Event listeners are created
// for (var i = 0; i < containerEl.length; i++) {
//   containerEl[i].addEventListener("click", function (event) {
//     // Logic to execute when the element is clicked
//   });
// };
// var arr = [];
// var len = oFullResponse.results.length;
// for (var i = 0; i < len; i++) {
//     arr.push({
//         key: oFullResponse.results[i].label,
//         sortable: true,
//         resizeable: true
//     });
// }