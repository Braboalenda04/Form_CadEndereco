function cadastrarUsuario() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const genero = document.getElementById('genero').value;

    if (!nome || !sobrenome || !email || !senha || !dataNascimento || !genero) {
        document.getElementById('mensagem').textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    // Você pode adicionar código para enviar os dados para um servidor aqui.
    // Neste exemplo, apenas exibiremos uma mensagem de sucesso.

    document.getElementById('mensagem').textContent = `Usuário ${nome} ${sobrenome} cadastrado com sucesso!`;
    document.getElementById('cep').value = '';
    document.getElementById('rua').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('cadastroForm').reset();
}
