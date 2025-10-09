const buttonAdd: HTMLButtonElement = document.getElementById('addButton') as HTMLButtonElement;
const hiddenDiv: HTMLDivElement = document.getElementById('contentDiv') as HTMLDivElement;
const icon: HTMLElement = document.querySelector('.bi.bi-plus-lg') as HTMLElement

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
