//lista de produtos
const camisetas = [
    {
        id: 1,
        genero: "Masculino",
        nome: "Camiseta Lacoste",
        variacoes: [
            {
                cor: "Azul",
                tamanhos: ["M", "G", "GG", "XGG"],
                imagem: "./src/img/camiseta-lacoste-manga-curta-sport-ultra-dry-64b5c2dd8cfb0-5076.png",
            },
            {
                cor: "Azul bebê",
                tamanhos: ["P", "G", "GG"],
                imagem: "./src/img/camiseta-lacoste-manga-curta-sport-ultra-dry-64b5c2e464993-5079.png",
            },
        ],
        preco: 224.90
    },
    {
        id: 2,
        genero: "Masculino",
        nome: "Camiseta Nike",
        variacoes: [
            {
                cor: "Preto",
                tamanhos: ["G", "GG", "XGG"],                
                imagem: "./src/img/camiseta_nike_sb_tee_logo_dc7817010_8301_1_ce7814f09a66c7a85441e217b6456362.webp",

            },
            {
                cor: "Bege",
                tamanhos: ["P", "M", "G", "GG"],
                imagem: "./src/img/camiseta-nike-sb-manga-curta-logo-preta-6570b34e6b4f5.jpg",
            },
        ],
        preco: 99.90
    },
    {
        id: 3,
        genero: "Masculino",
        nome: "Camiseta Levi's",
        variacoes: [
            {
                cor: "Branco",
                tamanhos: ["XGG"],
                imagem: "./src/img/camiseta_levi_s_masculina_branca_677_3_1c2b0f2ea07843c00428d3188ad6c1fe.webp",
            },
            {
                cor: "Preto",
                tamanhos: ["P", "M", "G", "GG"],
                imagem: "./src/img/camiseta_levi_s_masculina_preta_679_1_acd9fadd820a6395d2058f5a22c242d9.webp",
            },
        ],
        preco: 124.90
    },
    {
        id: 4,
        genero: "Masculino",
        nome: "Camiseta OBEY",
        variacoes: [
            {
                cor: "Branco",
                tamanhos: ["GG", "XGG"],
                imagem: "./src/img/mockup2-54241115bbf7f0c89c16987000159217-1024-1024.jpg",
            },
            {
                cor: "Preto",
                tamanhos: ["P", "M", "G", "GG"],
                imagem: "./src/img/mockup-02186b9cb74d71c73016987000116500-1024-1024.jpg",
            },
        ],
        preco: 204.90
    },
    {
        id: 5,
        genero: "Masculino",
        nome: "Camiseta Nike Jordan",
        variacoes: [
            {
                cor: "Branco",
                tamanhos: ["GG", "XGG"],
                imagem: "./src/img/JD8-3957-014_zoom1.webp",
            },
            {
                cor: "Vermelho",
                tamanhos: ["P", "M", "G"],
                imagem: "./src/img/JD8-3957-016_zoom1.webp",
            },
        ],
        preco: 324.90
    },
    {
        id: 6,
        genero: "Masculino",
        nome: "Gorro unissex Lacoste",
        variacoes: [
            {
                cor: "Cinza",
                tamanhos: ["Único"],
                imagem: "./src/img/RB9883_YRD_24.avif",
            }
        ],
        preco: 94.90
    },
    {
        id: 7,
        genero: "Masculino",
        nome: "Meia Nike Everyday",
        variacoes: [
            {
                cor: "Cinza",
                tamanhos: ["Único"],
                imagem: "./src/img/013734CTA4.avif",
            }
        ],
        preco: 194.90
    },
    {
        id: 8,
        genero: "Masculino",
        nome: "BIG BOY WEB BELT",
        variacoes: [
            {
                cor: "Vermelho",
                tamanhos: ["Único"],
                imagem: "./src/img/100050026_BUR_1_2400x2400.webp",
            }
        ],
        preco: 99.90
    },
    {
        id: 9,
        genero: "Masculino",
        nome: "MOCHILA LEVI'S L-PACK",
        variacoes: [
            {
                cor: "Azul",
                tamanhos: ["Único"],
                imagem: "./src/img/519678-800-800.webp",
            }
        ],
        preco: 234.90
    },
    {
        id: 10,
        genero: "Masculino",
        nome: "Chapéu Jordan Apex",
        variacoes: [
            {
                cor: "Laranja",
                tamanhos: ["Único"],
                imagem: "./src/img/026657BPA3.avif"
            }
        ],
        preco: 134.90
    },
    {
        id: 11,
        genero: "Masculino",
        nome: "Tênis Jordan Jumpman",
        variacoes: [
            {
                cor: "Branco",
                tamanhos: ["36", "38", "40", "42"],
                imagem: "./src/img/M132EN01.webp",
            },
        ],
        preco: 849.90
    },
    {
        id: 12,
        genero: "Masculino",
        nome: "TENIS LACOSTE",
        variacoes: [
            {
                cor: "Cinza",
                tamanhos: ["36", "38", "40", "42"],
                imagem: "./src/img/tenis_lacoste_audyssor_trail_zip_8600_1_83cc768d5dee041ed8fbd1a750b2b47c.webp",
            },
        ],
        preco: 1389.90
    },
    {
        id: 13,
        genero: "Masculino",
        nome: "Jordan 4 Retro Levi's",
        variacoes: [
            {
                cor: "Branco",
                tamanhos: ["36", "38", "40", "42"],
                imagem: "./src/img/jordan-jordan-4-retro-levis-white-gs-levis-tag-aq9103-100.jpg",
            },
        ],
        preco: 3134.90
    },
    {
        id: 14,
        genero: "Masculino",
        nome: "Tênis Lacoste L003 Evo",
        variacoes: [
            {
                cor: "Preto",
                tamanhos: ["36", "38", "40", "42"],
                imagem: "./src/img/47SMA0121_02H_01.avif",
            },
        ],
        preco: 899.90
    },
    {
        id: 15,
        genero: "Feminino",
        nome: "Camiseta Regular Fit",
        variacoes: [
            {
                cor: "Verde militar",
                tamanhos: ["M", "G", "GG", "XGG"],
                imagem: "./src/img/TF1605_YZP_20.webp",
            },
        ],
        preco: 224.90
    },
    {
        id: 16,
        genero: "Feminino",
        nome: "Camiseta Pima Jersey",
        variacoes: [
            {
                cor: "Rosa",
                tamanhos: ["M", "G", "GG", "XGG"],
                imagem: "./src/img/TF7215_QDS_20.webp",
            }
        ],
        preco: 99.90
    },
    {
        id: 17,
        genero: "Feminino",
        nome: "Camiseta Estampa Texto",
        variacoes: [
            {
                cor: "Branco",
                tamanhos: ["P", "M", "G", "GG"],
                imagem: "./src/img/TF0896_001_20.webp",
            },
        ],
        preco: 124.90
    },
];
//array
const carrinho = [];
//lista de cupoms7
const cupons = [
    {
        id: 1,
        nome: "PRIMEIRACOMPRA10",
        desconto: 10,
    }
];
function preecherSelects(produto) {
    const produtoContainer = document.querySelector(`#product-${produto.id}`);
    // nome produto
    const produtoName = produtoContainer.querySelector(".product-name");
    produtoName.textContent = produto.nome;
    //preço produto
    const produtoPrice = produtoContainer.querySelector(".product-price");
    produtoPrice.textContent = produto.preco.toFixed(2);
    //imagem do produto
    const produtoImagem = produtoContainer.querySelector('.product-image');
    if(produto.variacoes.length > 0){
        produtoImagem.src = produto.variacoes[0].imagem;
    }
    //preencher cores
    const selectCor = produtoContainer.querySelector(".select-color");
    produto.variacoes.forEach(function (variacao) {
        const option = document.createElement('option');
        option.value = variacao.cor;
        option.textContent = variacao.cor;
        selectCor.appendChild(option);
    });
    //preencher tamanhos
    const selectTamanho = produtoContainer.querySelector(".select-size");
    produto.variacoes[0].tamanhos.forEach(function (tamanho) {
        const option = document.createElement('option');
        option.value = tamanho;
        option.textContent = tamanho;
        selectTamanho.appendChild(option);
    });
    // Atualizar tamanhos ao mudar a cor
    selectCor.addEventListener('change', function () {
        const corSelecionada = this.value;
        const variacaoSelecionada = produto.variacoes.find(function (variacao) {
            return variacao.cor === corSelecionada;
        });
        // Atualizar imagem
        produtoImagem.src = variacaoSelecionada.imagem;
        // Atualizar tamanhos
        selectTamanho.innerHTML = '';
        variacaoSelecionada.tamanhos.forEach(function (tamanho) {
            const option = document.createElement('option');
            option.value = tamanho;
            option.textContent = tamanho;
            selectTamanho.appendChild(option);
        });
        //const produtoImagem = produtoContainer.querySelector('.product-image');
        // produtoImagem.innerHTML = '';
        // variacaoSelecionada.imagem.forEach(function (imagens) {
        //     const img = document.createElement("img");
        //     img.src = imagens.imagem;
        //     //img.alt = `Imagem - Cor: ${variacaoSelecionada.cor}`;
        //     produtoImagem.appendChild(img);
        // });
    });
}
camisetas.forEach(function (produto) {
    preecherSelects(produto);
});
function openModal(event) {
    event.preventDefault();
    const modalOpen = document.getElementById("modal-cart");
    if (modalOpen) {
        modalOpen.classList.remove("hidden");
        modalOpen.classList.add("show-modal");
        return
    }
}
function closeModal(event) {
    event.preventDefault();
    const modalClose = document.getElementById("modal-cart");
    if (modalClose) {
        modalClose.classList.add("hidden");
        modalClose.classList.remove("show-modal");
        return
    }
}
//add carrinho
function addCarrinho(event) {
    event.preventDefault();
    const productClick = event.currentTarget.closest(".product");
    const idProduct = parseInt(productClick.getAttribute("data-id"), 10);
    //procurar o produto no array pelo id
    const productSelect = camisetas.find(function (produto) {
        return produto.id === idProduct;
    });
    const selectCor = productClick.querySelector(".select-color").value;
    const selectTamanho = productClick.querySelector(".select-size").value;
    //console.log(`Produto selecionado: ${productSelect.genero}, ${productSelect.nome}, ${productSelect.preco}, ${selectCor}, ${selectTamanho}`);

    // Verificar se o produto já está no carrinho
    const itemNoCarrinho = carrinho.find(function (item) {
        return item.idProduto === idProduct && item.generoProduto === productSelect.genero && item.nomeProduto === productSelect.nome
            && item.tamanhoProduto === selectTamanho && item.corProduto === selectCor;
    });
    if (itemNoCarrinho) {
        itemNoCarrinho.quantidadeProduto += 1;
    } else {
        //criar array para add produtos no carrinho
        const produtoNoCarrinho =
        {
            idProduto: idProduct,
            generoProduto: productSelect.genero,
            nomeProduto: productSelect.nome,
            tamanhoProduto: selectTamanho,
            corProduto: selectCor,
            precoProduto: productSelect.preco,
            quantidadeProduto: 1
        };
        //add produto no array carrinho
        carrinho.push(produtoNoCarrinho);
    }
    console.log(carrinho);
    // console.log(`Produto selecionado: ${produtoNoCarrinho.idProduto}, 
    //     ${produtoNoCarrinho.generoProduto}, 
    //     ${produtoNoCarrinho.nomeProduto},
    //     ${produtoNoCarrinho.tamanhoProduto}, 
    //     ${produtoNoCarrinho.corProduto}, 
    //     ${produtoNoCarrinho.precoProduto}`);
    updateCarrinho();
}
// atualizar carrinho
function updateCarrinho() {
    const infoList = document.getElementById("list-product");
    const pagarTotal = document.getElementById("TotalApagar");
    const totalDesconto = document.getElementById("descontoTotal");
    let totalCompra = 0;

    // Limpar a lista antes de atualizar
    infoList.innerHTML = "";
    carrinho.forEach(function (produto) {
        // Criar div
        const elementHtml = document.createElement("div");
        elementHtml.classList.add("p-6", "mb-6", "rounded-lg", "shadow-md", "flex", "justify-between", "flex-col");

        // Atribuir conteúdo HTML
        elementHtml.innerHTML = `
            <div>
                <p class="text-lg font-bold ">${produto.nomeProduto}</p>
                <p class="text-base text-gray-700">Gênero: ${produto.generoProduto}</p>
                <p class="text-base text-gray-700">Cor: ${produto.corProduto}</p>
                <p class="text-base text-gray-700">Tamanho: ${produto.tamanhoProduto}</p> 
                <p class="text-base">Quantidade: ${produto.quantidadeProduto}</p>
                <p class="text-lg font-bold">R$ <small class="text-lg font-bold mb-4">${produto.precoProduto.toFixed(2)}</small></p>
            </div>    
            <div>
                <button class="text-base mt-2 font-bold btn-remove bg-red-600" data-remove="${produto.nomeProduto}">Remover</button>
            </div>`;

        // Total compra
        totalCompra += parseFloat((produto.precoProduto * produto.quantidadeProduto));
        infoList.appendChild(elementHtml);
    });
    if (carrinho.length === 0) {
        totalCompra = 0;
        totalDesconto.innerText = "0.00";
    }
    // Atualizar total a pagar
    pagarTotal.innerText = totalCompra.toFixed(2);
    // Adiciona evento de click aos botões "Remover"
    document.querySelectorAll('.btn-remove').forEach(button => {
        button.addEventListener('click', removerProduto);
    });
    validarCupom();
}
// remover cupom
function validarCupom(){
    const cupomDesconto = document.getElementById("cupomDesconto").value.toUpperCase();
    const totalDesconto = document.getElementById("descontoTotal");
    const valorTotalTela = document.getElementById("TotalApagar");
    const valorTotal = parseFloat(valorTotalTela.innerText);
    //verificar
    const cupomValido = cupons.find(function(cupons){
        return cupons.nome === cupomDesconto;
    });
    if (cupomDesconto && carrinho.length > 0) {
        const cupomValido = cupons.find(function(cupom){
            return cupom.nome === cupomDesconto;
        });
        
        if (cupomValido) {
            // Calcula o valor com o desconto
            const desconto = (valorTotal * cupomValido.desconto) / 100;
            totalDesconto.innerText = desconto.toFixed(2);
            const valorFinal = valorTotal - desconto;
            valorTotalTela.innerText = valorFinal.toFixed(2);
        } else {
            alert("Cupom inválido");
        }
    } else {
        // Se o cupom for inválido ou o carrinho estiver vazio, definir desconto como 0
        totalDesconto.innerText = "0.00";
    }
}
// remover carrinho
function removerProduto(event) {
    event.preventDefault();
    const btnRemove = event.target.getAttribute('data-remove');
    // Encontrar o índice do item no carrinho
    const index = carrinho.findIndex(item => item.nomeProduto === btnRemove);
    if (index !== -1) {
        const item = carrinho[index];
        if (item.quantidadeProduto > 1) {
            const confirmar = confirm(`Deseja remover uma unidade do produto "${item.nomeProduto}"?`);
            if (!confirmar) return;
            item.quantidadeProduto -= 1;
        } else {
            const confirmar = confirm(`Deseja remover o produto "${item.nomeProduto}" do carrinho?`);
            if (!confirmar) return;
            carrinho.splice(index, 1);
        }
        updateCarrinho(); // Atualiza a exibição do carrinho
    }
}
//enviar produto
function enviarPedido() {
    // data e hora
    const horaData = new Date();
    const dia = horaData.getDate();
    const mes = horaData.getMonth() + 1; // Lembre-se de adicionar 1 ao mês
    const ano = horaData.getFullYear();
    const horas = horaData.getHours();
    const minutos = horaData.getMinutes();
    //
    const nomeCliente = document.getElementById("nomeCliente").value
    const cupomUtilizado = document.getElementById("cupomDesconto").value;
    const enderecoCliente = document.getElementById("address").value;
    const modalAlert = document.getElementById("address-warn"); 
    const nomeAlert = document.getElementById("nome-warn");
    const formaPagamento = document.getElementById("payment-method").value;
    // Verificando se o carrinho está vazio ou se o endereço não foi preenchido
    if (carrinho.length === 0) return;
    if (nomeCliente === "") {
        nomeAlert.classList.remove("hidden");
        document.getElementById("nomeCliente").classList.add("border-red-500");
        return;
    } else {
        nomeAlert.classList.add("hidden");
        document.getElementById("nomeCliente").classList.remove("border-red-500");
    }
    if (enderecoCliente === "") {
        modalAlert.classList.remove("hidden");
        document.getElementById("address").classList.add("border-red-500");
        return;
    } else {
        modalAlert.classList.add("hidden");
        document.getElementById("address").classList.remove("border-red-500");
    }
    // Iniciar mensagem do pedido
    const phone = "5511976696658";
    let mensagem = `Olá, meu nome é ${nomeCliente}\n\n Gostaria de fazer um pedido abaixo:\n\n`;
    // Adicionar os produtos e ingredientes à mensagem
    carrinho.forEach(item => {
        mensagem += `Produto: ${item.nomeProduto}\n`;
        mensagem += `Quantidade: ${item.quantidadeProduto}\n`;
        mensagem += `Preço: R$ ${(item.precoProduto).toFixed(2)}\n\n`;
    });
    // Calcular o total da compra
    let totalCompra = carrinho.reduce((total, item) => total + (item.precoProduto * item.quantidadeProduto), 0);
    mensagem += `Cupom aplicado: ${cupomUtilizado}\n\n`;
    mensagem += `Total: R$ ${totalCompra.toFixed(2)}\n\n`;
    // Adicionar outras informações à mensagem
    mensagem += `Forma de Pagamento: ${formaPagamento}\n\n`;
    mensagem += `Endereço de entrega: ${enderecoCliente}\n\n`;
    mensagem += `pedido feito em ${dia}/${mes}/${ano} às ${horas}:${minutos} \n\n`;
    mensagem += 'Por favor, confirme o recebimento deste pedido.';
    // Encodificar e enviar a mensagem via WhatsApp
    const encodedMessage = encodeURIComponent(mensagem);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, '_blank');
}
//btn enviar pedido
document.getElementById("checkout-btn").addEventListener("click", enviarPedido);
//cupom desconto
document.getElementById("cupomDesconto").addEventListener("blur", validarCupom);