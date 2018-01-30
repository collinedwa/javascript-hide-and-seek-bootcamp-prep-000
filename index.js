function getFirstSelector(selector){
return document.querySelector(selector)
}

function nestedTarget(){
 return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n){
var values = parseInt(document.querySelector(".ranked-list"))
return values + n
}