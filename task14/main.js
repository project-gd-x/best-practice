// fetch('http://127.0.0.1:8082/db.json')
//     .then(response => response.json())
//     .then(commits => console.log(commits));


// function post(collection, data) {
//     fetch('http://localhost:3000/' + collection, {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify(data)
//     })
//         .then(function (response) {
//             if (!response.ok) {
//                 return new Error(response.statusText)
//             }
//             return response.json()
//         })
//
//         .then((data) => {
//             console.log('data',data);
//         })
//         .catch(function (error) {
//             console.log('error', error)
//         })
// }
//
// function createPost(postObject) {
//     post('posts', postObject);
// }
//
// function createComment(commentObject) {
//     post('comments', commentObject);
// }
//
// createPost({ name: 'Ivan', title: 'Hi there' });
// createComment({ name: 'Ivan', text: 'Hi there' });

// Web Components
// - templates
// - custom elements
// - shadow dom

fetch('http://localhost:3000/events')
    .then(response => response.json())
    .then(json => {

        json.forEach( event => {
            const card = document.createElement('div');
            card.classList.add('card');

            const cardTitle = document.createElement('div');
            cardTitle.classList.add('card-title');
            card.appendChild(cardTitle);

            const cardDate = document.createElement('div');
            cardDate.classList.add('card-data');
            card.appendChild(cardDate);

            const cardCategory = document.createElement('div');
            cardCategory.classList.add('card-category');
            const cardExtra = document.createElement('div');
            cardExtra.classList.add('card-extra');
            const cardIngredients = document.createElement('div');
            cardIngredients.classList.add('card-ingredients');
            const cardDescription = document.createElement('div');
            cardDescription.classList.add('card-description');
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
                cardIngredientsLabel.innerHTML = '<span class="card-ingredients-check-mark"></span>' + ingredient.title + ' ' + ingredient.checked;

                if (ingredient.checked) {
                    console.log('cardIngredientsCheckBox', cardIngredientsCheckBox);
                    cardIngredientsCheckBox.checked = true;
                }


                card.appendChild(cardCategory);
                card.appendChild(cardExtra);
                cardExtra.appendChild(cardDescription);
                cardExtra.appendChild(cardIngredients);
                cardIngredientsLabel.prepend(cardIngredientsCheckBox);
                cardIngredients.appendChild(cardIngredientsLabel);

            });
            document.body.appendChild(card);
        })
    });


// const cardTemplate = document.getElementById('card-template');
// console.log(cardTemplate.content);
// document.body.append(cardTemplate.content)
