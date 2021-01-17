const colors=["green","yellow","#e67e22","#7f8c8d","#27ae60","blue","red","#c0392b","#e74c3c","rgb(211, 84, 0)"];

const button =document.querySelector("#btn");
const color=document.querySelector(".color");
button.addEventListener("click",function(e){
    const randomnum=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[randomnum];
    color.textContent=colors[randomnum];
});