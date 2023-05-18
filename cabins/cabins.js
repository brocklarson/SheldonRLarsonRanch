class Cabins{
    constructor(name, location, people, beds, baths, kitchen, parking, pets, night_price, week_price, img, link){
       this.name = name; 
       this.location = location;
       this.people = people;
       this.beds = beds;
       this.baths = baths;
       this.kitchen = kitchen;
       this.parking = parking;
       this.pets = pets;
       this.night_price = night_price;
       this.week_price = week_price;
       this.img = img;
       this.link = link;
    }
}

const mainCabin = new Cabins("Main Cabin", "Ephraim, UT", 6, 4, 1, "Full Kitchen", "Off-Street Parking", "Pets Allowed*", 129, 775, "/assetts/images/Main-Cabin/001.jpg", "./main-cabin");
const guestCabin = new Cabins("Guest Cabin", "Ephraim, UT", 4, 2, 1, "Full Kitchen", "Off-Street Parking", "Pets Allowed*", 99, 600, "/assetts/images/Guest-Cabin/001.jpg" ,"./guest-cabin");
const bothCabins = new Cabins("Both Cabins Discount", "Ephraim, UT", 10, 6, 2, "Full Kitchen", "Off-Street Parking", "Pets Allowed*", 200, 1200, "/assetts/images/Courtyard/001.jpg", "./main-cabin");

const createUI = (cabinObj) => {
    const container = document.querySelector(".overview-container");
    const cabin = cabinObj;

    function createDOM(cabin){
        const cabinOverview = document.createElement('div');
        cabinOverview.classList.add('cabins-overview-container');


        //Image Section
        const cabinImage = document.createElement('div');
        cabinImage.classList.add('cabins-overview-image');

        const imgAnchor = document.createElement('a');
        imgAnchor.href = cabin.link;

        const img = document.createElement('img');
        img.src = cabin.img;


        //Text Section
        const cabinText = document.createElement('div');
        cabinText.classList.add('cabins-overview-text');

        const textAnchor = document.createElement('a');
        textAnchor.href = cabin.link;

        const cabinName = document.createElement('h3');
        cabinName.innerText = cabin.name;

        const location = document.createElement('p');
        location.innerText = cabin.location;
        const locationIcon = document.createElement('i');
        locationIcon.classList.add("fas", "fa-map-marker-alt", "cabin-overview-icon");

        const cabinInfo = document.createElement('div');
        cabinInfo.classList.add('cabins-overview-info');

        const textSection1 = document.createElement('div');
        textSection1.classList.add('cabin-overview-text-section1');

        const peopleText = document.createElement('p');
        peopleText.innerText = cabin.people + ' persons';
        const peopleIcon = document.createElement('i');
        peopleIcon.classList.add("fas", "fa-user-friends", "cabin-overview-icon", "cabin-overview-icon-right");

        const bedsText = document.createElement('p');
        bedsText.innerText = cabin.beds + ' bedrooms';
        const bedsIcon = document.createElement('i');
        bedsIcon.classList.add("fas", "fa-bed", "cabin-overview-icon", "cabin-overview-icon-right");

        const bathText = document.createElement('p');
        bathText.innerText = cabin.beds + ' bathrooms';
        const bathIcon = document.createElement('i');
        bathIcon.classList.add("fas", "fa-bath", "cabin-overview-icon", "cabin-overview-icon-right");

        const textSection2 = document.createElement('div');
        textSection2.classList.add('cabin-overview-text-section2');

        const kitchenText = document.createElement('p');
        kitchenText.innerText = ' ' + cabin.kitchen;
        const kitchenIcon = document.createElement('img');
        kitchenIcon.src = '/assetts/icons/fridge.svg';
        kitchenIcon.height="16";
        kitchenIcon.width="25";
        kitchenIcon.alt="fridge icon";
        kitchenIcon.classList.add("fridge-icon");

        const parkingText = document.createElement('p');
        parkingText.innerText = cabin.parking;
        const parkingIcon = document.createElement('i');
        parkingIcon.classList.add("fas", "fa-car", "cabin-overview-icon", "cabin-overview-icon-right");

        const petsText = document.createElement('p');
        petsText.innerText = cabin.pets;
        const petsIcon = document.createElement('i');
        petsIcon.classList.add("fas", "fa-paw", "cabin-overview-icon", "cabin-overview-icon-right");

        const moreInfoTextContainer = document.createElement('div');
        moreInfoTextContainer.classList.add('more-info-text-container');

        const moreInfoAnchor = document.createElement('a');
        moreInfoAnchor.href = cabin.link;

        const moreInfoText = document.createElement('p');
        moreInfoText.innerText = 'More Info';
        
        //Price Section
        const cabinPrice = document.createElement('div');
        cabinPrice.classList.add('cabins-overview-price');

        const nightlyPrice = document.createElement('p');
        nightlyPrice.innerText = ' /night';
        const nightlyPriceSpan = document.createElement('span');
        nightlyPriceSpan.innerText = '$' + cabin.night_price;

        const weeklyPrice = document.createElement('p');
        weeklyPrice.innerText = ' /week';
        const weeklyPriceSpan = document.createElement('span');
        weeklyPriceSpan.innerText = '$' + cabin.week_price;

        //Form DOM Structure
        container.appendChild(cabinOverview);
        cabinOverview.appendChild(cabinImage);
            cabinImage.appendChild(imgAnchor);
                imgAnchor.appendChild(img);
        cabinOverview.appendChild(cabinText);
            cabinText.appendChild(textAnchor);
                textAnchor.appendChild(cabinName);
            cabinText.appendChild(location);
                location.prepend(locationIcon);
            cabinText.appendChild(cabinInfo);
                cabinInfo.appendChild(textSection1);
                    textSection1.appendChild(peopleText);
                        peopleText.prepend(peopleIcon);
                    textSection1.appendChild(bedsText);
                        bedsText.prepend(bedsIcon);
                    textSection1.appendChild(bathText);
                        bathText.prepend(bathIcon);
            cabinText.appendChild(cabinInfo);
                cabinInfo.appendChild(textSection2);
                    textSection2.appendChild(kitchenText);
                        kitchenText.prepend(kitchenIcon);
                    textSection2.appendChild(parkingText);
                        parkingText.prepend(parkingIcon);
                    textSection2.appendChild(petsText);
                        petsText.prepend(petsIcon);
            cabinText.appendChild(moreInfoTextContainer);
                moreInfoTextContainer.appendChild(moreInfoAnchor);
                    moreInfoAnchor.appendChild(moreInfoText)
        cabinOverview.appendChild(cabinPrice);
            cabinPrice.appendChild(nightlyPrice);
                nightlyPrice.prepend(nightlyPriceSpan);
            cabinPrice.appendChild(weeklyPrice);
                weeklyPrice.prepend(weeklyPriceSpan);
    }

    createDOM(cabin);
};

createUI(mainCabin);