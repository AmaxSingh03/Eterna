let previousScreen = 'screen-home';
let selectedPackagingImage = 'pack-spray.png';

function goTo(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));

    const target = document.getElementById(screenId);
    if (target) {
        target.classList.remove('hidden');
        target.scrollTop = 0;

        if (screenId === 'screen-preview') {
            const previewImg = document.getElementById('preview-img');
            if (previewImg) {
                previewImg.src = selectedPackagingImage;
            }
        }
    }
}

function openMenu() {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        if (!screen.classList.contains('hidden') && screen.id !== 'screen-menu') {
            previousScreen = screen.id;
        }
    });
    goTo('screen-menu');
}

function closeMenu() {
    goTo(previousScreen);
}

function selectOption(element) {
    element.classList.toggle('selected');
}

function selectPackaging(element, imageName) {
    const siblings = element.parentElement.children;
    for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('selected');
    }
    element.classList.add('selected');
    selectedPackagingImage = imageName;
}

document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const day = today.getDate();

    const dayElement = document.getElementById('day-' + day);
    if (dayElement) {
        dayElement.classList.add('today-highlight');
    }

    const dynamicTitle = document.getElementById('dynamic-date');
    if (dynamicTitle) {
        dynamicTitle.textContent = "Day " + day;
    }
});