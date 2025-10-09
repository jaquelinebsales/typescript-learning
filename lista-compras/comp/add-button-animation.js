const buttonAdd = document.getElementById('addButton');
const hiddenDiv = document.getElementById('contentDiv');
buttonAdd.addEventListener('click', () => {
    if (hiddenDiv.classList.contains('hidden')) {
        hiddenDiv.classList.remove('hidden');
    }
});
