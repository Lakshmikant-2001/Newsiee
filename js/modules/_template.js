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


export function countriesList() {
    return ` <div id="country-list">
                <h4 class="heading">Please select your country</h4>
                <ul>
                    <li id="AF"><span>🇦🇫</span>Afghanistan</li>
                    <li id="AX"><span>🇦🇽</span>Aland Islads</li>
                    <li id="AL"><span>🇦🇱</span>Albania</li>
                    <li id="DZ"><span>🇩🇿</span>Algeria</li>
                    <li id="AS"><span>🇦🇸</span>American Samoa</li>
                    <li id="AD"><span>🇦🇩</span>Andorra</li>
                    <li id="AO"><span>🇦🇴</span>Angola</li>
                    <li id="AI"><span>🇦🇮</span>Anguilla</li>
                    <li id="AQ"><span>🇦🇶</span>Antarctica</li>
                    <li id="AG"><span>🇦🇬</span>Antigua And Brbuda</li>
                    <li id="AR"><span>🇦🇷</span>Argentina</li>
                    <li id="AM"><span>🇦🇲</span>Armenia</li>
                    <li id="AW"><span>🇦🇼</span>Aruba</li>
                    <li id="AU"><span>🇦🇺</span>Australia</li>
                    <li id="AT"><span>🇦🇹</span>Austria</li>
                    <li id="AZ"><span>🇦🇿</span>Azerbaijan</li>
                    <li id="BS"><span>🇧🇸</span>Bahamas The</li>
                    <li id="BH"><span>🇧🇭</span>Bahrain</li>
                    <li id="BD"><span>🇧🇩</span>Bangladesh</li>
                    <li id="BB"><span>🇧🇧</span>Barbados</li>
                    <li id="BY"><span>🇧🇾</span>Belarus</li>
                    <li id="BE"><span>🇧🇪</span>Belgium</li>
                    <li id="BZ"><span>🇧🇿</span>Belize</li>
                    <li id="BJ"><span>🇧🇯</span>Benin</li>
                    <li id="BM"><span>🇧🇲</span>Bermuda</li>
                    <li id="BT"><span>🇧🇹</span>Bhutan</li>
                    <li id="BO"><span>🇧🇴</span>Bolivia</li>
                    <li id="BA"><span>🇧🇦</span>Bosnia and Herzegovina</li>
                    <li id="BW"><span>🇧🇼</span>Botswana</li>
                    <li id="BV"><span>🇧🇻</span>Bouvet Island</li>
                    <li id="BR"><span>🇧🇷</span>Brazil</li>
                    <li id="IO"><span>🇮🇴</span>British Indian Ocean Territory</li>
                    <li id="BN"><span>🇧🇳</span>Brunei</li>
                    <li id="BG"><span>🇧🇬</span>Bulgaria</li>
                    <li id="BF"><span>🇧🇫</span>Burkina Faso</li>
                    <li id="BI"><span>🇧🇮</span>Burundi</li>
                    <li id="KH"><span>🇰🇭</span>Cambodia</li>
                    <li id="CM"><span>🇨🇲</span>Cameroon</li>
                    <li id="CA"><span>🇨🇦</span>Canada</li>
                    <li id="CV"><span>🇨🇻</span>Cape Verde</li>
                    <li id="KY"><span>🇰🇾</span>Cayman Islands</li>
                    <li id="CF"><span>🇨🇫</span>Central African Republic</li>
                    <li id="TD"><span>🇹🇩</span>Chad</li>
                    <li id="CL"><span>🇨🇱</span>Chile</li>
                    <li id="CN"><span>🇨🇳</span>China</li>
                    <li id="CX"><span>🇨🇽</span>Christmas Island</li>
                    <li id="CC"><span>🇨🇨</span>Cocos (Keeling) Islands</li>
                    <li id="CO"><span>🇨🇴</span>Colombia</li>
                    <li id="KM"><span>🇰🇲</span>Comoros</li>
                    <li id="CG"><span>🇨🇬</span>Congo</li>
                    <li id="CD"><span>🇨🇩</span>Democratic Republic of the Congo</li>
                    <li id="CK"><span>🇨🇰</span>Cook Islands</li>
                    <li id="CR"><span>🇨🇷</span>Costa Rica</li>
                    <li id="CI"><span>🇨🇮</span>Cote D'Ivoire (Ivory Coast)</li>
                    <li id="HR"><span>🇭🇷</span>Croatia</li>
                    <li id="CU"><span>🇨🇺</span>Cuba</li>
                    <li id="CY"><span>🇨🇾</span>Cyprus</li>
                    <li id="CZ"><span>🇨🇿</span>Czech Republic</li>
                    <li id="DK"><span>🇩🇰</span>Denmark</li>
                    <li id="DJ"><span>🇩🇯</span>Djibouti</li>
                    <li id="DM"><span>🇩🇲</span>Dominica</li>
                    <li id="DO"><span>🇩🇴</span>Dominican Republic</li>
                    <li id="TL"><span>🇹🇱</span>East Timor</li>
                    <li id="EC"><span>🇪🇨</span>Ecuador</li>
                    <li id="EG"><span>🇪🇬</span>Egypt</li>
                    <li id="SV"><span>🇸🇻</span>El Salvador</li>
                    <li id="GQ"><span>🇬🇶</span>Equatorial uinea</li>
                    <li id="ER"><span>🇪🇷</span>Eritrea</li>
                    <li id="EE"><span>🇪🇪</span>Estonia</li>
                    <li id="ET"><span>🇪🇹</span>Ethiopia</li>
                    <li id="FK"><span>🇫🇰</span>Falkland Islands</li>
                    <li id="FO"><span>🇫🇴</span>Faroe Islands</li>
                    <li id="FJ"><span>🇫🇯</span>Fiji Island</li>
                    <li id="FI"><span>🇫🇮</span>Finland</li>
                    <li id="FR"><span>🇫🇷</span>France</li>
                    <li id="GF"><span>🇬🇫</span>French Guiana</li>
                    <li id="PF"><span>🇵🇫</span>French Polynesia</li>
                    <li id="TF"><span>🇹🇫</span>French Sothern Territories</li>
                    <li id="GA"><span>🇬🇦</span>Gabon</li>
                    <li id="GM"><span>🇬🇲</span>Gambia The</li>
                    <li id="GE"><span>🇬🇪</span>Georgia</li>
                    <li id="DE"><span>🇩🇪</span>Germany</i>
                    <li id="GH"><span>🇬🇭</span>Ghana</li>
                    <li id="GI"><span>🇬🇮</span>Gibraltar</li>
                    <li id="GR"><span>🇬🇷</span>Greece</li>
                    <li id="GL"><span>🇬🇱</span>Greenland</li>
                    <li id="GD"><span>🇬🇩</span>Grenada</li>
                    <li id="GP"><span>🇬🇵</span>Guadeloupe</li>
                    <li id="GU"><span>🇬🇺</span>Guam</li>
                    <li id="GT"><span>🇬🇹</span>Guatemala</li>
                    <li id="GG"><span>🇬🇬</span>Guernsey and Alderney</li>
                    <li id="GN"><span>🇬🇳</span>Guinea</li>
                    <li id="GW"><span>🇬🇼</span>Guinea-Bissau</li>
                    <li id="GY"><span>🇬🇾</span>Guyana</li>
                    <li id="HT"><span>🇭🇹</span>Haiti</li>
                    <li id="HM"><span>🇭🇲</span>Heard Island and McDonald Islands</li>
                    <li id="HN"><span>🇭🇳</span>Honduras</li>
                    <li id="HK"><span>🇭🇰</span>Hong Kong S.A.R.</li>
                    <li id="HU"><span>🇭🇺</span>Hungary</li>
                    <li id="IS"><span>🇮🇸</span>Iceland</li>
                    <li id="IN"><span>🇮🇳</span>India</li>
                    <li id="ID"><span>🇮🇩</span>Indonesi</li>
                    <li id="IR"><span>🇮🇷</span>Iran</li>
                    <li id="IQ"><span>🇮🇶</span>Iraq</li>
                    <li id="IE"><span>🇮🇪</span>Ireland</li>
                    <li id="IL"><span>🇮🇱</span>Israel</li>
                    <li id="IT"><span>🇮🇹</span>Italy</li>
                    <li id="JM"><span>🇯🇲</span>Jamaica</li>
                    <li id="JP"><span>🇯🇵</span>Japan</li>
                    <li id="JE"><span>🇯🇪</span>Jersey</li>
                    <li id="JO"><span>🇯🇴</span>Jordan</li>
                    <li id="KZ"><span>🇰🇿</span>Kazakhsta</li>
                    <li id="KE"><span>🇰🇪</span>Kenya</li>
                    <li id="KI"><span>🇰🇮</span>Kiribati</li>
                    <li id="KP"><span>🇰🇵</span>North Korea</li>
                    <li id="KR"><span>🇰🇷</span>South Korea</li>
                    <li id="KW"><span>🇰🇼</span>Kuwait</li>
                    <li id="KG"><span>🇰🇬</span>Kyrgyzstan</li>
                    <li id="LA"><span>🇱🇦</span>Laos</li>
                    <li id="LV"><span>🇱🇻</span>Latvia</li>
                    <li id="LB"><span>🇱🇧</span>Lebanon</li>
                    <li id="LS"><span>🇱🇸</span>Lesotho</li>
                    <li id="LR"><span>🇱🇷</span>Liberia</li>
                    <li id="LY"><span>🇱🇾</span>Libya</li>
                    <li id="LI"><span>🇱🇮</span>Liechtenstein</li>
                    <li id="LT"><span>🇱🇹</span>Lithuania</li>
                    <li id="LU"><span>🇱🇺</span>Luxembourg</li>
                    <li id="MO"><span>🇲🇴</span>Macau S.A.R.</li>
                    <li id="MK"><span>🇲🇰</span>Macedonia</li>
                    <li id="MG"><span>🇲🇬</span>Madagascar</li>
                    <li id="MW"><span>🇲🇼</span>Malawi</li>
                    <li id="MY"><span>🇲🇾</span>Malaysia</li>
                    <li id="MV"><span>🇲🇻</span>Maldives</li>
                    <li id="ML"><span>🇲🇱</span>Mali</li>
                    <li id="MT"><span>🇲🇹</span>Malta</li>
                    <li id="IM"><span>🇮🇲</span>Man (Isle of)</li>
                    <li id="MH"><span>🇲🇭</span>Marshall Islands</li>
                    <li id="MQ"><span>🇲🇶</span>Martinique</li>
                    <li id="MR"><span>🇲🇷</span>Mauritania</li>
                    <li id="MU"><span>🇲🇺</span>Mauritius</li>
                    <li id="YT"><span>🇾🇹</span>Mayotte</li>
                    <li id="MX"><span>🇲🇽</span>Mexico</li>
                    <li id="FM"><span>🇫🇲</span>Micronesia</li>
                    <li id="MD"><span>🇲🇩</span>Moldova</li>
                    <li id="MC"><span>🇲🇨</span>Monaco</li>
                    <li id="MN"><span>🇲🇳</span>Mongolia</li>
                    <li id="ME"><span>🇲🇪</span>Montenegro</li>
                    <li id="MS"><span>🇲🇸</span>Montserrat</li>
                    <li id="MA"><span>🇲🇦</span>Morocco</li>
                    <li id="MZ"><span>🇲🇿</span>Mozambique</li>
                    <li id="MM"><span>🇲🇲</span>Myanmar</li>
                    <li id="NA"><span>🇳🇦</span>Namibia</li>
                    <li id="NR"><span>🇳🇷</span>Nauru</li>
                    <li id="NP"><span>🇳🇵</span>Nepal</li>
                    <li id="BQ"><span>🇧🇶</span>Bonaire, Sint Eustatius and Saba</li>
                    <li id="NL"><span>🇳🇱</span>Netherlands</li>
                    <li id="NC"><span>🇳🇨</span>New Caledonia</li>
                    <li id="NZ"><span>🇳🇿</span>New Zealand</li>
                    <li id="NI"><span>🇳🇮</span>Nicaragua</li>
                    <li id="NE"><span>🇳🇪</span>Niger</li>
                    <li id="NG"><span>🇳🇬</span>Nigeria</li>
                    <li id="NU"><span>🇳🇺</span>Niue</li>
                    <li id="NF"><span>🇳🇫</span>Norfolk Island</li>
                    <li id="MP"><span>🇲🇵</span>Northern Mariana Islands</li>
                    <li id="NO"><span>🇳🇴</span>Norway</li>
                    <li id="OM"><span>🇴🇲</span>Oman</li>
                    <li id="PK"><span>🇵🇰</span>Pakistan</li>
                    <li id="PW"><span>🇵🇼</span>Palau</li>
                    <li id="PS"><span>🇵🇸</span>Palestinian Territory Occupied</li>
                    <li id="PA"><span>🇵🇦</span>Panama</li>
                    <li id="PG"><span>🇵🇬</span>Papua new Guinea</li>
                    <li id="PY"><span>🇵🇾</span>Paraguay</li>
                    <li id="PE"><span>🇵🇪</span>Peru</li>
                    <li id="PH"><span>🇵🇭</span>Philippines</li>
                    <li id="PN"><span>🇵🇳</span>Pitcairn Island</li>
                    <li id="PL"><span>🇵🇱</span>Poland</li>
                    <li id="PT"><span>🇵🇹</span>Portugal</li>
                    <li id="PR"><span>🇵🇷</span>Puerto Rico</li>
                    <li id="QA"><span>🇶🇦</span>Qatar</li>
                    <li id="RE"><span>🇷🇪</span>Reunion</li>
                    <li id="RO"><span>🇷🇴</span>Romania</li>
                    <li id="RU"><span>🇷🇺</span>Russia</li>
                    <li id="RW"><span>🇷🇼</span>Rwanda</li>
                    <li id="SH"><span>🇸🇭</span>Saint Helena</li>
                    <li id="KN"><span>🇰🇳</span>Saint Kitts And Nevis</li>
                    <li id="LC"><span>🇱🇨</span>Saint Lucia</li>
                    <li id="PM"><span>🇵🇲</span>Saint Pierre and Miquelon</li>
                    <li id="VC"><span>🇻🇨</span>Saint Vincent And The Grenadines</li>
                    <li id="BL"><span>🇧🇱</span>Saint-Barthelemy</li>
                    <li id="MF"><span>🇲🇫</span>Saint-Martin (French part)</li>
                    <li id="WS"><span>🇼🇸</span>Samoa</li>
                    <li id="SM"><span>🇸🇲</span>San Marino</li>
                    <li id="ST"><span>🇸🇹</span>Sao Tome and Principe</li>
                    <li id="SA"><span>🇸🇦</span>Saudi Arabia</li>
                    <li id="SN"><span>🇸🇳</span>Senegal</li>
                    <li id="RS"><span>🇷🇸</span>Serbia</li>
                    <li id="SC"><span>🇸🇨</span>Seychelles</li>
                    <li id="SL"><span>🇸🇱</span>Sierra Leone</li>
                    <li id="SG"><span>🇸🇬</span>Singapore</li>
                    <li id="SK"><span>🇸🇰</span>Slovakia</li>
                    <li id="SI"><span>🇸🇮</span>Slovenia</li>
                    <li id="SB"><span>🇸🇧</span>Solomon Islands</li>
                    <li id="SO"><span>🇸🇴</span>Somalia</li>
                    <li id="ZA"><span>🇿🇦</span>South Africa</li>
                    <li id="GS"><span>🇬🇸</span>South Georgia</li>
                    <li id="SS"><span>🇸🇸</span>South Sudan</li>
                    <li id="ES"><span>🇪🇸</span>Spain</li>
                    <li id="LK"><span>🇱🇰</span>Sri Lanka</li>
                    <li id="SD"><span>🇸🇩</span>Sudan</li>
                    <li id="SR"><span>🇸🇷</span>Suriname</li>
                    <li id="SJ"><span>🇸🇯</span>Svalbard And Jan Mayen Islands</li>
                    <li id="SZ"><span>🇸🇿</span>Swaziland</li>
                    <li id="SE"><span>🇸🇪</span>Sweden</li>
                    <li id="CH"><span>🇨🇭</span>Switzerland</li>
                    <li id="SY"><span>🇸🇾</span>Syria</li>
                    <li id="TW"><span>🇹🇼</span>Taiwan</li>
                    <li id="TJ"><span>🇹🇯</span>Tajikistan</li>
                    <li id="TZ"><span>🇹🇿</span>Tanzania</li>
                    <li id="TH"><span>🇹🇭</span>Thailand</li>
                    <li id="TG"><span>🇹🇬</span>Togo</li>
                    <li id="TK"><span>🇹🇰</span>Tokelau</li>
                    <li id="TO"><span>🇹🇴</span>Tonga</li>
                    <li id="TT"><span>🇹🇹</span>Trinidad And Tobago</li>
                    <li id="TN"><span>🇹🇳</span>Tunisia</li>
                    <li id="TR"><span>🇹🇷</span>Turkey</li>
                    <li id="TM"><span>🇹🇲</span>Turkmenistan</li>
                    <li id="TC"><span>🇹🇨</span>Turks And Caicos Islands</li>
                    <li id="TV"><span>🇹🇻</span>Tuvalu</li>
                    <li id="UG"><span>🇺🇬</span>Uganda</li>
                    <li id="UA"><span>🇺🇦</span>Ukraine</li>
                    <li id="AE"><span>🇦🇪</span>United Arab Emirates</li>
                    <li id="GB"><span>🇬🇧</span>United Kingdom</li>
                    <li id="US"><span>🇺🇸</span>United States</li>
                    <li id="UM"><span>🇺🇲</span>United States Minor Outlying Islands</li>
                    <li id="UY"><span>🇺🇾</span>Uruguay</li>
                    <li id="UZ"><span>🇺🇿</span>Uzbekistan</li>
                    <li id="VU"><span>🇻🇺</span>Vanuatu</li>
                    <li id="VA"><span>🇻🇦</span>Vatican City State (Holy See)</li>
                    <li id="VE"><span>🇻🇪</span>Venezuela</li>
                    <li id="VN"><span>🇻🇳</span>Vietnam</li>
                    <li id="VG"><span>🇻🇬</span>Virgin Islands (British)</li>
                    <li id="VI"><span>🇻🇮</span>Virgin Islands (US)</li>
                    <li id="WF"><span>🇼🇫</span>Wallis And Futuna Islands</li>
                    <li id="EH"><span>🇪🇭</span>Western Sahara</li>
                    <li id="YE"><span>🇾🇪</span>Yemen</li>
                    <li id="ZM"><span>🇿🇲</span>Zambia</li>
                    <li id="ZW"><span>🇿🇼</span>Zimbabwe</li>
                    <li id="XK"><span>🇽🇰</span>Kosovo</li>
                    <li id="CW"><span>🇨🇼</span>Curaçao</li>
                    <li id="SX"><span>🇸🇽</span>Sint Maarten (Dutch part)</li>
                </ul>
            </div>`
}