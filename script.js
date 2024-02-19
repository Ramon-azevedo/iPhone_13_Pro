

const list = document.querySelectorAll('.list li')

let img = document.getElementById('img3')

list.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        list.forEach((btn) => {
            btn.querySelector('.color').classList.remove('selected')
        })

        const button = e.target;

        const id = button.getAttribute('id');

        button.querySelector('.color').classList.add('selected');

        img.classList.add("changing");
        img.setAttribute('src',`img/iphone_${id}.jpg`)

        setTimeout(() => {
            img.classList.toggle('changing')
        },200);


    });
});



