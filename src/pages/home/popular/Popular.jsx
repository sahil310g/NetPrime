import React from 'react'
import { useState } from 'react'
import Carousel from '../../../components/carousel/Carousel'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'

const Popular = () => {

  const [endPoint, setEndPoint] = useState('movie')

  const {data,loading} = useFetch(`/${endPoint}/popular`)


  const onTabChange=(tab)=>{
    setEndPoint(tab==='Movies'?"movie":"tv");
  }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>Popular</span>
            <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Popular