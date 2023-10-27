function preencherEndereco() {
    const cep = document.getElementById("cep").value;
    const ruaInput = document.getElementById("rua");
    const bairroInput = document.getElementById("bairro");
    const cidadeInput = document.getElementById("cidade");
    const estadoInput = document.getElementById("estado");

    if (/^\d{8}$/.test(cep)) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                ruaInput.value = data.logradouro;
                bairroInput.value = data.bairro;
                cidadeInput.value = data.localidade;
                estadoInput.value = data.uf;
            })
            .catch(error => {
                console.error("Erro ao buscar o CEP:", error);
            });
    } else {
        console.error("CEP inválido. Digite um CEP válido.");
    }
}

function cadastrarUsuario() {
    const camposObrigatorios = ["nome", "sobrenome", "email", "senha", "dataNascimento", "genero", "cpf", "rg","cep","rua","bairro","cidade","estado"];

    for (const campo of camposObrigatorios) {
        const campoInput = document.getElementById(campo);
        if (!campoInput.value) {
            alert(`O campo ${campoInput.getAttribute("id")} é obrigatório e não foi preenchido.`);
            return;
        }
    }

    alert("Usuário cadastrado com sucesso!");
}

document.getElementById("cep").addEventListener("blur", preencherEndereco);
