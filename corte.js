var msg = document.querySelector("#date");
date = new Date();
hora = date.getHours();
min = date.getMinutes();
msg.innerHTML = `Data e hora atual ${hora}:${min}`;
if(min < 10){
    msg.innerHTML = `Data e hora atual ${hora}:0${min}`;
}
//****** PCP ******
var 
    pcp1 = document.querySelector("#pcp1"),
    pcp2 = document.querySelector("#pcp2"),
    pcp3 = document.querySelector("#pcp3"),

    peso1 = document.querySelector("#peso1"),
    peso2 = document.querySelector("#peso2"),
    peso3 = document.querySelector("#peso3"),

    somaPcp = document.querySelector("#somaPcp"),
   
// ****** Torrador ******
 
    tor = document.querySelector("#txtTor"),
    red = document.querySelector("#txtRe"),
    tempoEx = document.querySelector("#tempoEx");
    labelTor = document.querySelector("#lblTor");


// ****** Diluido ******
var
    labelDil = document.querySelector("#lblDil"),
    brixD = document.querySelector("#brixD"),
    relaExtra = document.querySelector("#relaE"),
    vazaoExtra = document.querySelector("#vazaoExtra")
    dadosD = document.querySelector("#dadosD");

// ****** Concentrado ******
var brixC = document.querySelector("#brixC"),
    dadosC = document.querySelector("#txtCon"),
    brixEnTaste = document.querySelector("#brixEntradaTaste")
    brixTaste = document.querySelector("#brixTaste")
    labelCon = document.querySelector("#lblCon");

var balanca = document.querySelector("#balanca");
var fliga = document.getElementsByName('liga');


//******* Balanca Mistura ********
var
    aroma = document.querySelector("#aroma"),
    split = document.querySelector("#split"),
    conB = document.querySelector("#conB"),
    repro = document.querySelector("#repro"),
    misturar = document.querySelector("#misturar"),
    tq11N = document.querySelector("#tq11N"),
    tq13N = document.querySelector("#tq13N");

//******* Torres ********
var 
    vazaoTorre = document.querySelector("#vazaoTorre"),
    emb1 = document.querySelector("#emb1"), 
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
    pesoEmb23 = document.querySelector("#pesoEmb2-3"),
    labelTor1 = document.querySelector("#lblTor1"),
    labelTor2 = document.querySelector("#lblTor2");



var resultado = document.querySelector("#resultado");

function bmistura(x,y){
    var 
    con = Number(conB.value),
    aro = Number(aroma.value),
    spl = Number(split.value),
    rep = Number(repro.value),
    bConc = Number(brixC.value)/100;
    bal = (x + y)/con;
    return (bal*( aro + spl + con + rep)* bConc)*0.97;
}

function multiplicar(x,y){
    return x * (y/100);
}

function calcular(){
    //**** calcula o PCP ****
    var 
    torrado = multiplicar(Number(tor.value), Number(red.value)),
    diluido = multiplicar(Number(brixD.value), Number(dadosD.value)),
    concentrado = multiplicar(Number(dadosC.value), Number(brixC.value)),
    
    torre1 = Number(emb1.value)*Number(pesoEmb1.value) + 
        Number(emb2.value)*Number(pesoEmb2.value) + 
        Number(emb3.value)*Number(pesoEmb3.value),

    torre2 = Number(emb21.value)*Number(pesoEmb21.value) + 
        Number(emb22.value)*Number(pesoEmb22.value) + 
        Number(emb23.value)*Number(pesoEmb23.value)

    prod1 = Number(pcp1.value)*Number(peso1.value);
    prod2 = Number(pcp2.value)*Number(peso2.value);
    prod3 = Number(pcp3.value)*Number(peso3.value);
    
    let vazaoExtracao = Number(vazaoExtra.value), 
        vazTaste = 13000, 
        saldoTorra = Number(tor.value),
        relacaoExtra = Number(relaExtra.value);
    var prod1, prod2, prod3, pcp, torr;

    totalPo = torrado + diluido + concentrado + torre1 + torre2;
    RendimentoTor = Number(red.value)/100;
    torr = Number(tor.value)/vazaoExtracao;
    pcp = prod1 + prod2 + prod3;
    faltaTor = (pcp - totalPo) / RendimentoTor;
    

    somaPcp.innerHTML = `Total dessa Liga ${(pcp).toFixed(2)}`;
    labelTor.innerHTML = `${torrado.toFixed(2)}kg`;
    labelDil.innerHTML = `${diluido.toFixed(2)}kg`;
    labelCon.innerHTML = `${concentrado.toFixed(2)}kg`;
    labelTor1.innerHTML = `${torre1.toFixed(2)}kg`;
    labelTor2.innerHTML = `${torre2.toFixed(2)}kg`;

    //**** checa outras Ligas ****
    if(fliga[0].checked){
        saldoDiluido = (saldoTorra + faltaTor) * relacaoExtra + Number(dadosD.value);

        saidaTaste = (Number(brixTaste.value)-Number(brixEnTaste.value)) / Number(brixTaste.value);
        saldoConcentrado = Number(dadosC.value)+(saldoDiluido - (saldoDiluido * saidaTaste));
        tempoEx.innerHTML = `Falta à torrar ${faltaTor.toFixed(2)} (${(faltaTor / 450).toFixed(2)} cargas) (${((faltaTor / 450)/5).toFixed(2)} horas) <br> 
        Extração: ${((saldoTorra + faltaTor) / vazaoExtracao).toFixed(2)} horas <br> 
        Concentrador: ${(saldoDiluido / vazTaste ).toFixed(2)} horas <br>
        Torre de Secagem: ${(saldoConcentrado / Number(vazaoTorre.value)).toFixed(2)} horas `; 
        resultado.innerHTML = `${totalPo.toFixed(2)}kg `;
    }else{        
        Number(brixTaste.value = 71);
        saidaTaste = (Number(brixTaste.value)-Number(brixEnTaste.value)) / Number(brixTaste.value)
        saldoComBaMis = bmistura(Number(tq11N.value), Number(tq13N.value)); 
        a = pcp - (totalPo + saldoComBaMis);
        saldoDiluido = ((a / RendimentoTor) * relacaoExtra) + Number(dadosD.value);
        saldoConcentrado = Number(dadosC.value)+(saldoDiluido - (saldoDiluido * saidaTaste));
        tempoEx.innerHTML = `Falta à torrar ${(a / RendimentoTor).toFixed(2)} (${(a / 450).toFixed(2)} cargas) (${((a / 450)/5).toFixed(2)} horas) <br> 
        Extração: ${((( a / RendimentoTor) + saldoTorra)/ vazaoExtracao).toFixed(2)} horas <br> 
        Concentrador: ${( saldoDiluido/vazTaste ).toFixed(2)} horas <br>
        Torre de Secagem: ${(saldoConcentrado / Number(vazaoTorre.value)).toFixed(2)} `;   

        resultado.innerHTML = `${(totalPo + saldoComBaMis).toFixed(2)}kg`;

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
