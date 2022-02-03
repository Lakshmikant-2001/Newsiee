import { loadHomePage } from "../home.js";
import { loadWorldPage } from "../world.js";
import { isCountryAvail } from "../country.js";
import { checkCountryAvail } from "../local.js";
import { searchPageCall } from "./_utils.js";

export const route = {
    "/": loadHomePage,
    "/search": searchPageCall,
    "/world": loadWorldPage,
    "/country": isCountryAvail,
    "/local": checkCountryAvail
}