//Try the rest countries api below. Extract and print the flag url of all the countries in console. Use the html template. https://restcountries.eu/rest/v2/all
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload= function(){
	var data = JSON.parse(this.response);
	function flag() {
var b = []
for(var i = 0 ; i<data.length ; i++) {
  b.push(data[i]["flag"])
}return b
}
console.log(flag())
}
