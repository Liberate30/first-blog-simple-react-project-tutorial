import React from 'react'
import HeroBg from '../../assets/images/heroImg.jpg'

function LatestArticles() {
    return (
      <div className='lst_article__comp'>
        <img src={HeroBg} alt="" />
        <div className='art_title_desc_con'>
          <h3>Title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nulla aliquid, similique, excepturi eaque optio laboriosam est eius quos accusamus veniam sunt aliquam quasi saepe!</p>
        </div>
      </div>
    )
  }

export default LatestArticles