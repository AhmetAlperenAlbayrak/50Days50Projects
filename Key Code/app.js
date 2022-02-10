const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    //Shot hand conditional so if e.key equals empty string then (?) put put space else (:) whatever the key is //
    insert.innerHTML = `
    <div class="key">
            ${event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small>
        </div>

        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
`
} )