"use strict";

/* Array of registered users */
let users = [];

/* Array of users access role */
const roles = ["User", "Student", "Developer"];

function User(){
    let name;
    let surname;
    let specialization;
    let jobtitle;
    let role;
    let tasks;
}

User.prototype.createUser = function (userInfo) {
    this.name = userInfo.name;
    this.surname = userInfo.surname;
    this.specialization = userInfo.specialization;
    this.jobtitle = userInfo.jobtitle;
    this.role = userInfo.role;
    this.tasks = [];
};

User.prototype.addSimpleTask = function (taskInfo) {
    const currentTask = {};
    currentTask['type'] = "Simple task";
    currentTask['title'] = taskInfo.title;
    currentTask['status'] = taskInfo.status;
    this.tasks.push(currentTask);
};

User.prototype.addHomeTask = function (taskInfo) {
    const currentTask = {};
    currentTask['type'] = "Home task";
    currentTask['title'] = taskInfo.title;
    currentTask['status'] = taskInfo.status;
    currentTask['description'] = taskInfo.description;
    this.tasks.push(currentTask);
};

User.prototype.addProjectTask = function (taskInfo) {
    const currentTask = {};
    currentTask['type'] = "Project task";
    currentTask['title'] = taskInfo.title;
    currentTask['status'] = taskInfo.status;
    currentTask['description'] = taskInfo.description;
    currentTask['deadline'] = taskInfo.deadline;
    this.tasks.push(currentTask);
};

/* Show input new user form, and hide tasks form */
function showNewUserUi() {
    $(".user-inform").removeClass("d-none");
    $(".todo-data").addClass("d-none");
    $(".logout").addClass("d-none");

    const userForm = document.forms.userform;
    userForm.elements.name.value = "";
    userForm.elements.surname.value = "";
    userForm.elements.specialization.value = "";
    userForm.elements.job.value = "";
    $(".current-user")[0].innerHTML = "<H3>New on site? Create user</H3>";
}

/* Show tasks form for current user */
function showTasksUi(user) {
    $(".user-inform").addClass("d-none");
    $(".todo-data").removeClass("d-none");
    $(".logout").removeClass("d-none");
    $(".current-user")[0].innerHTML = "<H5>Current user: " + user.name + ". Role: " + user.role + "</H5>";
}

/* Show tabs available for user */
function showAvailableTabs(user) {
    let tabHome = $("#tab-home");
    let tabProject = $("#tab-project");
    switch (user.role) {
        case roles[0] :
            break;
        case roles[1] :
            tabHome.removeClass("d-none");
            break;
        case roles[2] :
            tabHome.removeClass("d-none");
            tabProject.removeClass("d-none");
            break;
        default :
            console.log("Error read roles");
    }
}

/* Add user task to list */
function addToList(){
    const list = window.document.createElement('ul');
    for (let i = 0; i < users[users.length-1].tasks.length; i++){
        const li = document.createElement('li');
        li.className = "list-group-item";
        let type = users[users.length-1].tasks[i].type || "";
        let title = users[users.length-1].tasks[i].title || "";
        let status = users[users.length-1].tasks[i].status || "";
        let description = users[users.length-1].tasks[i].description || "";
        let deadline = users[users.length-1].tasks[i].deadline || "";
        li.innerHTML = "<b>" + type + ": </b>" + title + " " + status + " " + description + " " + deadline;
        li.ondblclick = function(){this.parentNode.removeChild(this);};
        list.appendChild(li);
    }
    let tasklist = document.getElementById("tasklist");
    tasklist.innerHTML = "";
    tasklist.appendChild(list);
}

$("#create-user-btn").click(function () {
    const roleSelector = document.getElementById("role-selector");
    const role = roleSelector.options[roleSelector.selectedIndex];
    const userForm = document.forms.userform;

    if(role.value !== "Select role..."){
        const user = new User();
        const userInfo = {
            name: userForm.elements.name.value,
            surname: userForm.elements.surname.value,
            specialization: userForm.elements.specialization.value,
            jobtitle: userForm.elements.job.value,
            role: role.value,
        };
        user.createUser(userInfo);
        users.push(user);
        showTasksUi(user);
        showAvailableTabs(userInfo);
    } else alert("Please, select role");
    console.log(users);
});

$("#add-simple").click(function () {
    const simpleTaskForm = document.forms.simpleTaskForm;
    const taskInfo = {
        title: simpleTaskForm.stTitle.value,
        status: simpleTaskForm.stStatus.value,
    };
    users[users.length-1].addSimpleTask(taskInfo);
    simpleTaskForm.stTitle.value = "";
    simpleTaskForm.stStatus.value = "";
    addToList();
    console.log(users);

});

$("#add-home").click(function () {
    const homeTaskForm = document.forms.homeTaskForm;
    const taskInfo = {
        title: homeTaskForm.htTitle.value,
        status: homeTaskForm.htStatus.value,
        description: homeTaskForm.htDescription.value,
    };
    users[users.length-1].addHomeTask(taskInfo);
    homeTaskForm.htTitle.value = "";
    homeTaskForm.htStatus.value = "";
    homeTaskForm.htDescription.value = "";
    addToList();
    console.log(users);
});

$("#add-project").click(function () {
    const projectTaskForm = document.forms.projectTaskForm;
    const taskInfo = {
        title: projectTaskForm.ptTitle.value,
        status: projectTaskForm.ptStatus.value,
        description: projectTaskForm.ptDescription.value,
        deadline: projectTaskForm.ptDeadline.value,
    };
    users[users.length-1].addProjectTask(taskInfo);
    projectTaskForm.ptTitle.value = "";
    projectTaskForm.ptStatus.value = "";
    projectTaskForm.ptDescription.value = "";
    projectTaskForm.ptDeadline.value = "";
    addToList();
    console.log(users);
});

$(".logout").click(function () {
    showNewUserUi();
});


/*
+1. Использование бутстрапа по cdn ок это круто, но зачем тебе бандлы в папках тогда?
    А почему бы не юзать вообще менеджер пакетов (npm, yarn) например?
+2. Логика не плохая, но почему все в одном файлике?) Не кажется если там добавить много условий все будет не читаемо.
    Я хочу видеть ооп и в разбитии на разные файлы :) так же интересней
+ 3. название переменных, соблюдай семантику, если это массив ролей то название не role a roles.
    Попробую сделать константы какие-то. или этот масив запрети изменять. Object.freeze() для примера,
    а то я случайно поменяю что-то на эвент и все. А вдруг.
+ 4. Добавь инкапсуляцию какую-то. Я могу прям из браузера редактировать обьекты эти
5. Почему пользователь знает о бо всем... Это не маштабируемо, и в случаее если у нас много типов пользователей например 200 штук.
    То даже для самого простого, будет тянуться все. Юзай наследование. На learn javascript есть как это делать.
+ 6. Параметры передавать по одному в функцию как-то не ок. Был-бы реальный проект было бы около 20 параметров, оберни в обьекты.
+ 7. Слишком много обращений к дому постоянно, на каждый эвент оптимизировать.
+ 8. Для простоты, лучше додай кнопку создать пользователя. И отлавливай на сабмит.

Опциональные вещи:
1. switch который там, немного нарушает solid принципы, было бы здорово сделать по другому (как я не скажу :smiley:) это задание со звездочкой.
*/