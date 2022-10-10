import React, { useEffect, useState } from 'react';
import Map from '../../images/map.jpg';
import Title from '../Title/Title';
import './Contact.css';

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showToolTip, setShowToolTip] = useState(false);
  const [top, setTop] = useState(false);
  const [left, setLeft] = useState(false);

  const verifyIfIsOpen = () => {
    const openingDays = [1, 2, 3, 4, 5, 6];
    const openingHours = [8, 20];

    const now = new Date();
    const day = now.getDay();
    const hour = now.getUTCHours() - 3;

    const isWorkingDay = openingDays.includes(day);
    const isWorkingHours = hour > openingHours[0] && hour < openingHours[1];
    setIsOpen(isWorkingDay && isWorkingHours);
  };

  useEffect(() => {
    verifyIfIsOpen();
  }, []);

  setInterval(() => {
    verifyIfIsOpen();
  }, 10000);

  const handleMouseMove = (event) => {
    setShowToolTip(true);
    setTop(event.nativeEvent.offsetY - 50);
    setLeft(event.nativeEvent.offsetX - 150);
  };

  const handleMouseLeave = () => {
    setShowToolTip(false);
  };

  return (
    <section data-testid="contact-section" className="grid-section contact" id="contact">
      <Title title="Contact" />
      <div className="map">
        <img src={Map} alt="Map Adress" data-testid="map-image" onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} />
        <div className="tooltip" style={{ top: `${top}px`, left: `${left}px`, display: `${showToolTip ? 'block' : 'none'}` }}>
          <span>Porto, Portugal</span>
        </div>
      </div>
      <ul className="data" data-testid="contact-infos-list">
        <li>guilhermehviana01@gmail.com</li>
        <li>+55 (31) 97541-4521</li>
        <li data-opening-days="1,2,3,4,5,6" data-opening-hours="8,20">
          Monday to Saturday
          <br />
          <span className="opening-arrow">&#8618;</span>
          <span className="opening-hours"> 8:00AM to 8:00PM</span>
          <span className={`opening-status ${isOpen}`}>
            {' '}
            {isOpen ? 'open' : 'closed' }
          </span>
        </li>
      </ul>
    </section>
  );
}
