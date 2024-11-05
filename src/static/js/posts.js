
const button = document.querySelector('#button')

button.addEventListener('click', () => {
    fetch('/post/create', {

        method: 'POST',

        body: JSON.stringify({
            name: 'ПОСТіііі',
            src: 'https://www.spcdn.org/blog/wp-content/uploads/2021/05/Photo-of-the-day.png',
            price: '1000$',
            description: 'post created',
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
})