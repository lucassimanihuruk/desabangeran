import React from 'react';
import './InfoCards.css';

function InfoCards() {
  return (
    <section className="info-cards">
      <h2>Jelajahi Berbagai Hal di Desa Bangeran</h2>
      <p>Melalui website ini, Anda dapat menelusuri informasi tentang BUMDes dan potensi unggulan desa.</p>

      <div className="content-container">
        {/* Left Column for Cards */}
        <div className="card-container">
          <div className="card">
            <h3>Perangkat BUMDes</h3>
            <p>Kepala Desa Beserta Perangkatnya.</p>
          </div>
          <div className="card">
            <h3>Usaha Milik BUMDes</h3>
            <p>Badan Usaha Milik Desa.</p>
          </div>
          <div className="card">
            <h3>Produk Unggulan BUMDes</h3>
            <p>Produk-produk Unggulan Desa.</p>
          </div>
          <div className="card">
            <h3>Potensi Unggulan Desa</h3>
            <p>Potensi Pengembangan Produk Unggulan Desa.</p>
          </div>
        </div>

        {/* Right Column for Video */}
        <div className="video-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jpvkCiPxdAw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default InfoCards; 