class Gallery{
    constructor(label, image, link){
        this.label = label;
        this.image = image;
        this.link = link;
    }
}


let label = "Main Cabin";
let image = {src: "/assetts/images/Main-Cabin/001.jpg", alt: "Main Cabin"}
let link = "/gallery/main-cabin";
const mainCabin = new Gallery(label, image, link);

label = "Guest Cabin";
image = {src: "/assetts/images/Guest-Cabin/001.jpg", alt: "Guest Cabin"}
link = "/gallery/guest-cabin";
const guestCabin = new Gallery(label, image, link);

label = "Courtyard";
image = {src: "/assetts/images/Courtyard/001.jpg", alt: "Courtyard"}
link = "/gallery/courtyard";
const courtyard = new Gallery(label, image, link);

label = "Events";
image = {src: "/assetts/images/Events/001.jpg", alt: "Events"}
link = "/gallery/events";
const events = new Gallery(label, image, link);

label = "Activities";
image = {src: "/assetts/images/Activities/001.jpg", alt: "Activities"}
link = "/gallery/main-cabin";
const activities = new Gallery(label, image, link);

label = "Ranch";
image = {src: "/assetts/images/Ranch/001.jpg", alt: "The Ranch"}
link = "/gallery/main-cabin";
const ranch = new Gallery(label, image, link);

const galleries = [mainCabin, guestCabin, courtyard, events, activities, ranch];

export { galleries };