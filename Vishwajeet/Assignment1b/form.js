$(document).ready(function(){
    $('#btn').click(function(){
        function getStudentData() {
            let student = {
            
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            
            };
            $("#studentForm")[0].reset();
            
            return student; }
        function storeDataToLocalStorage() {
            if (!localStorage.getItem("student")) {
                localStorage.setItem("student", JSON.stringify(getStudentData()));
            } else {
                localStorage.removeItem("student");
                localStorage.setItem("student", JSON.stringify(getStudentData()));
            }
        }
        function sendData() {
            let xhr = new XMLHttpRequest();
            let data = JSON.stringify(getStudentData());
            xhr.open("POST", "http://localhost:5500/storedata", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(data);
        }
        storeDataToLocalStorage();
        sendData();
        window.location.href="display-data.html"
    })
})