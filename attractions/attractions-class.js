class AttractionCategory{
    constructor(categoryName, categoryDescription, categoryImg, categoryLink){
       this.name = categoryName;
       this.description = categoryDescription;
       this.img = categoryImg;
       this.link = categoryLink;
       this.attractions = []
    }

    addAttraction(attraction){
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
const atv = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink);

categoryName = "Hiking";
categoryDescription = "With the Manti-Lasal Mountain Range next door, you have some of the best hiking trails in the Rocky Mountains! From waterfalls and panoramic views to deep forest canopies, there are plenty of hiking trails for all ages and skill levels!";
categoryImg = {src: "/assetts/images/Activities/027.jpg", alt: "Maple canyon hike overlook"}
categoryLink = "./hiking"
const hiking = new AttractionCategory(categoryName, categoryDescription, categoryImg, categoryLink);

categoryName = "Rock Climbing";
categoryDescription = "The renowned climbing of Maple Canyon is just minutes away from our cabins! Climbers from around the world come to test their skills on Maple Canyon’s unique cobblestone cliffs. With hundreds of climbs, it's easy to find a climb for everyone from beginner to pro!";
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
categoryLink = "./history"
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

//ATV
let title = "Lake Hill to Jet Fox Res."
let description = `This is our favorite single-day ride up Ephraim canyon with some of the best views we can offer! Start at Lake Hill and finish in Manti and use the back road west of Manti to get to our cabins, or just bring it around for a loop trail!`;
let img = {src: "/assetts/images/Activities/jet-fox.jpg", alt: "Jet Fox Reservoir"}
let shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 48 miles<i class="fas fa-mountain hiking-icon"></i> <span class="square-number">37</span> <span class="square-number-1">3</span> <span class="circle-number red-color">F</span> <span class="square-number">33</span> <span class="square-number">32</span> <span class="square-number-1">3</span></p>`;
let attractionLink = `/assetts/downloadables/arapeen_ohv_trail_map.pdf`;
atv.addAttraction(new Attraction(title, description, shortInfo, img, attractionLink));

title = "Miller's Flat Loop"
description = `This is a fun and easy loop trail up Mt. Pleasant and Fairview canyons that pass by several gorgeous lakes and reservoirs! You will also pass by the Lake Canyon trail system and can explore even more trails in a beautiful part of the forest!`;
img = {src: "/assetts/images/Activities/miller-flat.jpg", alt: "Miller's flat loop"}
shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 58 miles<i class="fas fa-mountain hiking-icon"></i> <span class="circle-number-2">41</span> <span class="circle-number">1</span> <span class="circle-number-2">12</span> <span class="square-number">0014</span> <span class="circle-number-2">51</span> <span class="circle-number red-color">A</span> <span class="circle-number">1</span></p>`;
attractionLink = `/assetts/downloadables/arapeen_ohv_trail_map.pdf`;
atv.addAttraction(new Attraction(title, description, shortInfo, img, attractionLink));

title = "Manti Canyon"
description = `Another one of our favorite loop trails that you can get to straight from our cabins! This loop trail passes through one of the prettiest parts of the Manti-Lasal National Forest and offers amazing panoramic views!`;
img = {src: "/assetts/images/Activities/duck-fork.jpg", alt: "Lake up Manti canyon"}
shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 41 miles<i class="fas fa-mountain hiking-icon"></i> <span class="square-number-1">3</span> <span class="circle-number red-color">F</span> <span class="square-number">73</span> <span class="square-number">72</span> <span class="circle-number red-color">G</span> <span class="square-number-1">3</span></p>`;
attractionLink = `/assetts/downloadables/arapeen_ohv_trail_map.pdf`;
atv.addAttraction(new Attraction(title, description, shortInfo, img, attractionLink));

title = "Julius Flat Loop"
description = `Another one of our favorite loop trails that you can get to straight from our cabins! This loop trail passes through one of the prettiest parts of the Manti-Lasal National Forest and offers amazing panoramic views!`;
img = {src: "/assetts/images/Activities/lake.jpg", alt: "Lake on Julius Flat loop"}
shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 47 miles<i class="fas fa-mountain hiking-icon"></i> <span class="square-number">0022</span> <span class="circle-number red-color">I</span> <span class="circle-number">1</span> <span class="circle-number red-color">J</span> <span class="circle-number">9</span> <span class="square-number">94</span> <span class="circle-number red-color">L</span> <span class="circle-number">1</span> <span class="circle-number red-color">K</span> <span class="square-number">2</span></p>`;
attractionLink = `/assetts/downloadables/arapeen_ohv_trail_map.pdf`;
atv.addAttraction(new Attraction(title, description, shortInfo, img, attractionLink));


export {atv, hiking, rockClimbing, snowmobiling, mtb, history, sightseeing, other}