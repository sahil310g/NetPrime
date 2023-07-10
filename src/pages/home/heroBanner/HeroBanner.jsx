import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Image from "../../../components/lazyLoadImage/Image";
import useFetch from "../../../hooks/useFetch";
import "./Styles.scss";

function HeroBanner() {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const {url} = useSelector((state)=> state.home)


  const { data, loading } = useFetch('/movie/upcoming');
  // console.log(data);
  useEffect(()=>{
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data])

  const searchQueryHandle = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="homeBanner">
      {!loading && <div className="backdrop-img">
        <Image src={background} alt="" />
      </div>}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="homeBannerContent">
          <span className="title">Welcome!</span>
          <span className="subTitle">
            Warehouse of Movies, TV Shows and People to discover.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for Movie or TV Show..."
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onKeyUp={searchQueryHandle}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;
