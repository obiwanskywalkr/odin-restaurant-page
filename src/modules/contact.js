import '/src/style.css';

function createContact() {
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');

    const form = document.createElement('form');
 
    const legend = document.createElement('legend');
    legend.textContent = "Questions or comments?";

    const nameDiv = document.createElement('div');

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = "Name";

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('id', 'name');

    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);

    const emailDiv = document.createElement('div');

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = "Email";

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('id', 'email');

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);

    const messageDiv = document.createElement('div');
    
    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = "Message";

    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('name', 'message');
    messageInput.setAttribute('id', 'message');

    messageDiv.appendChild(messageLabel);
    messageDiv.appendChild(messageInput);

    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id', 'submit');
    submit.textContent = 'Submit';
    
    form.appendChild(legend);
    form.appendChild(nameDiv);
    form.appendChild(emailDiv);
    form.appendChild(messageDiv);
    form.appendChild(submit);
    contact.appendChild(form);

    return contact;
}

function renderContact() {
    const main = document.getElementById('main');
    main.innerHTML = "";
    main.appendChild(createContact());
}

export default renderContact;