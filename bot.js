// get next move
document.querySelector("#chessvision-wrapper > div").shadowRoot.querySelector("#top > div > div.jss19.dropdown.btn-group > button:nth-child(1)").click();
document.querySelector("#main-wrap > main > div.analyse__tools > div.pv_box > div").getAttribute("data-uci");

// Convert next move to style
var next_move = document.querySelector("#main-wrap > main > div.analyse__tools > div.pv_box > div").getAttribute("data-uci");
console.log(next_move);
var text1 = ((104-next_move.charCodeAt(0))*100).toString() + "%," + (parseInt(next_move.slice(1,2))*100).toString() + "%)";
console.log(text1);
var text2 = ((104-next_move.charCodeAt(2))*100).toString() + "%," + (parseInt(next_move.slice(3,4))*100).toString() + "%)";
console.log(text2);


// Click Text 1 
var move1 = document.getElementsByClassName("transition-transform ease-in-out will-change-transform");
for (let i=0;i<move1.length;i++) {
	if (move1[i].getAttribute("style").includes(text1)) {
		console.log(move1[i].getAttribute("style"));
		break;
	}
}


// Click Text 2










var move1 = document.getElementsByClassName("transition-transform ease-in-out will-change-transform");
for (let i=0;i<move1.length;i++) {
	console.log(move1[i].getAttribute("style"));
}

var move1 = document.getElementsByClassName("bg-cover bg-center");
for (let i=1;i<=move1.length;i++) {
	if (move1[i].getAttribute("style").includes(text1)) {
		console.log(move1[i].getAttribute("style"));
		break;
	}
}



var move1 = document.getElementsByClassName("bg-cover bg-center");
for (let i=1;i<=move1.length;i++) {
		console.log(move1[i].getAttribute("style"));

}



var move1 = document.getElementsByClassName("transition-transform ease-in-out will-change-transform");
for (let i=0;i<move1.length;i++) {
	if (move1[i].getAttribute("style").includes(text1)) {
		console.log(move1[i].getAttribute("style"));
		break;
	}
}


103 
console.log(text1)




BLACK


g -> 103 -> 1   
a -> 97 -> 7


z-index:50;transform:translate(700%, 0%)







// click 
console.log(document.getElementsByClassName("bg-cover bg-center")[1].getAttribute("style"));