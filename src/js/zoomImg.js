function imagemZoom() {
    // Seleciona todos os elementos com a classe 'product-image'
    const productImages = document.querySelectorAll('.product-image');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');
    // Função para abrir o modal
    productImages.forEach(function (image) {
        image.addEventListener('click', () => {
            modalImage.src = image.src;
            modal.classList.remove('hidden');
        });
    });
    // Função para fechar o modal
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
    // Fecha o modal ao clicar fora da imagem
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}

// Exemplo de uso da função
imagemZoom();