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
    return;
    }

// Adiciona o amigo à lista e limpa o campo
    listaAmigos.push(valorAmigo);
    nomeAmigo.value = '';
// Atualiza a lista na tela
mostrarUL();
}
 
// Função para atualizar a lista na interface
function mostrarUL () {
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = ''; // Limpa a lista antes de recriar

    listaAmigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

