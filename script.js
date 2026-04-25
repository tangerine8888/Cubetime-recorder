let time=0;
const list=document.querySelector(".list");
let times=[];
function entertime(){
  const input=document.getElementById("time").value
  const li=document.createElement("li");
  const num=parseFloat(input);
  times.push(num);
  if(input==" ")return;
  li.textContent=input;
  list.appendChild(li);
  let sum=0;
  let best=times[0];
  for(i=0;i<times.length;i++){
    sum+=times[i];
    if(times[i]<best)best=times[i];
    else best=best;
  }
  let avg=sum/times.length;
  document.getElementById("time").value=" "; 
  document.getElementById("time").focus();
  document.getElementById("avg").textContent="avg:"+avg.toFixed(2);
  document.getElementById("best").textContent="best:"+best.toFixed(2);
}
form.addEventListener("submit", function(e){
  e.preventDefault();
  entertime();
});
