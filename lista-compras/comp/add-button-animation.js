const buttonAdd = document.getElementById('addButton');
const hiddenDiv = document.getElementById('contentDiv');
const icon = document.querySelector('.bi.bi-plus-lg');
buttonAdd.addEventListener('click', () => {
    hiddenDiv.classList.remove('hidden');
    /*setTimeout(()=>{
        hiddenDiv.classList.add('actual')
    },10)*/
    hiddenDiv.classList.add('actual');
    buttonAdd.classList.remove('addButtonNormal');
    buttonAdd.classList.add('activeButton');
    icon.classList.add('animation-i');
});
inputItem.addEventListener('input', () => {
    var _a, _b;
    // Remove ícone existente
    const existingIcon = (_a = inputItem.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector('.bi-x-circle');
    if (inputItem.value.trim() !== '') {
        // Só cria o ícone se não existir
        if (!existingIcon) {
            const iconX = document.createElement('i');
            iconX.classList.add('bi', 'bi-x-circle');
            iconX.style.cursor = 'pointer';
            // Adiciona função para limpar
            iconX.addEventListener('click', () => {
                inputItem.value = '';
                iconX.remove();
                inputItem.focus();
            });
            (_b = inputItem.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(iconX, inputItem.nextSibling);
        }
    }
    else {
        // Remove ícone se input estiver vazio
        existingIcon === null || existingIcon === void 0 ? void 0 : existingIcon.remove();
    }
});
