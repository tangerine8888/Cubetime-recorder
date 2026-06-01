alert("JS 有載入");
let time=0;
const list=document.querySelector(".list");
const form=document.querySelector("form");
let times=[];
const moves=["R","R'","U","U'","F","F'","L","L'","B","B'","F","F'","R2", "L2", "U2", "D2", "F2", "B2"]
function getScramble(){
  let scramble="";
  let lastFace="";
  for(let i = 0; i < 20; i++){
    let move;
    while(true){
      move=moves[Math.floor(Math.random()* moves.length)]
      let currentFace = move[0];
      if(currentFace !== lastFace){
        lastFace = currentFace;
        break;
      }
    }
    scramble += move + " ";
  }
  return scramble;

function entertime(){
  const input=document.getElementById("time").value
  const li=document.createElement("li");
  if(input=="")return;
  const num=parseFloat(input);
  times.push(num);
  updateChart();
  li.textContent=input;
  list.appendChild(li);
  let sum=0;
  let best=times[0];
  for(let i=0;i<times.length;i++){
    if (isNaN(times[i])) continue;
    sum+=times[i];
    if(times[i]<best)best=times[i];
    else best=best;
  }
  let avg=sum/times.length;
  document.getElementById("time").value=""; 
  document.getElementById("time").focus();
const scramble = getScramble();
  document.getElementById("scramble").textContent = scramble;              
  document.getElementById("avg").textContent="avg:"+avg.toFixed(2);
  document.getElementById("best").textContent="best:"+best.toFixed(2);
}
function showScramble(){
  document.getElementById("scramble").textContent = getScramble();
}
let chart;

function updateChart(){
  console.log("chart");
  const canvas = document.getElementById("myChart").getContext("2d");
  if (!canvas) return;
  const ctx = document.getElementById("myChart");

  if(chart){
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: times.map((_, i) => i + 1),
      datasets: [{
        label: "solve time",
        data: times,
        borderColor: "blue",
        fill: false
      }]
    }
  });
}
form.addEventListener("submit", function(e){
  e.preventDefault();
  entertime();
});
