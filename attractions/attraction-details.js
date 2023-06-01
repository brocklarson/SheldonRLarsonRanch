const createUI = (attractionCategory) => {
    const container = document.querySelector(".overview-container");

    function expandMenu(){
        const overviewContainer = document.querySelector(".attractions-overview-info-text");
        const moreInfo = document.querySelector(".attractions-overview-more-info p");

        overviewContainer.classList.toggle("expand");
        if(moreInfo.innerText === "More Info") moreInfo.innerText = "Less Info";
        else moreInfo.innerText = "More Info";
    }

    function createAttractionsOverview(attraction){
        const overview = document.createElement('div');
        overview.classList.add('attractions-overview-info');

        const title = document.createElement('h1');
        title.innerText = attraction.name;

        const info = document.createElement('div');
        info.classList.add('attractions-overview-info-text');
        info.innerHTML = attraction.overview;

        const moreInfoTextContainer = document.createElement('div');
        moreInfoTextContainer.classList.add('attractions-overview-more-info');

        const moreInfoText = document.createElement('p');
        moreInfoText.innerText = 'More Info';

        container.appendChild(overview);
        overview.appendChild(title);
        overview.appendChild(info);
        overview.appendChild(moreInfoTextContainer);
        moreInfoTextContainer.appendChild(moreInfoText);

        moreInfoTextContainer.addEventListener('click', expandMenu);
    }

    function createAttractionsDOM(attraction){
        const attractionOverview = document.createElement('div');
        attractionOverview.classList.add('attractions-overview-container');


        //Image Section
        const attractionImage = document.createElement('div');
        attractionImage.classList.add('attractions-overview-image');

        const imgAnchor = document.createElement('a');
        imgAnchor.href = attraction.link;
        imgAnchor.target = "_blank";

        const img = document.createElement('img');
        img.src = attraction.img.src;
        img.alt = attraction.img.alt;


        //Text Section
        const attractionText = document.createElement('div');
        attractionText.classList.add('attractions-overview-text');

        const textAnchor = document.createElement('a');
        textAnchor.href = attraction.link;
        textAnchor.target = "_blank";

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
        moreInfoAnchor.target = "_blank";

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

    createAttractionsOverview(attractionCategory);
    attractionCategory.attractions.forEach(attraction => {
        createAttractionsDOM(attraction);
    });
};

export { createUI };