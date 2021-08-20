//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", e => {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogs => { 

        const arr = dogs.message;
        arr.forEach(dog => {
            const divEl = document.querySelector('#dog-image-container');
            const newDog = document.createElement('img');
            newDog.src = dog;
            divEl.appendChild(newDog);
        })
    })

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        const dogObj = data.message;
        const ul = document.querySelector('#dog-breeds');
        for(dog in dogObj){
            const li = document.createElement('li');
            li.textContent = dog;
            ul.appendChild(li);

            li.addEventListener('click', () => {
                li.style.color = 'white';
            })
        }
    })
 })