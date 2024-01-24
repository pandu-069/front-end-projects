var i = 0;
var txt1 =
"జై శ్రీ రామ > << జానకి రామ  > << కోదండ రామ   > కారుణ్య రామ >  <<లోకాభి రామ> < సీత రామ ";
var speed = 90;
typeWriter();
function typeWriter() {
if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
    document.getElementById("text1").innerHTML += " ";
    else if (txt1.charAt(i) == ">")
    document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
    $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
}