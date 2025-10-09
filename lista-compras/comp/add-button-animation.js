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
