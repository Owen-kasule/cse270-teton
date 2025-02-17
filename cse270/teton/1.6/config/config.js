const LAT = "43.8866";
const LON = "-111.6777";
const APIKEY = "<YOUR API KEY HERE>";

const WEATHER_URL_STUB = "./data/weather.json";
const WEATHER_URL_PROD = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}`;

const apiURL = WEATHER_URL_STUB;

const DIRECTORY_DATA_URL_PROD = "<PRODUCTION_URL_HERE>";
const DIRECTORY_DATA_URL_STUB = "./data/business.json";
const DIRECTORY_DATA_URL_TEST = "http://127.0.0.1:8000/data/all";

const businessDataUrl = DIRECTORY_DATA_URL_STUB;

const USER_DATA_URL_PROD = "<PRODUCTION_URL_HERE>";
const USER_DATA_URL_TEST = "http://127.0.0.1:8000/users/";
const USER_DATA_URL_STUB = "./data/users.noexist.json";

const userDataUrl = USER_DATA_URL_STUB;