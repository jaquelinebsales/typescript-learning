const buttonAdd: HTMLButtonElement = document.getElementById('addButton') as HTMLButtonElement;
const hiddenDiv: HTMLDivElement = document.getElementById('contentDiv') as HTMLDivElement;
const icon: HTMLElement = document.querySelector('.bi.bi-plus-lg') as HTMLElement;

buttonAdd.addEventListener('click', ()=>{
    hiddenDiv.classList.remove('hidden')

    /*setTimeout(()=>{
        hiddenDiv.classList.add('actual')
    },10)*/

    hiddenDiv.classList.add('actual')

    buttonAdd.classList.remove('addButtonNormal')
    buttonAdd.classList.add('activeButton')
    icon.classList.add('animation-i')

})

inputItem.addEventListener('input', () => {
    // Remove ícone existente
    const existingIcon = inputItem.parentNode?.querySelector('.bi-x-circle');
    
    if(inputItem.value.trim() !== ''){
        // Só cria o ícone se não existir
        if (!existingIcon) {
            const iconX: HTMLElement = document.createElement('i');
            iconX.classList.add('bi', 'bi-x-circle');
            iconX.style.cursor = 'pointer';
            
            // Adiciona função para limpar
            iconX.addEventListener('click', () => {
                inputItem.value = '';
                iconX.remove();
                inputItem.focus();
            });
            
            inputItem.parentNode?.insertBefore(iconX, inputItem.nextSibling);
        }
    } else {
        // Remove ícone se input estiver vazio
        existingIcon?.remove();
    }
});
