import hy from './hy';
import './index.less';
import img from './1.jpg';

function component() {
    const element = document.createElement('div');
    element.classList.add('main');

    const header = document.createElement('h1');
    header.append(hy(1));

    const image = new Image();
    image.src = img;

    element.appendChild(header);
    element.appendChild(image);
    element.append(hy(2));

    return element;
}

document.body.appendChild(component());