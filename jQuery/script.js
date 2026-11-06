$(document).ready(function () {
    console.log("jQuery is ready!");

    $("#greeting").text("Hello, I'm Ramazan!"); 
    $(".intro").css("font-size", "17px");       
    $("h2").css("font-weight", "bold");         

    $("#lightTheme").click(function () {
        $("body").removeClass("dark");
    });

    $("#darkTheme").click(function () {
        $("body").addClass("dark");
    });

    $("#hideAbout").click(function () {
        $("#aboutInfo").hide();
    });

    $("#showAbout").click(function () {
        $("#aboutInfo").show();
    });

    $("#toggleAbout").click(function () {
        $("#aboutInfo").toggle();
    });

    $("#fadeOut").click(function () {
        $("#gallery img").fadeOut(500);
    });

    $("#fadeIn").click(function () {
        $("#gallery img").fadeIn(500);
    });

    $("#fadeToggle").click(function () {
        $("#gallery img").fadeToggle(500);
    });

    $(".topic").click(function () {
        var panel = $(this).attr("data-target");
        $(panel).slideToggle(300);
    });

    $("#openAll").click(function () {
        $(".answer").slideDown(300);
    });

    $("#closeAll").click(function () {
        $(".answer").slideUp(300);
    });

    $("#addSkill").click(function () {
        var skill = $("#newSkill").val().trim();
        if (skill === "") {
            $("#skillMessage").text("Please enter a skill.");
            return;
        }
        $("#skillList").append($("<li>").text(skill));
        $("#newSkill").val("");
        $("#skillMessage").text("");
    });

    $("#prependSkill").click(function () {
        var skill = $("#newSkill").val().trim();
        if (skill === "") {
            $("#skillMessage").text("Please enter a skill.");
            return;
        }
        $("#skillList").prepend($("<li>").text(skill));
        $("#newSkill").val("");
        $("#skillMessage").text("");
    });

    $("#removeSkill").click(function () {
        $("#skillList li:last").remove();
    });

    var github = true;

    $("#changeLink").click(function () {
        if (github) {
            $("#socialLink").attr("href", "https://www.linkedin.com/");
            $("#socialLink").text("LinkedIn");
        } else {
            $("#socialLink").attr("href", "https://github.com/");
            $("#socialLink").text("GitHub");
        }
        github = !github;
    });

    $("#name").on("input", function () {
        $("#showName").text($("#name").val());
    });

    $("#email").on("input", function () {
        $("#showEmail").text($("#email").val());
    });

    var isAnimated = false;

    $("#animateSkills").click(function () {
        $(".bar").each(function () {
            var width = "0%";
            if (!isAnimated) {
                width = $(this).attr("data-width");
            }
            $(this).stop().animate({ width: width }, 800);
        });
        isAnimated = !isAnimated;
    });
});
