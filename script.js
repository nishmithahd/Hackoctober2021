const loader = document.querySelector('.bg')
const content = document.querySelector('.content')

window.addEventListener('load', function() {
    // loader.parentElement.appendChild(fade)
    loader.parentElement.removeChild(loader)
})
