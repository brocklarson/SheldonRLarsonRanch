import { createUI } from "../attraction-details.js";
import { hiking } from "../attractions-class.js";


let title = "Milky Falls Trail"
let description = `This is a very easy hike with a gorgeous cascading waterfall in some of the prettiest parts of the mountain. I recommend combining this hike with several ATV or mountain biking trails in the area.`;
let img = {src: "/SheldonRLarsonRanch/assets/images/Activities/022.jpg", alt: "Milky falls waterfall"}
let shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 0.2 miles<i class="fas fa-mountain hiking-icon"></i> 36 feet <span class="hiking-difficulty easy-hike">&#9679;</span> Easy</p>`;
let attractionLink = `https://www.alltrails.com/trail/us/utah/milky-falls`;
hiking.addAttraction(title, description, shortInfo, img, attractionLink);


title = "Maple Canyon Loop Trail"
description = `Clear out your phone storage for this hike because I guarantee you'll fill it up with pictures! This hike has it all, an arch, 360° panoramic views, and a cave. This hike is a must do!`;
img = {src: "/SheldonRLarsonRanch/assets/images/Activities/027.jpg", alt: "Maple Canyon Overlook"}
shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 2.7 miles<i class="fas fa-mountain hiking-icon"></i> 1,299 feet <span class="hiking-difficulty moderate-hike">&#9632;</span> Moderate</p>`;
attractionLink = `https://www.alltrails.com/trail/us/utah/maple-canyon-loop-trail--3`;
hiking.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Box Canyon Trail"
description = `A unique cobblestone slot canyon with a waterfall and a few boulders to scramble over make this hike unbelievably fun! This is a great short hike to combine with the Maple Canyon Loop Trail.`;
img = {src: "/SheldonRLarsonRanch/assets/images/Activities/006.jpg", alt: "Box canyon slot canyon trail"}
shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 1.2 miles<i class="fas fa-mountain hiking-icon"></i> 462 feet <span class="hiking-difficulty moderate-hike">&#9632;</span> Moderate</p>`;
attractionLink = `https://www.alltrails.com/trail/us/utah/maples-box-canyon-trail`;
hiking.addAttraction(title, description, shortInfo, img, attractionLink);

title = "South Tent Mtn Summit"
description = `South Tent Mtn is the high point in Sanpete county and makes for a gorgeous hike with views of the entire valley! You can turn this into a 7 mile loop with North Tent Mtn or into an even shorter 2 mile hike!`;
img = {src: "/SheldonRLarsonRanch/assets/images/Activities/south-tent-mountain_1.png", alt: "South tent mountain summit"}
shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 4.2 miles<i class="fas fa-mountain hiking-icon"></i> 1,059 feet <span class="hiking-difficulty moderate-hike">&#9632;</span> Moderate</p>`;
attractionLink = `https://www.alltrails.com/trail/us/utah/south-tent-mountain-summit-from-skyline-drive`;
hiking.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Mount Nebo Summit"
description = `Mt Nebo is the highest peak in the Wasatch Range at a staggering 11,929 feet! There are several trails to the summit (this one likely being the most difficult, but also the most beautiful and our favorite)!`;
img = {src: "/SheldonRLarsonRanch/assets/images/Activities/023.jpg", alt: "Mount Nebo summit trail"}
shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 8.8 miles<i class="fas fa-mountain hiking-icon"></i> 5,728 feet <span class="hiking-difficulty difficult-hike">&#9670;</span> Difficult</p>`;
attractionLink = `https://www.alltrails.com/trail/us/utah/andrews-ridge-to-mt-nebo-south-peak`;
hiking.addAttraction(title, description, shortInfo, img, attractionLink);

createUI(hiking);

