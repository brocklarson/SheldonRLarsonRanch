class AttractionCategory{
    constructor(categoryName, categoryDescription, categoryImg, categoryLink, overview){
       this.name = categoryName;
       this.description = categoryDescription;
       this.img = categoryImg;
       this.link = categoryLink;
       this.attractions = [];
       this.overview = overview;
    }

    addAttraction(title, description, shortInfo, img, attractionLink){
        const attraction = new Attraction(title, description, shortInfo, img, attractionLink);
        this.attractions.push(attraction);
    }
}

class Attraction{
    constructor(title, description, shortInfo, img, attractionLink){
        this.name = title;
        this.description = description;
        this.shortInfo = shortInfo;
        this.img = img;
        this.link = attractionLink;
    }
}

//Categories
let categoryName = "ATV";
let categoryDescription = "Being minutes from the world famous Arapeen trail system, you have over 350,000 acres of interconnecting, beautiful mountain trails. From a motorcycle to a side-by-side, bring your ATV and enjoy the endless miles of pristine landscape Sanpete Valley has to offer.";
let categoryImg = {src: "/assetts/images/Activities/001.jpg", alt: "Group of people on ATVs"}
let categoryLink = "./atv"
let overview = `<p>Named after the Ute Indian Chief, the famed Arapeen trail system boasts over 350,000 acres of beautiful ATV trails for ATVs of all sizes. The towns in Sanpete are known as "ATV friendly", meaning you can ride through town (except for on highway 89) on your ATV, giving you the convenience of starting and ending from our cabin doorstep! Read more about our recommended ATV trails below, or if you want more trails to look at, we recommend also looking at this <a href="/assetts/downloadables/arapeen_ohv_trail_map.pdf" target="_blank">free digital map</a> or looking at more free and purchasable trail maps at <a href="http://sanpete.com/pages/atv_map" target="_blank">Sanpete.com</a>.</p><p>PLEASE NOTE: The numbers in the trail recommendations below refer to trail designations on the <a href="/assetts/downloadables/arapeen_ohv_trail_map.pdf" target="_blank">free digital map</a>. Circled numbers indicate an easy trail, whereas a square indicates a moderate trail, and a diamond indicates a difficult trail. The numbers in red circles refer to GPS intersection points given on the map. All of these routes are great single-day rides between 40-60 miles with more information listed on the map itself! We recommend getting the purchasable <a href="https://www.utahatvtrails.org/store/p1/Deluxe_Arapeen_OHV_Trail_Map.html" target="_blank">deluxe map</a> (we have a cabin copy as well!) or exploring <a href="http://sanpete.com/pages/atv" target="_blank">Sanpete.com</a> for more information.</p>`
const atv = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink, overview);

categoryName = "Hiking";
categoryDescription = "With the Manti-Lasal Mountain Range next door, you have some of the best hiking trails in the Rocky Mountains! From waterfalls and panoramic views to deep forest canopies, there are plenty of hiking trails for all ages and skill levels!";
categoryImg = {src: "/assetts/images/Activities/027.jpg", alt: "Maple canyon hike overlook"}
categoryLink = "./hiking"
overview = `<p>There are miles and miles of hiking trails throughout the gorgeous Wasatch Mountain Range. Whether it's to an arch, waterfall, or jaw-dropping panoramic views, there's a hike here for you! From easy to strenous and short to long, we've listed our top recommended hikes in the area! Read more about our recommended hikes below, or if you want more hikes, we recommend also looking at <a href="https://www.alltrails.com/explore?b_tl_lat=39.8992015115692&b_tl_lng=-112.88177490234375&b_br_lat=38.81403111409755&b_br_lng=-110.291748046875" target="_blank">all trails</a> or <a href="https://www.hikingproject.com/directory/8010492/salt-lake-city-and-wasatch-front" target="_blank">hiking project</a>.</p>`;
const hiking = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink, overview);

categoryName = "Rock Climbing";
categoryDescription = "The renowned climbing of Maple Canyon is just minutes away from our cabins! Climbers from around the world come to test their skills on Maple Canyon’s unique cobblestone cliffs. With hundreds of climbs, it's easy to find a climb for everyone from beginner to pro!";
categoryImg = {src: "/assetts/images/Activities/019.jpg", alt: "Person rock climbing"}
categoryLink = "./rock-climbing"
overview = `<p>Climbers travel from all over the world to experience the unique, world-class climbing of Maple Canyon, just minutes away from our cabins! Maple Canyons boasts nearly a thousand climbs on its extraordinary cobblestone walls, with more climbs being put up every year. There are hundreds of climbs for all skill levels! Read more about our recommended climbing areas below, or if you want more crags, we recommend also looking at <a href="https://www.mountainproject.com/area/105739298/maple-canyon" target="_blank">mountain project</a> or <a href="https://www.thecrag.com/climbing/united-states/maple-canyon" target="_blank">thecrag.com</a>.</p>`;
const rockClimbing = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink, overview);

categoryName = "Snowmobiling";
categoryDescription = `Boondocker’s Heaven- If there was ever a place on earth that could lay claim to that title, it would have to be Utah’s Sanpete County" -SnoWest magazine. Enjoy countless miles of untouched powder and bowls that offer some of the best backcountry snowmobiling in the country!`;
categoryImg = {src: "/assetts/images/Activities/004.jpg", alt: "Group on snowmobiles above mountain fog"}
categoryLink = "./snowmobiling"
overview = `<p>"Just once we'd like to ride in an area officially called Boondocker's Heaven. We're talking a place where, when you log on to www.topozone.com and type in Boondocker's Heaven, a specific spot in the snowbelt pops up. We thought we'd ridden in places that can easily be named that - that is, until we did some serious riding in central Utah. Official or not, that is Boondocker's Heaven." -SnoWest Magazine<br><br>Enjoy over 350,000 acres of the greatest snow on Earth. When riding on Skyline Drive in the Wasatch Mountain Range you'll feel like you're on top of the world with views that go on as far as the eye can see. And as spectacular as these views are, the snowmobiling is even better. Read about some of our favorite places to go snowmobiling below, or for other suggestions we recommend also looking at this <a href="/assetts/downloadables/Skyline_Snowmobile_Map.pdf" target="_blank">free digital map</a>, <a href="https://www.visitutah.com/things-to-do/snowmobiling/" target="_blank">VisitUtah.com</a>, or <a href="https://www.snowest.com/2007/01/boondockers-heaven" target="_blank">SnoWest Magazine</a>.</p>`;
const snowmobiling = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink, overview);

categoryName = "Mountain Biking";
categoryDescription = `Have you ever rode a mountain bike over 50 miles at an altitude of nearly 10,000 feet? Skyline Drive has breathtaking views that will expand your outlook on life. Sanpete County offers many single or multi-day adventures for you to enjoy on your bike.`;
categoryImg = {src: "/assetts/images/Activities/mtn_bike_1.jpg", alt: "Person on mountain bike"}
categoryLink = "./mtb"
overview = `<p>From biking over 50 miles at over 10,000 feet on Skyline Drive to amazing single track trails through the Manti-Lasal National Forest, there's hundred of miles of mountain biking trails for all skill levels! Read more about our recommended mountain biking trails below, or if you want more mountain biking trails, we recommend also looking at <a href="https://www.trailforks.com/region/utah/" target="_blank">trail forks</a> or <a href="https://www.mtbproject.com/directory/8010491/utah" target="_blank">MTB project</a>.</p>`;
const mtb = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink, overview);

categoryName = "History";
categoryDescription = `Sanpete’s Heritage is prevalent today with many buildings built in the 1800s. Native American sites, historic buildings, and cultural sites draw history and culture buffs to this area. Spring City (listed as one of the prettiest towns in America by Forbes) is a must see for its history!`;
categoryImg = {src: "/assetts/images/Activities/history_1.jpg", alt: "Historical building"}
categoryLink = "./history"
overview = `<p>Sanpete’s Pioneer Heritage is prevalent today with many rock homes and buildings built in the 1800s. Native American sites, pioneer homesteads, historic buildings, and cultural sites draw history and culture buffs to this area. Read more about our recommended historical sites below, or if you want more sites, we recommend also looking at <a href="http://sanpete.com/pages/historical" target="_blank">Sanpete.com</a>.</p>`;
const history = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink, overview);

categoryName = "Sightseeing";
categoryDescription = `With hundreds of thousands of acres of gorgeous mountain forests, there are more scenic and panoramic views than you can take pictures of! So make sure to clear out your phone storage because we guarantee you will be filling it up with pictures here!`;
categoryImg = {src: "/assetts/images/Activities/010.jpg", alt: "Mountain overlook"}
categoryLink = "./sightseeing"
overview = `<p>The Wasatch Mountain Range that runs through the heart of Sanpete provides an array of gorgeous sites for all to enjoy. From the high panoramic views on top of Skyline drive to the varied scenery along the Mount Nebo scenic drive, you will not be dissapointed with the experience you have here. Although we've listed some of our favorite places for sightseeing, it's worth mentioning that any of our recommendations under the other attractions pages could also be listed under sightseeing. We're serious though, you'll get great views and sites no matter where you go! So read on below for some of our favorite sightseeing locations not listed under other sections, or if you want more sites, we recommend also looking at <a href="http://sanpete.com/pages/drives" target="_blank">Sanpete.com</a> or <a href="https://www.go-utah.com/Sanpete-County/tourism-attractions-sightseeing/" target="_blank">Go-Utah</a>.</p>`;
const sightseeing = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink, overview);

categoryName = "Other Attractions";
categoryDescription = `From state parks to boating and snowkiting, Sanpete valley is a vacation paradise! There is something here for everyone, including a nearly fully intact Columbian mammoth that was unearthed here in 1988, aquatic centers, and old-fashioned drive-in movies with burgers and fries.`;
categoryImg = {src: "/assetts/images/Activities/002.jpg", alt: "Person wakeboarding"}
categoryLink = "./other"
overview = `<p>Sanpete County is an outdoor enthusiasts paradise! But you don't need to bring ATVs or mountain bikes to enjoy everything Sanpete has to offer! In fact, you don't even need to be an outdoorsy person! There are countless activities for you to enjoy with your whole family or group! Below are just a few of our favorite activities, if you want some more activity ideas we recommend also looking at <a href="http://sanpete.com/" target="_blank">Sanpete.com</a> or <a href="https://www.go-utah.com/Sanpete-County/" target="_blank">Go-Utah</a>.</p>`;
const other = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink, overview);


export {atv, hiking, rockClimbing, snowmobiling, mtb, history, sightseeing, other, Attraction}