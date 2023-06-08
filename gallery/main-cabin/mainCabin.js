import { galleries } from "../gallery-class.js";
import { createUI } from "../gallery-details.js";

const mainCabin = galleries.find(gallery => gallery.label === "Main Cabin");
createUI(mainCabin);