var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}
console.log(cat);


//1. Add height and weight to Fluffy
cat.height = 10
cat.weight = 5


//2. Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = 'Fluffyy'
console.log(cat)


//3. List all the activities of Fluffyy’s catFriends.
var Cat_Friends = cat.catFriends
for(var i in Cat_Friends) {
console.log(Cat_Friends[i]["activities"])
}

//4. Print the catFriends names.
for(var i in Cat_Friends) {
console.log(Cat_Friends[i]["name"])
}

//5. Print the total weight of catFriends
var wgt = []
var t_wgt = 0
wgt.push(cat.weight)
for(var i in Cat_Friends) {
wgt.push(Cat_Friends[i]["weight"])
}
for(var i in wgt) {
t_wgt = t_wgt + wgt[i]
}
console.log(t_wgt)

//6. Print the total activities of all cats
var acty = []
var t_acty = 0
acty.push(cat.activities.length)
for(var i in Cat_Friends) {
acty.push(Cat_Friends[i].activities.length)
}
for(var i in acty) {
t_acty = t_acty + acty[i]
}
console.log(t_acty)

//7. Add 2 more activities to bar & foo cats
var activities = ['drinks milk','catches mouse']
for(var i in activities) {
Cat_Friends[0]["activities"].push(activities[i])
Cat_Friends[1]["activities"].push(activities[i])
}
for(var i in Cat_Friends) {
console.log(Cat_Friends[i]["activities"])
}


//8. Update the fur color of bar
Cat_Friends[0]["furcolor"] = 'brown'


var myCar = {
 make: 'Bugatti',
 model: 'Bugatti La Voiture Noire',
 year: 2019,
 accidents: [
 {
 date: '3/15/2019',
 damage_points: '5000',
 atFaultForAccident: true
 },
 {
 date: '7/4/2022',
 damage_points: '2200',
 atFaultForAccident: true
 },
 {
 date: '6/22/2021',
 damage_points: '7900',
 atFaultForAccident: true
 }
 ]
}

//1. Loop over the accidents array. Change atFaultForAccident from true to false.
var Car_accidents = myCar['accidents']
for(var i in Car_accidents) {
if((Car_accidents[i].atFaultForAccident) == true) {
Car_accidents[i].atFaultForAccident = false
}
console.log(Car_accidents[i].atFaultForAccident)
}

//2. Print the dated of my accidents
for(var i in Car_accidents) {
console.log(Car_accidents[i]['date'])
}


// Write a function called “printAllValues” which returns an newArray of all the input object’s values.
var object = {name:'RajiniKanth', age:33, hasPets:false}
function printAllValues(obj) {
console.log(Object.values(object))
}
printAllValues()


//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
var object = {name:'RajiniKanth', age:33, hasPets:false}
function printAllKeys(obj) {
console.log(Object.keys(object))
}
printAllKeys()


//Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject() {
console.log(Object.entries(obj))
}
convertListToObject()


//Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
var array = ['GUVI', 'I', 'am', 'Geek']
function transformFirstAndLast() {
var newObject = {}
newObject[array[0]] = array[array.length - 1]
return newObject
}
transformFirstAndLast()


//Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject() {
 var newObject = {};
for(var i = 0 ; i < arr.length ; i++) {
newObject[arr[i][0]] = arr[i][1]
}return newObject
}
fromListToObject()


//Write a function called “transformGeekData” that transforms some set of data from one format to another.
var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
function transformEmployeeData() {
var transformEmployeeData = []
 var newObject = {};
for(var i = 0 ; i < arr.length ; i++) {
for(var j = 0 ; j < arr[i].length ; j++) {
newObject[arr[i][j][0]] = arr[i][j][1]
}
transformEmployeeData.push(newObject)
}return transformEmployeeData
}
transformEmployeeData()


//Write an “assertObjectsEqual” function from scratch.
//Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
var expected = {foo: 5, bar: 6}
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, 'detects that two objects are equal')
function assertObjectsEqual(actual, expected, testName) {
var actualToString = JSON.stringify(actual)
var expectedToString = JSON.stringify(expected)
if(actualToString == expectedToString) {
console.log('Passed')
}
else {
console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"')
}
}


//Write a function to return the list of characters below 20 age
var students = [
 {
 name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
 {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
 {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},   {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
 {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
 {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
 {name: 'Devdas',age: 56} 
 ];
function returnMinors(arr)
{
var minors = students.filter(element => element.age<20)
return minors
}
returnMinors()
