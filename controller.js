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


