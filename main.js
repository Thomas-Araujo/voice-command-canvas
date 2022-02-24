y=0
x=0
drawCircle="";
drawRect="";
var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();
function begin(){
    document.getElementById("status").innerHTML="System is listening, please speak.";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been recognised as: "+content;
    if(content=="Circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing circle";
        drawCircle="set";
    }
    if(content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing rectangle";
        drawRect="set";
    }
}
function setup(){
    canvas=createCanvas(900,600);
}
function draw(){
    if(drawCircle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle is drawn";
        drawCircle="";
    }
    if(drawRect=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="Rectangle is drawn";
        drawRect="";
    }
}