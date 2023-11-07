import $ from '../lib/jquery-3.5.1.min';

$(document).ready(function () {
    $('#submit-btn').click(function () {
        if ($('input:password').val() == "1234") {

            window.location.href = 'https://djneces.github.io/MacOs_Catalina_Clone_JQ_CSS_HTML/'
        } else {

            $("#error").show().text("Wrong Password!");
        }
    });
    $("form").submit(function (event) {
        event.preventDefault();
    });
    $('#password').on("click", function () {
        $("#error").hide();
    });
});