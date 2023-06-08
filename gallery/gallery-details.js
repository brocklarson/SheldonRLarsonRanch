const createUI = (gallery) => {
    const container = document.querySelector('.gallery-specific-grid');

    function createOverviewDOM(galleryImage){
        const anchor = document.createElement('a');
        anchor.href = galleryImage.src;
        anchor.setAttribute("data-lightbox","mygallery");
        
        const image = document.createElement('img');
        image.src = galleryImage.src;
        image.alt = galleryImage.alt;

        container.appendChild(anchor);
        anchor.appendChild(image);
    }


    gallery.images.forEach(image => {
        createOverviewDOM(image);
    });    
};

export { createUI };