
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

//******* Torres ********
var emb1 = document.querySelector("#emb1"), 
    emb2 = document.querySelector("#emb2"),
    emb3 = document.querySelector("#emb3"),
    pesoEmb1 = document.querySelector("#pesoEmb1"),
    pesoEmb2 = document.querySelector("#pesoEmb2"),
    pesoEmb3 = document.querySelector("#pesoEmb3");
var emb21 = document.querySelector("#emb2-1"),
    emb22 = document.querySelector("#emb2-2"), 
    emb23 = document.querySelector("#emb2-3"), 
    pesoEmb21 = document.querySelector("#pesoEmb2-1"), 
    pesoEmb22 = document.querySelector("#pesoEmb2-2"), 
    pesoEmb23 = document.querySelector("#pesoEmb2-3");



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
    var 
    res1 = multiplicar(Number(tor.value), Number(red.value)),
    res2 = multiplicar(Number(brixD.value), Number(dadosD.value)),
    res3 = multiplicar(Number(dadosC.value), Number(brixC.value)),
    
    torre1 = Number(emb1.value)*Number(pesoEmb1.value) + Number(emb2.value)*Number(pesoEmb2.value) + Number(emb3.value)*Number(pesoEmb3.value),
    torre2 = Number(emb21.value)*Number(pesoEmb21.value) + Number(emb22.value)*Number(pesoEmb22.value) + Number(emb23.value)*Number(pesoEmb23.value)

    prod1 = Number(pcp1.value)*Number(peso1.value);
    prod2 = Number(pcp2.value)*Number(peso2.value);
    prod3 = Number(pcp3.value)*Number(peso3.value);
    
    let vazao = 2200, vazTaste = 13000, relExt = 6.75;
    var prod1, prod2, prod3, tempEx, pcp, torr, Rtorr, fTor;

    totPo = res1 + res2 + res3 + torre1 + torre2;
    Rtorr = Number(red.value)/100;
    torr = Number(tor.value)/vazao;
    pcp = prod1 + prod2 + prod3;
    taste = (fTor + Number(tor.value))/relExt;
    

    somaPcp.innerHTML = `Total dessa Liga ${(pcp).toFixed(2)}`;

    
   
    //**** checa outras Ligas ****
    if(fliga[0].checked){
        fTor = (pcp - totPo) / Rtorr;
        tempEx = fTor + torr ;
        tempoEx.innerHTML = `Falta à torrar ${fTor.toFixed(2)} (${(fTor/ 450).toFixed(2)} cargas); <br> Extração: ${tempEx.toFixed(2)} horas <br> Concentrador: ${(fTor/vazTaste).toFixed(2)} horas`;

        resultado.innerHTML = `${totPo}kg de pó`;
        resultado.tofixed(2);

        
    
    }else{        
        var tempEx = (pcp - totPo) / Rtorr + torr; 
        res4 = bmistura(Number(tq11N.value), Number(tq13N.value));        
        resultado.innerHTML = `${(totPo + res4).toFixed(2)} kg de pó` ;

        fTor = (pcp - totPo) / Rtorr;
        tempEx = (((pcp-totPo)/Rtorr) + torr + res4)/vazao;  
        tempoEx.innerHTML = `Falta à torrar ${fTor.toFixed(2)} (${(fTor/ 450).toFixed(2)} cargas); <br> Extração: ${tempEx.toFixed(2)} horas <br> Concentrador: ${(fTor/vazTaste).toFixed(2)} horas`; 
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
