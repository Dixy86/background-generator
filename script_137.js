var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");


//	console.log(css);
//	console.log(color1);
//	console.log(color2);


function setGradient() {
	
	body.style.background = 
	"linear-gradient(to right,"
	+ color1.value
	+ ","
	+ color2.value
	+ ")";

	h3.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);



/*

h3.innerHTML="";
h3.textContent="";
h3.appendChild(document.createTextNode("123"));

*/


/*


color1.addEventListener("input", function() {

	//	console.log(color1.value);

	body.style.background = 
    "linear-gradient(to right," 
    + color1.value 
    + ","
    + color2.value 
    + ")";

})


color2.addEventListener("input", function() {

	//	console.log(color2.value);

	body.style.background = 
    "linear-gradient(to right," 
    + color1.value + ","
    + color2.value +                
    ")";
})


*/




//	document.body.style.background="yellow";   -  Bez definisanja promenljive body!
//	body.style.background="rgb(100, 100, 100)";   -  Definisana promenljiva body!