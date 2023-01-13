const API_HOST = 'http://localhost:3000';

fetch(API_HOST + '/events')
    .then(response => response.json())
    .then(commits => console.log(commits));


function post(data) {
    return fetch(API_HOST + '/events', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    })
      .then(response => response.json())

        // .then((data) => {
        //     console.log('data',data);
        // })
        // .catch(function (error) {
        //     console.log('error', error)
        // })
}

function createPost(postObject) {
    return post(postObject);
}

// Web Components
// - templates
// - custom elements
// - shadow dom

// Create Button Add New
const btnAdd = document.createElement('button');
btnAdd.setAttribute('class', 'btn-add');
btnAdd.setAttribute('id', 'btn_add_new');
btnAdd.type = 'button';
btnAdd.innerHTML = 'Add New'
document.body.append(btnAdd);

btnAdd.addEventListener('click', () => {
    renderModal();
})

function renderModal() {
    document.body.classList.add('modal-show');

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = 'block';

    const modalWrap = document.createElement('div');
    modalWrap.classList.add('modal-wrap');
    modal.append(modalWrap);

    const modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('modal-backdrop');
    modal.append(modalBackdrop);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalWrap.append(modalContent);

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalContent.append(modalHeader);

    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    modalContent.append(modalBody);

    const modalHeaderTitle = document.createElement('div');
    modalHeaderTitle.classList.add('modal-header-title');
    modalHeaderTitle.innerHTML = 'Add new card';
    modalHeader.append(modalHeaderTitle);

    const modalBtnClose = document.createElement('button');
    modalBtnClose.type = 'button';
    modalBtnClose.classList.add('modal-close');
    modalBtnClose.innerHTML = '×';
    modalHeader.append(modalBtnClose);
    modalBtnClose.addEventListener('click', () => {
        modal.remove();
        document.body.classList.remove('modal-show');
    });

    const modalLabelTitle = document.createElement('label');
    modalLabelTitle.classList.add('modal-label');
    modalLabelTitle.innerHTML = 'Title';
    modalBody.append(modalLabelTitle);

    const modalInputTitle = document.createElement('input');
    modalInputTitle.type = 'text';
    modalInputTitle.classList.add('modal-input');
    modalBody.append(modalInputTitle);

    const modalLabelDate = document.createElement('label');
    modalLabelDate.classList.add('modal-label');
    modalLabelDate.innerHTML = 'Date';
    modalBody.append(modalLabelDate);

    const modalInputDate = document.createElement('input');
    modalInputDate.type = 'text';
    modalInputDate.classList.add('modal-input');
    modalBody.append(modalInputDate);

    const modalLabelCategory = document.createElement('label');
    modalLabelCategory.classList.add('modal-label');
    modalLabelCategory.innerHTML = 'Category';
    modalBody.append(modalLabelCategory);

    const modalSelectCategory = document.createElement('select');
    modalSelectCategory.classList.add('modal-select');
    modalBody.append(modalSelectCategory);

    const modalSelectCategoryOption1 = document.createElement('option');
    modalSelectCategoryOption1.innerHTML = 'Cooking';
    modalSelectCategory.append(modalSelectCategoryOption1);

    const modalSelectCategoryOption2 = document.createElement('option');
    modalSelectCategoryOption2.innerHTML = 'Cooking2';
    modalSelectCategory.append(modalSelectCategoryOption2);

    const modalLabelTextareaDscr = document.createElement('label');
    modalLabelTextareaDscr.classList.add('modal-label');
    modalLabelTextareaDscr.innerHTML = 'Description';
    modalBody.append(modalLabelTextareaDscr);

    const modalTextareaDscr = document.createElement('textarea');
    modalTextareaDscr.classList.add('modal-textarea');
    modalBody.append(modalTextareaDscr);

    const modalLabelListItems = document.createElement('label');
    modalLabelListItems.classList.add('modal-label');
    modalLabelListItems.innerHTML = 'List items';
    modalBody.append(modalLabelListItems);

    const modalItemWrap = document.createElement('div');
    modalItemWrap.classList.add('modal-list-item');
    modalBody.append(modalItemWrap);

    const modalItemBtnAdd = document.createElement('button');
    modalItemBtnAdd.type = 'button';
    modalItemBtnAdd.classList.add('modal-item-btn-plus');
    modalItemBtnAdd.innerHTML = '+';
    modalItemWrap.append(modalItemBtnAdd);
    modalItemBtnAdd.addEventListener('click', () => {
        const modalItemWrap = document.createElement('div');
        modalItemWrap.classList.add('modal-list-item');
        modalBody.append(modalItemWrap);

        const modalItemBtnDelete = document.createElement('button');
        modalItemBtnDelete.type = 'button';
        modalItemBtnDelete.classList.add('modal-item-btn-minus');
        modalItemBtnDelete.innerHTML = '-';
        modalItemWrap.append(modalItemBtnDelete);
        modalItemBtnDelete.addEventListener('click', () => {
            modalItemWrap.remove();
        });

        const modalInputItem = document.createElement('input');
        modalInputItem.type = 'text';
        modalInputItem.classList.add('modal-input');
        modalItemWrap.append(modalInputItem);
    });

    const modalInputItem = document.createElement('input');
    modalInputItem.type = 'text';
    modalInputItem.classList.add('modal-input');
    modalItemWrap.append(modalInputItem);

    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');
    modalContent.append(modalFooter);

    const modalBtnCancel = document.createElement('button');
    modalBtnCancel.type = 'button';
    modalBtnCancel.classList.add('modal-btn-cancel');
    modalBtnCancel.innerHTML = 'Cancel';
    modalFooter.append(modalBtnCancel);
    modalBtnCancel.addEventListener('click', () => {
        modal.remove();
        document.body.classList.remove('modal-show');
    });

    const modalBtnAdd = document.createElement('button');
    modalBtnAdd.type = 'button';
    modalBtnAdd.classList.add('modal-btn-add');
    modalBtnAdd.innerHTML = 'Create event';
    modalFooter.append(modalBtnAdd);
    modalBtnAdd.addEventListener('click', () => {
        const newEvent = {
            'title': modalInputTitle.value,
            'dateTime': modalInputDate.value,
            'category': modalSelectCategory.options[modalSelectCategory.selectedIndex].value,
            'extra': {
                'ingredients': [
                    {
                        "checked": false,
                        "title": "test"
                    }
                ],
                'description': modalTextareaDscr.value,
            },
        };
        createPost(newEvent).then((data) => {
            // console.log('CREATE:', data);
            // data - теж саме що і newEvent, тільки з id.
            addEvent(data);
        });
        modal.remove();
        document.body.classList.remove('modal-show');

    });

    document.body.append(modal);
}

fetch(API_HOST + '/events')
    .then(response => response.json())
    .then(events => {

        events.forEach( event => {
            addEvent(event);
        })
    });

function addEvent(event) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    card.append(cardTitle);

    const cardDate = document.createElement('div');
    cardDate.classList.add('card-data');
    card.append(cardDate);

    const cardCategory = document.createElement('div');
    cardCategory.classList.add('card-category');
    card.append(cardCategory);

    const cardExtra = document.createElement('div');
    cardExtra.classList.add('card-extra');
    card.append(cardExtra);

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('card-description');
    cardExtra.append(cardDescription);

    const cardIngredients = document.createElement('div');
    cardIngredients.classList.add('card-ingredients');
    cardExtra.append(cardIngredients);

    cardDate.innerHTML = event.dateTime;
    cardTitle.innerHTML = event.title;
    cardCategory.innerHTML = event.category;
    cardDescription.innerHTML = event.extra.description;

    event.extra.ingredients.forEach( ingredient => {
        const cardIngredientsLabel = document.createElement('label');
        cardIngredientsLabel.classList.add('card-ingredients-label');

        const cardIngredientsCheckBox = document.createElement('input');
        cardIngredientsCheckBox.type = 'checkbox';
        // cardIngredientsCheckBox.name = 'name';
        cardIngredientsCheckBox.classList.add('card-checkbox');
        cardIngredientsLabel.innerHTML = '<span class="card-ingredients-check-mark"></span>' + ingredient.title;
        cardIngredientsLabel.prepend(cardIngredientsCheckBox);
        cardIngredients.append(cardIngredientsLabel);

        if (ingredient.checked) {
            cardIngredientsCheckBox.checked = true;
        }

    });
    document.body.append(card);
}

