import { useState, useEffect } from 'react'
import React from 'react'



function Main() {

  const [articles, Setarticles] = useState([])
  const [search, setSerach] = useState("iphone")

  useEffect(() => {
    let URL = "https://newsapi.org/v2/everything?q=iphone&from=2022-05-02&to=2022-05-02&sortBy=popularity&apiKey=61474326a32f4dfe818c64b7cebc7a6e"
    fetch(URL)
      .then((res) => res.json())
      .then((news) => {
        console.log(news.articles)
        Setarticles(news.articles);
      })
  }, [])

  function readValue(value){
      setSerach(value)
  }

  function searchNews(){
    let URL = `https://newsapi.org/v2/everything?q=${search}&from=2022-05-02&to=2022-05-02&sortBy=popularity&apiKey=61474326a32f4dfe818c64b7cebc7a6e`
    fetch(URL)
      .then((res) => res.json())
      .then((news) => {
        console.log(news.articles)
        Setarticles(news.articles);
      })
  }
  useEffect(() => {
    let URL = `https://newsapi.org/v2/everything?q=${search}&from=2022-05-02&to=2022-05-02&sortBy=popularity&apiKey=61474326a32f4dfe818c64b7cebc7a6e`
    fetch(URL)
      .then((res) => res.json())
      .then((news) => {
        console.log(news.articles)
        Setarticles(news.articles);
      })
  }, [search])


  return (
    <div className='container'>
      <div className='padd'>
        <div className='filter'>
          <input type="search" onChange={(event)=>{(readValue(event.target.value))}} placeholder='Enter Topic To Serach..'/>
          <button className='btn' onClick={searchNews}>Search News</button>
        </div>

        <h1>All News</h1>
        {
          //  articles.length===0?(<h2>No Data found</h2>) :

          articles.map((article, index) => (
            <div key={index} className='article'>
              <div className='padd_article'>
                <div className='news-img'>
                  <img alt='' src={article.urlToImage}/>
                </div>
                <div className='news-detail'>
                  <h3>{article.title}</h3>
                  <p>{article.author}</p>
                  <p>{article.description}</p>
                  <p>
                    <a href={article.url}>
                    <button  target ="_blank" className='btn'>Read More</button>
                    </a>
                    
                    
                    
                    </p>
                </div>

              </div>


            </div>

          ))
        }

      </div>
    </div>
  )
}
export default Main;
