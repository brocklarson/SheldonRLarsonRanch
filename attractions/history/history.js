import { createUI } from "../attraction-details.js";
import { history } from "../attractions-class.js";


let title = "Spring City"
let description = `Spring City is one of the prettiest small towns in the country. And it's not just us that think so! Forbes listed it as one of the top prettiest towns in America! In addition, only this town and Williamsburg, VA are listed as complete towns on the national history registry, making this a place you must visit!`;
let img = {src: "/assets/images/Activities/015.jpg", alt: "Antique cabin in historical spring city"}
let shortInfo = ``;
let attractionLink = `http://sanpete.com/pages/historicalspringcity/`;
history.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Columbian Mammoth"
description = `That's right! Fairview Museum of History and Art houses a nearly fully intact Columbian mammoth that was unearthed only miles away in 1988. The quality and altitude at which it was found make this Mammoth remarkably well-preserved!`;
img = {src: "/assets/images/Activities/003.jpg", alt: "Historic columbian mammoth at museum in Sanpete, Utah"}
attractionLink = `http://sanpete.com/businesses/show/313-fairview-museum-of-history-and-art`;
history.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Ephraim/Manti"
description = `Our little Ephraim and Manti city are home to several historical sites from the impressive Manti Temple built in the 1880s to the Chief Blackhawk Massacre monument. Between Ephraim and neighboring Manti city, there's enough to keep both history and non-history buffs entertained all day!`;
img = {src: "/assets/images/Activities/017.jpeg", alt: "Historic home in Ephraim, Utah"}
attractionLink = `https://www.ephraimcity.org/DocumentCenter/View/152/Walking-Tour-of-Ephraim-PDF?bidId=`;
history.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Ed Roth Museum"
description = `Ed "Big Daddy" Roth was a genius and a visionary. He was responsible for so many "firsts," and literally changed the world of hot rodding. As an artist, cartoonist, illustrator, pinstriper, and custom car designer, he is most well-known for the hot rod icon "Rat Fink".`;
img = {src: "/assets/images/Activities/013.jpg", alt: "Custom hot rod car at famous Ed Roth Museum"}
attractionLink = `http://www.ratfink.com/ed-roth-museum.php`;
history.addAttraction(title, description, shortInfo, img, attractionLink);

createUI(history);

