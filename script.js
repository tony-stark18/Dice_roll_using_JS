document.getElementsByClassName("btn")[0].addEventListener("click",roll);
function roll(){
    let x=Math.floor(Math.random() * 6) + 1;
    let y=Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll("img")[0].setAttribute("src",x+".png");
    document.querySelectorAll("img")[1].setAttribute("src",y+".png");
    if(x>y){
        document.getElementById('txt-1').classList.remove('small');
        document.getElementById('txt-1').classList.add('big');
        document.getElementById('one').classList.add('animate');
        setTimeout(removeone,750);
        setTimeout(removetxt1,550);
        
    }
    else if(x<y){
        document.getElementById('txt-2').classList.remove('small');
        document.getElementById('txt-2').classList.add('big');
        document.getElementById('one2').classList.add('animate');
        setTimeout(removeone2,750);
        setTimeout(removetxt2,550);
    }
    else{
        document.getElementById('txt-1').classList.remove('small');
        document.getElementById('txt-2').classList.remove('small');
        document.getElementById('txt-1').classList.add('big');
        document.getElementById('txt-2').classList.add('big');
        document.getElementById('one').classList.add('animate');
        document.getElementById('one2').classList.add('animate');
        setTimeout(removeone,750);
        setTimeout(removetxt1,550);
        setTimeout(removeone2,750);
        setTimeout(removetxt2,550);
    }
}
function removeone(){
    document.getElementById('one').classList.remove('animate')
}
function removeone2(){
    document.getElementById('one2').classList.remove('animate')
}
function removetxt1(){
    document.getElementById('txt-1').classList.remove('big');
    document.getElementById('txt-1').classList.add('small');
}
function removetxt2(){
    document.getElementById('txt-2').classList.remove('big');
    document.getElementById('txt-2').classList.add('small');
}