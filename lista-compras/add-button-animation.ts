const buttonAdd: HTMLElement = document.getElementById('addButton') as HTMLButtonElement;
const hiddenDiv: HTMLElement = document.getElementById('contentDiv') as HTMLDivElement;

buttonAdd.addEventListener('click', ()=>{
    if(hiddenDiv.classList.contains('hidden')){
        hiddenDiv.classList.remove('hidden')
    }
})
