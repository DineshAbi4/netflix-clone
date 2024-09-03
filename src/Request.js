const API_KEY="8b6b1e9741d380a255df6eb82684c2e6";



const request={
    fetchNetflixOriginals: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  
    fetchTrendingNow: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  
    fetchTopRated:` /movie/top_rated?api_key=${API_KEY}&language=en-US`,
  
    fetchComedyMoives:` /discover/movie?api_key=${API_KEY}&with_genres=28`,
};
export default request;