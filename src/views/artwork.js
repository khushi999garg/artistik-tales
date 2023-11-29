import React from 'react'

import GalleryCard1 from '../components/gallery-card1.js'
import './artwork.css'
import logo from '../Image/logo.jpg';
import { Link } from 'react-router-dom';
import Image0 from '../Image/image0.jpeg';
import Image1 from '../Image/image1.jpeg';
import Image2 from '../Image/image2.jpeg';
import Image3 from '../Image/image3.jpeg';
import Image6 from '../Image/image6.jpg';
import Image7 from '../Image/image7.jpg';
import Navbar from '../components/navbar.js';


const Artwork = (props) => {
  return (
    <div className="artwork-container">
      <Navbar/>
      <div className="artwork-container1">
        <h1>Artwork</h1>
        <img
          src={logo}
          alt="image"
          className="artwork-image"
        />
      </div>
      <div className="artwork-gallery">
        <GalleryCard1
          image_src={Image0}
          rootClassName="rootClassName1"
          title="BaraaMah"
          subtitle="Abstract Art"
        ></GalleryCard1>
        <GalleryCard1
          image_src={Image1}
          rootClassName="rootClassName2"
          title="Violin"
        ></GalleryCard1>
        <GalleryCard1
          image_src={Image2}
          rootClassName="rootClassName3"
          title="A Girl in Her Dreamland"
          subtitle="Oil Painting"
        ></GalleryCard1>
        <GalleryCard1
          image_src={Image3}
          rootClassName="rootClassName4"
          title="Free Spirited Bird"
          subtitle="Illusion Art"
        ></GalleryCard1>
        <GalleryCard1
          image_src={Image6}
          rootClassName="rootClassName5"
          title="Free Spirited"
        ></GalleryCard1>
        <GalleryCard1
          image_src={Image7}
          rootClassName="rootClassName5"
          title="Ape gur ape chela"
          subtitle="Guru Gobind Singh ji"
        ></GalleryCard1>
      </div>
      <div className='artwork-contact'>
        <h3>Do You like a Particular Work and You Want to Purchase It?</h3>
        <p><Link to="/contact" className="contact">Contact us</Link> for more information or to request a custom piece.</p>
      </div>
      <footer className="home-footer">
        <div className="home-container3">
          <h1>आrtistik टales</h1>
          <nav className="home-nav2">
            <Link to="/" className="home-text11">Home</Link>
            <Link to='/about' className="home-text12">About</Link>
            <Link to="/artwork" className="home-text13">Artwork</Link>
            <Link to="/contact" className="home-text14">Contact</Link>
          </nav>
        </div>
        <div className="home-separator"></div>
        <div className="home-container4">
          <p className="home-text15">
            <small>© 2023 ArtistikTales, All Rights Reserved.</small>
          </p>
          <div className="home-icon-group2">
          <a href='https://www.instagram.com/artistik_tales/' target='_blank' rel='noopener, noreferrer'>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon18" fill="#FF7C4C">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
          <a href='https://www.linkedin.com/in/ravneet-kaur-23a9101a5/' target='_blank' rel='noopener, noreferrer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF7C4C" className="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg>
          </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Artwork
