
// Loop through each array and add its content to the new array
for (let i = 0; i < array1.length; i++) {
	password.push(array1[i]);
	password.push(array2[i]);
	password.push(array3[i]);
	password.push(array3[i]);
}


// return a random array element 
const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);
