var users = [];
var role = ["User", "Student", "Developer"];
function User(){
    var name;
    var surname;
    var specialization;
    var jobtitle;
    var role;
    var tasks;
}

User.prototype.createUser = function (name, surname) {
    this.name = name;
    this.surname = surname;
    this.role = role[0];
};

User.prototype.createStudent = function (name, surname, specialization) {
    this.name = name;
    this.surname = surname;
    this.specialization = specialization;
    this.role = role[1];
};

User.prototype.createDeveloper = function (name, surname, specialization, jobtitle) {
    this.name = name;
    this.surname = surname;
    this.specialization = specialization;
    this.jobtitle = jobtitle;
    this.role = role[2];
};

User.prototype.addSimpleTask = function (title, status) {
    var currentTask = {};
    currentTask['title'] = title;
    currentTask['status'] = status;
    this.tasks = [];
    this.tasks.push(currentTask);
};

User.prototype.addHomeTask = function (title, status, description) {
    var currentTask = {};
    currentTask['title'] = title;
    currentTask['status'] = status;
    currentTask['description'] = description;
    this.tasks = [];
    this.tasks.push(currentTask);
};

User.prototype.addProjectTask = function (title, status, description, deadline) {
    var currentTask = {};
    currentTask['title'] = title;
    currentTask['status'] = status;
    currentTask['description'] = description;
    currentTask['deadline'] = deadline;
    this.tasks = [];
    this.tasks.push(currentTask);
};

$( "#role-selector" ).change(function() {
    var roleSelector = document.getElementById("role-selector");
    var value = roleSelector.options[roleSelector.selectedIndex].value;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var specialization = document.getElementById("specialization").value;
    var job = document.getElementById("job-title").value;

    switch(value){
        case "User" :
            var user = new User();
            user.createUser(name, surname);
            users.push(user);
            break;
        case "Student" :
            var student = new User();
            student.createStudent(name, surname, specialization);
            users.push(student);
            break;
        case "Developer" :
            var developer = new User();
            developer.createStudent(name, surname, specialization, job);
            users.push(developer);
            break;
    }
    console.log(users);
});

$("#add-simple").click(function () {
    var simpleTaskTitle = document.getElementById("simple-task-title").value;
    var simpleTaskStatus = document.getElementById("simple-task-status").value;
    users[users.length-1].addSimpleTask(simpleTaskTitle, simpleTaskStatus);
    console.log(users);
});
$("#add-home").click(function () {

});
$("#add-project").click(function () {

});