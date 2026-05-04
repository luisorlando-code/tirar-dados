const dado = document.querySelector('.dado');
const botonTirar = document.querySelector('.tirar');

const dadoAleatorio = () => {
    const aleatorio = Math.floor(Math.random() * 10);
    if (aleatorio >= 1 && aleatorio <= 6) {
        tirarDado(aleatorio);
    } else {
        dadoAleatorio();
    }
};

const tirarDado = numero => {
    dado.style.animation = 'girando 4s';

    setTimeout(() => {
        switch (numero) {
            case 1:
                dado.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
            case 6:
                dado.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
            case 2:
                dado.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
            case 5:
                dado.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            case 3:
                dado.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
            case 4:
                dado.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
            default:
                break;
        }

        dado.style.animation = 'none';

    }, 4050);
};

botonTirar.addEventListener('click', dadoAleatorio);