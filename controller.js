'use strict'; // Modo restrito

// Consumindo API de CEP, do Viacep
// https://viacep.com.br/

// Função para limpar o formulário
const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
};

// Verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);

// Testa o número informado com expressão regular
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Verifica tamanho do CEP digitado e executa a função de validação do CEP eNumero
// Função para preencher o formulário
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
};

// Consumo da API do ViaCEP
const pesquisarCep = async () => {
    limparFormulario();
    const cep = document.getElementById('cep');
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    if (cepValido(cep.value)) {
        const dados = await fetch(url); // Aguardar
        const address = await dados.json();
        if (address.hasOwnProperty('erro')) {
            alert('CEP não encontrado');
        } else {
            preencherFormulario(address);
        }
    } else {
        alert('CEP incorreto');
    }
};

// Adiciona evento DOM ao input do CEP para executar a função pesquisarCep
document.getElementById('cep').addEventListener('blur', pesquisarCep);