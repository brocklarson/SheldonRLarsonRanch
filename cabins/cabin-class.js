class Cabins{
    constructor(cabinName, location, people, beds, baths, kitchen, parking, pets, night_price, week_price, mainImg, link, description, amenities, imgs, tagline){
       this.name = cabinName; 
       this.location = location;
       this.people = people;
       this.beds = beds;
       this.baths = baths;
       this.kitchen = kitchen;
       this.parking = parking;
       this.pets = pets;
       this.night_price = night_price;
       this.week_price = week_price;
       this.mainImg = mainImg;
       this.link = link;
       this.description = description;
       this.amenities = amenities;
       this.imgs = imgs;
       this.tagline = tagline;
    }
}


let cabinName = "Main Cabin";
let location = "Ephraim, UT";
let people = 6;
let beds = 4;
let baths = 1; 
let kitchen = "Full Kitchen";
let parking = "Off-Street Parking";
let pets = "Pets Allowed*";
let night_price = 129;
let week_price = 775;
let mainImg = {src: "/assets/images/Main-Cabin/002.jpg", alt: "Main cabin living room"};
let link = "./main-cabin";  
let description = `<p>The main cabin has a master bedroom with a king-sized bed on the ground floor. On the ground floor this is also a full kitchen and dining room, living room with a TV, and bathroom with a large jacuzzi style tub and shower! There is also a large loft area, accessible by ladder stairs, which overlooks the living room and has 3 beds (a queen and 2 single-sized beds), balcony access, and plenty of extra room!</p>
<p>The spacious accommodations of the ranch offer plenty of parking for all the toys (RV, Campers, trailers, etc). There is a beautiful lawn for tent camping and large groups. Horse corrals are available for boarding if desired. Both are available with prior arrangement and additional camping/boarding fees.</p>
<p>Enjoy quiet peaceful nights on the patio next to the firepit after a day of four-wheeling, snowmobiling, hiking, fishing, horseback riding or sightseeing in the nearby Manti-La Sal National Forest. Experience easy access to the hundreds of ATV trails in the Arapeen trail system accessible from your front doorstep.</p>
<p>Conveniently located near Ephraim and Manti, it is the gateway to the Manti-La Sal National Forest and other local attractions for both outdoor adventurists and those who want to enjoy the many quaint historical sites the Sanpete Valley has to offer.</p>`;
let amenities = ["A/C", "Washer/Dryer", "Fridge/Freezer", "Oven/Stove", "Dishwasher", "Microwave", "Kitchenware", "Coffee Maker", "Gas BBQ Grill", "Master Bedroom: 1 King", "Loft: 1 Queen, 2 Singles", "Linens", "Jacuzzi Tub/Shower", "Balcony Access", "Outdoor Firepit/Wood", "Board Games", "Horshoe Pit", "Rv/Vehicle Parking", "Courtyard Seating Area", "Wheelchair Accessible Entrance", "Satellite TV", "Fire Extinguisher"];
let imgs = [
    {src: "/assets/images/Main-Cabin/001.jpg", alt: "Main cabin"},
    {src: "/assets/images/Courtyard/001.jpg", alt: "View of cabins from courtyard"},
    {src: "/assets/images/Main-Cabin/002.jpg", alt: "Main cabin living room"},
    {src: "/assets/images/Main-Cabin/003.jpg", alt: "Main cabin living room"},
    {src: "/assets/images/Main-Cabin/004.jpg", alt: "Main cabin kitchen"},
    {src: "/assets/images/Main-Cabin/005.jpg", alt: "Main cabin kitchen"},
    {src: "/assets/images/Main-Cabin/006.jpg", alt: "Main cabin master bedroom"},
    {src: "/assets/images/Main-Cabin/007.jpg", alt: "Main cabin loft"},
    {src: "/assets/images/Main-Cabin/008.jpg", alt: "Main cabin loft"},
    {src: "/assets/images/Main-Cabin/009.jpg", alt: "Main cabin desk area"},
    {src: "/assets/images/Main-Cabin/011.jpg", alt: "Main cabin heirloom"},
    {src: "/assets/images/Courtyard/002.jpg", alt: "Back area behind cabins"},
    {src: "/assets/images/Courtyard/003.jpg", alt: "Backyard behind cabins"},
    {src: "/assets/images/Main-Cabin/012.jpg", alt: "Main cabin heirloom"},
    {src: "/assets/images/Main-Cabin/013.jpg", alt: "Main cabin heirloom"},
    {src: "/assets/images/Main-Cabin/014.jpg", alt: "Main cabin heirloom"},
    {src: "/assets/images/Courtyard/006.jpg", alt: "Utah century farm & ranch homestead"},
    {src: "/assets/images/Ranch/001.jpg", alt: "View of ranch"},
    {src: "/assets/images/Main-Cabin/010.jpg", alt: "Guest book"},

];
let tagline = "Plenty of room for the entire family in this Country Cabin rental!";
const mainCabin = new Cabins(cabinName, location, people, beds, baths, kitchen, parking, pets, night_price, week_price, mainImg, link, description, amenities, imgs, tagline);

cabinName = "Guest Cabin";
location = "Ephraim, UT";
people = 4;
beds = 2;
baths = 1; 
kitchen = "Full Kitchen";
parking = "Off-Street Parking";
pets = "Pets Allowed*";
night_price = 99;
week_price = 600;
mainImg = {src: "/assets/images/Guest-Cabin/003.jpg", alt: "Guest cabin living room"};
link = "./guest-cabin";  
description = `<p>The guest cabin has a studio style setup on the ground floor. The ground floor has a queen-sized bed, a full kitchen, and living room. There is also a loft area, accessible by ladder stairs, which overlooks the living room and has another queen bed and balcony access! The shower and bathroom are separated from the cabin, located about 25 feet from the guest cabin under a covered front porch! We know this seems odd for some people but we've found that it's really just like a walk down the hall to the bathroom except this time with unbeatable stargazing! </p>
<p>The spacious accommodations of the ranch offer plenty of parking for all the toys (RV, Campers, trailers, etc). There is a beautiful lawn for tent camping and large groups. Horse corrals are available for boarding if desired. Both are available with prior arrangement and additional camping/boarding fees.</p>
<p>Enjoy quiet peaceful nights on the patio next to the firepit after a day of four-wheeling, snowmobiling, hiking, fishing, horseback riding or sightseeing in the nearby Manti-La Sal National Forest. Experience easy access to the hundreds of ATV trails in the Arapeen trail system accessible from your front doorstep.</p>
<p>Conveniently located near Ephraim and Manti, it is the gateway to the Manti-La Sal National Forest and other local attractions for both outdoor adventurists and those who want to enjoy the many quaint historical sites the Sanpete Valley has to offer.</p>`;
amenities = ["A/C", "Washer/Dryer", "Fridge/Freezer", "Oven/Stove", "Dishwasher", "Microwave", "Kitchenware", "Coffee Maker", "Gas BBQ Grill", "Master Bedroom: 1 Queen", "Loft: 2 Queens, 1 Crib", "Linens", "Shower", "Balcony Access", "Outdoor Firepit/Wood", "Board Games", "Horshoe Pit", "Rv/Vehicle Parking", "Courtyard Seating Area", "Wheelchair Accessible Entrance", "Satellite TV", "Fire Extinguisher"];
imgs = [
    {src: "/assets/images/Guest-Cabin/001.jpg", alt: "Guest cabin"},
    {src: "/assets/images/Courtyard/001.jpg", alt: "View of cabins from courtyard"},
    {src: "/assets/images/Guest-Cabin/002.jpg", alt: "Guest cabin"},
    {src: "/assets/images/Guest-Cabin/003.jpg", alt: "Guest cabin living room"},
    {src: "/assets/images/Guest-Cabin/004.jpg", alt: "Guest cabin living room"},
    {src: "/assets/images/Guest-Cabin/005.jpg", alt: "Guest cabin bedroom"},
    {src: "/assets/images/Guest-Cabin/006.jpg", alt: "Guest cabin kitchen"},
    {src: "/assets/images/Guest-Cabin/007.jpg", alt: "Guest cabin loft"},
    {src: "/assets/images/Guest-Cabin/008.jpg", alt: "Guest cabin loft access"},
    {src: "/assets/images/Guest-Cabin/009.jpg", alt: "Guest cabin bathroom"},
    {src: "/assets/images/Guest-Cabin/010.jpg", alt: "Guest cabin bathroom"},
    {src: "/assets/images/Courtyard/002.jpg", alt: "Back area behind cabins"},
    {src: "/assets/images/Courtyard/003.jpg", alt: "Backyard behind cabins"},
    {src: "/assets/images/Guest-Cabin/011.jpg", alt: "Guest cabin heirloom"},
    {src: "/assets/images/Guest-Cabin/012.jpg", alt: "Main cabin heirloom"},
    {src: "/assets/images/Guest-Cabin/013.jpg", alt: "Guest cabin heirloom"},
    {src: "/assets/images/Guest-Cabin/014.jpg", alt: "Guest cabin photo wall"},
    {src: "/assets/images/Courtyard/006.jpg", alt: "Utah century farm & ranch homestead"},
    {src: "/assets/images/Ranch/001.jpg", alt: "View of ranch"}
];
tagline = "A great getaway for a small family in this Country Cabin rental!";
const guestCabin = new Cabins(cabinName, location, people, beds, baths, kitchen, parking, pets, night_price, week_price, mainImg, link, description, amenities, imgs, tagline);

cabinName = "Both Cabins Discount";
location = "Ephraim, UT";
people = 10;
beds = 6;
baths = 2; 
kitchen = "Full Kitchen";
parking = "Off-Street Parking";
pets = "Pets Allowed*";
night_price = 200;
week_price = 1200;
mainImg = {src: "/assets/images/Courtyard/001.jpg", alt: "View of cabins from courtyard area"};
link = "./main-cabin";  
description = "";
amenities = [];
imgs = [];
tagline = "";
const bothCabins = new Cabins(cabinName, location, people, beds, baths, kitchen, parking, pets, night_price, week_price, mainImg, link, description, amenities, imgs, tagline);

export {mainCabin, guestCabin, bothCabins};