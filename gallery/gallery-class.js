class Gallery{
    constructor(label, thumbnail, link, images){
        this.label = label;
        this.thumbnail = thumbnail;
        this.link = link;
        this.images = images;
    }
}


let label = "Main Cabin";
let thumbnail = {src: "/SheldonRLarsonRanch/assets/images/Main-Cabin/001.jpg", alt: "Main Cabin"}
let link = "/gallery/main-cabin";
let images = [
    {src: "/SheldonRLarsonRanch/assets/images/Main-Cabin/001.jpg", alt: "Main Cabin"},
    {src: "/SheldonRLarsonRanch/assets/images/Main-Cabin/002.jpg", alt: "Main cabin living room"},
    {src: "/SheldonRLarsonRanch/assets/images/Main-Cabin/003.jpg", alt: "Main cabin living room"},
    {src: "/SheldonRLarsonRanch/assets/images/Main-Cabin/004.jpg", alt: "Main cabin kitchen"},
    {src: "/SheldonRLarsonRanch/assets/images/Main-Cabin/005.jpg", alt: "Main cabin kitchen"},
    {src: "/SheldonRLarsonRanch/assets/images/Main-Cabin/006.jpg", alt: "Main cabin master bedroom"},
    {src: "/SheldonRLarsonRanch/assets/images/Main-Cabin/007.jpg", alt: "Main cabin loft"},
    {src: "/SheldonRLarsonRanch/assets/images/Main-Cabin/008.jpg", alt: "Main cabin loft"},
    {src: "/SheldonRLarsonRanch/assets/images/Main-Cabin/009.jpg", alt: "Main cabin office area"},
    {src: "/SheldonRLarsonRanch/assets/images/Main-Cabin/010.jpg", alt: "Main cabin bathroom"},
    {src: "/SheldonRLarsonRanch/assets/images/Main-Cabin/011.jpg", alt: "Guest book"},
    {src: "/SheldonRLarsonRanch/assets/images/Main-Cabin/012.jpg", alt: "Main cabin heirloom"},
    {src: "/SheldonRLarsonRanch/assets/images/Main-Cabin/013.jpg", alt: "Main cabin heirloom"},
    {src: "/SheldonRLarsonRanch/assets/images/Main-Cabin/014.jpg", alt: "Main cabin heirloom"}
];
const mainCabin = new Gallery(label, thumbnail, link, images);

label = "Guest Cabin";
thumbnail = {src: "/SheldonRLarsonRanch/assets/images/Guest-Cabin/001.jpg", alt: "Guest Cabin"}
link = "/gallery/guest-cabin";
images = [
    {src: "/SheldonRLarsonRanch/assets/images/Guest-Cabin/001.jpg", alt: "Guest Cabin"},
    {src: "/SheldonRLarsonRanch/assets/images/Guest-Cabin/002.jpg", alt: "Guest cabin "},
    {src: "/SheldonRLarsonRanch/assets/images/Guest-Cabin/003.jpg", alt: "Guest cabin living room"},
    {src: "/SheldonRLarsonRanch/assets/images/Guest-Cabin/004.jpg", alt: "Guest cabin living room"},
    {src: "/SheldonRLarsonRanch/assets/images/Guest-Cabin/005.jpg", alt: "Guest cabin master bedroom"},
    {src: "/SheldonRLarsonRanch/assets/images/Guest-Cabin/006.jpg", alt: "Guest cabin kitchen"},
    {src: "/SheldonRLarsonRanch/assets/images/Guest-Cabin/007.jpg", alt: "Guest cabin loft"},
    {src: "/SheldonRLarsonRanch/assets/images/Guest-Cabin/008.jpg", alt: "Guest cabin main floor with ladder to loft"},
    {src: "/SheldonRLarsonRanch/assets/images/Guest-Cabin/009.jpg", alt: "Guest cabin bathroom"},
    {src: "/SheldonRLarsonRanch/assets/images/Guest-Cabin/010.jpg", alt: "Guest cabin bathroom"},
    {src: "/SheldonRLarsonRanch/assets/images/Guest-Cabin/011.jpg", alt: "Guest cabin heirloom"},
    {src: "/SheldonRLarsonRanch/assets/images/Guest-Cabin/012.jpg", alt: "Guest cabin heirloom"},
    {src: "/SheldonRLarsonRanch/assets/images/Guest-Cabin/013.jpg", alt: "Guest cabin heirloom"},
    {src: "/SheldonRLarsonRanch/assets/images/Guest-Cabin/014.jpg", alt: "Guest cabin heirloom"},
];
const guestCabin = new Gallery(label, thumbnail, link, images);

label = "Courtyard";
thumbnail = {src: "/SheldonRLarsonRanch/assets/images/Courtyard/001.jpg", alt: "Courtyard"}
link = "/gallery/courtyard";
images = [
    {src: "/SheldonRLarsonRanch/assets/images/Courtyard/001.jpg", alt: "Front patio for main and guest cabin with outdoor fire pit"},
    {src: "/SheldonRLarsonRanch/assets/images/Courtyard/002.jpg", alt: "Antique wagon in backyard behin main and guest cabins"},
    {src: "/SheldonRLarsonRanch/assets/images/Courtyard/003.jpg", alt: "Backyard area behind guest cabin"},
    {src: "/SheldonRLarsonRanch/assets/images/Courtyard/004.jpg", alt: "Handmade gate leading to front patio"},
    {src: "/SheldonRLarsonRanch/assets/images/Courtyard/005.jpg", alt: "Horshoe pit with guest cabin in background"},
    {src: "/SheldonRLarsonRanch/assets/images/Courtyard/006.jpg", alt: "Utah century farm and ranch sign"},
    {src: "/SheldonRLarsonRanch/assets/images/Courtyard/007.jpg", alt: "Handmade gate leading to property"},
    {src: "/SheldonRLarsonRanch/assets/images/Courtyard/008.jpg", alt: "View of guest cabin from balcony"}
];
const courtyard = new Gallery(label, thumbnail, link, images);

label = "Events";
thumbnail = {src: "/SheldonRLarsonRanch/assets/images/Events/001.jpg", alt: "Events"}
link = "/gallery/events";
images = [
    {src: "/SheldonRLarsonRanch/assets/images/Events/001.jpg", alt: "Couple dancing at wedding at sunset"},
    {src: "/SheldonRLarsonRanch/assets/images/Events/002.jpg", alt: "Backyard area setup for wedding reception"},
    {src: "/SheldonRLarsonRanch/assets/images/Events/003.jpg", alt: "Couple dancing at wedding"},
    {src: "/SheldonRLarsonRanch/assets/images/Events/004.jpg", alt: "Entire party dancing at wedding with couple in the center"},
    {src: "/SheldonRLarsonRanch/assets/images/Events/005.jpg", alt: "Decorative hutch for wedding"},
    {src: "/SheldonRLarsonRanch/assets/images/Events/006.jpg", alt: "Group playing volleyball"},
    {src: "/SheldonRLarsonRanch/assets/images/Events/007.jpg", alt: "Group playing games up mountains near the cabins"}
];
const events = new Gallery(label, thumbnail, link, images);

label = "Activities";
thumbnail = {src: "/SheldonRLarsonRanch/assets/images/Activities/001.jpg", alt: "Activities"}
link = "/gallery/activities";
images = [
    {src: "/SheldonRLarsonRanch/assets/images/Activities/001.jpg", alt: "Group on ATVs up Ephraim canyon near our ranch"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/002.jpg", alt: "Person wakeboarding at Gunnison resrvoir"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/003.jpg", alt: "Columbian mammoth at nearby history museum"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/004.jpg", alt: "Group snomobiling up Ephraim canyon above the fog"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/005.jpg", alt: "People rock climbing at pipedream climbing area in Maple canyon"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/006.jpg", alt: "Box canyon hike in Maple canyon"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/007.jpg", alt: "Milky Falls up Manti Canyon"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/008.jpg", alt: "Mountain biking singletrack trail"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/009.jpg", alt: "People on ATVs going through stream"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/010.jpg", alt: "Panoramic view from top of Ephraim canyon"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/011.jpg", alt: "Sunset near aspen grove at the top of Ephraim canyon"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/012.jpg", alt: "Basin Drive-in theater sign"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/013.jpg", alt: "Custom decorated car at Ed-Roth museum"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/014.jpg", alt: "Historic home in Spring City"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/015.jpg", alt: "Historic cabin in Spring City"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/016.jpg", alt: "Historic home in Spring City"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/017.jpg", alt: "Historic home in Ephraim"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/018.jpg", alt: "Woman waterskiing at Gunnison reservoir"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/019.jpg", alt: "Person rock climbing over ledge"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/020.jpg", alt: "Cascading waterfalls up Epraim canyon"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/021.jpg", alt: "Scenic view at top of Ephraim canyon"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/022.jpg", alt: "Cascading waterfall"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/023.jpg", alt: "Trail to the top of mount nebo through grove of trees"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/024.jpg", alt: "Field of sunflowers on mount nebo trail"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/025.jpg", alt: "Panoramic view of top of the mountain near Ephraim Utah"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/026.jpg", alt: "Sunrise at the top of Ephraim canyon"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/027.jpg", alt: "Panoramic view of maple canyon from the top of the maple canyon middle fork trail"},
    {src: "/SheldonRLarsonRanch/assets/images/Activities/028.jpg", alt: "ATV and biking trail along skyline drive in Sanpete Utah"}
];
const activities = new Gallery(label, thumbnail, link, images);

label = "Ranch";
thumbnail = {src: "/SheldonRLarsonRanch/assets/images/Ranch/001.jpg", alt: "The Ranch"}
link = "/gallery/ranch";
images = [
    {src: "/SheldonRLarsonRanch/assets/images/Ranch/001.jpg", alt: "View of the ranch from the balcony of the main cabin"},
    {src: "/SheldonRLarsonRanch/assets/images/Ranch/002.jpg", alt: "Several bulls that live on our working ranch"},
    {src: "/SheldonRLarsonRanch/assets/images/Ranch/003.jpg", alt: "Several bulls in pasture on our working ranch"},
    {src: "/SheldonRLarsonRanch/assets/images/Ranch/004.jpg", alt: "Farm truck with water tank"},
    {src: "/SheldonRLarsonRanch/assets/images/Ranch/005.jpg", alt: "Antique John Deere tractor"},
    {src: "/SheldonRLarsonRanch/assets/images/Ranch/006.jpg", alt: "The ranch and cabins at wintertimes"},
];
const ranch = new Gallery(label, thumbnail, link, images);

const galleries = [mainCabin, guestCabin, courtyard, events, activities, ranch];

export { galleries };