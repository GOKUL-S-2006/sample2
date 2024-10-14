

var topnavbar=document.querySelector(".top-nav-bar")
var sidenavbar=document.querySelector(".side-nav-bar")
var menubutton=document.querySelector(".menu")
menubutton.addEventListener("click",function(event){
    sidenavbar.style.display="block"
    topnavbar.style.display="none"
   
})
var homebutton=document.querySelector(".Home")
homebutton.addEventListener("click",function(event){
    sidenavbar.style.display="none"
    topnavbar.style.display="block"
     mainblock.style.display="block"
    projectblock.style.display="none"

})
var projectbutton=document.querySelector(".project")
var mainblock=document.querySelector(".main-block")
var projectblock=document.querySelector(".project-block")
projectbutton.addEventListener("click",function(event){
    sidenavbar.style.display="none"
    topnavbar.style.display="block" 
    mainblock.style.display="none"
    projectblock.style.display="block"

})
var linkbutton=document.querySelector(".link")
var linkblock=document.querySelector(".link-block")
linkbutton.addEventListener("click",function(event){
    sidenavbar.style.display="none"
    topnavbar.style.display="block" 
    mainblock.style.display="none"
    projectblock.style.display="none"
    linkblock.style.display="block"
})