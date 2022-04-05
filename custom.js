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
    $("#Open-Close").click(function () {
    writings.slideUp(800).slideDown(400);
    });
    $("#Add-Element").click(function () {
    writings.append("Object");
    writings.prepend("Subject");
    });
    $("#Delete-Element").click(function () {
    $("li:first-child").remove();
    });
    $("#Add-Class").click(function () {
    writings.addClass("add");
    });
    $("#Remove-Class").click(function () {
    writings.removeClass("add");
    });
    $("#Change-Class").click(function () {
    writings.toggleClass("add");
    });

    var box1 = $(".box1");
    var box2 = $(".box2");
    var pn1 = box1.position();
    var lft1 = pn1.left;
    var pn2 = box2.position();
    var lft2 = pn2.left;
    $("#Start").click(function () {
    box1.css({ position: "relative" });
    while (lft1 <= 600) {
        box1.animate({
            left: "+=30",
        });
        lft1 += 30;
    }
    box2.css({ position: "relative" });
    while (lft2 <= 800) {
        box2.animate({
            left: "+=40",
        });
        lft2 += 40;
    }
    });

});