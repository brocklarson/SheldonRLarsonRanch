import { galleries } from "../gallery-class.js";
import { createUI } from "../gallery-details.js";

const courtyard = galleries.find(gallery => gallery.label === "Courtyard");
createUI(courtyard);