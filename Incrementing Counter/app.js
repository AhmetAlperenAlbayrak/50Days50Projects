const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        /*With the plus sign we changed the data type from string to a number */
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200
        
        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter,1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})