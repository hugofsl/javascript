function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function clicar(){
    const [x, y, z] = [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
    document.getElementById('botao').style.backgroundColor = `rgb(${x}, ${y}, ${z})`;

    const button = document.getElementById('container');
    const randomDirection = getRandomInt(0, 4);
    const moveDistance = 50;

    switch(randomDirection) {
        case 0:
            button.style.transform = `translateX(${moveDistance}px)`;
            break;
        case 1:
            button.style.transform = `translateX(-${moveDistance}px)`;
            break;
        case 2:
            button.style.transform = `translateY(${moveDistance}px)`;
            break;
        case 3:
            button.style.transform = `translateY(-${moveDistance}px)`;
            break;
    }
}