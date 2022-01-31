// with querySelectorAll method we get all the letters from the label tag as a node.
const labels = document.querySelectorAll('.form-control label');

//We have the node list so we could use forEach method
labels.forEach(label => {
    // We get all the letters from the node. now we split them.
    label.innerHTML = label.innerText
    // split method puts the letters into an array.
    .split('')
    // we could use map on an array to turn into something else.
    // We added transition-delay to the span so the letters have a Wave effect
    .map((letter, idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
    // join method with an empty string turns the array back into a string
    .join('')
})