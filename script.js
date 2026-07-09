// Aguarda todo o HTML ser carregado antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. FILTRO DE BUSCA PARA A TABELA DE TIMES
    // ==========================================
    const inputBusca = document.getElementById("busca-time");
    const linhasTabela = document.querySelectorAll("tbody tr");

    // Só executa se o campo de busca existir na página
    if (inputBusca) {
        inputBusca.addEventListener("keyup", () => {
            const termoBusca = inputBusca.value.toLowerCase();

            linhasTabela.forEach(linha => {
                // Pega o texto da linha inteira (Nome do time, cidade, etc.)
                const textoLinha = linha.textContent.toLowerCase();
                
                // Se o termo estiver na linha, mostra. Se não, esconde.
                if (textoLinha.includes(termoBusca)) {
                    linha.style.display = "";
                } else {
                    linha.style.display = "none";
                }
            });
        });
    }

    // ==========================================
    // 2. MUDANÇA NO CABEÇALHO AO ROLAR A PÁGINA
    // ==========================================
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        // Se rolar mais de 50px para baixo, adiciona uma classe de sombra
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
            header.style.transition = "box-shadow 0.3s ease";
        } else {
            header.style.boxShadow = "none";
        }
    });

    // ==========================================
    // 3. BOTÃO DE "APOIAR O FUTSAL PARANAENSE"
    // ==========================================
    const btnApoio = document.getElementById("btn-apoio");
    const contadorApoio = document.getElementById("contador-apoio");
    
    if (btnApoio && contadorApoio) {
        // Recupera os cliques salvos no navegador (se houver)
        let contagem = localStorage.getItem("votosFutsal") || 0;
        contadorApoio.textContent = contagem;

        btnApoio.addEventListener("click", () => {
            contagem++;
            contadorApoio.textContent = contagem;
            // Salva para o usuário não perder a contagem ao atualizar a página
            localStorage.setItem("votosFutsal", contagem);