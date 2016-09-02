var famousPeopleList = [];
var userInputBtn = document.getElementById("userInput");
var outputPersonDiv = document.getElementById("outputPerson");
var personDiv = document.getElementsByClassName("person");
var finalOutput = "";
var outputDOM = "";

function famousPpl() {
	famousPeopleList.push({
		title: document.getElementById('title').value,
		name: document.getElementById('name').value,
		bio: document.getElementById('bio').value,
		image: document.getElementById('image').value,
		lifespan: {
			birth: document.getElementById('birth').value,
			death: document.getElementById('death').value,
		}
	});
	parseList(famousPeopleList);
	// for (var key in famousPeopleList) {
	// 	console.log(key + " " + famousPeopleList[key]);
	// }
	
}

userInputBtn.addEventListener('click', famousPpl);

// famousPeopleList.forEach(function(elem) {
// 		outputPersonDiv.innerHTML += elem;
// 	});

// function parseList(obj) {
// 	var outputDOM = obj.map(function(prop) {
// 		return `title: ${prop.title}, name: ${prop.name}, birth: ${prop.lifespan.birth}`
// 	});
// 	finalOutput = outputDOM;
// 	//.join("");
// 	printList(finalOutput)
	

// 	//printList();
// }
function parseList(obj) {
	
	//var openingTag = "<div>";
	//var closingTag = "</div>";
	for (var i = 0; i < obj.length; i++) {

		outputDOM += "<person class='person'> <header>" + obj[i].title + ": " + obj[i].name + "</header> <section>" + "<p>" + obj[i].bio + "</p>"+ obj[i].image + "</section> <footer>" + obj[i].lifespan.birth + " - " + obj[i].lifespan.death + "</footer> </person>"; 
		//openingTag.id = i;
		//finalOutput = openingTag + outputDOM + closingTag;
	}
	outputPersonDiv.innerHTML = outputDOM;
	//.join("");
	//printList(finalOutput)
	

	//printList();
}

function clickingDiv() {
	
}

// function printList(list) {
// 	for (var i = 0; i < list.length; i++) {
// 		outputPersonDiv.innerHTML = "<div id='i'>" + list[i] + "</div>";
// 	}
// }

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