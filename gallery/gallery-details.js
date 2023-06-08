const createUI = (gallery) => {
    const container = document.querySelector('.gallery-specific-container');
    const grid = document.querySelector('.gallery-specific-grid');
    
    (function setTitle(){
        const title = document.createElement('h1');
        title.innerText = gallery.label;
        container.prepend(title);  
    })();

    function createOverviewDOM(galleryImage){
        const anchor = document.createElement('a');
        anchor.href = galleryImage.src;
        anchor.setAttribute("data-lightbox","mygallery");
        
        const image = document.createElement('img');
        image.src = galleryImage.src;
        image.alt = galleryImage.alt;

        grid.appendChild(anchor);
        anchor.appendChild(image);
    }


    gallery.images.forEach(image => {
        createOverviewDOM(image);
    });    
};

export { createUI };