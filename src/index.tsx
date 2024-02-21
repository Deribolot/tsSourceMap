import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.less';

import App from '@/App';

let domNode = document.getElementById('root');

if (!domNode) {
    domNode = document.createElement('div');
    domNode.id = 'root';
    document.body.appendChild(domNode);
}

const root = createRoot(domNode);
root.render(<App />);