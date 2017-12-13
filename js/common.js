$( "#role-selector" ).change(function() {
    var roleSelector = document.getElementById("role-selector");
    var value = roleSelector.options[roleSelector.selectedIndex].value;

    $userSpecializationBlock  = $(".user-specialization-block");
    $userJobBlock = $(".user-job-block");

    switch(value){
        case "Select role..." :
            $userSpecializationBlock.addClass("d-none");
            $userJobBlock.addClass("d-none");
            break;
        case "User" :
            $userSpecializationBlock.addClass("d-none");
            $userJobBlock.addClass("d-none");
            break;
        case "Student" :
            $userSpecializationBlock.removeClass("d-none");
            $userJobBlock.addClass("d-none");
            break;
        case "Developer" :
            $userSpecializationBlock.removeClass("d-none");
            $userJobBlock.removeClass("d-none");
            break;
    }
});




/*


var users = [];
const roles = ["User", "Student", "Developer"];

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
    this.role = roles[0];
    this.tasks = [];
    $('#tab-simple').removeClass("disabled").addClass("active");
    $("#tab-home").addClass("disabled");
    $("#tab-project").addClass("disabled");
};

User.prototype.createStudent = function (name, surname, specialization) {
    this.name = name;
    this.surname = surname;
    this.specialization = specialization;
    this.role = roles[1];
    this.tasks = [];
    $('#tab-simple').removeClass("disabled").addClass("active");
    $("#tab-home").removeClass("disabled");
    $("#tab-project").addClass("disabled");
};

User.prototype.createDeveloper = function (name, surname, specialization, jobtitle) {
    this.name = name;
    this.surname = surname;
    this.specialization = specialization;
    this.jobtitle = jobtitle;
    this.role = roles[2];
    this.tasks = [];
    $('#tab-simple').removeClass("disabled").addClass("active");
    $("#tab-home").removeClass("disabled");
    $("#tab-project").removeClass("disabled");
};

User.prototype.addSimpleTask = function (title, status) {
    var currentTask = {};
    currentTask['title'] = title;
    currentTask['status'] = status;
    this.tasks.push(currentTask);
};

User.prototype.addHomeTask = function (title, status, description) {
    var currentTask = {};
    currentTask['title'] = title;
    currentTask['status'] = status;
    currentTask['description'] = description;
    this.tasks.push(currentTask);
};

User.prototype.addProjectTask = function (title, status, description, deadline) {
    var currentTask = {};
    currentTask['title'] = title;
    currentTask['status'] = status;
    currentTask['description'] = description;
    currentTask['deadline'] = deadline;
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
            developer.createDeveloper(name, surname, specialization, job);
            users.push(developer);
            break;
    }
    console.log(users);
});

var simpleTaskTitle = document.getElementById("simple-task-title");
var simpleTaskStatus = document.getElementById("simple-task-status");
var homeTaskTitle = document.getElementById("home-task-title");
var homeTaskDesc = document.getElementById("home-task-description");
var homeTaskStatus = document.getElementById("home-task-status");
var projectTaskTitle = document.getElementById("project-task-title");
var projectTaskDesc = document.getElementById("project-task-description");
var projectTaskStatus = document.getElementById("project-task-status");
var projectTaskDeadline = document.getElementById("project-task-deadline");

$("#add-simple").click(function () {
    users[users.length-1].addSimpleTask(simpleTaskTitle.value, simpleTaskStatus.value);
    console.log(users);
});

$("#add-home").click(function () {
    users[users.length-1].addHomeTask(homeTaskTitle.value, homeTaskDesc.value, homeTaskStatus.value);
    console.log(users);
});

$("#add-project").click(function () {
    users[users.length-1].addProjectTask(projectTaskTitle.value, projectTaskDesc.value, projectTaskStatus.value, projectTaskDeadline.value);
    console.log(users);
});

*/