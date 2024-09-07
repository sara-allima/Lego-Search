function pesquisar() {
    // Seleciona a seção HTML com o ID "resultados" onde os resultados serão exibidos.
    let section = document.getElementById("resultados");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Inicializa uma string vazia para armazenar o HTML gerado.
    let resultados = "";

    if(!campoPesquisa || campoPesquisa == " ") {
        section.innerHTML = `
            <p>Nenhum set foi encontrado. Certifique-se de estar informando o numero certo sem nehum caractere especial.</p>
        `;
        return;
    }

    // Itera sobre cada produto no array de dados.
    for (let dado of dados) {
        if (dado.setNum.includes(campoPesquisa)) { //Verifica se o que foi escrito no input está no banco de dados
            resultados += `
                <div class="produto">
                    <div class="content">
                        <img src=${dado.img} alt="">
                        <div class="nome-preco">
                            <p class="product-name">#${dado.setNum} ${dado.nome}</p>
                            <p class="preco">${dado.preco}</p>
                        </div>
                        <div class="button">
                            <a href=${dado.url} target="_blank">Acessar loja</a>
                        </div>
                    </div>
                </div>
            `;
        }
        if(!resultados) {
            section.innerHTML = `
                <p>Nenhum set foi encontrado. O set ainda não está em nosso banco de dados.</p>
            `;
            return;
        }
        // Constrói o HTML para cada produto, utilizando template literals para inserir os dados.
    }

    // Substitui o conteúdo HTML da seção "resultados" pelo HTML gerado.
    section.innerHTML = resultados;
}