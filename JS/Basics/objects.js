var object={
	name: "Sarthak",
	age: 21,
	phoneNo: 9582446105
};

console.log(object.name,object["age"],object["phoneNo"]);


//Differences between 2 notations

var difference={
	name: "sarthak",    //variable starting with name not allowed
	age: 21,
	phoneno: 9582446105		//cannot give space
};

//1  You cant use square bracket if the property starts with a no.
// console.log(difference.1name);    
console.log(difference["1name"]);

//2  You can lookup using a varible with bracket notation
var temp= "age";
console.log(difference.temp);
console.log(difference[temp]);

//3  You cannot use dot notation for property names with spaces

// console.log(difference.phone no);  //space not allowed
console.log(difference["phone no"]);


var object1={};
object1.name="sam";
object1.age=18;
object1.phoneNo=9818138833;

var object2= new Object();
object2.name="samistriker";
object2.age=19;
object2.phoneNo=9818138833;


console.log(object1.name,object1["age"],object1["phoneNo"]);
console.log(object2.name,object2["age"],object2["phoneNo"]);
