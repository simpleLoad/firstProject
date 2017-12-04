var tree = document.getElementById('tree');

window.onload = function(){
	var btn1 = document.getElementById('preSort');
	var btn2 = document.getElementById('midSort');
	var btn3 = document.getElementById('lastSort');
	var divs = [];
	var timer = null;

	btn1.onclick = function(){
		clear();
		pushDiv1(tree);
		changeColor();
	}

	btn2.onclick = function(){
		clear();
		pushDiv2(tree);
		changeColor();
	}

	btn3.onclick = function(){
		clear();
		pushDiv3(tree);
		changeColor();
	}

	function pushDiv1(node){
		if(!(node == null)){
			divs.push(node);
			pushDiv1(node.firstElementChild);
			pushDiv1(node.lastElementChild);

		}
	}

	function pushDiv2(node){
		if(!(node == null)){
			pushDiv2(node.firstElementChild);
			divs.push(node);
			pushDiv2(node.lastElementChild);

		}
	}

	function pushDiv3(node){
		if(!(node == null)){
			pushDiv2(node.firstElementChild);
			pushDiv2(node.lastElementChild);
			divs.push(node);
		}
	}

	function changeColor(){
		console.log(divs);
		var i = 0;
		divs[i].style.background = "#9290a6";
		timer = setInterval(function(){
			i++;
			if(i<divs.length){
				divs[i-1].style.background = "#fff";
				divs[i].style.background = "#9290a6";
			} else{
				clearInterval(timer);
				divs[divs.length-1].style.background = "#fff";
			}
		},500)
	}

	function clear(){
		divs = [];
		clearInterval(timer);
		var oDiv = document.getElementsByTagName('div');
		for (var i = 0; i < oDiv.length; i++) {
			oDiv[i].style.background = "#fff";
		}
	}
}
