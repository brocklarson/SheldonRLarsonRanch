import { createUI } from "../attraction-details.js";
import { mtb } from "../attractions-class.js";


let title = "Skyline Drive"
let description = `Skyline Drive is the perfect route if you're looking for an all day, not overly strenuous bike ride with some of the most gorgeous panoramic views around. Biking at the top of the mountain at over 10,000 feet makes this trail a must do!`;
let img = {src: "/assets/images/Activities/skyline-drive.jpg", alt: "View from the top of skyline drive in Sanpete, Utah"}
let shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 74 miles<i class="fas fa-mountain hiking-icon"></i> &#177;6,819 feet <span class="hiking-difficulty moderate-hike">&#9632;</span> Moderate</p>`;
let attractionLink = `https://www.trailforks.com/trails/skyline-drive-81188/`;
mtb.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Pioneer Bike Trail"
description = `This is an incredibly fun, primarily downhill singletrack trail that takes you through the thick of the forest and over wooden bridges with breathtaking views. We recommend combining this trail with the Flume trail below.`;
img = {src: "/assets/images/Activities/mtb.jpg", alt: "Bridge crossing on the pioneer bike trail in the arapeen trail system"}
shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 3 miles<i class="fas fa-mountain hiking-icon"></i> -1,442 feet <span class="hiking-difficulty difficult-hike">&#9670;</span> Difficult</p>`;
attractionLink = `https://www.trailforks.com/trails/pioneer-10808/`;
mtb.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Flume Trail"
description = `This is a fun trail that starts flat and then is downhill on a windy dirt singletrack path. There are a few jumps on the sides for the adventurous spirit as well! Most people will combine this with the Pioneer Trail above.`;
img = {src: "/assets/images/Activities/008.jpg", alt: "ledge crossing on the flume trail in ephraim utah"}
shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 2 miles<i class="fas fa-mountain hiking-icon"></i> -869 feet <span class="hiking-difficulty difficult-hike">&#9670;</span> Difficult</p>`;
attractionLink = `https://www.trailforks.com/trails/flume/`;
mtb.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Black Hills Area"
description = `The Black Hills Area is a fun area with around 50 different intersecting trails ranging from about 1 mile to 4 miles and from easy to difficult! You can combine the trails to make it as long or short as you need!`;
img = {src: "/assets/images/Activities/black-hills_1.jpg", alt: "black hills mountain biking area in Sanpete, Utah"}
shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 1~4 miles<i class="fas fa-mountain hiking-icon"></i> &#177;500 feet <span class="hiking-difficulty moderate-hike">&#9632;</span> Moderate</p>`;
attractionLink = `https://www.trailforks.com/region/black-hill-ephraim-19666`;
mtb.addAttraction(title, description, shortInfo, img, attractionLink);

createUI(mtb);

