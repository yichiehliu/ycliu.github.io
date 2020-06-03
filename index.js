$('.front-page').scrollingParallax();

var submit = document.querySelector('.btn');

function emailtome() {

    var user_value = document.getElementById("name").value;
    var message_value = document.getElementById("message").value;
    var user_email_value = document.getElementById("email").value;
    console.log(user_value, user_email_value, message_value);



    var template_params = {
        "user": String(user_value),
        "user_email": String(user_email_value),
        "message": String(message_value)
    }

    var service_id = "default_service";
    var template_id = "ej_contact";
    emailjs.send(service_id, template_id, template_params, "user_IAM8HfFeS86yKxQnF3ySF")
        .then(function (response) {
            alert("Message successfully sent!");
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
    alert("Message successfully sent!");

}
submit.addEventListener("click", emailtome);


// menu
$(".menu").click(function () {
    // $(".menu").toggleClass(".unfold_menu");
    $(this).toggleClass("on");
    $(".menu-close").toggleClass("on");
    $(".unfold_menu").slideToggle(200);
});

$(".menu-close").click(function () {
    // $(".menu").toggleClass(".unfold_menu");
    $(this).toggleClass("on");
    $(".unfold_menu").slideToggle(200);
});


$(".unfold_menu li").click(function () {
    $(".menu-close").toggleClass("on");
    $(".unfold_menu").slideToggle(200);
});
