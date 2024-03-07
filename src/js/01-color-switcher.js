function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

function changeBackgroundColor() {

    document.body.style.backgroundColor = getRandomHexColor();
    timeout = setTimeout(changeBackgroundColor, 1000);
    
}

function pause() {
    clearTimeout(timeout)
    timeout = null
}
    


document.querySelector('button[data-start]').addEventListener('click', function() {
    this.disabled = true;
    document.querySelector('button[data-stop]').disabled = false;
    changeBackgroundColor();
});

document.querySelector('button[data-stop]').addEventListener('click', function() {
    this.disabled = true;
    document.querySelector('button[data-start]').disabled = false;
    pause();
});