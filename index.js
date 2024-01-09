const ulist= document.querySelector('ul');
const inputs= document.querySelector('input');
const button= document.querySelector('button');

button.addEventListener('click', () =>{
    const myItem = inputs.value; 
    inputs.value ='';

    const list = document.createElement('li');
    const lispan = document.createElement('span');
    const libutton = document.createElement('button');

    list.appendChild(lispan);
    lispan.textContent = myItem;

    list.appendChild(libutton);
    libutton.textContent = 'Delete';

    ulist.appendChild(list);

    libutton.addEventListener('click', () => {
        ulist.removeChild(list);
    });
inputs.focus();
});

