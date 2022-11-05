// get next move
document.querySelector("#chessvision-wrapper > div").shadowRoot.querySelector("#top > div > div.jss19.dropdown.btn-group > button:nth-child(1)").click();
document.querySelector("#main-wrap > main > div.analyse__tools > div.pv_box > div").getAttribute("data-uci");

// Convert next move to style
var next_move = document.querySelector("#main-wrap > main > div.analyse__tools > div.pv_box > div").getAttribute("data-uci");
console.log(next_move);
var text1 = ((104-next_move.charCodeAt(0))*100).toString() + "%," + (parseInt(next_move.slice(1,2))*100).toString() + "%)";
console.log(text1);
var text2 = "--un-translate-x:"+ ((104-next_move.charCodeAt(2))*100).toString() + "%; --un-translate-y:" + (parseInt(next_move.slice(3,4))*100).toString() + "%)";
console.log(text2);


// Click Text 1 
var move1 = document.getElementsByClassName("transition-transform ease-in-out will-change-transform");
for (let i=0;i<move1.length;i++) {
	if (move1[i].getAttribute("style").includes(text1)) {
		console.log(move1[i].getAttribute("style"));
		move1[i].click();
		break;
	}
}


// Click Text 2
var move2 = document.getElementsByClassName("transform pointer-events-none bg-black");
for (let i=0;i<move2.length;i++) {
	if (move2[i].getAttribute("style").includes(text2)) {
		console.log(move2[i].getAttribute("style"));
		move2[i].click();
		break;
	}
}


// <div class="absolute top-0 left-0 z-[1] w-1/8 h-1/8 transform pointer-events-none bg-black opacity-20 rounded-full scale-25" style="--un-translate-x:600%; --un-translate-y:500%;"></div>




var move2 = document.getElementsByClassName("transform pointer-events-none bg-black");
for (let i=0;i<move2.length;i++) {
	if (move2[i].getAttribute("style").includes(text2)) {
		console.log(move2[i].getAttribute("style"));
		move2[i].click();
		break;
	}
}



