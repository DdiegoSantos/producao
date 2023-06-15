
//****** PCP ******
var pcp1 = document.querySelector("#pcp1");
var pcp2 = document.querySelector("#pcp2");
var pcp3 = document.querySelector("#pcp3");

var peso1 = document.querySelector("#peso1");
var peso2 = document.querySelector("#peso2");
var peso3 = document.querySelector("#peso3");

var somaPcp = document.querySelector("#somaPcp")
   
// ****** Torrador ******
var tor = document.querySelector("#txtTor");
var red = document.querySelector("#txtRe");
var tempoEx = document.querySelector("#tempoEx");


// ****** Diluido ******
var brixD = document.querySelector("#brixD");
var dadosD = document.querySelector("#dadosD");

// ****** Concentrado ******
var brixC = document.querySelector("#brixC");
var dadosC = document.querySelector("#txtCon");

var balanca = document.querySelector("#balanca");
var fliga = document.getElementsByName('liga');

//******* Balanca Mistura ********

var aroma = document.querySelector("#aroma");
var split = document.querySelector("#split");
var conB = document.querySelector("#conB");
var repro = document.querySelector("#repro");
var misturar = document.querySelector("#misturar")
var tq11N = document.querySelector("#tq11N");
var tq13N = document.querySelector("#tq13N");

var resultado = document.querySelector("#resultado");

function bmistura(x,y){
    var con, aro, spl, rep, bConc;
    con = Number(conB.value);
    aro = Number(aroma.value);
    spl = Number(split.value);
    rep = Number(repro.value);
    bConc = Number(brixC.value)/100;
    bal = (x + y)/con;
    return bal*( aro + spl + con + rep)* bConc;
}

function multiplicar(x,y){
    return x * (y/100);
}

function calcular(){
    //**** calcula o PCP ****
    res1 = multiplicar(Number(tor.value), Number(red.value));
    res2 = multiplicar(Number(brixD.value), Number(dadosD.value));
    res3 = multiplicar(Number(dadosC.value), Number(brixC.value));

    
    let vazao = 2200;
    let prod1, prod2, prod3;
    prod1 = Number(pcp1.value)*Number(peso1.value);
    prod2 = Number(pcp2.value)*Number(peso2.value);
    prod3 = Number(pcp3.value)*Number(peso3.value);

    somaPcp.innerHTML = `Total dessa Liga ${(prod1 + prod2 + prod3).toFixed(2)}`;

    //**** Calcula o tempo de Extrair ****
    
    
    var fTor = (prod1 + prod2 + prod3) - (res1 + res2 + res3);
    
    var tempEx = (((prod1+prod2+prod3)-(res1+res2+res3))/(Number(red.value)/100)+Number(tor.value))/vazao;
    
    tempoEx.innerHTML = `Extração: ${tempEx.toFixed(2)} horas <br> Concentrador: ${fTor.toFixed(2)} horas`;

    //**** checa outras Ligas ****
    if(fliga[0].checked){
        var pcp,totPo,Rtorr,torr;
        pcp = prod1 + prod2 + prod3;
        totPo = res1+res2+res3;
        Rtorr = Number(red.value)/100;
        torr = Number(tor.value)/vazao;
        var tempEx = (pcp - totPo) / Rtorr + torr; 
               
        resultado.innerHTML = `${totPo}kg de pó`;
        resultado.tofixed(2);
    }else{
        var pcp,totPo,Rtorr,torr;
        pcp = prod1 + prod2 + prod3;
        totPo = res1+res2+res3;
        torr = Number(red.value)/100;
        torr = Number(tor.value)/vazao;
        var tempEx = (pcp - totPo) / Rtorr + torr; 

        res4 = bmistura(Number(tq11N.value), Number(tq13N.value))
        
        resultado.innerHTML = `${(totPo + res4).toFixed(2)} kg de pó` ;
    }
}

function aparecer(){
    if(fliga[1].checked)//se o radio na posição zero "ex.MASCULINO" estiver selecionado
{
    balanca.style.visibility = "visible";
    misturar.style.visibility = "visible";
    }
}
function desaparecer(){
    if(fliga[0].checked)//se o radio na posição zero "ex.MASCULINO" estiver selecionado
{
    balanca.style.visibility = "hidden";
    misturar.style.visibility = "hidden";
    }   
}