import { createUI } from "../attraction-details.js";
import { atv } from "../attractions-class.js";

let title = "Lake Hill to Jet Fox Res."
let description = `This is our favorite single-day ride up Ephraim canyon with some of the best views we can offer! Start at Lake Hill and finish in Manti and use the back road west of Manti to get to our cabins, or just bring it around for a loop trail!`;
let img = {src: "/assets/images/Activities/jet-fox.jpg", alt: "Jet Fox Reservoir"}
let shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 48 miles<i class="fas fa-mountain hiking-icon"></i> <span class="square-number">37</span> <span class="square-number-1">3</span> <span class="circle-number red-color">F</span> <span class="square-number">33</span> <span class="square-number">32</span> <span class="square-number-1">3</span></p>`;
let attractionLink = `/assets/downloadables/arapeen_ohv_trail_map.pdf`;
atv.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Miller's Flat Loop"
description = `This is a fun and easy loop trail up Mt. Pleasant and Fairview canyons that pass by several gorgeous lakes and reservoirs! You will also pass by the Lake Canyon trail system and can explore even more trails in a beautiful part of the forest!`;
img = {src: "/assets/images/Activities/miller-flat.jpg", alt: "Miller's flat loop"}
shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 58 miles<i class="fas fa-mountain hiking-icon"></i> <span class="circle-number-2">41</span> <span class="circle-number">1</span> <span class="circle-number-2">12</span> <span class="square-number">0014</span> <span class="circle-number-2">51</span> <span class="circle-number red-color">A</span> <span class="circle-number">1</span></p>`;
attractionLink = `/assets/downloadables/arapeen_ohv_trail_map.pdf`;
atv.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Manti Canyon"
description = `Another one of our favorite loop trails that you can get to straight from our cabins! This loop trail passes through one of the prettiest parts of the Manti-Lasal National Forest and offers amazing panoramic views!`;
img = {src: "/assets/images/Activities/duck-fork.jpg", alt: "Lake up Manti canyon"}
shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 41 miles<i class="fas fa-mountain hiking-icon"></i> <span class="square-number-1">3</span> <span class="circle-number red-color">F</span> <span class="square-number">73</span> <span class="square-number">72</span> <span class="circle-number red-color">G</span> <span class="square-number-1">3</span></p>`;
attractionLink = `/assets/downloadables/arapeen_ohv_trail_map.pdf`;
atv.addAttraction(title, description, shortInfo, img, attractionLink);

title = "Julius Flat Loop"
description = `Another one of our favorite loop trails that you can get to straight from our cabins! This loop trail passes through one of the prettiest parts of the Manti-Lasal National Forest and offers amazing panoramic views!`;
img = {src: "/assets/images/Activities/lake.jpg", alt: "Lake on Julius Flat loop"}
shortInfo = `<p><i class="fas fa-route hiking-icon-left"></i> 47 miles<i class="fas fa-mountain hiking-icon"></i> <span class="square-number">0022</span> <span class="circle-number red-color">I</span> <span class="circle-number">1</span> <span class="circle-number red-color">J</span> <span class="circle-number">9</span> <span class="square-number">94</span> <span class="circle-number red-color">L</span> <span class="circle-number">1</span> <span class="circle-number red-color">K</span> <span class="square-number">2</span></p>`;
attractionLink = `/assets/downloadables/arapeen_ohv_trail_map.pdf`;
atv.addAttraction(title, description, shortInfo, img, attractionLink);

createUI(atv);

