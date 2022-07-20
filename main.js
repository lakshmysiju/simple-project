let outScr=document.getElementById("out");

function dis(num){
   outScr.value += num; 
}
function equ() {
    try{
        outScr.value=eval(outScr.value);

    }catch(err)
    {
        alert("not possible")
    }
}
function cle(){

    outScr.value= '';
}
function del() {
outScr.value=outScr.value.slice(0,-1);
}
