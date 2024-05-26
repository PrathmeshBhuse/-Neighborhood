import React, { useState } from 'react';
import img1 from '../Assest/img1.jpeg';
import img2 from '../Assest/img2.jpeg';
import img3 from '../Assest/img3.jpg'
import './Ourservices.css';

const Ourservices = () => {
  const [expandedCards, setExpandedCards] = useState([false, false, false]);

  const toggleReadMore = (index) => {
    const newExpandedCards = [...expandedCards];
    newExpandedCards[index] = !newExpandedCards[index];
    setExpandedCards(newExpandedCards);
  };

  return (
    <div className='our-service'>
      <h1 id='head2'>Our Services</h1>
      <hr id='hr2' />
      <div className="cards">
        {[
          { img: img1, text: "Build Your Neighbors Network, Join Now!", extra: "Join now and start building a strong network with your neighbors today!" },
          { img: img2, text: "Connect with Neighbors, Discover Local Events", extra: "Discover local events and connect with your neighbors like never before." },
          { img: img3, text: "Get Nearby Support Around You Easily!", extra: "Say hello to new connections and opportunities in your neighborhood." },
        ].map((service, index) => (
          <div className="card" key={index}>
            <div className="photo">
              <img src={service.img} alt={`Service ${index + 1}`} />
            </div>
            <div className="text">
              <p>{service.text}</p>
              {expandedCards[index] && <p className="extra-info">{service.extra}</p>}
              <button className="read-more" onClick={() => toggleReadMore(index)}>
                {expandedCards[index] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ourservices;
