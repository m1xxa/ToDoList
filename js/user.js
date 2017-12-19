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

User.prototype.createUser = function (userInfo) {
    this.name = userInfo.name;
    this.surname = userInfo.surname;
    this.specialization = userInfo.specialization;
    this.jobtitle = userInfo.jobtitle;
    this.role = userInfo.role;
    this.tasks = [];

    switch (userInfo.role) {
        case roles[0] :
            break;
        case roles[1] :
            $("#tab-home").removeClass("d-none");
            break;
        case roles[2] :
            $("#tab-home").removeClass("d-none");
            $("#tab-project").removeClass("d-none");
            break;
        default :
            console.log("Error read roles");
    }
};

User.prototype.addSimpleTask = function (taskInfo) {
    var currentTask = {};
    currentTask['title'] = taskInfo.title;
    currentTask['status'] = taskInfo.status;
    this.tasks.push(currentTask);
};

User.prototype.addHomeTask = function (taskInfo) {
    var currentTask = {};
    currentTask['title'] = taskInfo.title;
    currentTask['status'] = taskInfo.status;
    currentTask['description'] = taskInfo.description;
    this.tasks.push(currentTask);
};

User.prototype.addProjectTask = function (taskInfo) {
    var currentTask = {};
    currentTask['title'] = taskInfo.title;
    currentTask['status'] = taskInfo.status;
    currentTask['description'] = taskInfo.description;
    currentTask['deadline'] = taskInfo.deadline;
    this.tasks.push(currentTask);
};

$("#create-user-btn").click(function () {
    var roleSelector = document.getElementById("role-selector");
    var role = roleSelector.options[roleSelector.selectedIndex];
    var userForm = document.forms.userform;

    if(role.value !== "Select role..."){
        $(".user-inform").addClass("d-none");
        $(".todo-data").removeClass("d-none");
        var user = new User();
        var userInfo = {
            name : userForm.elements.name.value,
            surname : userForm.elements.surname.value,
            specialization : userForm.elements.specialization.value,
            jobtitle : userForm.elements.job.value,
            role : role.value,
        };
        user.createUser(userInfo);
        $(".current-user")[0].innerHTML = "<H5>Current user: " + user.name + ". Role: " + user.role + "</H5>";
        users.push(user);
    } else alert("Please, select role");
    console.log(users);
});

$("#add-simple").click(function () {
    var simpleTaskForm = document.forms.simpleTaskForm;
    var taskInfo = {
        title : simpleTaskForm.stTitle.value,
        status : simpleTaskForm.stStatus.value,
    };
    users[users.length-1].addSimpleTask(taskInfo);
    console.log(users);
});

$("#add-home").click(function () {
    var homeTaskForm = document.forms.homeTaskForm;
    var taskInfo = {
        title : homeTaskForm.stTitle.value,
        status : homeTaskForm.stStatus.value,
        description : homeTaskForm.htDescription.value,
    };
    users[users.length-1].addHomeTask(taskInfo);
    console.log(users);
});

$("#add-project").click(function () {
    var projectTaskForm = document.forms.projectTaskForm;
    var taskInfo = {
        title : projectTaskForm.ptTitle.value,
        status : projectTaskForm.ptStatus.value,
        description : projectTaskForm.ptDescription.value,
        deadline : projectTaskForm.ptDeadline.value,
    };
    users[users.length-1].addProjectTask(taskInfo);
    console.log(users);
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