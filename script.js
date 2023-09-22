var button = document.getElementById('generate')

button.addEventListener('click', function() {
    var min = parseInt(document.getElementById('min').value)
    var max = parseInt(document.getElementById('max').value)

    let result = Math.floor(Math.random() * (max - min + 1)) + min

    document.querySelector('#result > span').textContent = result
}
) 

