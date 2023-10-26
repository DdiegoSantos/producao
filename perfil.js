function alerta() {
	return alert('dados insuficientes! favor insira todos os valores');
}

function calcular(a, b) {
	return a * b;
}
var produto1_torre1 = document.querySelector("#prod1_tor1"),
	produto2_torre1 = document.querySelector("#prod2_tor1"),
	produto1_torre2 = document.querySelector("#prod1_tor2"),
	produto2_torre2 = document.querySelector("#prod2_tor2");

var peso_prod1_torre1 = document.querySelector("#peso_prod1_tor1"),
	peso_prod1_torre1 = document.querySelector("#peso_prod2_tor1"),
	peso_prod1_torre1 = document.querySelector("#peso_prod1_tor2"),
	peso_prod1_torre1 = document.querySelector("#peso_prod2_tor2");

var res_prod1_tor1 = document.querySelector("#res_prod1_tor1"),
	res_prod2_tor1 = document.querySelector("#res_prod2_tor1"),
	res_prod1_tor2 = document.querySelector("#res_prod1_tor2"),
	res_prod2_tor2 = document.querySelector("#res_prod2_tor2");
function calcularPcp() {

	

var totalPcp = document.querySelector("#totalPcp");

	quantidade1_pcp = document.querySelector("#Qdt1_Pcp");
	peso_pcp1 = document.querySelector("#peso_pcp1");
	quantidade2_pcp = document.querySelector("#Qdt2_Pcp");
	peso_pcp2 = document.querySelector("#peso_pcp2");
	quantidade3_pcp = document.querySelector("#Qdt3_Pcp");
	peso_pcp3 = document.querySelector("#peso_pcp3");
	quantidade4_pcp = document.querySelector("#Qdt4_Pcp");
	peso_pcp4 = document.querySelector("#peso_pcp4");

		

	

	resultado1 = document.querySelector("#result");

	resultador2 = document.querySelector("#result2");

	resultado3 = document.querySelector("#result3");

	resultado4 = document.querySelector("#result4");



	if (quantidade1_pcp.value == "" || peso_pcp1.value == "") {
		alerta();
	} else {

		document.querySelector("#result").value = Number(quantidade1_pcp.value) * Number(peso_pcp1.value);
		document.querySelector("#result2").value = Number(quantidade2_pcp.value) * Number(peso_pcp2.value);
		document.querySelector("#result3").value = Number(quantidade3_pcp.value) * Number(peso_pcp3.value);
		document.querySelector("#result4").value = Number(quantidade4_pcp.value) * Number(peso_pcp4.value);



		document.querySelector("#totalPcp").value = Number(document.querySelector("#result").value) + Number(document.querySelector("#result2").value) + Number(document.querySelector("#result3").value) + Number(document.querySelector("#result4").value);
	}


}

function calcularCafe() {
	if (document.querySelector("#valor_torrado").value == "" || document.querySelector("#valor_diluido").value == "" || document.querySelector("#valor_concentrado").value == "") {

		alerta();

	} else {
		document.querySelector("#result_torrado").value = Number(document.querySelector("#valor_torrado").value) * (Number(document.querySelector("#rendimento_torrado").value) / 100);

		document.querySelector("#result_diluido").value = Number(document.querySelector("#valor_diluido").value) * (Number(document.querySelector("#brix_diluido").value) / 100);

		document.querySelector("#result_concentrado").value = Number(document.querySelector("#valor_concentrado").value) * (Number(document.querySelector("#brix_concentrado").value) / 100);

		document.querySelector("#res_prod1_tor1").value = calcular(Number(document.querySelector("#prod1_tor1").value), Number(document.querySelector("#peso_prod1_tor1").value));

		document.querySelector("#res_prod2_tor1").value = calcular(Number(document.querySelector("#prod2_tor1").value), Number(document.querySelector("#peso_prod2_tor1").value));

		document.querySelector("#res_prod1_tor2").value = calcular(Number(document.querySelector("#prod1_tor2").value), Number(document.querySelector("#peso_prod1_tor2").value));

		document.querySelector("#res_prod2_tor2").value = calcular(Number(document.querySelector("#prod2_tor2").value), Number(document.querySelector("#peso_prod2_tor2").value));

		document.querySelector("#totalLinha").value = Number(document.querySelector("#result_torrado").value) + Number(document.querySelector("#result_diluido").value) + Number(document.querySelector("#result_concentrado").value) + Number(document.querySelector("#res_prod1_tor1").value)+ Number(document.querySelector("#res_prod2_tor1").value)+ Number(document.querySelector("#res_prod1_tor2").value)+ Number(document.querySelector("#res_prod2_tor2").value);

alert(`Falta ${document.querySelector("#totalPcp").value - document.querySelector("#totalLinha").value} de pó;`);

		
		//res_prod2_tor1.value = ;
		//res_prod1_tor2.value = ;
		//res_prod2_tor2.value = 



	}
}
