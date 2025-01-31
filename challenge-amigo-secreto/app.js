// Array para armazenar os nomes
let listaAmigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    let nomeAmigo = document.querySelector("#amigo");
    let valorAmigo = nomeAmigo.value.trim(); // Pega o valor corretamente

     // Verifica se o nome é válido
    if (valorAmigo == '') {
        alert('Insira nome válido');
        nomeAmigo.value = '';
        return;
    }
    
    // Verifica se o nome contém números
    if (/\d/.test(valorAmigo)) {
    alert('Insira nome valido, atualmente possue numeros');
    nomeAmigo.value = '';
    return:
    }

// Adiciona o amigo à lista e limpa o campo
    listaAmigos.push(valorAmigo);
    nomeAmigo.value = '';
// Atualiza a lista na tela
mostrarUL();
}
 
function mostrarUL () {
    let listaAmigos = document.querySelector('ul');
    const ultimoAmigo = listaAmigos[listaAmigos.length - 1];
    let li = document.createElement('li');
    li.textContent = ultimoAmigo;
    listaHTML.appendchild(li);
}
