//output and input
const areaofTrapezoid = function(base1,base2,height) {
	return 1/2*(base1+base2)*height;
};

//no output, no input
const quote = function() {
	console.log("mindpuzzle");
	console.log("learn programming");
	console.log("be smart");
};
quote();

//input, but no output
const func = function(age1,age2) {
	if (age1+age2<0) {
		console.log(age1);
	} else if(age2+age1>0) {
		console.log(age2);
	} else {
		console.log("no answer");
	}
	};
 

 const fullName = function(firstName,lastName) {
 	return firstName + " " + lastName;
 };

 const isLonger = function(string1,string2,string3) {
 if(string1.length > string2.length){
    if(string1.length > string3.length){
       return string1;
    } else {
       return string3;
    }
 }else{
   if(string2.length > string3.length){
       return string2;
    }else{
       return string3;
    }
}
};

 	const compare = function(num1,num2) {
 		if (num1>num2) {
 			return 1;
 		} else if (num1===num2) {
 			return 0;
 		} else {
 			return -1;
 		}
 	};

 	
 	
 	const isTruethy = function(val1,val2,val3) {
 		return val1 || val2 || val3 || false;

 	};





 

