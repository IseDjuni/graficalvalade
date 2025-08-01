let menuList = document.getElementById('menuList');
menuList.style.maxHeight = "0px";

function toggleMenu(){
menuList.addEventListener('click', function() {
    if(menuList.style.maxHeight = "0px"){
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
})};