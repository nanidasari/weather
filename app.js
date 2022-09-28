
function time(){


var d = new Date();
var day = d.getDate();

const months = ["Jan","Feb","Mar","Apr","May","Jun","jul","Aug","Sep","Oct","Nov","Dec"];
var month = months[d.getMonth()+1];
var year = d.getFullYear();
var h = d.getHours()
var newformat = h >= 12 ? 'PM' : 'AM'; 

var m = d.getMinutes();
var ms = d.getSeconds();
const days = ["Sun","Mon" , "Tue","Wed","Thu","Fri","Sat"];
var tdy = days[d.getDay()]
document.getElementById("date").innerHTML = day + " " + month +" " + year + " "+ tdy ;
document.getElementById("time").innerHTML = h+":"+m+":"+ms +" "+ newformat;

}

setInterval(time, 1000);

