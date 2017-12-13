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

User.prototype.createUser = function (name, surname, specialization, jobtitle, role) {
    this.name = name;
    this.surname = surname;
    this.specialization = specialization;
    this.jobtitle = jobtitle;
    this.role = role;
    this.tasks = [];

    switch (role) {
        case roles[0] :

            break;
        case roles[1] :
            $("#tab-home").removeClass("disabled");
            break;
        case roles[2] :
            $("#tab-home").removeClass("disabled");
            $("#tab-project").removeClass("disabled");
            break;
    }
};


var username = document.getElementById("name");
var surname = document.getElementById("surname");
var specialization = document.getElementById("specialization");
var job = document.getElementById("job-title");
var simpleTaskTitle = document.getElementById("simple-task-title");
var simpleTaskStatus = document.getElementById("simple-task-status");
var homeTaskTitle = document.getElementById("home-task-title");
var homeTaskDesc = document.getElementById("home-task-description");
var homeTaskStatus = document.getElementById("home-task-status");
var projectTaskTitle = document.getElementById("project-task-title");
var projectTaskDesc = document.getElementById("project-task-description");
var projectTaskStatus = document.getElementById("project-task-status");
var projectTaskDeadline = document.getElementById("project-task-deadline");

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

$("#create-user-btn").click(function () {
    var roleSelector = document.getElementById("role-selector");
    var role = roleSelector.options[roleSelector.selectedIndex];

    if(role.value != "Select role..."){
        $(".user-inform").addClass("d-none");
        $(".todo-data").removeClass("d-none");
        var user = new User();
        user.createUser(username.value, surname.value, specialization.value, job.value, role.value);
        $(".current-user")[0].innerHTML = "<H3>Current user: " + user.name + "</H3>";
        users.push(user);
    }
});

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
