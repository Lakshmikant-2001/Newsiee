export function newsSection(heading, id, className) {
    if (className == "category-topics-container") {
        return `<section class="${className}" id="${id}">
        <h3 class="heading">${heading}</h3>
        <div class="news-card-wrapper"></div>
        <div class="arrow-div" data-id="${id}">
            <svg class="left-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                role="img" class="iconify iconify--ic right-arrow" width="60" height="60"
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="ic:sharp-arrow-drop-down-circle"
                data-width="60" data-rotate="90deg">
                <g transform="rotate(90 12 12)">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8l-4 4z"
                        fill="currentColor"></path>
                </g>
            </svg>
            <svg class="right-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                role="img" class="iconify iconify--ic right-arrow" width="60" height="60"
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="ic:sharp-arrow-drop-down-circle"
                data-width="60" data-rotate="-90deg">
                <g transform="rotate(-90 12 12)">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8l-4 4z"
                        fill="currentColor"></path>
                </g>
            </svg>
        </div>
    </section>`
    }
    else {
        return `<section class="${className}" id="${id}">
                <h3 class="heading">${heading}</h3>
                <div class="change-btn left pseudo-title" data-title="change">
                    <span class="iconify" data-icon="ic:baseline-change-circle" data-width="40"></span>
                </div>
                <div class="news-card-wrapper"></div>
            </section>`
    }
};

export function newsCard(source, sourceTitle, img, headlines, summary, link) {
    return `<div class="news-card-holder">
    <div class="news-card">
        <div class="news-source" title="${sourceTitle}">${source}</div>
        <div class="news-front-side">
            <img src="${img}" alt="" class="news-img">
            <p class="news-headlines">${headlines}</p>
        </div>
        <div class="news-back-side">
            <p class="news-des">${summary}</p>
            <a class="visit-btn" href="${link}" target="blank">visit</a>
        </div>
    </div>
</div>`
}

// functions used to create countriesList array 

// async function fetchCountries() {
//     var headers = new Headers();
//     headers.append("X-CSCAPI-KEY", "Z2JORDBsNFRIU28wWU9YZ1JqWEJqMDIxSFBqU0NyQTVyV2R5SGM4ZQ==");
//     var requestOptions = {
//         method: 'GET',
//         headers: headers,
//         redirect: 'follow'
//     };
//     try {
//         const response = await fetch(`https://api.countrystatecity.in/v1/countries`, requestOptions)
//         const data = await response.json()
//         return data;
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// async function fetchCountryDet(countryIso) {
//     var headers = new Headers();
//     headers.append("X-CSCAPI-KEY", "Z2JORDBsNFRIU28wWU9YZ1JqWEJqMDIxSFBqU0NyQTVyV2R5SGM4ZQ==");
//     var requestOptions = {
//         method: 'GET',
//         headers: headers,
//         redirect: 'follow'
//     };
//     try {
//         const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryIso}`, requestOptions)
//         const data = await response.json()
//         return data;
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// async function createCountriesList() {
//     const countryList = []
//     const countries = await fetchCountries();
//     for(const element of countries){
//         const det = await fetchCountryDet(element.iso2)
//         countryList.push({countryName:det.name,countryEmoji:det.emoji,countryId:det.iso2})
//     }
// }

export const countriesList = [
    {
        "countryName": "Afghanistan",
        "countryEmoji": "🇦🇫",
        "countryId": "AF"
    },
    {
        "countryName": "Aland Islands",
        "countryEmoji": "🇦🇽",
        "countryId": "AX"
    },
    {
        "countryName": "Albania",
        "countryEmoji": "🇦🇱",
        "countryId": "AL"
    },
    {
        "countryName": "Algeria",
        "countryEmoji": "🇩🇿",
        "countryId": "DZ"
    },
    {
        "countryName": "American Samoa",
        "countryEmoji": "🇦🇸",
        "countryId": "AS"
    },
    {
        "countryName": "Andorra",
        "countryEmoji": "🇦🇩",
        "countryId": "AD"
    },
    {
        "countryName": "Angola",
        "countryEmoji": "🇦🇴",
        "countryId": "AO"
    },
    {
        "countryName": "Anguilla",
        "countryEmoji": "🇦🇮",
        "countryId": "AI"
    },
    {
        "countryName": "Antarctica",
        "countryEmoji": "🇦🇶",
        "countryId": "AQ"
    },
    {
        "countryName": "Antigua And Barbuda",
        "countryEmoji": "🇦🇬",
        "countryId": "AG"
    },
    {
        "countryName": "Argentina",
        "countryEmoji": "🇦🇷",
        "countryId": "AR"
    },
    {
        "countryName": "Armenia",
        "countryEmoji": "🇦🇲",
        "countryId": "AM"
    },
    {
        "countryName": "Aruba",
        "countryEmoji": "🇦🇼",
        "countryId": "AW"
    },
    {
        "countryName": "Australia",
        "countryEmoji": "🇦🇺",
        "countryId": "AU"
    },
    {
        "countryName": "Austria",
        "countryEmoji": "🇦🇹",
        "countryId": "AT"
    },
    {
        "countryName": "Azerbaijan",
        "countryEmoji": "🇦🇿",
        "countryId": "AZ"
    },
    {
        "countryName": "Bahamas The",
        "countryEmoji": "🇧🇸",
        "countryId": "BS"
    },
    {
        "countryName": "Bahrain",
        "countryEmoji": "🇧🇭",
        "countryId": "BH"
    },
    {
        "countryName": "Bangladesh",
        "countryEmoji": "🇧🇩",
        "countryId": "BD"
    },
    {
        "countryName": "Barbados",
        "countryEmoji": "🇧🇧",
        "countryId": "BB"
    },
    {
        "countryName": "Belarus",
        "countryEmoji": "🇧🇾",
        "countryId": "BY"
    },
    {
        "countryName": "Belgium",
        "countryEmoji": "🇧🇪",
        "countryId": "BE"
    },
    {
        "countryName": "Belize",
        "countryEmoji": "🇧🇿",
        "countryId": "BZ"
    },
    {
        "countryName": "Benin",
        "countryEmoji": "🇧🇯",
        "countryId": "BJ"
    },
    {
        "countryName": "Bermuda",
        "countryEmoji": "🇧🇲",
        "countryId": "BM"
    },
    {
        "countryName": "Bhutan",
        "countryEmoji": "🇧🇹",
        "countryId": "BT"
    },
    {
        "countryName": "Bolivia",
        "countryEmoji": "🇧🇴",
        "countryId": "BO"
    },
    {
        "countryName": "Bosnia and Herzegovina",
        "countryEmoji": "🇧🇦",
        "countryId": "BA"
    },
    {
        "countryName": "Botswana",
        "countryEmoji": "🇧🇼",
        "countryId": "BW"
    },
    {
        "countryName": "Bouvet Island",
        "countryEmoji": "🇧🇻",
        "countryId": "BV"
    },
    {
        "countryName": "Brazil",
        "countryEmoji": "🇧🇷",
        "countryId": "BR"
    },
    {
        "countryName": "British Indian Ocean Territory",
        "countryEmoji": "🇮🇴",
        "countryId": "IO"
    },
    {
        "countryName": "Brunei",
        "countryEmoji": "🇧🇳",
        "countryId": "BN"
    },
    {
        "countryName": "Bulgaria",
        "countryEmoji": "🇧🇬",
        "countryId": "BG"
    },
    {
        "countryName": "Burkina Faso",
        "countryEmoji": "🇧🇫",
        "countryId": "BF"
    },
    {
        "countryName": "Burundi",
        "countryEmoji": "🇧🇮",
        "countryId": "BI"
    },
    {
        "countryName": "Cambodia",
        "countryEmoji": "🇰🇭",
        "countryId": "KH"
    },
    {
        "countryName": "Cameroon",
        "countryEmoji": "🇨🇲",
        "countryId": "CM"
    },
    {
        "countryName": "Canada",
        "countryEmoji": "🇨🇦",
        "countryId": "CA"
    },
    {
        "countryName": "Cape Verde",
        "countryEmoji": "🇨🇻",
        "countryId": "CV"
    },
    {
        "countryName": "Cayman Islands",
        "countryEmoji": "🇰🇾",
        "countryId": "KY"
    },
    {
        "countryName": "Central African Republic",
        "countryEmoji": "🇨🇫",
        "countryId": "CF"
    },
    {
        "countryName": "Chad",
        "countryEmoji": "🇹🇩",
        "countryId": "TD"
    },
    {
        "countryName": "Chile",
        "countryEmoji": "🇨🇱",
        "countryId": "CL"
    },
    {
        "countryName": "China",
        "countryEmoji": "🇨🇳",
        "countryId": "CN"
    },
    {
        "countryName": "Christmas Island",
        "countryEmoji": "🇨🇽",
        "countryId": "CX"
    },
    {
        "countryName": "Cocos (Keeling) Islands",
        "countryEmoji": "🇨🇨",
        "countryId": "CC"
    },
    {
        "countryName": "Colombia",
        "countryEmoji": "🇨🇴",
        "countryId": "CO"
    },
    {
        "countryName": "Comoros",
        "countryEmoji": "🇰🇲",
        "countryId": "KM"
    },
    {
        "countryName": "Congo",
        "countryEmoji": "🇨🇬",
        "countryId": "CG"
    },
    {
        "countryName": "Democratic Republic of the Congo",
        "countryEmoji": "🇨🇩",
        "countryId": "CD"
    },
    {
        "countryName": "Cook Islands",
        "countryEmoji": "🇨🇰",
        "countryId": "CK"
    },
    {
        "countryName": "Costa Rica",
        "countryEmoji": "🇨🇷",
        "countryId": "CR"
    },
    {
        "countryName": "Cote D'Ivoire (Ivory Coast)",
        "countryEmoji": "🇨🇮",
        "countryId": "CI"
    },
    {
        "countryName": "Croatia",
        "countryEmoji": "🇭🇷",
        "countryId": "HR"
    },
    {
        "countryName": "Cuba",
        "countryEmoji": "🇨🇺",
        "countryId": "CU"
    },
    {
        "countryName": "Cyprus",
        "countryEmoji": "🇨🇾",
        "countryId": "CY"
    },
    {
        "countryName": "Czech Republic",
        "countryEmoji": "🇨🇿",
        "countryId": "CZ"
    },
    {
        "countryName": "Denmark",
        "countryEmoji": "🇩🇰",
        "countryId": "DK"
    },
    {
        "countryName": "Djibouti",
        "countryEmoji": "🇩🇯",
        "countryId": "DJ"
    },
    {
        "countryName": "Dominica",
        "countryEmoji": "🇩🇲",
        "countryId": "DM"
    },
    {
        "countryName": "Dominican Republic",
        "countryEmoji": "🇩🇴",
        "countryId": "DO"
    },
    {
        "countryName": "East Timor",
        "countryEmoji": "🇹🇱",
        "countryId": "TL"
    },
    {
        "countryName": "Ecuador",
        "countryEmoji": "🇪🇨",
        "countryId": "EC"
    },
    {
        "countryName": "Egypt",
        "countryEmoji": "🇪🇬",
        "countryId": "EG"
    },
    {
        "countryName": "El Salvador",
        "countryEmoji": "🇸🇻",
        "countryId": "SV"
    },
    {
        "countryName": "Equatorial Guinea",
        "countryEmoji": "🇬🇶",
        "countryId": "GQ"
    },
    {
        "countryName": "Eritrea",
        "countryEmoji": "🇪🇷",
        "countryId": "ER"
    },
    {
        "countryName": "Estonia",
        "countryEmoji": "🇪🇪",
        "countryId": "EE"
    },
    {
        "countryName": "Ethiopia",
        "countryEmoji": "🇪🇹",
        "countryId": "ET"
    },
    {
        "countryName": "Falkland Islands",
        "countryEmoji": "🇫🇰",
        "countryId": "FK"
    },
    {
        "countryName": "Faroe Islands",
        "countryEmoji": "🇫🇴",
        "countryId": "FO"
    },
    {
        "countryName": "Fiji Islands",
        "countryEmoji": "🇫🇯",
        "countryId": "FJ"
    },
    {
        "countryName": "Finland",
        "countryEmoji": "🇫🇮",
        "countryId": "FI"
    },
    {
        "countryName": "France",
        "countryEmoji": "🇫🇷",
        "countryId": "FR"
    },
    {
        "countryName": "French Guiana",
        "countryEmoji": "🇬🇫",
        "countryId": "GF"
    },
    {
        "countryName": "French Polynesia",
        "countryEmoji": "🇵🇫",
        "countryId": "PF"
    },
    {
        "countryName": "French Southern Territories",
        "countryEmoji": "🇹🇫",
        "countryId": "TF"
    },
    {
        "countryName": "Gabon",
        "countryEmoji": "🇬🇦",
        "countryId": "GA"
    },
    {
        "countryName": "Gambia The",
        "countryEmoji": "🇬🇲",
        "countryId": "GM"
    },
    {
        "countryName": "Georgia",
        "countryEmoji": "🇬🇪",
        "countryId": "GE"
    },
    {
        "countryName": "Germany",
        "countryEmoji": "🇩🇪",
        "countryId": "DE"
    },
    {
        "countryName": "Ghana",
        "countryEmoji": "🇬🇭",
        "countryId": "GH"
    },
    {
        "countryName": "Gibraltar",
        "countryEmoji": "🇬🇮",
        "countryId": "GI"
    },
    {
        "countryName": "Greece",
        "countryEmoji": "🇬🇷",
        "countryId": "GR"
    },
    {
        "countryName": "Greenland",
        "countryEmoji": "🇬🇱",
        "countryId": "GL"
    },
    {
        "countryName": "Grenada",
        "countryEmoji": "🇬🇩",
        "countryId": "GD"
    },
    {
        "countryName": "Guadeloupe",
        "countryEmoji": "🇬🇵",
        "countryId": "GP"
    },
    {
        "countryName": "Guam",
        "countryEmoji": "🇬🇺",
        "countryId": "GU"
    },
    {
        "countryName": "Guatemala",
        "countryEmoji": "🇬🇹",
        "countryId": "GT"
    },
    {
        "countryName": "Guernsey and Alderney",
        "countryEmoji": "🇬🇬",
        "countryId": "GG"
    },
    {
        "countryName": "Guinea",
        "countryEmoji": "🇬🇳",
        "countryId": "GN"
    },
    {
        "countryName": "Guinea-Bissau",
        "countryEmoji": "🇬🇼",
        "countryId": "GW"
    },
    {
        "countryName": "Guyana",
        "countryEmoji": "🇬🇾",
        "countryId": "GY"
    },
    {
        "countryName": "Haiti",
        "countryEmoji": "🇭🇹",
        "countryId": "HT"
    },
    {
        "countryName": "Heard Island and McDonald Islands",
        "countryEmoji": "🇭🇲",
        "countryId": "HM"
    },
    {
        "countryName": "Honduras",
        "countryEmoji": "🇭🇳",
        "countryId": "HN"
    },
    {
        "countryName": "Hong Kong S.A.R.",
        "countryEmoji": "🇭🇰",
        "countryId": "HK"
    },
    {
        "countryName": "Hungary",
        "countryEmoji": "🇭🇺",
        "countryId": "HU"
    },
    {
        "countryName": "Iceland",
        "countryEmoji": "🇮🇸",
        "countryId": "IS"
    },
    {
        "countryName": "India",
        "countryEmoji": "🇮🇳",
        "countryId": "IN"
    },
    {
        "countryName": "Indonesia",
        "countryEmoji": "🇮🇩",
        "countryId": "ID"
    },
    {
        "countryName": "Iran",
        "countryEmoji": "🇮🇷",
        "countryId": "IR"
    },
    {
        "countryName": "Iraq",
        "countryEmoji": "🇮🇶",
        "countryId": "IQ"
    },
    {
        "countryName": "Ireland",
        "countryEmoji": "🇮🇪",
        "countryId": "IE"
    },
    {
        "countryName": "Israel",
        "countryEmoji": "🇮🇱",
        "countryId": "IL"
    },
    {
        "countryName": "Italy",
        "countryEmoji": "🇮🇹",
        "countryId": "IT"
    },
    {
        "countryName": "Jamaica",
        "countryEmoji": "🇯🇲",
        "countryId": "JM"
    },
    {
        "countryName": "Japan",
        "countryEmoji": "🇯🇵",
        "countryId": "JP"
    },
    {
        "countryName": "Jersey",
        "countryEmoji": "🇯🇪",
        "countryId": "JE"
    },
    {
        "countryName": "Jordan",
        "countryEmoji": "🇯🇴",
        "countryId": "JO"
    },
    {
        "countryName": "Kazakhstan",
        "countryEmoji": "🇰🇿",
        "countryId": "KZ"
    },
    {
        "countryName": "Kenya",
        "countryEmoji": "🇰🇪",
        "countryId": "KE"
    },
    {
        "countryName": "Kiribati",
        "countryEmoji": "🇰🇮",
        "countryId": "KI"
    },
    {
        "countryName": "North Korea",
        "countryEmoji": "🇰🇵",
        "countryId": "KP"
    },
    {
        "countryName": "South Korea",
        "countryEmoji": "🇰🇷",
        "countryId": "KR"
    },
    {
        "countryName": "Kuwait",
        "countryEmoji": "🇰🇼",
        "countryId": "KW"
    },
    {
        "countryName": "Kyrgyzstan",
        "countryEmoji": "🇰🇬",
        "countryId": "KG"
    },
    {
        "countryName": "Laos",
        "countryEmoji": "🇱🇦",
        "countryId": "LA"
    },
    {
        "countryName": "Latvia",
        "countryEmoji": "🇱🇻",
        "countryId": "LV"
    },
    {
        "countryName": "Lebanon",
        "countryEmoji": "🇱🇧",
        "countryId": "LB"
    },
    {
        "countryName": "Lesotho",
        "countryEmoji": "🇱🇸",
        "countryId": "LS"
    },
    {
        "countryName": "Liberia",
        "countryEmoji": "🇱🇷",
        "countryId": "LR"
    },
    {
        "countryName": "Libya",
        "countryEmoji": "🇱🇾",
        "countryId": "LY"
    },
    {
        "countryName": "Liechtenstein",
        "countryEmoji": "🇱🇮",
        "countryId": "LI"
    },
    {
        "countryName": "Lithuania",
        "countryEmoji": "🇱🇹",
        "countryId": "LT"
    },
    {
        "countryName": "Luxembourg",
        "countryEmoji": "🇱🇺",
        "countryId": "LU"
    },
    {
        "countryName": "Macau S.A.R.",
        "countryEmoji": "🇲🇴",
        "countryId": "MO"
    },
    {
        "countryName": "Macedonia",
        "countryEmoji": "🇲🇰",
        "countryId": "MK"
    },
    {
        "countryName": "Madagascar",
        "countryEmoji": "🇲🇬",
        "countryId": "MG"
    },
    {
        "countryName": "Malawi",
        "countryEmoji": "🇲🇼",
        "countryId": "MW"
    },
    {
        "countryName": "Malaysia",
        "countryEmoji": "🇲🇾",
        "countryId": "MY"
    },
    {
        "countryName": "Maldives",
        "countryEmoji": "🇲🇻",
        "countryId": "MV"
    },
    {
        "countryName": "Mali",
        "countryEmoji": "🇲🇱",
        "countryId": "ML"
    },
    {
        "countryName": "Malta",
        "countryEmoji": "🇲🇹",
        "countryId": "MT"
    },
    {
        "countryName": "Man (Isle of)",
        "countryEmoji": "🇮🇲",
        "countryId": "IM"
    },
    {
        "countryName": "Marshall Islands",
        "countryEmoji": "🇲🇭",
        "countryId": "MH"
    },
    {
        "countryName": "Martinique",
        "countryEmoji": "🇲🇶",
        "countryId": "MQ"
    },
    {
        "countryName": "Mauritania",
        "countryEmoji": "🇲🇷",
        "countryId": "MR"
    },
    {
        "countryName": "Mauritius",
        "countryEmoji": "🇲🇺",
        "countryId": "MU"
    },
    {
        "countryName": "Mayotte",
        "countryEmoji": "🇾🇹",
        "countryId": "YT"
    },
    {
        "countryName": "Mexico",
        "countryEmoji": "🇲🇽",
        "countryId": "MX"
    },
    {
        "countryName": "Micronesia",
        "countryEmoji": "🇫🇲",
        "countryId": "FM"
    },
    {
        "countryName": "Moldova",
        "countryEmoji": "🇲🇩",
        "countryId": "MD"
    },
    {
        "countryName": "Monaco",
        "countryEmoji": "🇲🇨",
        "countryId": "MC"
    },
    {
        "countryName": "Mongolia",
        "countryEmoji": "🇲🇳",
        "countryId": "MN"
    },
    {
        "countryName": "Montenegro",
        "countryEmoji": "🇲🇪",
        "countryId": "ME"
    },
    {
        "countryName": "Montserrat",
        "countryEmoji": "🇲🇸",
        "countryId": "MS"
    },
    {
        "countryName": "Morocco",
        "countryEmoji": "🇲🇦",
        "countryId": "MA"
    },
    {
        "countryName": "Mozambique",
        "countryEmoji": "🇲🇿",
        "countryId": "MZ"
    },
    {
        "countryName": "Myanmar",
        "countryEmoji": "🇲🇲",
        "countryId": "MM"
    },
    {
        "countryName": "Namibia",
        "countryEmoji": "🇳🇦",
        "countryId": "NA"
    },
    {
        "countryName": "Nauru",
        "countryEmoji": "🇳🇷",
        "countryId": "NR"
    },
    {
        "countryName": "Nepal",
        "countryEmoji": "🇳🇵",
        "countryId": "NP"
    },
    {
        "countryName": "Bonaire, Sint Eustatius and Saba",
        "countryEmoji": "🇧🇶",
        "countryId": "BQ"
    },
    {
        "countryName": "Netherlands",
        "countryEmoji": "🇳🇱",
        "countryId": "NL"
    },
    {
        "countryName": "New Caledonia",
        "countryEmoji": "🇳🇨",
        "countryId": "NC"
    },
    {
        "countryName": "New Zealand",
        "countryEmoji": "🇳🇿",
        "countryId": "NZ"
    },
    {
        "countryName": "Nicaragua",
        "countryEmoji": "🇳🇮",
        "countryId": "NI"
    },
    {
        "countryName": "Niger",
        "countryEmoji": "🇳🇪",
        "countryId": "NE"
    },
    {
        "countryName": "Nigeria",
        "countryEmoji": "🇳🇬",
        "countryId": "NG"
    },
    {
        "countryName": "Niue",
        "countryEmoji": "🇳🇺",
        "countryId": "NU"
    },
    {
        "countryName": "Norfolk Island",
        "countryEmoji": "🇳🇫",
        "countryId": "NF"
    },
    {
        "countryName": "Northern Mariana Islands",
        "countryEmoji": "🇲🇵",
        "countryId": "MP"
    },
    {
        "countryName": "Norway",
        "countryEmoji": "🇳🇴",
        "countryId": "NO"
    },
    {
        "countryName": "Oman",
        "countryEmoji": "🇴🇲",
        "countryId": "OM"
    },
    {
        "countryName": "Pakistan",
        "countryEmoji": "🇵🇰",
        "countryId": "PK"
    },
    {
        "countryName": "Palau",
        "countryEmoji": "🇵🇼",
        "countryId": "PW"
    },
    {
        "countryName": "Palestinian Territory Occupied",
        "countryEmoji": "🇵🇸",
        "countryId": "PS"
    },
    {
        "countryName": "Panama",
        "countryEmoji": "🇵🇦",
        "countryId": "PA"
    },
    {
        "countryName": "Papua new Guinea",
        "countryEmoji": "🇵🇬",
        "countryId": "PG"
    },
    {
        "countryName": "Paraguay",
        "countryEmoji": "🇵🇾",
        "countryId": "PY"
    },
    {
        "countryName": "Peru",
        "countryEmoji": "🇵🇪",
        "countryId": "PE"
    },
    {
        "countryName": "Philippines",
        "countryEmoji": "🇵🇭",
        "countryId": "PH"
    },
    {
        "countryName": "Pitcairn Island",
        "countryEmoji": "🇵🇳",
        "countryId": "PN"
    },
    {
        "countryName": "Poland",
        "countryEmoji": "🇵🇱",
        "countryId": "PL"
    },
    {
        "countryName": "Portugal",
        "countryEmoji": "🇵🇹",
        "countryId": "PT"
    },
    {
        "countryName": "Puerto Rico",
        "countryEmoji": "🇵🇷",
        "countryId": "PR"
    },
    {
        "countryName": "Qatar",
        "countryEmoji": "🇶🇦",
        "countryId": "QA"
    },
    {
        "countryName": "Reunion",
        "countryEmoji": "🇷🇪",
        "countryId": "RE"
    },
    {
        "countryName": "Romania",
        "countryEmoji": "🇷🇴",
        "countryId": "RO"
    },
    {
        "countryName": "Russia",
        "countryEmoji": "🇷🇺",
        "countryId": "RU"
    },
    {
        "countryName": "Rwanda",
        "countryEmoji": "🇷🇼",
        "countryId": "RW"
    },
    {
        "countryName": "Saint Helena",
        "countryEmoji": "🇸🇭",
        "countryId": "SH"
    },
    {
        "countryName": "Saint Kitts And Nevis",
        "countryEmoji": "🇰🇳",
        "countryId": "KN"
    },
    {
        "countryName": "Saint Lucia",
        "countryEmoji": "🇱🇨",
        "countryId": "LC"
    },
    {
        "countryName": "Saint Pierre and Miquelon",
        "countryEmoji": "🇵🇲",
        "countryId": "PM"
    },
    {
        "countryName": "Saint Vincent And The Grenadines",
        "countryEmoji": "🇻🇨",
        "countryId": "VC"
    },
    {
        "countryName": "Saint-Barthelemy",
        "countryEmoji": "🇧🇱",
        "countryId": "BL"
    },
    {
        "countryName": "Saint-Martin (French part)",
        "countryEmoji": "🇲🇫",
        "countryId": "MF"
    },
    {
        "countryName": "Samoa",
        "countryEmoji": "🇼🇸",
        "countryId": "WS"
    },
    {
        "countryName": "San Marino",
        "countryEmoji": "🇸🇲",
        "countryId": "SM"
    },
    {
        "countryName": "Sao Tome and Principe",
        "countryEmoji": "🇸🇹",
        "countryId": "ST"
    },
    {
        "countryName": "Saudi Arabia",
        "countryEmoji": "🇸🇦",
        "countryId": "SA"
    },
    {
        "countryName": "Senegal",
        "countryEmoji": "🇸🇳",
        "countryId": "SN"
    },
    {
        "countryName": "Serbia",
        "countryEmoji": "🇷🇸",
        "countryId": "RS"
    },
    {
        "countryName": "Seychelles",
        "countryEmoji": "🇸🇨",
        "countryId": "SC"
    },
    {
        "countryName": "Sierra Leone",
        "countryEmoji": "🇸🇱",
        "countryId": "SL"
    },
    {
        "countryName": "Singapore",
        "countryEmoji": "🇸🇬",
        "countryId": "SG"
    },
    {
        "countryName": "Slovakia",
        "countryEmoji": "🇸🇰",
        "countryId": "SK"
    },
    {
        "countryName": "Slovenia",
        "countryEmoji": "🇸🇮",
        "countryId": "SI"
    },
    {
        "countryName": "Solomon Islands",
        "countryEmoji": "🇸🇧",
        "countryId": "SB"
    },
    {
        "countryName": "Somalia",
        "countryEmoji": "🇸🇴",
        "countryId": "SO"
    },
    {
        "countryName": "South Africa",
        "countryEmoji": "🇿🇦",
        "countryId": "ZA"
    },
    {
        "countryName": "South Georgia",
        "countryEmoji": "🇬🇸",
        "countryId": "GS"
    },
    {
        "countryName": "South Sudan",
        "countryEmoji": "🇸🇸",
        "countryId": "SS"
    },
    {
        "countryName": "Spain",
        "countryEmoji": "🇪🇸",
        "countryId": "ES"
    },
    {
        "countryName": "Sri Lanka",
        "countryEmoji": "🇱🇰",
        "countryId": "LK"
    },
    {
        "countryName": "Sudan",
        "countryEmoji": "🇸🇩",
        "countryId": "SD"
    },
    {
        "countryName": "Suriname",
        "countryEmoji": "🇸🇷",
        "countryId": "SR"
    },
    {
        "countryName": "Svalbard And Jan Mayen Islands",
        "countryEmoji": "🇸🇯",
        "countryId": "SJ"
    },
    {
        "countryName": "Swaziland",
        "countryEmoji": "🇸🇿",
        "countryId": "SZ"
    },
    {
        "countryName": "Sweden",
        "countryEmoji": "🇸🇪",
        "countryId": "SE"
    },
    {
        "countryName": "Switzerland",
        "countryEmoji": "🇨🇭",
        "countryId": "CH"
    },
    {
        "countryName": "Syria",
        "countryEmoji": "🇸🇾",
        "countryId": "SY"
    },
    {
        "countryName": "Taiwan",
        "countryEmoji": "🇹🇼",
        "countryId": "TW"
    },
    {
        "countryName": "Tajikistan",
        "countryEmoji": "🇹🇯",
        "countryId": "TJ"
    },
    {
        "countryName": "Tanzania",
        "countryEmoji": "🇹🇿",
        "countryId": "TZ"
    },
    {
        "countryName": "Thailand",
        "countryEmoji": "🇹🇭",
        "countryId": "TH"
    },
    {
        "countryName": "Togo",
        "countryEmoji": "🇹🇬",
        "countryId": "TG"
    },
    {
        "countryName": "Tokelau",
        "countryEmoji": "🇹🇰",
        "countryId": "TK"
    },
    {
        "countryName": "Tonga",
        "countryEmoji": "🇹🇴",
        "countryId": "TO"
    },
    {
        "countryName": "Trinidad And Tobago",
        "countryEmoji": "🇹🇹",
        "countryId": "TT"
    },
    {
        "countryName": "Tunisia",
        "countryEmoji": "🇹🇳",
        "countryId": "TN"
    },
    {
        "countryName": "Turkey",
        "countryEmoji": "🇹🇷",
        "countryId": "TR"
    },
    {
        "countryName": "Turkmenistan",
        "countryEmoji": "🇹🇲",
        "countryId": "TM"
    },
    {
        "countryName": "Turks And Caicos Islands",
        "countryEmoji": "🇹🇨",
        "countryId": "TC"
    },
    {
        "countryName": "Tuvalu",
        "countryEmoji": "🇹🇻",
        "countryId": "TV"
    },
    {
        "countryName": "Uganda",
        "countryEmoji": "🇺🇬",
        "countryId": "UG"
    },
    {
        "countryName": "Ukraine",
        "countryEmoji": "🇺🇦",
        "countryId": "UA"
    },
    {
        "countryName": "United Arab Emirates",
        "countryEmoji": "🇦🇪",
        "countryId": "AE"
    },
    {
        "countryName": "United Kingdom",
        "countryEmoji": "🇬🇧",
        "countryId": "GB"
    },
    {
        "countryName": "United States",
        "countryEmoji": "🇺🇸",
        "countryId": "US"
    },
    {
        "countryName": "United States Minor Outlying Islands",
        "countryEmoji": "🇺🇲",
        "countryId": "UM"
    },
    {
        "countryName": "Uruguay",
        "countryEmoji": "🇺🇾",
        "countryId": "UY"
    },
    {
        "countryName": "Uzbekistan",
        "countryEmoji": "🇺🇿",
        "countryId": "UZ"
    },
    {
        "countryName": "Vanuatu",
        "countryEmoji": "🇻🇺",
        "countryId": "VU"
    },
    {
        "countryName": "Vatican City State (Holy See)",
        "countryEmoji": "🇻🇦",
        "countryId": "VA"
    },
    {
        "countryName": "Venezuela",
        "countryEmoji": "🇻🇪",
        "countryId": "VE"
    },
    {
        "countryName": "Vietnam",
        "countryEmoji": "🇻🇳",
        "countryId": "VN"
    },
    {
        "countryName": "Virgin Islands (British)",
        "countryEmoji": "🇻🇬",
        "countryId": "VG"
    },
    {
        "countryName": "Virgin Islands (US)",
        "countryEmoji": "🇻🇮",
        "countryId": "VI"
    },
    {
        "countryName": "Wallis And Futuna Islands",
        "countryEmoji": "🇼🇫",
        "countryId": "WF"
    },
    {
        "countryName": "Western Sahara",
        "countryEmoji": "🇪🇭",
        "countryId": "EH"
    },
    {
        "countryName": "Yemen",
        "countryEmoji": "🇾🇪",
        "countryId": "YE"
    },
    {
        "countryName": "Zambia",
        "countryEmoji": "🇿🇲",
        "countryId": "ZM"
    },
    {
        "countryName": "Zimbabwe",
        "countryEmoji": "🇿🇼",
        "countryId": "ZW"
    },
    {
        "countryName": "Kosovo",
        "countryEmoji": "🇽🇰",
        "countryId": "XK"
    },
    {
        "countryName": "Curaçao",
        "countryEmoji": "🇨🇼",
        "countryId": "CW"
    },
    {
        "countryName": "Sint Maarten (Dutch part)",
        "countryEmoji": "🇸🇽",
        "countryId": "SX"
    }
]

export function stateCountryList(listName) {
    return `<div class="list" id="${listName}-list">
                <h4 class="heading">Please select your ${listName}</h4>
                <ul></ul>`
}

export function noDataTemplate() {
    return `<section>
                <div class="change-btn left pseudo-title" data-title="change">
                    <span class="iconify" data-icon="ic:baseline-change-circle" data-width="40"></span>
                </div>    
                <p class = "no-data-msg"><span class="iconify" data-icon="noto-v1:sad-but-relieved-face" data-width="50px"></span>No data Available!</p>     
            </section>`
}