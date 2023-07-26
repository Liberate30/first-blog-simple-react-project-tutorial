import React from 'react'
import HeroBg from '../../assets/images/heroImg.jpg'
import './home.css'
import { BsArrowRight } from 'react-icons/bs'
import LatestArticles from '../latestArticles/LatestArticles'


function BelowLatestArt() {
  return (
    <div className='belowLatestArt'>
      <div className='img_con'>
        <img src={HeroBg} alt="" />
      </div>
      <div className='desc_con'>
        <p>Title</p>
        <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
        <button>LEARN MORE <BsArrowRight /></button>
      </div>
    </div>
  )
}


function Home() {
  return (
    <div className='home'>
      <div className="home_hero">
        <p className='home__hero-title'>Explore the colorful world</p>
        <h1>GETTY BLOGS</h1>
        <button>LEARN MORE <BsArrowRight /></button>
      </div>
      <section className="latest_articles">
        <h1>LATEST ARTICLES</h1>
        <div className="latest-articles-con">
          <LatestArticles />
          <LatestArticles />
          <LatestArticles />
          <LatestArticles />
          <LatestArticles />
          <LatestArticles />
        </div>
      </section>
      <section className='belowLatestArt_section'>
        <BelowLatestArt />
        <BelowLatestArt />
      </section>
      <section className='learn_more_about_us-sec'>
        <div>
          <h1>LEARN MORE ABOUT US</h1>
          <span className='line'></span>
          <p>Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi. Fert his. Recessit mentes praecipites locum caligine sui egens erat. Silvas caeli regna.</p>
          <button>LET'S MEET</button>
        </div>
      </section>
    </div>
  )
}

export default Home