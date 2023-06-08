import { galleries } from './gallery-class.js';

const galleryModule = (() => {

    function createOverviewDOM(gallery){
        const grid = document.querySelector('.gallery-overview-grid');

        const gridArea = document.createElement('div');
        gridArea.classList.add('grid-area');

        const anchor = document.createElement('a');
        anchor.href = gallery.link;

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('gallery-image-container');

        const image = document.createElement('img');
        image.src = gallery.thumbnail.src;
        image.alt = gallery.thumbnail.alt;

        const labelContainer = document.createElement('div');
        labelContainer.classList.add('gallery-label-container');

        const labelText = document.createElement('p');
        labelText.innerText = gallery.label;
        
        grid.appendChild(gridArea);
            gridArea.appendChild(anchor);
                anchor.appendChild(imgContainer);
                    imgContainer.appendChild(image);
                anchor.appendChild(labelContainer);
                    labelContainer.appendChild(labelText);
    }

    galleries.forEach(gallery => {
        createOverviewDOM(gallery);
    });
})();

