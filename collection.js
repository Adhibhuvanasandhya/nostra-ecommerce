import {products} from "./products.js";


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



var container=document.querySelector(".products")
products.forEach((product)=>{
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML=` <img class="w-full h-auto" style="width: 25vw; height: 30vw;" src="${product.src}">
    <h1 class="text-xl md:text-2xl font-bold" style="font-size:24px; font-weight:500;">${product.name}</h1>
    <p class="text-sm md:text-lg font-semibold" style="font-weight:500;">${product.price}
    <tags style="visibility:hidden;">${product.tags}</tags>`

    container.append(createItem)
})


var filterList =[]
var tags = document.getElementsByName("tags")

tags.forEach((tag)=>{
    tag.addEventListener("change",(e)=>{

        if(e.target.checked)
        {
        filterList.push(e.target.value)
        console.log(filterList)
        update()
        
        }
        else{
            filterList = filterList.filter(item => item !== e.target.value);
            update()

        }

        
       
    })
})

function update()
{

    

    

    
    var productList = document.querySelectorAll(".product")
    for(var i=0;i<productList.length;i++){
        var check = false
        var product=productList[i]
        console.log(product)
        var temp=product.querySelector("tags").innerHTML
       
        console.log("elemen"+temp)
        

        const tempFilterArray = temp.split(',');
        
        console.log("tempfilterarray"+tempFilterArray)
        console.log("filterlist"+filterList)
       
            filterList.forEach((j)=>{
                tempFilterArray.forEach((i)=>{
                if(j==i)
                {
                    check=true
                }
            })
        })


        if(!check && filterList.length>0)
        {
            product.style.display="none"
        }
        else{
            product.style.display="block"
        }

        
    };


}

