import { galleries } from "../gallery-class.js";
import { createUI } from "../gallery-details.js";

const guestCabin = galleries.find(gallery => gallery.label === "Guest Cabin");
createUI(guestCabin);