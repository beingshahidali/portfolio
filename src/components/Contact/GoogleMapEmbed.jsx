import React from 'react';
import './map.css'
function GoogleMapEmbed() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1082.7645384725402!2d85.38462207070079!3d26.133431994680826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1696769599689!5m2!1sen!2sin"
        className="google-map-iframe"
        frameBorder="0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="dark-overlay"></div>
    </div>
  );
}

export default GoogleMapEmbed;
