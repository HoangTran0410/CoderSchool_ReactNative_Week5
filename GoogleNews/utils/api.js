const apiAll = 'https://newsapi.org/v2/everything';
const apiHeadlines = 'https://newsapi.org//v2/top-headlines';
const apiKey = 'a3c853ae78b64d9d8a5e7ab38447e232'; //6eec2f7fe6cd4c40a3fef8f33f5778fe

const Parameters = {
    countries: ['ae ', 'ar ', 'at ', 'au ', 'be ', 'bg ', 'br ', 'ca ', 'ch ', 'cn ', 'co ', 'cu ', 'cz ', 'de ', 'eg ', 'fr ', 'gb ', 'gr ', 'hk ', 'hu ', 'id ', 'ie ', 'il ', 'in ', 'it ', 'jp ', 'kr ', 'lt ', 'lv ', 'ma ', 'mx ', 'my ', 'ng ', 'nl ', 'no ', 'nz ', 'ph ', 'pl ', 'pt ', 'ro ', 'rs ', 'ru ', 'sa ', 'se ', 'sg ', 'si ', 'sk ', 'th ', 'tr ', 'tw ', 'ua ', 'us ', 've ', 'za'],
    categories: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
    languages: ['ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'],
    sortBy: ['relevancy', 'popularity', 'publishedAt']
}

// const parameters = ['q', 'from', 'to', 'country', 'sortBy', 'sources', 'domains', 'category']

const getNews = async (filters = { country: 'us' }, apiType = 'headlines') => {

    // get host url
    let apiLink = (apiType == 'headlines' ? apiHeadlines : apiAll);

    // add parameters to url
    let isFirstParameter = true;
    filters.apiKey = apiKey;

    for (let f in filters) {
        if (isFirstParameter) {
            apiLink += `?${f}=${filters[f]}`;
            isFirstParameter = false;
        } else {
            apiLink += `&${f}=${filters[f]}`;
        }
    }

    const response = await fetch(apiLink);
    const jsonData = await response.json();

    // console.log(jsonData);

    return jsonData;
};

const daysBetween = function (date1, date2) {
    //Get 1 day in milliseconds
    let one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    let date1_ms = date1.getTime();
    let date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    let difference_ms = date2_ms - date1_ms;
    //take out milliseconds
    difference_ms = difference_ms / 1000;
    let seconds = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    let minutes = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    let hours = Math.floor(difference_ms % 24);
    let days = Math.floor(difference_ms / 24);

    if(days < 1 && hours < 1 && minutes < 1) return seconds + ' seconds ago.';
    if(days < 1 && hours < 1) return minutes + ' minutes ago.';
    if (days <= 2) return hours + ' hours ago.';
    return days + ' days ago.';
}

export {
    Parameters,
    getNews,
    daysBetween
}