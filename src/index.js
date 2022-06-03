// const { library } = require("webpack")

var date= new Date()
console.log(date.getFullYear())
if(JSON.parse(localStorage.getItem('note'))!=null){
 notearr=JSON.parse(localStorage.getItem('note'))
 }
 else{
     notearr=[]
 }
function add(){
    value=document.getElementById("note").value
    notearr.push(value)
localStorage.setItem("note",JSON.stringify(notearr))
    display(notearr)
}
function display(x){
    
    item.forEach((x)=>x.remove())
    x.forEach(element => {
        li= document.createElement("li")
        li.className='item'
        li.innerHTML=`${element}`
        document.getElementById("list").append(li)

    });
}