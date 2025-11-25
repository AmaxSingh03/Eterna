// Variável para guardar onde estavas antes de abrir o menu
let previousScreen = 'screen-home';

function goTo(screenId) {
    // 1. Esconde todas as telas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));

    // 2. Mostra a tela alvo
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.remove('hidden');
        target.scrollTop = 0;
    }
}

// Função para abrir o menu e LEMBRAR de onde vieste
function openMenu() {
    // Procura qual tela está visível agora (que não seja hidden)
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        if (!screen.classList.contains('hidden') && screen.id !== 'screen-menu') {
            previousScreen = screen.id;
        }
    });
    goTo('screen-menu');
}

// Função para fechar o menu e VOLTAR para onde estavas
function closeMenu() {
    goTo(previousScreen);
}

function selectOption(element) {
    element.classList.toggle('selected');
}

// Função para destacar o dia de hoje automaticamente
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().getDate();
    const dayElement = document.getElementById('day-' + today);
    if (dayElement) {
        dayElement.classList.add('today-highlight');
    }
});