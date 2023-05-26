const reviewUrl = 'https://6470fac23de51400f72532a2.mockapi.io/MovieReviews'

export const fetchReviews = async () => {
    try {
        const response = await fetch(reviewUrl);
        console.log('response from movieReview api call: ', response);

        const data = await response.json();
        console.log('data from movieReview API call:', data);
        return data;
    } catch(error) {
        console.log('error from fetch reviews', error);
    }
}

fetchReviews();