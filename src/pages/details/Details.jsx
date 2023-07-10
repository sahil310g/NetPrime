import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import DetailsBanner from './detailsBanner/DetailsBanner'

const Details = () => {
  // const {media_type, id} = useParams();
  // const {data, loading} = useFetch(`/${media_type}/${id}`)
  return (
    <div>
      <DetailsBanner/>
    </div>
  )
}

export default Details