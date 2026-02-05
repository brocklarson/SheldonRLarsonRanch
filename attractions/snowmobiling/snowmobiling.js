import { createUI } from "../attraction-details.js";
import { snowmobiling } from "../attractions-class.js";


let title = "Ephraim Canyon"
let description = `Park 3 miles up Ephraim Canyon and heading south along Skyline Drive will take you to breathtaking sites such as John August Lake, Danish Knoll, Little Pete's Hole, Jolley's Hole, and more. Some of the riding is wide open ungroomed trails, some a little technical, and some hillclimbing!`;
let img = {src: "/SheldonRLarsonRanch/assets/images/Activities/004.jpg", alt: "3 snowmobilers overlooking fog above ephraim canyon"}
let shortInfo = ``;
let attractionLink = `/assets/downloadables/Skyline_Snowmobile_Map.pdf`;
snowmobiling.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Joe's Valley"
description = `Joe's Valley is famous year-round and especially during the winter! Park 3 miles up Ephraim Canyon and head east of Skyline Drive where you can pass Horseshoe point and then head over to Joe's Valley. You won't find many places prettier than Joe's Valley and not any better snowmobiling!`;
img = {src: "/SheldonRLarsonRanch/assets/images/Activities/snowmobile-2.jpg", alt: "Man snowmobiling at Joe's Valley in Sanpete, Utah"}
attractionLink = `/assets/downloadables/Skyline_Snowmobile_Map.pdf`;
snowmobiling.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Miller's Flat"
description = `Head up Fairview canyon and park at Miller's Flat for snowmobiling at Miller's Flat and Seeley Canyon. The big attraction here is hillclimbing, where the hills are big and long! You can also hit the infamous Fairview Race Bowl for some more serious hillclimbing!`;
img = {src: "/SheldonRLarsonRanch/assets/images/Activities/snowmobile-3.jpg", alt: "Man snowmobiling at Miller's Flat in Sanpete, Utah"}
attractionLink = `/assets/downloadables/Skyline_Snowmobile_Map.pdf`;
snowmobiling.addAttraction(title, description, shortInfo, img, attractionLink);

title = "North Skyline Drive"
description = `Park 9 miles up Fairview canyon and head north of Highway 31 on the groomed section of Skyline drive between here and Tucker. This is a near perfect combination for those who love to boondock through the trees and also enjoy the panoramic views from the top of Skyline Drive!`;
img = {src: "/SheldonRLarsonRanch/assets/images/Activities/snowmobile-4.jpg", alt: "Man snowmobiling at north skyline drive in Sanpete, Utah"}
attractionLink = `/assets/downloadables/Skyline_Snowmobile_Map.pdf`;
snowmobiling.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Nebo Loop"
description = `Park at the southern entrance of Nebo Loop and head north. This complex provides access to enjoyable play areas away from the crowds of Fairview, including the Mt. Nebo high-tops/wilderness area, and the Wasatch Range.`;
img = {src: "/SheldonRLarsonRanch/assets/images/Activities/snowmobile-5.jpg", alt: "group snowmobiling the scenic mount nebo loop in Sanpete Utah"}
attractionLink = `http://sanpete.com/downloads/maps/nebo.pdf`;
snowmobiling.addAttraction(title, description, shortInfo, img, attractionLink);

createUI(snowmobiling);

