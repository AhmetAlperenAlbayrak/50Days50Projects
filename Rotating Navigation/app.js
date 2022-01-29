const opened = document.getElementById("open")
const closed = document.getElementById('close')
const containers = document.querySelector('.container')

opened.addEventListener('click', () => containers.classList.add('show-nav'))

closed.addEventListener('click', () => containers.classList.remove('show-nav'))