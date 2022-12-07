function showModalEsqueceuSenha() {
    const body = document.querySelector('body')
    const modalAdicionar = document.querySelector('#modalAdicionar')

    modalAdicionar.addEventListener('click', () => {
        const modal = createModal();
        body.appendChild(modal)
        closedModal()
    })
}




function createModal() {
    const section = document.createElement('section');
    const form = document.createElement('form');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const closed = document.createElement('span');
    const p = document.createElement('p');
    const mailInput = document.createElement('input');
    const button = document.createElement('button');




    section.classList.add('container__modal');
    form.classList.add('modal__form');
    div.classList.add('box__modal--tittle');
    h2.classList.add('modal__tittle');
    closed.classList.add('modal__tittle--x');
    p.classList.add('modal__paragrafo');
    mailInput.classList.add('modal__input');
    button.classList.add('modal__button');

    h2.innerHTML = 'Recuperar Senha';
    closed.innerText = 'X';
    closed.id = 'closeBtn'
    p.innerHTML = 'Para recuperar sua senha, digite seu e-mail abaixo.';
    mailInput.name = 'email';
    mailInput.id = 'email';
    mailInput.placeholder = 'Digite aqui seu e-mail...';
    mailInput.type = 'text';
    button.type = 'submit';
    button.innerHTML = 'Enviar'

    form.append(div, p, mailInput, button)
    div.append(h2, closed)
    section.appendChild(form)

    return section;

}



function closedModal () {
    const modalContainer = document.querySelector('.container__modal');
    const closedModalBtnc = document.querySelector('#closeBtn');

    closedModalBtnc.addEventListener('click', () =>{
modalContainer.remove()
    })
}


showModalEsqueceuSenha()