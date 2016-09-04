$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault();
        if ($("#programType").val() != "Program Type") {
          programType = "." + $("#programType").val();
        } else {
          programType = "";
        }

        if ($("#educationLevel").val() != "Education Level") {
          educationLevel = "." + $("#educationLevel").val();
        } else {
          educationLevel = "";
        }
        $(".greyScale").show();
        $(".color").hide();
        $(programType + educationLevel  + ".greyScale").hide();
        $(programType +  educationLevel + ".color").fadeIn();
    });
});
