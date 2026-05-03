document.addEventListener("DOMContentLoaded", function () {

document.getElementById("studentForm").addEventListener("submit", function (e) {
e.preventDefault();

let name = document.getElementById("name").value;
let sid = document.getElementById("sid").value;
let course = document.getElementById("course").value;

if (name === "" || sid === "" || course === "") {
alert("Please fill all fields");
return;
}

let table = document.getElementById("studentTable");

let row = table.insertRow();

row.innerHTML =
"<td>" + name + "</td>" +
"<td>" + sid + "</td>" +
"<td>" + course + "</td>" +
"<td><button onclick='deleteStudent(this)'>Delete</button></td>";

document.getElementById("studentForm").reset();

updateCount();

});

});

function deleteStudent(btn){
btn.parentElement.parentElement.remove();
updateCount();
}

function updateCount(){
let table = document.getElementById("studentTable");
let count = table.rows.length - 1;
document.getElementById("countCard").innerText =
"Total Students: " + count;
}

function markAttendance(){
document.getElementById("msg").innerText =
"Attendance Marked Successfully ✔";
}