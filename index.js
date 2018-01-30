function getFirstSelector(selector){
return document.querySelector(selector)
}

function nestedTarget(){
 return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n){
var values = document.querySelectorAll('.ranked-list')
for(let i = 0; i < values.length; i++){
  values[i].innerHTML = (parseInt(values[i].innerHTML) + n)
}
return values
}

function deepestChild(){
var node = document.getElementById("grand-node").querySelectorAll("div")
var next
for(let i = 0; i < node.length - 1; i++){
  
}
}