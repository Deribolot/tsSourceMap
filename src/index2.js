import hy from './hy';
import img from './2.png';

function component() {
    const element = document.createElement('div');

    element.innerHTML = hy(2);

    const image = new Image();
    image.src = img;

    element.appendChild(image);

    return element;
}

document.body.appendChild(component());