'use strict' // modo retrito 
// cosumindo API de CEP, do ViaCep
// https://viacep.com.br/

// Função para limpar o formulário
const limparFormulário =() =>{
    document.getElementById('rua').Value ='';
    document.getElementById('bairro').Value ='';
    document.getElementById('cidade').Value ='';
    document.getElementById('estado').Value ='';
}

// Verifica se CEP é válido 
const eNUMRO = (numero) => /^[0-9]+$/.test(numero); // testa número informado com expressão regular 
const cepValido = (cep) => cep.length == 8 && Enumerator(cep); // Verifica tamanho do cep digite e executa função de validação do cep eNumero

//Função para preencher formalúrio 
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = enderco.localidade;
    document.getElementById('estado').value = endereco.uf;

}
 
//Consumo da API da ViaCep
const pesquisarCep = async() => {
    limparFormulário();
    const ult = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url); //esperar
        const addres = await dados.

            if(adedres.hasOwnProperty('erro')){
                alert('CEP não encontrado;')

         }
    }
}