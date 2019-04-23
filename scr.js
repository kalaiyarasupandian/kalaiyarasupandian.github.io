var css=document.querySelector("h3");
var col1=document.querySelector(".col1");
var col2=document.querySelector(".col2");
var body=document.getElementById("gradient");

col1.addEventListener("input",function(){
	body.style.background="linear-gradient(to left," + col1.value + "," + col2.value + ")";
	
	css.innerHTML="linear-gradient(to left," + col1.value + "," + col2.value + ")";
})
col2.addEventListener("input",function(){
	body.style.background="linear-gradient(to left," + col1.value + "," + col2.value + ")";
	css.innerHTML="linear-gradient(to left," + col1.value + "," + col2.value + ")";
	
})




