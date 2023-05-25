class AttractionCategory{
    constructor(categoryName, categoryDescription, categoryImg, categoryLink){
       this.name = categoryName;
       this.description = categoryDescription;
       this.img = categoryImg;
       this.link = categoryLink;
    }
}

let categoryName = "ATV";
let categoryDescription = "Being minutes from the world famous Arapeen trail system, you have over 350,000 acres of interconnecting, beautiful mountain trails. From a motorcycle to a side-by-side, bring your ATV and enjoy the endless miles of pristine landscape Sanpete Valley has to offer.";
let categoryImg = {src: "/assetts/images/Activities/001.jpg", alt: "Group of people on ATVs"}
let categoryLink = "./atv"
const atv = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink);

categoryName = "Hiking";
categoryDescription = "With the Manti-Lasal Mountain Range next door, you have some of the best hiking trails in the Rocky Mountains! From waterfalls and panoramic views to deep forest canopies, there are plenty of hiking trails for all ages and skill levels!";
categoryImg = {src: "/assetts/images/Activities/027.jpg", alt: "Maple canyon hike overlook"}
categoryLink = "./hiking"
const hiking = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink);

categoryName = "Rock Climbing";
categoryDescription = "The renowned climbing of Maple Canyon is just minutes away from our cabins! Climbers from around the world come to test their skills on Maple Canyon’s unique cobblestone cliffs. With hundreds of climbs, it's easy to find a climb for everyone from novice to Alex Honnold!";
categoryImg = {src: "/assetts/images/Activities/019.jpg", alt: "Person rock climbing"}
categoryLink = "./rock-climbing"
const rockClimbing = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink);

categoryName = "Snowmobiling";
categoryDescription = `Boondocker’s Heaven- If there was ever a place on earth that could lay claim to that title, it would have to be Utah’s Sanpete County" -SnoWest magazine. Enjoy countless miles of untouched powder and bowls that offer some of the best backcountry snowmobiling in the country!`;
categoryImg = {src: "/assetts/images/Activities/004.jpg", alt: "Group on snowmobiles above mountain fog"}
categoryLink = "./snowmobiling"
const snowmobiling = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink);

categoryName = "Mountain Biking";
categoryDescription = `Have you ever rode a mountain bike over 50 miles at an altitude of nearly 10,000 feet? Skyline Drive has breathtaking views that will expand your outlook on life. Sanpete County offers many single or multi-day adventures for you to enjoy on your bike.`;
categoryImg = {src: "/assetts/images/Activities/mtn_bike_1.jpg", alt: "Person on mountain bike"}
categoryLink = "./mtb"
const mtb = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink);

categoryName = "History";
categoryDescription = `Sanpete’s Heritage is prevalent today with many buildings built in the 1800s. Native American sites, historic buildings, and cultural sites draw history and culture buffs to this area. Spring City (listed as one of the prettiest towns in America by Forbes) is a must see for its history!`;
categoryImg = {src: "/assetts/images/Activities/history_1.jpg", alt: "Historical building"}
categoryLink = "./mtb"
const history = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink);

categoryName = "Sightseeing";
categoryDescription = `With hundreds of thousands of acres of gorgeous mountain forests, there are more scenic and panoramic views than you can take pictures of! So make sure to clear out your phone storage because we guarantee you will be filling it up with pictures here!`;
categoryImg = {src: "/assetts/images/Activities/010.jpg", alt: "Mountain overlook"}
categoryLink = "./sightseeing"
const sightseeing = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink);

categoryName = "Other Attractions";
categoryDescription = `From state parks to boating and snowkiting, Sanpete valley is a vacation paradise! There is something here for everyone, including a nearly fully intact Columbian mammoth that was unearthed here in 1988, aquatic centers, and old-fashioned drive-in movies with burgers and fries.`;
categoryImg = {src: "/assetts/images/Activities/002.jpg", alt: "Person wakeboarding"}
categoryLink = "./other"
const other = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink);

export {atv, hiking, rockClimbing, snowmobiling, mtb, history, sightseeing, other}