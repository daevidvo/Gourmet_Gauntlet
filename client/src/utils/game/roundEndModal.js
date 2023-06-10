export default function createModal(text, parentElement) {
    const modal = document.createElement('div');
    modal.setAttribute('id','roundEndModal');
    modal.classList.add('modal');
    
    const modalBack = document.createElement('div');
    modalBack.classList.add('modal-background');

    const modalCard = document.createElement('div');
    modalCard.classList.add('modal-card');

    const modalCardBody = document.createElement('section');
    modalCardBody.classList.add('modal-card-body');

    const modalContent = document.createElement('h1');

    modalContent.textContent = text;

    modalCardBody.append(modalContent);
    modalCard.append(modalCardBody);
    modal.append(modalBack, modalCard);
    parentElement.append(modal);
  }