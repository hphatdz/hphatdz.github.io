//////////////////////////////////////////////////////////////
// CHECK PROTECT
(function() {
  function HoangPhatProtect() {
    if (typeof jQuery === "undefined") {
      console.error("jQuery is not loaded");
      return;
    }
    if (typeof console === "undefined") {
      console = {};
      console.log = console.warn = console.error = function() {};
    }
    var HoangPhatContent = "-HoangPhat-";
    var HoangPhat = document.getElementById("Tele_@AnSitDev");
    if (HoangPhat === null) {
      alert('Phát hiện source code đã bị chỉnh sửa !')
      window.location.replace("https://www.facebook.com/AnSit.Developers");
      return;
    } else if (HoangPhat.innerHTML !== HoangPhatContent){
      return;
    }
  }
  HoangPhatProtect();
})();
// ABOUT ME
document.getElementById("HoangPhatAbout_1").innerHTML = 'Không làm hòa với kẻ phảm bội, không làm bạn với kẻ vô ơn.';
// FOOTER
const footerElement = document.createElement("footer"); 
footerElement.classList.add("Cuoi", "Trang");
const pElement = document.createElement("p");
pElement.classList.add("HoangPhatFtCopyright");
const spanElement = document.createElement("span");
spanElement.style.fontFamily = "Monomaniac One";
spanElement.classList.add("@Copyright");
const aElement = document.createElement("a");
aElement.style.textDecoration = "none";
aElement.href = "https://www.facebook.com/HoangPhat.Developers";
const uElement = document.createElement("u");
uElement.style.color = "aliceblue";
uElement.textContent = "Hoang Phat ♡";
const strongElement = document.createElement("strong");
strongElement.textContent = "All rights reserved - © 2023";
aElement.appendChild(uElement);
spanElement.appendChild(document.createTextNode("Created by "));
spanElement.appendChild(aElement);
spanElement.appendChild(document.createElement("br"));
spanElement.appendChild(strongElement);
pElement.appendChild(spanElement);
footerElement.appendChild(pElement);
document.body.appendChild(footerElement);
// NHÚNG LINK SCRIPT
var script = document.createElement("script");
script.src = "//cdn.jsdelivr.net/npm/sweetalert2@9";
//script.onload = function() {ThanhDieuAlert();};
document.head.appendChild(script);
// CODE CSS IN JS
/*var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "./HoangPhatft-data/css/index.css";
document.head.appendChild(link);*/
var style = document.createElement("style");
style.innerHTML = `
body {
  background-color: #000;
/*background-image: url('https://api.ipxi.cn/wp/api.php'); 
background-size: cover;
background-repeat: no-repeat;
background-position: center;*/
position: relative;
font-family: Concert One;
}
.Border {
    font-size: 12px;
    position: relative;
    min-height: 100%;
    box-sizing: border-box;
    padding-bottom: 80px;
  text-align: center;
  background-color: rgb(0, 0, 0);
  padding: 0px;
  margin: 8px;
  border-style: double;
  border-radius: 15px;
  border-color: rgb(236, 11, 11);
  border-width: 2px;
  animation-name: bodyborder;
  animation-iteration-count: infinite;
  animation-duration: 5s;
  animation-direction: right;
}
.BlurWebs {
  animation: blur 5s linear 1 0s forwards;
}
/*
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
          THANH BAR
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
*/
::-webkit-scrollbar {
  width: 8px;
  height: 15px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(106, 96, 255); 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgb(0, 255, 98); 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #00ffbc; 
}

/*
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
        HOME HOANGPHAT
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
*/
.MangXaHoiFtHoangPhat div {
  border: 2px solid white;
  font-family: Righteous;
  border-radius: 5px; 
  color: white; 
  padding: 10px 24px; 
  cursor: pointer;  
  width: unset;
  margin: auto;
  transition: 0.5s;
  text-align: center;
  text-shadow: -1px 0 5px CYAN, 
               0 1px 5px RED, 
               1px 0 5px CYAN, 
               0 -1px 5px RED;
}
/* Phân giải trên mobile */
@media only screen and (max-width: 768px) {
  .MangXaHoiFtHoangPhat div {
    width: 65%;
  }
}
/* Phân giải trên PC */
@media only screen and (min-width: 769px) {
  .MangXaHoiFtHoangPhat div {
    width: 30%;
  }
}
.MangXaHoiFtHoangPhat:after {
  content: "";
  clear: both;
  display: table;
}
.MangXaHoiFtHoangPhat div:not(:last-child) {
  border-right: none; 
}
.MangXaHoiFtHoangPhat div:hover {
  transform: translateY(-3px);
  transition: 0.5s;
}
.Facebook { 
  position: relative;
  background: rgb(88,101,242); 
  background: linear-gradient(139deg, 
    rgb(73, 89, 255) 50%,
    rgba(0, 198, 255, 0.84) 100%);
  color: var(--accentColor);
  border: solid var(--accentColor) 2px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px; /* 17px */
  text-decoration: none;
  /* transition: all .25s cubic-bezier(.08, .59, .29, .99); */
  -webkit-tap-highlight-color: transparent;
}
.Youtube {
  position: relative;
  background: rgb(221,105,105);
  background: linear-gradient(138deg, 
    rgba(221,105,105,1) 0%, 
    rgba(222,94,94,1) 21%, 
    rgba(223,86,86,1) 37%, 
    rgba(223,86,86,1) 46%, 
    rgba(235,49,43,1) 66%);
    color: var(--accentColor);
    border: solid var(--accentColor) 2px;
    border-radius: 10px;
    font-size: 1rem;
    text-align: center;
    display: block;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px; /* 17px */
    text-decoration: none;
    /* transition: all .25s cubic-bezier(.08, .59, .29, .99); */
    -webkit-tap-highlight-color: transparent;
}
.Discord {
  position: relative;
  background: rgb(88,101,242); 
  background: linear-gradient(139deg, 
    rgba(88,101,242,1) 41%, 
    rgba(152,100,241,1) 85%);
  color: var(--accentColor);
  border: solid var(--accentColor) 2px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px; /* 17px */
  text-decoration: none;
  /* transition: all .25s cubic-bezier(.08, .59, .29, .99); */
  -webkit-tap-highlight-color: transparent;
}

.Instagram{
  position: relative;
  background: rgb(131,58,180); 
  background: linear-gradient(90deg, 
    rgba(131,58,180,1) 0%, 
    rgba(253,29,29,1) 50%, 
    rgba(252,176,69,1) 100%);
  color: var(--accentColor);
  border: solid var(--accentColor) 2px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px; /* 17px */
  text-decoration: none;
  /* transition: all .25s cubic-bezier(.08, .59, .29, .99); */
  -webkit-tap-highlight-color: transparent;
}
/*
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
    THONG TIN THANH TOAN
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
*/
.ThongTinThanhToan {
  transition: .5s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #252525;
  padding: 14px;
  border-radius: 10px;
  box-shadow: 0 2px 2px 1px #555;
  color: #ffffff;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 2px;
  box-shadow: 0 0 7px 3px #33FFFF;
}
.ThongTinThanhToan:hover {
  background-color: #353535;
  box-shadow: 0 2px 2px 1px #555;
  transform: scale(0.95);
  border-radius: 2px;
  box-shadow: 0 0 7px 3px #33FFFF;
}
.ThongTinThanhToanTitle {
  padding: 0 0;
  margin: 0 0;
  font-size: 23px;
  font-weight: 700;
  color: #00FFFF;}
.ThongTinThanhToanText {
  padding: 0 0;
  margin: 5 0;
  font-size: 20px;
  font-weight: 500;
  color: #00CC33;
  margin-top: 5px;
}

/*
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
        BO TRÒN AVATAR
✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼
*/
.Blob {
  background: black;
  border-radius: 50%;
  margin: 10px;
  height: 150px;
  width: 150px; 
  box-shadow: 0 1px 13px lime;
  transform: scale(.5);
  animation: pulse 2s infinite;
  margin-top: 50px;
}

@keyframes pulse {
  0% {
    transform: scale(0.99);
    box-shadow: 0 1px 13px cyan;
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 1px 13px lime;
  }
  100% {
    transform: scale(0.99);
    box-shadow: 0 1px 13px magenta;
  }
}
.Cuoi {
  font-size: 15px;
  padding: 40px 0;
  color: #4b4c4d;
}
.Trang {
  color: white;
  -webkit-mask: linear-gradient(-60deg,
                                white 30%,
                                #0004,
                                white 70%) 
                                right/300% 100%;
  background-repeat: no-repeat;
  animation: shimmer 1s infinite;
}
.Footer .HoangPhatFtCopyright {
  text-align: center;
  color: #aaa;
  margin-bottom: 0;
}
`;
document.head.appendChild(style);
            // SKILL LANGUAGE
            $('.skill-per').each(function() {
              var $this = $(this);
              var per = $this.attr('per');
              $this.css("width", per + '%');
              $({
                animatedValue: 0
              }).animate({
                animatedValue: per
              }, {
                duration: 15000,
                step: function() {
                  $this.attr('per', Math.floor(this.animatedValue) + '%');
                },
                complete: function() {
                  $this.attr('per', Math.floor(this.animatedValue) + '%');
                }
              });
            });
// USER NAME + TÍCH XANH
document.getElementById("userName").innerHTML = 'HoangPhat <img src="https://uploads.nhanhoa.com/attach/1618816460_tich_xanh_facebook.png" width="17" height="17" alt="Tích Xanh">';
// CHECK FPS
var fps = document.getElementById("fps");
var startTime = Date.now();
var frame = 0;
function CheckFps() {
  var time = Date.now();
  frame++;
  if (time - startTime > 1000) {
    fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);
    startTime = time;
    frame = 0;
  }
  window.requestAnimationFrame(CheckFps);
}
// TIEU SU TYPE TEXT
let typed = new Typed(".GioiThieu", {
  strings: ["Hi my name is Hoang Phat","Hey brother, I'm a Developer.", "I love money ♡."],
  typeSpeed: 95,
  backSpeed: 75,
  loop: true
})

// MUSIC
const HoangPhat_List = [
  "https://media.githubusercontent.com/media/hphatdz/hphatdz.github.io/main/music/1.mp3",
  "https://media.githubusercontent.com/media/hphatdz/hphatdz.github.io/main/music/2.mp3",
  "https://media.githubusercontent.com/media/hphatdz/hphatdz.github.io/main/music/4.mp3",
  "https://media.githubusercontent.com/media/hphatdz/hphatdz.github.io/main/music/5.mp3",
  "https://media.githubusercontent.com/media/hphatdz/hphatdz.github.io/main/music/6.mp3"
];

let randomPlaylist = [];
let trackIndex = 0;
const audio = new Audio();

// hàm
function shuffleMusic(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// random
function playNextRandomTrack() {
  if (randomPlaylist.length === 0 || trackIndex >= randomPlaylist.length) {
    randomPlaylist = shuffleMusic(HoangPhat_List);
    trackIndex = 0;
  }
  audio.src = randomPlaylist[trackIndex];
  audio.play().catch(function(err) {
    console.log("Cần tương tác với trang để phát nhạc:", err);
  });
  trackIndex++;
}

function HoangPhatAudio() {
  if (!audio.src) {
    playNextRandomTrack();
  } else {
    audio.play();
  }
}

document.addEventListener('click', HoangPhatAudio, { once: true });

audio.addEventListener("ended", function() {
  playNextRandomTrack();
});

function onCreate() {
  CheckFps();
  HomeHoangPhat();
  HoangPhatAudio();
  ShowToast();
}
// LOADER SCREEN ----------
let spin = document.querySelector('.LoaderCover');
window.addEventListener('load', () => {
  spin.classList.add('HideLoader');
  setTimeout(() => {
    spin.remove();
  }, 5000);
});
function ShowToast() {
	var x = document.getElementById("Toast");
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

function Youtube() {
  setTimeout(function() {
    window.open('https://www.youtube.com/@MrBeast', '_blank')},
  100);
}
function Facebook() {
  setTimeout(function() {
    window.open('https://www.facebook.com/AnSit.Developers', '_blank')},
  100);
}
function Discord() {
  setTimeout(function() {
    window.open('https://discord.com/users/612851909921079307', '_blank')},
  100);
}
function Instagram() {
  setTimeout(function() {
    window.open('https://www.tiktok.com/@hphat.0', '_blank')},
  100);
}
function HomeHoangPhat() {
  Swal.fire({
    title: '𝙉𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 !',
    text: '=>> 𝘾𝙝𝙖𝙤 𝙈𝙪𝙣𝙜 𝘽𝙖𝙣 𝘿𝙚𝙣 𝙑𝙤𝙞 𝙋𝙧𝙤𝙛𝙞𝙡𝙚 𝘾𝙪𝙖 𝙃𝙤𝙖𝙣𝙜 𝙋𝙝𝙖𝙩 <<=',
    showConfirmButton: true
  });
}


const toastDiv = document.createElement('div');
toastDiv.id = 'Toast';
toastDiv.textContent = '𝘿𝙚𝙨𝙞𝙜𝙣 𝙗𝙮 𝙃𝙤𝙖𝙣𝙜 𝙋𝙝𝙖𝙩';
document.body.appendChild(toastDiv);var maxtheard;
var testurl;
var lsat_date = 0;
var CountryCode_HoangPhat = {
    US: "United States",
    CA: "California",
    HK: "HongKong (Trung Quốc)",
    TW: "Taiwan (Đài Loan)",
    SG: "Singapore",
    JP: "Japan",
    KR: "Korea",
    AU: "Australia",
    NZ: "New Zealand",
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa (United States)",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BR: "Brazil",
    VG: "British Virgin Islands (United Kingdom)",
    BN: "Brunei",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CV: "Cape Verde",
    KY: "Cayman Islands (United Kingdom)",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CO: "Colombia",
    KM: "Comoros",
    CD: "Congo (Kinshasa)",
    CK: "Cook Islands (New Zealand)",
    CR: "Costa Rica",
    CI: "Ivory Coast",
    HR: "Croatia",
    CU: "Cuba",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominique",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    FO: "Faroe Islands (Denmark)",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana (France)",
    PF: "French Polynesia",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar (United Kingdom)",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam (United States)",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HN: "Honduras",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran",
    IQ: "Iraq",
    IE: "Republic of Ireland",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "North Korea",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Laos",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao (China)",
    MK: "Macedonia",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Republic of Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Martinique (France)",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Federated States of Micronesia",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat (UK)",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    NC: "New Caledonia (France)",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    MP: "Northern Mariana Islands (USA)",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestine",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    CN: "China",
    PE: "Peru",
    PH: "Philippines",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico (United States)",
    QA: "Qatar",
    CG: "Republic of the Congo",
    ZW: "Zimbabwe",
    RE: "Reunion (France)",
    RO: "Romania",
    RU: "Russia",
    RW: "Rwanda",
    SH: "Saint Helena",
    KN: "Saint Kitts and Nevis",
    LC: "Saint Lucia",
    PM: "Saint Pierre and Miquelon (France)",
    VC: "Saint Vincent and the Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome and Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Republic of Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syria",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "East Timor",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "Türkiye",
    TM: "Turkmenistan",
    TC: "Turks and Caicos Islands (United Kingdom)",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    WF: "Wallis and Futuna (France)",
    YE: "Yemen",
    ZM: "Zambia"
};
var all_down_sum = 0;
var run = false;
var checkIP = false;
var visibl = true;
var thread_down = [];
var lsat_all_down = 0;
var refresh_lay = 5e3;
async function start_thread(index) {
    try {
        const response = await fetch(testurl, {
            cache: "no-store",
            mode: "cors",
            referrerPolicy: "no-referrer"
        });
        const reader = response.body.getReader();
        while (true) {
            const {
                value,
                done
            } = await reader.read();
            if (done) {
                reader.cancel();
                start_thread(index);
                break;
            }
            if (!run) {
                reader.cancel();
                break;
            }
            thread_down[index] += value.length;
        }
    } catch (err) {
        console.log(err);
        if (run) start_thread(index);
    }
}
var gbip = ""; 
function checkip_address() {
    function ckip(ip_addr, tag) {
    }
    if (visibl) {
        fetch("https://api-ipv4.ip.sb/geoip", {
            referrerPolicy: "no-referrer"
        }).then(response => response.json()).then(data => {
            var tag = document.getElementById("checkip_address");
            tag.innerText = data.ip + " " + data.isp;
            if (data.ip !== gbip) {
                tag.style.color = "";
                ckip(data.ip, tag);
            }
            gbip = data.ip;
        });
    }
    setTimeout(checkip_address, 3000);
}
function noisong() {
    function ckip(ip_addr, tag) {
    }
    if (visibl) {
        fetch("https://api-ipv4.ip.sb/geoip", {
            referrerPolicy: "no-referrer"
        }).then(response => response.json()).then(data => {
            var tag = document.getElementById("checkip_address");
            tag.innerText = data.region + " " + data.country;
            if (data.ip !== gbip) {
                tag.style.color = "";
                ckip(data.ip, tag);
            }
            gbip = data.ip;
        });
    }
    setTimeout(noisong, 5000);
}
checkip_address();
noisong();
