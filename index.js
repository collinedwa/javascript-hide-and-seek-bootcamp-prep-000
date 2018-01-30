function getFirstSelector(selector){
return document.querySelector(selector)
}

function nestedTarget(){
 return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n){
var values = document.getElementById("app").querySelector("ul.ranked-list li")
for(let i = 0; i < values.length; i++){
  values[i].innerHTML = (parseInt(values[i].innerHTML) + n)
}
return values
}

function deepestChild(){
  
}