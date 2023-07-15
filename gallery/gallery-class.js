class Gallery{
    constructor(label, thumbnail, link, images){
        this.label = label;
        this.thumbnail = thumbnail;
        this.link = link;
        this.images = images;
    }
}


let label = "Main Cabin";
let thumbnail = {src: "/assets/images/Main-Cabin/001.jpg", alt: "Main Cabin"}
let link = "/gallery/main-cabin";
let images = [
    {src: "/assets/images/Main-Cabin/001.jpg", alt: "Main Cabin"},
    {src: "/assets/images/Main-Cabin/002.jpg", alt: "Main cabin living room"},
    {src: "/assets/images/Main-Cabin/003.jpg", alt: "Main cabin living room"},
    {src: "/assets/images/Main-Cabin/004.jpg", alt: "Main cabin kitchen"},
    {src: "/assets/images/Main-Cabin/005.jpg", alt: "Main cabin kitchen"},
    {src: "/assets/images/Main-Cabin/006.jpg", alt: "Main cabin master bedroom"},
    {src: "/assets/images/Main-Cabin/007.jpg", alt: "Main cabin loft"},
    {src: "/assets/images/Main-Cabin/008.jpg", alt: "Main cabin loft"},
    {src: "/assets/images/Main-Cabin/009.jpg", alt: "Main cabin office area"},
    {src: "/assets/images/Main-Cabin/010.jpg", alt: "Main cabin bathroom"},
    {src: "/assets/images/Main-Cabin/011.jpg", alt: "Guest book"},
    {src: "/assets/images/Main-Cabin/012.jpg", alt: "Main cabin heirloom"},
    {src: "/assets/images/Main-Cabin/013.jpg", alt: "Main cabin heirloom"},
    {src: "/assets/images/Main-Cabin/014.jpg", alt: "Main cabin heirloom"}
];
const mainCabin = new Gallery(label, thumbnail, link, images);

label = "Guest Cabin";
thumbnail = {src: "/assets/images/Guest-Cabin/001.jpg", alt: "Guest Cabin"}
link = "/gallery/guest-cabin";
images = [
    {src: "/assets/images/Guest-Cabin/001.jpg", alt: "Guest Cabin"},
    {src: "/assets/images/Guest-Cabin/002.jpg", alt: "Guest cabin "},
    {src: "/assets/images/Guest-Cabin/003.jpg", alt: "Guest cabin living room"},
    {src: "/assets/images/Guest-Cabin/004.jpg", alt: "Guest cabin living room"},
    {src: "/assets/images/Guest-Cabin/005.jpg", alt: "Guest cabin master bedroom"},
    {src: "/assets/images/Guest-Cabin/006.jpg", alt: "Guest cabin kitchen"},
    {src: "/assets/images/Guest-Cabin/007.jpg", alt: "Guest cabin loft"},
    {src: "/assets/images/Guest-Cabin/008.jpg", alt: "Guest cabin main floor with ladder to loft"},
    {src: "/assets/images/Guest-Cabin/009.jpg", alt: "Guest cabin bathroom"},
    {src: "/assets/images/Guest-Cabin/010.jpg", alt: "Guest cabin bathroom"},
    {src: "/assets/images/Guest-Cabin/011.jpg", alt: "Guest cabin heirloom"},
    {src: "/assets/images/Guest-Cabin/012.jpg", alt: "Guest cabin heirloom"},
    {src: "/assets/images/Guest-Cabin/013.jpg", alt: "Guest cabin heirloom"},
    {src: "/assets/images/Guest-Cabin/014.jpg", alt: "Guest cabin heirloom"},
];
const guestCabin = new Gallery(label, thumbnail, link, images);

label = "Courtyard";
thumbnail = {src: "/assets/images/Courtyard/001.jpg", alt: "Courtyard"}
link = "/gallery/courtyard";
images = [
    {src: "/assets/images/Courtyard/001.jpg", alt: "Front patio for main and guest cabin with outdoor fire pit"},
    {src: "/assets/images/Courtyard/002.jpg", alt: "Antique wagon in backyard behin main and guest cabins"},
    {src: "/assets/images/Courtyard/003.jpg", alt: "Backyard area behind guest cabin"},
    {src: "/assets/images/Courtyard/004.jpg", alt: "Handmade gate leading to front patio"},
    {src: "/assets/images/Courtyard/005.jpg", alt: "Horshoe pit with guest cabin in background"},
    {src: "/assets/images/Courtyard/006.jpg", alt: "Utah century farm and ranch sign"},
    {src: "/assets/images/Courtyard/007.jpg", alt: "Handmade gate leading to property"},
    {src: "/assets/images/Courtyard/008.jpg", alt: "View of guest cabin from balcony"}
];
const courtyard = new Gallery(label, thumbnail, link, images);

label = "Events";
thumbnail = {src: "/assets/images/Events/001.jpg", alt: "Events"}
link = "/gallery/events";
images = [
    {src: "/assets/images/Events/001.jpg", alt: "Couple dancing at wedding at sunset"},
    {src: "/assets/images/Events/002.jpg", alt: "Backyard area setup for wedding reception"},
    {src: "/assets/images/Events/003.jpg", alt: "Couple dancing at wedding"},
    {src: "/assets/images/Events/004.jpg", alt: "Entire party dancing at wedding with couple in the center"},
    {src: "/assets/images/Events/005.jpg", alt: "Decorative hutch for wedding"},
    {src: "/assets/images/Events/006.jpg", alt: "Group playing volleyball"},
    {src: "/assets/images/Events/007.jpg", alt: "Group playing games up mountains near the cabins"}
];
const events = new Gallery(label, thumbnail, link, images);

label = "Activities";
thumbnail = {src: "/assets/images/Activities/001.jpg", alt: "Activities"}
link = "/gallery/activities";
images = [
    {src: "/assets/images/Activities/001.jpg", alt: "Group on ATVs up Ephraim canyon near our ranch"},
    {src: "/assets/images/Activities/002.jpg", alt: "Person wakeboarding at Gunnison resrvoir"},
    {src: "/assets/images/Activities/003.jpg", alt: "Columbian mammoth at nearby history museum"},
    {src: "/assets/images/Activities/004.jpg", alt: "Group snomobiling up Ephraim canyon above the fog"},
    {src: "/assets/images/Activities/005.jpg", alt: "People rock climbing at pipedream climbing area in Maple canyon"},
    {src: "/assets/images/Activities/006.jpg", alt: "Box canyon hike in Maple canyon"},
    {src: "/assets/images/Activities/007.jpg", alt: "Milky Falls up Manti Canyon"},
    {src: "/assets/images/Activities/008.jpg", alt: "Mountain biking singletrack trail"},
    {src: "/assets/images/Activities/009.jpg", alt: "People on ATVs going through stream"},
    {src: "/assets/images/Activities/010.jpg", alt: "Panoramic view from top of Ephraim canyon"},
    {src: "/assets/images/Activities/011.jpg", alt: "Sunset near aspen grove at the top of Ephraim canyon"},
    {src: "/assets/images/Activities/012.jpg", alt: "Basin Drive-in theater sign"},
    {src: "/assets/images/Activities/013.jpg", alt: "Custom decorated car at Ed-Roth museum"},
    {src: "/assets/images/Activities/014.jpg", alt: "Historic home in Spring City"},
    {src: "/assets/images/Activities/015.jpg", alt: "Historic cabin in Spring City"},
    {src: "/assets/images/Activities/016.jpg", alt: "Historic home in Spring City"},
    {src: "/assets/images/Activities/017.jpg", alt: "Historic home in Ephraim"},
    {src: "/assets/images/Activities/018.jpg", alt: "Woman waterskiing at Gunnison reservoir"},
    {src: "/assets/images/Activities/019.jpg", alt: "Person rock climbing over ledge"},
    {src: "/assets/images/Activities/020.jpg", alt: "Cascading waterfalls up Epraim canyon"},
    {src: "/assets/images/Activities/021.jpg", alt: "Scenic view at top of Ephraim canyon"},
    {src: "/assets/images/Activities/022.jpg", alt: "Cascading waterfall"},
    {src: "/assets/images/Activities/023.jpg", alt: "Trail to the top of mount nebo through grove of trees"},
    {src: "/assets/images/Activities/024.jpg", alt: "Field of sunflowers on mount nebo trail"},
    {src: "/assets/images/Activities/025.jpg", alt: "Panoramic view of top of the mountain near Ephraim Utah"},
    {src: "/assets/images/Activities/026.jpg", alt: "Sunrise at the top of Ephraim canyon"},
    {src: "/assets/images/Activities/027.jpg", alt: "Panoramic view of maple canyon from the top of the maple canyon middle fork trail"},
    {src: "/assets/images/Activities/028.jpg", alt: "ATV and biking trail along skyline drive in Sanpete Utah"}
];
const activities = new Gallery(label, thumbnail, link, images);

label = "Ranch";
thumbnail = {src: "/assets/images/Ranch/001.jpg", alt: "The Ranch"}
link = "/gallery/ranch";
images = [
    {src: "/assets/images/Ranch/001.jpg", alt: "View of the ranch from the balcony of the main cabin"},
    {src: "/assets/images/Ranch/002.jpg", alt: "Several bulls that live on our working ranch"},
    {src: "/assets/images/Ranch/003.jpg", alt: "Several bulls in pasture on our working ranch"},
    {src: "/assets/images/Ranch/004.jpg", alt: "Farm truck with water tank"},
    {src: "/assets/images/Ranch/005.jpg", alt: "Antique John Deere tractor"},
    {src: "/assets/images/Ranch/006.jpg", alt: "The ranch and cabins at wintertimes"},
];
const ranch = new Gallery(label, thumbnail, link, images);

const galleries = [mainCabin, guestCabin, courtyard, events, activities, ranch];

export { galleries };