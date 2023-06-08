import { galleries } from "../gallery-class.js";
import { createUI } from "../gallery-details.js";

const activities = galleries.find(gallery => gallery.label === "Activities");
createUI(activities);