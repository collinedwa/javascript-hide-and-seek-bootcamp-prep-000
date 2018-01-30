function getFirstSelector(selector){
return document.querySelector(selector)
}

function nestedTarget(){
 return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n){
var values = document.querySelector(".ranked-list")
for(i = 0; i < n; i++){
  parseInt(values[i])
}
}