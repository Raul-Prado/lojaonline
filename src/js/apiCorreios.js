// function rastrearEncomenda(event) {
//     event.preventDefault();
//     const codigoObjeto = document.getElementById("tracking-code").value;
//     const resultObjeto = document.getElementById("result");

//     fetch(`https://api.rastreio.ninja/v1/${codigoObjeto}`)
//         .then(response => response.json())
//         .then(data => {
//             resultObjeto.textContent = JSON.stringify(data, null, 2);
//         })
//         .catch(error => {
//             console.error('Erro:', error);
//             resultObjeto.textContent = 'Erro ao buscar informações. Verifique o código e tente novamente.';
//         });
// }
// document.getElementById("btn-rastrear").addEventListener("click", rastrearEncomenda);

function rastrearEncomenda(event) {
    event.preventDefault();

    // Obter o código de rastreamento e o elemento onde o resultado será exibido
    const codigoObjeto = document.getElementById("tracking-code").value.trim();
    const resultObjeto = document.getElementById("result");

    // Limpar qualquer resultado anterior
    resultObjeto.textContent = 'Carregando...';

    // Verificar se o código de rastreamento foi fornecido
    if (codigoObjeto === "") {
        resultObjeto.textContent = 'Por favor, insira um código de rastreamento válido.';
        return;
    }

    const url = `https://api.rastreio.ninja/v1/${codigoObjeto}`;
    // Fazer a requisição à API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta da API');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.tracking) {
                // Exibir os dados de forma formatada
                const detalhes = `
                    Status: ${data.tracking.status}\n
                    Última Atualização: ${data.tracking.lastUpdate}\n
                    Histórico:\n${data.tracking.history.map(item => `- ${item.date}: ${item.location} - ${item.status}`).join('\n')}
                `;
                resultObjeto.textContent = detalhes;
            } else {
                resultObjeto.textContent = 'Nenhum dado de rastreamento disponível para esse código.';
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            resultObjeto.textContent = 'Erro ao buscar informações. Verifique o código e tente novamente.';
        });
}

// Adicionar o evento de clique ao botão
document.getElementById("btn-rastrear").addEventListener("click", rastrearEncomenda);