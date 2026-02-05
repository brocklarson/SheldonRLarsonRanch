import { createUI } from "../attraction-details.js";
import { sightseeing } from "../attractions-class.js";


let title = "Skyline Drive"
let description = `If you want to see the beauty that Sanpete has to offer, then look no further than the drive up to and along Skyline drive! Skyline drive stretches on for nearly a hundred miles and at over 10,000 feet it ranks among the highest roads in America! Get your cameras ready for the breathtaking views!`;
let img = {src: "/SheldonRLarsonRanch/assets/images/Activities/026.jpg", alt: "View from the top of skyline drive at sunrise in Sanpete, Utah"}
let shortInfo = ``;
let attractionLink = `https://www.go-utah.com/Skyline-Drive/`;
sightseeing.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Nebo Loop National Scenic Byway"
description = `From Nephi to Payson, this 37 mile route has breathtaking views of the Wasatch Range, passing by Mt. Nebo which reaches 11,929 feet! Be prepared to see flat bottomlands, high-alpine conifers, red rock formations, gray sandstone cliffs, and salt flats all in the same day!`;
img = {src: "/SheldonRLarsonRanch/assets/images/Activities/nebo-scenic-loop.jpg", alt: "View of red rocks on mount nebo scenic loop in Sanpete, Utah"}
attractionLink = `https://www.go-utah.com/Nebo-Loop-Scenic-Byway/`;
sightseeing.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Manti Temple"
description = `Built from 1875 to 1893, the Manti temple is an impressive and beautiful building built on top of "temple hill" in Manti, Utah. The temple is a special place of worship for members of The Church of Jesus Christ of Latter-Day Saints, but its beauty is appreciated by all!`;
img = {src: "/SheldonRLarsonRanch/assets/images/Activities/manti-temple.jpg", alt: "Historic manti temple"}
attractionLink = `http://sanpete.com/pages/temple`;
sightseeing.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Cascading Waterfalls"
description = `These cascading waterfalls are a hidden gem that you won't read about anywhere else! Make sure you walk up and down the river because there is a half mile of beautiful cascading waterfalls! Make sure to read the detailed instructions for the cascading waterfalls on our map page!`;
img = {src: "/SheldonRLarsonRanch/assets/images/Activities/022.jpg", alt: "Hidden cascading waterfalls up ephraim canyon in Sanpete, Utah"}
attractionLink = `https://www.google.com/maps/d/viewer?hl=en&mid=1GllTUOl9d9QD_GAVsYzoRNSFgxHPmlfb&ll=39.262675491612576%2C-111.41255300880948&z=15`;
sightseeing.addAttraction(title, description, shortInfo, img, attractionLink);

createUI(sightseeing);

