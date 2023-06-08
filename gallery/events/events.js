import { galleries } from "../gallery-class.js";
import { createUI } from "../gallery-details.js";

const events = galleries.find(gallery => gallery.label === "Events");
createUI(events);