//discount
var discount = document.querySelector(".discount")
var closex = document.getElementById("close")

closex .addEventListener("click",function(){
    discount.style.display="none"
    
})


//sidenav
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")


menuicon.addEventListener("click", function(){
    sidenav.style.right=0

})
    

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})