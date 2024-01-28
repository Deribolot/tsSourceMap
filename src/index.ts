import hy from './hy';
import  './index.less';

function component() {
    const element = document.createElement('div');
element.classList.add('main');

    const header = document.createElement('h1');
    header.append(hy(1));

    element.appendChild(header);
    element.append(hy(2));

    return element;
}

document.body.appendChild(component());