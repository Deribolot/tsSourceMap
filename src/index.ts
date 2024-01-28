import hy from './hy';

function component() {
    const element = document.createElement('div');

    element.innerHTML = hy(1);

    return element;
}

document.body.appendChild(component());