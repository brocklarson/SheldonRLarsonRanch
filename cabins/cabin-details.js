import { mainCabin, guestCabin, bothCabins } from "./cabin-class.js";

const createUI = (cabin) => {
    const container = document.querySelector('.overview-container');
    container.innerHTML = ``;

    window.addEventListener("hashchange", function () {
        window.scrollTo(window.scrollX, window.scrollY - 45); //On the cabin deatils page, if you click on the menu, it places it 100px from top so it's just below the header
    });

    function createDOM(){
        container.innerHTML += `
            <h1>${cabin.name}</h1>
            <p class="cabin-short">${cabin.tagline}</p>
            <div class="cabin-overview-icon-container">
                <p><i class="fas fa-user-friends cabin-overview-icon cabin-overview-icon-right"></i>${cabin.people}</p> 
                <p><i class="fas fa-bed cabin-overview-icon cabin-overview-icon-right"></i>${cabin.beds}</p>
                <p><i class="fas fa-bath cabin-overview-icon cabin-overview-icon-right"></i>${cabin.baths}</p>
                <p><img src="/assets/icons/fridge.svg" height="16" width="25" alt="fridge icon" class="fridge-icon"/>${cabin.kitchen}</p>   
                <p><i class="fas fa-car cabin-overview-icon cabin-overview-icon-right"></i>${cabin.parking}</p> 
                <p><i class="fas fa-paw cabin-overview-icon cabin-overview-icon-right"></i>${cabin.pets}</p>
            </div>
            
            <div class="cycle-slideshow cabin-image-carousel-container" 
            data-cycle-timeout="0" 
            data-cycle-swipe=true
            data-cycle-center-horz=true>    
                <span class="cycle-pager cabin-image-carousel-pager"></span>
                <span class="cycle-prev cabin-image-carousel-prev">&#9001;</span>
                <span class="cycle-next cabin-image-carousel-next">&#9002;</span>
                <div class="cycle-caption cabin-image-caption"></div>
            </div>
            
            <div class="cabin-page-navigator">
            <a href="#cabin-description"><p>Description</p></a>
            <a href="#cabin-theSpace"><p>The Space</p></a>
            <a href="#cabin-guestAccess"><p>Guest Access</p></a>
            <a href="#cabin-location"><p>Location</p></a>
            <a href="#cabin-amenities"><p>Amenities</p></a>
            <a href="#cabin-information"><p>Information</p></a>
            <a href="#cabin-rates"><p>Rates</p></a>
        </div>

        <div class="cabin-description-text-area">
            <h2 id="cabin-description">Description</h2>
            <p>The Sheldon R. Larson Ranch is located in the heart of the beautiful Sanpete Valley, three miles west of Ephraim. This working ranch is located minutes from the famous Arapeen trail system, with world-class ATVing, snowmobiling, hiking, and rock climbing. Great for both summer and winter enthusiasts looking for a classic and fun cabin experience with easy access to world-class outdoors!</p>
            <h2 id="cabin-theSpace">The Space</h2>
            ${cabin.description}
            <h2 id="cabin-guestAccess">Guest Access</h2>
            <p>You will have access to the entire cabin and the surrounding area. There is a fire pit, lawn area, and horseshoe pit available for all guests. We are on a working ranch, so there are live animals in the corrals. We kindly ask that you stay out of the animal corrals and away from any ranch equipment. However, upon request, we would love to show you around our ranch and introduce you to some of our livestock, including our rodeo bucking bulls!</p>
            <h2 id="cabin-location">Location</h2>
            <h4>The Neighborhood</h4>
            <p>These cabins are located outside the small town of Ephraim, Utah and are very quiet and secluded with mountains on the east and west. We are located on a working ranch so there are farm animals on neighboring property.</p>
            <h4>Getting Around</h4>
            <p>There is plenty of parking for your cars, trailers, ATVs, snowmobiles, etc. at our ranch. The towns in Sanpete county are known as "ATV friendly", meaning you can ride through town (except for on highway 89) on your ATV, giving you the convenience of starting and ending from your front doorstep! Please note that the speed limit on city streets is 15mph and helmets are required.</p>
            <h2 id="cabin-amenities">Amenities</h2>
            <div class="amenities-container"></div>
            <h2 id="cabin-information">Information</h2>
            <h4>Check-In/Check-Out</h4>
            <p>You may check-in anytime after 3:00pm on the day of your check-in. We ask that you are checked-out by 11:00am after your last night so that we can clean the cabins before our next guests arrive!</p>
            <p>Upon check-in we will give you a key to the cabin. Once you are ready to check-out simply leave the key on the dining room table and our cleaners will grab the key once you've checked out!</p>
            <h4>Refund/Payment</h4>
            <p>25% of payment is required to reserve your booking. This is a non-refundable security and cleaning deposit. The other 75% is due upon arrival at the cabins.</p>
            <h4>Pet Policy</h4>
            <p>We do allow pets at our cabins! There is a large lawn and courtyard area for the pets to run free. There is also a fenced in area on the south side of the main cabin that the dogs may use. We do require that you clean up after your pets!</p>
            <p>Your pets may stay in the cabins but require that pets are not allowed on any furniture and may not "rough-house" inside the cabins. At night we do ask that your pets are placed in a kennel while you sleep. Please help us by abiding by this policy so that other guests can enjoy our cabins. These cabins have been in our family for over 100 years and we try everything we can to ensure the history and experience can be preserved for all our guests to enjoy!</p>
            <p>There is an additional $20/night charge added for each pet. This helps us cover the additional cleaning required so that our cabins may be clean for the next guests!</p>
            <h4>Damage Policy</h4>
            <p>We don't want any part of our timeless cabins to be damaged and we know you don't want or intend to damage our property. That being said, we know accidents and damages do happen. You will be required to pay for any intentional damage or defacing of property caused by any member (or pets) in your party. For other damages of property, we will work with you on a case by case basis. Since our cabins have been in the family for over 100 years, there are pieces in our cabin that cannot be replaced. But of course, we know you'll do your best to treat it as your own!</p>
            <h4>Large Groups</h4>
            <p>We do allow group events at our cabins. Whether it's a family reunion, youth camp, wedding, etc., if you have a large group and want to rent our cabins we do ask that you contact us directly at SheldonRLarsonRanch@gmail.com or by phone at (435)340-0075 to book. For large groups you must rent out both the main and guest cabin. There is an additional $5/guest per night for each guest above our cabin capacity of 10 (Pricing for weddings will be worked out with you personally depending on your needs). There is a large lawn area that we do allow groups to pitch tents to accomodate this additional capacity. There is also extra parking available for RVs, camper, and trailers if desired.</p>
            <h2 id="cabin-rates">Rates</h2>
            <table class="rates-table">
                <tr>
                    <th>Cabin</th>
                    <th>Nightly Rate</th>
                    <th>Weekly Rate</th>
                </tr>
                <tr>
                    <td>${mainCabin.name}</td>
                    <td>$${mainCabin.night_price} /night</td>
                    <td>$${mainCabin.week_price} /week</td>
                </tr>
                <tr>
                    <td>${guestCabin.name}</td>
                    <td>$${guestCabin.night_price} /night</td>
                    <td>$${guestCabin.week_price} /week</td>
                </tr>
                <tr>
                    <td>${bothCabins.name}</td>
                    <td>$${bothCabins.night_price} /night</td>
                    <td>$${bothCabins.week_price} /week</td>
                </tr>
            </table>

        </div>`;

        const imgCarousel = document.querySelector(".cabin-image-carousel-container");
        cabin.imgs.forEach(img =>{
            const imgEl = document.createElement("img");
            imgEl.src = img.src;
            imgEl.alt = img.alt;
            imgEl.classList.add("cabin-image-carousel-img");

            imgCarousel.appendChild(imgEl);
        });

        const amenitiesContainer = document.querySelector(".amenities-container");
        cabin.amenities.forEach(amenity => {
            console.log(amenity);
            const amenityText = document.createElement("p");
            amenityText.innerText = `- ${amenity}`;
            amenityText.classList.add("amenities");
            amenitiesContainer.appendChild(amenityText);
        });
    }
    createDOM();
};

export {createUI};