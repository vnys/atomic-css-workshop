import contentTemplate from 'templates/content.hbs';
import contentData from 'data/content.yaml';
import 'normalize.css';
import 'css/styles.css';

import iconData from 'data/icons.yaml';
import iconTemplate from 'templates/icons.hbs';

// import data from './index.json';

export default (() => {

    const div = document.createElement('div');

    div.classList.add('wrapper');

    const icons = iconTemplate(iconData);
    const content = contentTemplate(contentData);

    div.innerHTML = icons + content;

    document.body.appendChild(div);

})();
