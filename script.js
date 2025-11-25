function goTo(screenId) {
    console.log("A navegar para: " + screenId);

    // 1. Seleciona todas as telas
    const screens = document.querySelectorAll('.screen');

    // 2. Esconde todas adicionando a classe 'hidden'
    screens.forEach(screen => {
        screen.classList.add('hidden');
    });

    // 3. Seleciona a tela de destino
    const target = document.getElementById(screenId);

    // 4. Se a tela existe, remove a classe 'hidden' para mostrar
    if (target) {
        target.classList.remove('hidden');
    } else {
        console.error("Erro: Tela não encontrada -> " + screenId);
    }
}