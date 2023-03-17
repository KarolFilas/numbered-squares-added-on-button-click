let div
const btn = document.querySelector('button')
let count = 0;

const addDiv = () => {
    div = document.createElement('div')
    document.body.append(div)
    console.log('check');
    count += 1
    div.textContent = count
    if (count % 5 === 0) {
        div.classList.add('five')
    }
}

btn.addEventListener('click', addDiv)