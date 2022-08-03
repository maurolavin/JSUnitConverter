var valor = document.getElementById("valor");
valor.addEventListener('keyup', conversion);
conversionResult = document.getElementById("result");

unit1 = document.getElementById("unit1");
unit1.addEventListener('change', conversion);

unit2 = document.getElementById("unit2");
unit2.addEventListener('change', conversion);

var result;

function conversion(){
    if(valor.value==''){
        return;
    }

    number = valor.value;
    number = parseFloat(number);

    if(unit1.value=="kilometer" && unit2.value=="kilometer"){
        result = number * 1;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }

    if(unit1.value=="kilometer" && unit2.value=="meter"){
        result = number * 1000;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }

    if(unit1.value=="kilometer" && unit2.value=="centimeter"){
        result = number * 10000;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }

    if(unit1.value=="centimeter" && unit2.value=="centimeter"){
        result = number * 1;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }

    if(unit1.value=="centimeter" && unit2.value=="meter"){
        result = number / 100;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }

    if(unit1.value=="centimeter" && unit2.value=="kilometer"){
        result = number / 1000;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }

    if(unit1.value=="meter" && unit2.value=="meter"){
        result = number * 1;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }
    
    if(unit1.value=="meter" && unit2.value=="centimeter"){
        result = number * 100;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }

    if(unit1.value=="meter" && unit2.value=="kilometer"){
        result = number / 1000;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }

    if(unit1.value=="miles" && unit2.value=="miles"){
        result = number * 1;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }

    if(unit1.value=="miles" && unit2.value=="kilometer"){
        result = number * 1.60934;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }

    if(unit1.value=="miles" && unit2.value=="centimeter"){
        result = number / 0.0000062137;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }

    if(unit1.value=="miles" && unit2.value=="meter"){
        result = number / 0.00062137;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }

    if(unit1.value=="meter" && unit2.value=="miles"){
        result = number * 0.00062137;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }
    
    if(unit1.value=="centimeter" && unit2.value=="miles"){
        result = number * 0.0000062137;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }
    
    if(unit1.value=="kilometer" && unit2.value=="miles"){
        result = number / 0.62137;
        conversionResult.innerHTML = number + ' ' + unit1.value + " equivalen a " + result + " " + unit2.value;
    }
}



