var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var item = document.querySelector("#item");
var ul = document.querySelector("ul");

add.addEventListener("click",function(){
    if(item.value.trim() === ""){}
    else{
        var li = document.createElement("li");
        li.textContent = item.value;
        ul.appendChild(li);
        item.value = ""
    }
});

remove.addEventListener("click",function(){
    if(ul.lastChild){
        ul.removeChild(ul.lastChild);
    }
})