var nbmax=0;
var I=100;
var N = Math.floor(Math.random() * (100+ 1));

function rreset(){

    nbmax=0;
    I=100;
    N = Math.floor(Math.random() * (100+ 1));

}

function verifier(){
    let L = document.getElementById("Liste");
    A=document.getElementById("ans");
    A.setAttribute("style", "visibility:hidden");
    if(L.value==0){

        alert("Veuillez renseigner une valeur");
        
    }else{
        m=document.getElementById("ans");
        m.setAttribute("style", "visibility:visible");
        B=document.getElementById("Inp");
        if(L.value==1){
           nbmax=10;

        }
        if(L.value==2){
            nbmax=5;
        }
        if(L.value==3){
            nbmax=3;
        }
        B.setAttribute("placeholder", `Il reste ${nbmax} Essais`);

    }
 
}

function isWinner(){
    A=document.getElementById("Inp").value;
    if(A==N){
        alert("Vous avez gagné!");
        rreset();
        setHidden();
        return;
    }else{
        if(A<N){
            alert("C'est plus");
            nbmax--;
            B.setAttribute("placeholder", `Il reste ${nbmax} Essais`);
        }else{
            alert("C'est moins");
            nbmax--;
            B.setAttribute("placeholder", `Il reste ${nbmax} Essais`);
        }
        if(nbmax==0){
            alert("Vous avez perdu!,"+` La valeur est ${N}`);
            bot=document.getElementById("bot");
            bot.click();
        }
        A=document.getElementById("Inp").value="";
    }
}


function setHidden(){
    let L = document.getElementById("ans");
    L.setAttribute("style", "visibility:hidden");
}