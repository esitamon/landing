// getting required variables

const navigationItems=document.getElementsByClassName('navigation');
const nav1=document.getElementById("nav1");
const nav2=document.getElementById("nav2");
const nav3=document.getElementById("nav3");

/* Function Definitions */

// funtion to remove focus color after focus moves away from a nav element

function SetUniformBackgroundColor(nav,nav$, color){
    nav.style.backgroundColor=color;
    nav$.style.backgroundColor=color;  
}

// Set navigation element background color to a background focus color 

function setNavBackgroundColorOnClick(nav,color){
    nav.style.backgroundColor=color;

}
function jumpToAnchor(anchor){
    self.location.href=`#${anchor}`;
}

// adding event listner

window.addEventListener('DOMContentLoaded',(e)=>{
    nav1.style.backgroundColor="#34495e";
});

nav1.addEventListener("click", (e)=>{
    SetUniformBackgroundColor(nav2,nav3,"#2c3e50");
    setNavBackgroundColorOnClick(nav1,"#34495e");
    jumpToAnchor('education');
    e.preventDefault();

});
nav2.addEventListener("click", (e)=>{
    SetUniformBackgroundColor(nav1,nav3,"#2c3e50");
    setNavBackgroundColorOnClick(nav2,"#34495e");
    jumpToAnchor('workexp');
    e.preventDefault();
});
nav3.addEventListener("click", (e)=>{
    if(document.hasFocus()){
    SetUniformBackgroundColor(nav1,nav2,"#2c3e50");
    setNavBackgroundColorOnClick(nav3,"#34495e");
    jumpToAnchor('projects');
    e.preventDefault();
    }
});


