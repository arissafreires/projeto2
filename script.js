// ==================== EFEITO 1: Mensagem ao clicar no card ====================
// Esta função é chamada quando clicamos em um card (lá no HTML)
function mostrarMensagem(elementoCard, mensagem) {
    
    // 1. Mostrar um alerta (pop-up) com a mensagem
    alert("💡 Dica: " + mensagem);
    
    // 2. Efeito visual no card (opcional)
    // Adiciona uma classe temporária para mudar a cor de fundo
    elementoCard.classList.add('clicado');
    
    // Remove a classe depois de 300 milissegundos para voltar ao normal
    setTimeout(function() {
        elementoCard.classList.remove('clicado');
    }, 300);
    
    // Explicação:
    // - elementoCard é o card que foi clicado (o próprio HTML do card)
    // - classList.add adiciona uma classe CSS temporária
    // - setTimeout é uma função que espera um tempo para executar algo
}

// ==================== EFEITO 2: Mensagem de agradecimento no formulário ====================
// Esta função é chamada quando o formulário é enviado
function enviarFormulario(event) {
    
    // Previne o comportamento padrão do formulário (que é recarregar a página)
    event.preventDefault();
    
    // Pega o campo de e-mail
    const campoEmail = document.querySelector('#form-contato input');
    const email = campoEmail.value;
    
    // Pega o parágrafo onde vamos mostrar a mensagem
    const mensagemParagrafo = document.getElementById('mensagem-agradecimento');
    
    // Mostra uma mensagem personalizada
    if (email) {
        mensagemParagrafo.textContent = `Obrigado pelo interesse, ${email.split('@')[0]}! Em breve você receberá dicas sustentáveis. 🌿`;
        mensagemParagrafo.style.color = '#2e7d32'; // Verde escuro
    } else {
        mensagemParagrafo.textContent = 'Por favor, digite um e-mail válido.';
        mensagemParagrafo.style.color = '#c62828'; // Vermelho
    }
    
    // Limpa o campo de e-mail
    campoEmail.value = '';
    
    // Explicação:
    // - querySelector encontra o input dentro do formulário
    // - textContent muda o texto do parágrafo
    // - split('@')[0] pega a parte antes do @ no e-mail (nome da pessoa)
}

// ==================== EFEITO 3 (Bônus): Menu ativo enquanto rola a página ====================
// Destaca qual seção está visível no menu (legal para navegação)

// Pega todas as seções e links do menu
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu a');

// Função que roda quando a página é rolada
window.addEventListener('scroll', () => {
    let current = '';
    
    // Verifica a posição de cada seção
    sections.forEach(section => {
        const sectionTop = section.offsetTop; // Distância do topo
        const sectionHeight = section.clientHeight; // Altura da seção
        
        // Se a posição do scroll passou do topo da seção
        if (scrollY >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id'); // Pega o id da seção
        }
    });

    // Remove a classe 'active' de todos os links e adiciona apenas no link da seção atual
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Nota: Precisamos adicionar um estilo para o link ativo no CSS
// Adicione isso no seu arquivo style.css:
// .menu a.active {
//     background-color: var(--amarelo-pastel);
//     border-radius: 20px;
//     font-weight: bold;
// }