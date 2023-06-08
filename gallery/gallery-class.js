class Gallery{
    constructor(label, thumbnail, link, images){
        this.label = label;
        this.thumbnail = thumbnail;
        this.link = link;
        this.images = images;
    }
}


let label = "Main Cabin";
let thumbnail = {src: "/assetts/images/Main-Cabin/001.jpg", alt: "Main Cabin"}
let link = "/gallery/main-cabin";
let images = [
    {src: "/assetts/images/Main-Cabin/001.jpg", alt: "Main Cabin"},
    {src: "/assetts/images/Main-Cabin/002.jpg", alt: "Main cabin living room"},
    {src: "/assetts/images/Main-Cabin/003.jpg", alt: "Main cabin living room"},
    {src: "/assetts/images/Main-Cabin/004.jpg", alt: "Main cabin kitchen"},
    {src: "/assetts/images/Main-Cabin/005.jpg", alt: "Main cabin kitchen"},
    {src: "/assetts/images/Main-Cabin/006.jpg", alt: "Main cabin master bedroom"},
    {src: "/assetts/images/Main-Cabin/007.jpg", alt: "Main cabin loft"},
    {src: "/assetts/images/Main-Cabin/008.jpg", alt: "Main cabin loft"},
    {src: "/assetts/images/Main-Cabin/009.jpg", alt: "Main cabin office area"},
    {src: "/assetts/images/Main-Cabin/010.jpg", alt: "Guest book"},
    {src: "/assetts/images/Main-Cabin/011.jpg", alt: "Main cabin heirloom"},
    {src: "/assetts/images/Main-Cabin/012.jpg", alt: "Main cabin heirloom"},
    {src: "/assetts/images/Main-Cabin/013.jpg", alt: "Main cabin heirloom"},
]
const mainCabin = new Gallery(label, thumbnail, link, images);

label = "Guest Cabin";
thumbnail = {src: "/assetts/images/Guest-Cabin/001.jpg", alt: "Guest Cabin"}
link = "/gallery/guest-cabin";
const guestCabin = new Gallery(label, thumbnail, link, images);

label = "Courtyard";
thumbnail = {src: "/assetts/images/Courtyard/001.jpg", alt: "Courtyard"}
link = "/gallery/courtyard";
const courtyard = new Gallery(label, thumbnail, link, images);

label = "Events";
thumbnail = {src: "/assetts/images/Events/001.jpg", alt: "Events"}
link = "/gallery/events";
const events = new Gallery(label, thumbnail, link, images);

label = "Activities";
thumbnail = {src: "/assetts/images/Activities/001.jpg", alt: "Activities"}
link = "/gallery/main-cabin";
const activities = new Gallery(label, thumbnail, link, images);

label = "Ranch";
thumbnail = {src: "/assetts/images/Ranch/001.jpg", alt: "The Ranch"}
link = "/gallery/main-cabin";
const ranch = new Gallery(label, thumbnail, link, images);

const galleries = [mainCabin, guestCabin, courtyard, events, activities, ranch];

export { galleries };