$(document).ready(function () {

    var writings = $(".writings");
    $("#Show").click(function () {
    writings.show(400);
    });
    $("#Hide").click(function () {
    writings.hide(800);
    });
    $("#Show-Hide").click(function () {
    writings.toggle(600);
    });

});