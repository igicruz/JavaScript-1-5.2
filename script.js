/*JS*/

var person = {
    name : "Ignacio",
    age  : 41,
    dateOfBirth: "January 22, 1976",
    placeOfBirth : "Mexico City"
};

document.getElementById("demo").innerHTML =
person.name + "<br> " 
+ "Is" + " " + person.age + " " + "years old" + " " + "<br>" 
+ person.dateOfBirth + "<br>" + "From" + " " + person.placeOfBirth;
	