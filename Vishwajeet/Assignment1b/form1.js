$(document).ready(function () {
    let obj = getData();
    document.getElementById('firstName').innerHTML=obj['firstName'];
    document.getElementById('lastName').innerHTML=obj['lastName'];
    });

function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
    $("#firstName").text(studentObj.firstName);
    $("#lastName").text(studentObj.lastName);
    return studentObj;
}