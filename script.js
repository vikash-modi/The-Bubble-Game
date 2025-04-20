
var sco=0;
var newsco="";
var hit_num=0;
function bubble(){
    var bubble=""
    var rn=0;
    for(var i=1;i<=176;i++){
        rn=Math.floor(Math.random()*10)
        bubble+=`<div class="buble">${rn}</div>`
    }
    document.querySelector(".btm-wind").innerHTML=bubble;
}
function hit(){
    var htn="";
    hit_num=Math.floor(Math.random()*10);
    htn=`<div class="box">${hit_num}</div>`
    document.querySelector(".box1 h2").innerHTML=htn;
}
function runtimer(){
    var time=60;
    var set_time=setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#box4").textContent=time;
        }
        else{
            document.querySelector(".btm-wind").innerHTML=`<h1>Game Over</h1>`;
            clearInterval(set_time);
        }
    },1000)

}
function increasescore(){
    sco += 10;
    newsco =`<div class="box" id="scoreval">${sco}</div>`
    document.querySelector("#scoreval").innerHTML=newsco;
}
function bubble_selection(){
document.querySelector(".btm-wind").addEventListener("click",function(dets){
    var bubble_value=Number(dets.target.textContent);
    console.log(bubble_value);
    // increasescore();
    // console.log(hit_num);
    if(bubble_value === hit_num){
        increasescore();
        bubble();
        hit();
    }
});
}

bubble()
hit()
runtimer()
bubble_selection();

