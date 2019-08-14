"use strict";

function hello(thing) {
	alert(this.name + " says hello " + thing);
}

var person = {
		name: "James"
};

person.hello = hello;

var boundHello = function(thing) {
	return person.hello.call(person,thing);
}

function pippo() {
	alert(this);
}
$(document).ready(function(){
	$(".nav-link").click(
		function(data) {
			var idTarget = data.currentTarget.id;
			if(idTarget == "gameLink") {
				$("#container").load("includes/game.html");
			} else if (idTarget == "activeLink") {
				
//				person.hello("world");
				pippo();
			} else {
				$("#container").load("includes/home.html");
			}
		}
	);
	$("#container").load("includes/home.html");
});

 