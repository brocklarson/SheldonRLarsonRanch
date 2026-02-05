import { createUI } from "../attraction-details.js";
import { rockClimbing } from "../attractions-class.js";


let title = "Schoolroom Area"
let description = `Between this and neighboring "Road Kill Wall", there are plenty of climbs in the easy to moderate skill level! This is a popular climbing area minutes away from the main parking area in the canyon!`;
let img = {src: "/SheldonRLarsonRanch/assets/images/Activities/schoolroom_1.jpg", alt: "kids climbing at schoolroom climbing area in maple canyon"}
let shortInfo = `<p><i class="fas fa-mountain hiking-icon-left"></i> 15+ Climbs<span class="hiking-difficulty easy-hike">&#9679;</span> Easy<i class="fas fa-star hiking-icon"></i> 5.4~5.10</p>`;
let attractionLink = `https://www.mountainproject.com/area/105739554/schoolroom-area`;
rockClimbing.addAttraction(title, description, shortInfo, img, attractionLink);


title = "Fast Food Joint"
description = `The Fast Food Joint is an easier climbing area that's less crowded than The Schoolroom. It's a great little climbing area just off the road, but with enough vegetation to not feel like you're so close to the road!`;
img = {src: "/SheldonRLarsonRanch/assets/images/Activities/fast-food-joint_1.jpg", alt: "climbing wall at fast food joint in maply canyon"}
shortInfo = `<p><i class="fas fa-mountain hiking-icon-left"></i> 16 Climbs<span class="hiking-difficulty easy-hike">&#9679;</span> Easy<i class="fas fa-star hiking-icon"></i> 5.6~5.10</p>`;
attractionLink = `https://www.mountainproject.com/area/112781208/fast-food-joint`;
rockClimbing.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Orangutan Wall"
description = `Orangutan Wall consists of some of the longest routes in Maple Canyon with the unique cobblestone climbing. Combine this with neighboring "Engagement Alcove" for a full day of excellent climbing!`;
img = {src: "/SheldonRLarsonRanch/assets/images/Activities/orangutan-wall_1.jpg", alt: "people climbing together at orangutan wall in maple canyon"}
shortInfo = `<p><i class="fas fa-mountain hiking-icon-left"></i> 12+ Climbs<span class="hiking-difficulty moderate-hike">&#9632;</span> Moderate<i class="fas fa-star hiking-icon"></i> 5.7~5.10</p>`;
attractionLink = `https://www.mountainproject.com/area/105841685/orangutan-wall`;
rockClimbing.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Walls of Liberation"
description = `Walls of Liberation is a fantastic little alcove if you're looking to escape the crowds! Several fun routes in the beginner to moderate range with short as well as long routes with a lot of fun moves!`;
img = {src: "/SheldonRLarsonRanch/assets/images/Activities/walls-of-liberation_1.jpg", alt: "walls of liberation climbing wall in maple canyon"}
shortInfo = `<p><i class="fas fa-mountain hiking-icon-left"></i> 14 Climbs<span class="hiking-difficulty moderate-hike">&#9632;</span> Moderate<i class="fas fa-star hiking-icon"></i> 5.6~5.10</p>`;
attractionLink = `https://www.mountainproject.com/area/107679961/walls-of-liberation`;
rockClimbing.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Pipe Dream"
description = `Pipe Dream is the cream of the crop and one of the biggest reasons Maple Canyon is so famous! This is a large cave with climbs everywhere! Even if you don't climb there it's a must see to see climbing at it's finest!`;
img = {src: "/SheldonRLarsonRanch/assets/images/Activities/005.jpg", alt: "world famous pipe dreamm climbing area in maple canyon"}
shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 8.8 miles<i class="fas fa-mountain hiking-icon"></i> 5,728 feet <span class="hiking-difficulty difficult-hike">&#9670;</span> Difficult</p>`;
attractionLink = `https://www.mountainproject.com/area/105739677/the-pipe-dream`;
rockClimbing.addAttraction(title, description, shortInfo, img, attractionLink);

createUI(rockClimbing);

