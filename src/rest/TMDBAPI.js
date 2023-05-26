export const fetchTrendingMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTU2MmI2MDQ3NzljMjZmY2Y4YWYwYjVlNGU3ZDc5MyIsInN1YiI6IjY0NzBlYjZlMTNhMzIwMDBmOWFmZDY4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vqKckvNoVjo4pWKKuSamgCIVO_EOHmfeDhyY-i0u1fs'
          }
    }
    try {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
        console.log('response to get trending movies:', response);

        let data = await response.json();
        console.log(data);
        return data;

    } catch(error) {
        console.log(error);
    }
}

fetchTrendingMovies();

