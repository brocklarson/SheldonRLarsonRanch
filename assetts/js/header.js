const body = document.body;
const navbar_container = document.createElement('header');

const title = document.createElement('div');
title.classList.add('left-menu');
const title_a = document.createElement('a');
title_a.href = '/'
const title_image = document.createElement('img');
title_image.src = '/assetts/icons/logo_title.svg'

const navbar = document.createElement('div');
navbar.classList.add('right-menu');
const chevron = document.createElement('img');
chevron.src = '/assetts/icons/chevron-down-small.svg';

const home = document.createElement('a');
home.href = '/';
home.innerHTML = 'Home';

const aboutUs = document.createElement('a');
aboutUs.href = '/about-us';
aboutUs.innerHTML = 'About Us';

const cabins = document.createElement('a');
cabins.href = '/cabins';
cabins.innerHTML = 'Cabins&nbsp;' + chevron.outerHTML;
cabins.classList.add('dropdown-toggle');

const cabins_dropdown = document.createElement('div');
cabins_dropdown.classList.add('dropdown');
const main_cabin = document.createElement('a');
main_cabin.innerHTML = 'Main Cabin';
main_cabin.href = '/cabins/main-cabin';
const guest_cabin = document.createElement('a');
guest_cabin.innerHTML = 'Guest Cabin';
guest_cabin.href = '/cabins/guest-cabin';
const events = document.createElement('a');
events.innerHTML = 'Events';
events.href = '/cabins/events';

const gallery = document.createElement('a');
gallery.href = '/gallery';
gallery.innerHTML = 'Gallery';

const availability = document.createElement('a');
availability.href = '/availability';
availability.innerHTML = 'Availability';

const attractions = document.createElement('a');
attractions.href = '/attractions';
attractions.innerHTML = 'Attractions&nbsp;' + chevron.outerHTML;
attractions.classList.add('dropdown-toggle');

const attractions_dropdown = document.createElement('div');
attractions_dropdown.classList.add('dropdown');
const atv = document.createElement('a');
atv.innerHTML = 'ATV';
atv.href = '/attractions/atv';
const hiking = document.createElement('a');
hiking.innerHTML = 'Hiking';
hiking.href = '/attractions/hiking';
const rock_climbing = document.createElement('a');
rock_climbing.innerHTML = 'Rock Climbing';
rock_climbing.href = '/attractions/rock-climbing';
const snowmobiling = document.createElement('a');
snowmobiling.innerHTML = 'Snowmobiling';
snowmobiling.href = '/attractions/snowmobiling';
const mtb = document.createElement('a');
mtb.innerHTML = 'Mtn Biking';
mtb.href = '/attractions/mtb';
const hist = document.createElement('a');
hist.innerHTML = 'History';
hist.href = '/attractions/history';
const sightseeing = document.createElement('a');
sightseeing.innerHTML = 'Sightseeing';
sightseeing.href = '/attractions/sightseeing';
const other = document.createElement('a');
other.innerHTML = 'Other';
other.href = '/attractions/other';

const map = document.createElement('a');
map.href = '/map';
map.innerHTML = 'Map';

const contact = document.createElement('a');
contact.href = '/contact';
contact.innerHTML = 'Contact';

const bookNow = document.createElement('a');
bookNow.id = 'book-now-nav';
bookNow.href = '/book-now';
bookNow.innerHTML = 'Book Now';

body.prepend(navbar_container);
navbar_container.appendChild(title);
    title.appendChild(title_a);
        title_a.appendChild(title_image);
navbar_container.appendChild(navbar);
    navbar.appendChild(home);
    navbar.appendChild(aboutUs);
    navbar.appendChild(cabins);
        cabins.appendChild(cabins_dropdown);
            cabins_dropdown.appendChild(main_cabin);
            cabins_dropdown.appendChild(guest_cabin);
            cabins_dropdown.appendChild(events);
    navbar.appendChild(gallery);
    navbar.appendChild(availability);
    navbar.appendChild(attractions);
        attractions.appendChild(attractions_dropdown);
            attractions_dropdown.appendChild(atv);
            attractions_dropdown.appendChild(hiking);
            attractions_dropdown.appendChild(rock_climbing);
            attractions_dropdown.appendChild(snowmobiling);
            attractions_dropdown.appendChild(mtb);
            attractions_dropdown.appendChild(hist);
            attractions_dropdown.appendChild(sightseeing);
            attractions_dropdown.appendChild(other);
    navbar.appendChild(map);
    navbar.appendChild(contact);
    navbar.appendChild(bookNow);