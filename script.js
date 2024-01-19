var icons=document.getElementById("icon");
icons.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme"))
    {
        icons.classList.remove("fa-moon-o");
        icons.classList.add("fa-sun-o");
    }
    else
    {
        icons.classList.remove("fa-sun-o");
        icons.classList.add("fa-moon-o");
    }
}