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
