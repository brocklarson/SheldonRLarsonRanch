const body = document.body;
const navbar_container = document.createElement('div');

const navbar = document.createElement('ul');

const home = document.createElement('li');
const home_a = document.createElement('a');
home_a.href = '/';
home_a.innerHTML = 'Home';

const aboutUs = document.createElement('li');
const aboutUs_a = document.createElement('a');
aboutUs_a.href = '/about-us';
aboutUs_a.innerHTML = 'About Us';

const cabins = document.createElement('li');
const cabins_a = document.createElement('a');
cabins_a.href = '/cabins';
cabins_a.innerHTML = 'Cabins';

const gallery = document.createElement('li');
const gallery_a = document.createElement('a');
gallery_a.href = '/gallery';
gallery_a.innerHTML = 'Gallery';

const availability = document.createElement('li');
const availability_a = document.createElement('a');
availability_a.href = '/availability';
availability_a.innerHTML = 'Availability';

const attractions = document.createElement('li');
const attractions_a = document.createElement('a');
attractions_a.href = '/attractions';
attractions_a.innerHTML = 'Attractions';

const map = document.createElement('li');
const map_a = document.createElement('a');
map_a.href = '/map';
map_a.innerHTML = 'Map';

const contact = document.createElement('li');
const contact_a = document.createElement('a');
contact_a.href = '/contact';
contact_a.innerHTML = 'Contact';

const bookNow = document.createElement('li');
const bookNow_a = document.createElement('a');
bookNow_a.href = '/book-now';
bookNow_a.innerHTML = 'Book Now';

body.prepend(navbar_container);
navbar_container.appendChild(navbar);
navbar.appendChild(home);
    home.appendChild(home_a);
navbar.appendChild(aboutUs);
    aboutUs.appendChild(aboutUs_a);
navbar.appendChild(cabins);
    cabins.appendChild(cabins_a);
navbar.appendChild(gallery);
    gallery.appendChild(gallery_a);
navbar.appendChild(availability);
    availability.appendChild(availability_a);
navbar.appendChild(attractions);
    attractions.appendChild(attractions_a);
navbar.appendChild(map);
    map.appendChild(map_a);
navbar.appendChild(contact);
    contact.appendChild(contact_a);
navbar.appendChild(bookNow);
    bookNow.appendChild(bookNow_a);