var test = null;


console.log(typeof(test));

if (test === null){
	test = "Peter Griffin";
}
else{
	test = null;
}


var myVariable;

console.log(myVariable);
function doNothing(){
	return;
}

var weekendPlans = doNothing();
console.log(weekendPlans);

if (myVariable == undefined){
	//
}

if (typeof myVariable === "undefined"){
	console.log("Define me!!!");
}