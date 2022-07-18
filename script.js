const campoVazio = document.getElementById('cep').value = null;

function exibir() {
    document.getElementsByName('visao').style.display = 'flex';
}

function ocultar() {
    document.getElementsByName('visao').style.display = 'none';
}



const limparFormulario = (endereco) => {

    document.getElementById('endereco').value = '';

    document.getElementById('numero').value = '';

    document.getElementById('bairro').value = '';

    document.getElementById('cidade').value = '';

    document.getElementById('estado').value = '';

    document.getElementById('cep').value = '';

}

const preencherFormulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;

    document.getElementById('numero').value = endereco.complemento;

    document.getElementById('bairro').value = endereco.bairro;

    document.getElementById('cidade').value = endereco.localidade;

    document.getElementById('estado').value = endereco.uf;
}
const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) {

        const dados = await fetch(url);
    const endereco = await dados.json();

    if (endereco.hasOwnProperty('erro')) {
        document.getElementById('endereco').value = 'CEP não encontrado'
    } else {
        preencherFormulario(endereco);
    }

    } else {
        document.getElementById('endereco').value = 'CEP não incorreto!'    
    }
    

}

document.getElementById('buscar').addEventListener('click',pesquisarCep);

document.getElementById('limpar').addEventListener('click',limparFormulario);