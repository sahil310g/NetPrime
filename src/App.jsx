import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeSlice'

import Home from './pages/home/Home'
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'
import pageNotFound from './pages/404/pageNotFound'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state) => state.home)

  useEffect(()=>{
    fetch();
    genresCall();
  },[]);

  const fetch = () =>{
    fetchDataFromApi('/configuration')
    .then((res)=>{
      console.log(res);

      const url = {
        backdrop : res.images.secure_base_url + "original",
        poster : res.images.secure_base_url + "original",
        profile : res.images.secure_base_url + "original",
      }

      dispatch(getApiConfiguration(url));


    });
  };

  const genresCall = async()=>{
    let promises = []
    let endPoint = ["tv","movie"]
    let allGenres = {}
    endPoint.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })
    const data = await Promise.all(promises);
    data.map(({genres})=>{
      return genres.map((item)=>(allGenres[item.id] = item))
    })
    dispatch(getGenres(allGenres));
  }

  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/:mediaType/:id' element={<Details/> } />
          <Route path='/search/:query' element={<SearchResult /> } />
          <Route path='/explore/:mediaType' element={<Explore /> } />
          <Route path="*" element={<pageNotFound /> } />

        </Routes>
        <Footer/>
      </Router>
    </div> 
  )
}

export default App
