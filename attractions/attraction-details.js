const createUI = (attractionsObj) => {
    const container = document.querySelector(".overview-container");
    const attraction = attractionsObj;

    function createDOM(attraction){
        const attractionOverview = document.createElement('div');
        attractionOverview.classList.add('attractions-overview-container');


        //Image Section
        const attractionImage = document.createElement('div');
        attractionImage.classList.add('attractions-overview-image');

        const imgAnchor = document.createElement('a');
        imgAnchor.href = attraction.link;

        const img = document.createElement('img');
        img.src = attraction.img.src;
        img.alt = attraction.img.alt;


        //Text Section
        const attractionText = document.createElement('div');
        attractionText.classList.add('attractions-overview-text');

        const textAnchor = document.createElement('a');
        textAnchor.href = attraction.link;

        const attractionName = document.createElement('h3');
        attractionName.innerText = attraction.name;

        const icons = document.createElement('div');
        icons.innerHTML = attraction.shortInfo;

        const attractionDescription = document.createElement('p');
        attractionDescription.innerText = attraction.description;

        const moreInfoTextContainer = document.createElement('div');
        moreInfoTextContainer.classList.add('more-info-text-container');

        const moreInfoAnchor = document.createElement('a');
        moreInfoAnchor.href = attraction.link;

        const moreInfoText = document.createElement('p');
        moreInfoText.innerText = 'More Info';

        //Form DOM Structure
        container.appendChild(attractionOverview);
        attractionOverview.appendChild(attractionImage);
            attractionImage.appendChild(imgAnchor);
                imgAnchor.appendChild(img);
        attractionOverview.appendChild(attractionText);
            attractionText.appendChild(textAnchor);
                textAnchor.appendChild(attractionName);
            attractionText.appendChild(icons);
            attractionText.appendChild(attractionDescription);
            attractionText.appendChild(moreInfoTextContainer);
                moreInfoTextContainer.appendChild(moreInfoAnchor);
                    moreInfoAnchor.appendChild(moreInfoText);
           
    }

    createDOM(attraction);
};

export { createUI };