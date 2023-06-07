import { createUI } from "../attraction-details.js";
import { other } from "../attractions-class.js";


let title = "Palisade State Park"
let description = `Palisades has a little something for everyone! Whether it be paddleboards and canoes, grilling dinner while swimming in the lake, fishing, hiking, or golfing, Palisade State Park is a place where you can easily spend the entire day! There are canoes and paddleboards for rent here!`;
let img = {src: "/assetts/images/Activities/palisades.jpg", alt: "Canoes and paddle boats on the lake at palisade state park"}
let shortInfo = ``;
let attractionLink = `https://stateparks.utah.gov/parks/palisade/`;
other.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Gunnison Reservoir"
description = `Gunnison Reservoir is a bit smaller than nearby Yuba State Park, but we recommend it since it's a free lake for everyone to use to go boating or waterskiing that is also easily accessible and only a short drive from the cabins! There are boat ramps for the public to use and beaches to set up camp!`;
img = {src: "/assetts/images/Activities/gunnison-res.jpg", alt: "Birds-eye view of the peaceful gunnison reservoir"}
attractionLink = `https://www.bivy.com/adventures/us/utah/gunnison-reservoir-117007`;
other.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Fishing"
description = `Sanpete has an endless supply of fantastic waterholes for you to enjoy some fishing while also enjoying some of the beautiful landscape around you! One of our favorite spots is Lake Hill up Ephraim Canyon, but there are countless locations for you to go fishing all over Sanpete County!`;
img = {src: "/assetts/images/Activities/fishing.jpg", alt: "Two kids fishing in Ephraim canyon"}
attractionLink = `http://sanpete.com/pages/fish`;
other.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Basin Drive-In Theater"
description = `Nothing ends the day quite like sitting under the stars around a firepit. And the next best thing after that is sitting in an old-fashioned drive-in movie theater! So after you finish off the day, come and relax and watch the latest movie on the big screen! Movies start at dusk.`;
img = {src: "/assetts/images/Activities/012.jpg", alt: "Historice basin drive-int theater sign"}
attractionLink = `https://www.driveinmovie.com/ut/mount-pleasant/basin-drive-in/`;
other.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Manti Aquatic Center"
description = `The pool in Manti city is a great place for the whole family to have some fun playing in the water! This aquatic center has water slides, water games and toys, and more! So if you're looking for a great afternoon at the pool then look no further than here!`;
img = {src: "/assetts/images/Activities/manti-pool.jpg", alt: "Families playing at the manti aquatic center pool"}
attractionLink = `https://www.manticity.com/swimmingpool`;
other.addAttraction(title, description, shortInfo, img, attractionLink);

createUI(other);