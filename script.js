const campo1=document.querySelector("#campo1");
const campo2=document.querySelector("#campo2");
const seletor=document.querySelector("#operacao");
const botao=document.querySelector("#igual");
let resultado=document.querySelector("#resultado");

seletor.addEventListener("change",calcular);
campo1.addEventListener("keyup",calcular);
campo2.addEventListener("keyup",calcular);

function calcular(){
    if(campo1.value==="" || campo2.value===""){
        resultado.innerHTML="erro";
    }
    else{
        const valor1 = parseFloat(campo1.value);
        const valor2 = parseFloat(campo2.value);
        const operacao = seletor.value;
        if(operacao==="somar") 
            resultado.innerHTML = valor1 + valor2;
        if(operacao==="subtrair")
            resultado.innerHTML = valor1 - valor2;
        if(operacao==="multiplicar")
            resultado.innerHTML = valor1 * valor2;
        if(operacao==="dividir")
            resultado.innerHTML = valor1 / valor2;
             } 
    
            }






