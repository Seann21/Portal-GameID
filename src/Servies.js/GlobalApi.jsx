import axios from "axios";
const key="369ddf294d0b4fe692f595a71e26f812"
const axioCreate= axios.create({
    baseURL: "https://api.rawg.io/api",
    // params: {
    //   key: "18d8dc115d954615a6fe8522598e8a97",
    // },
  });
  
const getPopularGame=axioCreate.get('/games?key='+key)
const getMovieDetails=(id)=>axioCreate.get('/games/'+id+'/movies')
const getGameListByGenreId=(id)=>axioCreate.get('/games?key='+key+'&genres='+id)
export default{
    getPopularGame,
    getMovieDetails,
    getGameListByGenreId
}