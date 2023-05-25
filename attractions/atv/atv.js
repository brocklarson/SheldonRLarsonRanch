import { createUI } from "../attraction-details.js";
import { atv } from "../attractions-class.js";

atv.attractions.forEach(attraction => {
    createUI(attraction);
});
