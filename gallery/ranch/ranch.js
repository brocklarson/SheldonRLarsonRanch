import { galleries } from "../gallery-class.js";
import { createUI } from "../gallery-details.js";

const ranch = galleries.find(gallery => gallery.label === "Ranch");
createUI(ranch);