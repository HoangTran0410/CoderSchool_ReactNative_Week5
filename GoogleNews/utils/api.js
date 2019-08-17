const apiAll = 'https://newsapi.org/v2/everything';
const apiHeadlines = 'https://newsapi.org//v2/top-headlines';
const apiKey = 'a3c853ae78b64d9d8a5e7ab38447e232'; //6eec2f7fe6cd4c40a3fef8f33f5778fe

const Parameters = {
    countries: ['ae ', 'ar ', 'at ', 'au ', 'be ', 'bg ', 'br ', 'ca ', 'ch ', 'cn ', 'co ', 'cu ', 'cz ', 'de ', 'eg ', 'fr ', 'gb ', 'gr ', 'hk ', 'hu ', 'id ', 'ie ', 'il ', 'in ', 'it ', 'jp ', 'kr ', 'lt ', 'lv ', 'ma ', 'mx ', 'my ', 'ng ', 'nl ', 'no ', 'nz ', 'ph ', 'pl ', 'pt ', 'ro ', 'rs ', 'ru ', 'sa ', 'se ', 'sg ', 'si ', 'sk ', 'th ', 'tr ', 'tw ', 'ua ', 'us ', 've ', 'za'],
    categories =['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
    languages =['ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'],
    sortBy =['relevancy', 'popularity', 'publishedAt'];
}

// const parameters = ['q', 'from', 'to', 'country', 'sortBy', 'sources', 'domains', 'category']

const getNews = async (filters = {}, apiType = 'all') => {

    // get host url
    let apiLink = (apiType == 'headlines' ? apiHeadlines : apiAll);

    // add parameters to url
    let isFirstParameter = true;
    for (let f in filters) {
        if (isFirstParameter) {
            apiLink += `?${f}=${filters[f]}`;
            isFirstParameter = false;
        } else {
            apiLink += `&${f}=${filters[f]}`;
        }
    }
    // add api key to the end of url
    apiLink += `&apiKey=${apiKey}`;

    const response = await fetch(apiLink);
    const jsonData = await response.json();

    console.log(jsonData);

    return jsonData;
};

export {
    Parameters,
    getNews
}