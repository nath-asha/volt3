import React, { useState, useEffect } from 'react';
import './Home.css'


function Home() {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('');
  const [imageSrc1, setImageSrc1] = useState('');
  const [imageSrc2, setImageSrc2] = useState('');

  useEffect(() => {
    const wasabiBackgroundImageUrl = 'https://s3.ap-northeast-1.wasabisys.com/voltixteam/img2.jpg?AWSAccessKeyId=WIBB9YVJ0BEYP34SEO9C&Expires=1698705851&Signature=ASaEBYcfrW8FjSw6WCnZ99hQbtc%3D';
    setBackgroundImageUrl(wasabiBackgroundImageUrl);

    const wasabiImageSrc1 = 'https://s3.ap-northeast-1.wasabisys.com/voltixteam/img2.jpg?AWSAccessKeyId=WIBB9YVJ0BEYP34SEO9C&Expires=1698705851&Signature=ASaEBYcfrW8FjSw6WCnZ99hQbtc%3D';
    const wasabiImageSrc2 = 'https://s3.ap-northeast-1.wasabisys.com/voltixteam/img2.jpg?AWSAccessKeyId=WIBB9YVJ0BEYP34SEO9C&Expires=1698705851&Signature=ASaEBYcfrW8FjSw6WCnZ99hQbtc%3D';
    setImageSrc1(wasabiImageSrc1);
    setImageSrc2(wasabiImageSrc2);
  }, []);

  const backgroundStyle = {
    background: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="home-container" style={backgroundStyle}>

      <h1>Welcome to My Website</h1>
      <div className="main">
        <div className="container">
          <img src={imageSrc1} alt="Description 1" className="image" />
          <div className="textStyleLarge1">
            <p>Bring your ideas to life!</p>
          </div>
          <div className="textStyleMedium1">
            Our team of talented and highly committed professionals is the key to our success in creating business solutions.
          </div>
        </div>
        <div className="container">
          <img src={imageSrc2} alt="Description 2" className="image" />
          <div className="textStyleLarge2">
            <p>Our actions and motivations!</p>
          </div>
          <div className="textStyleMedium2">
            Our skilled and dedicated team plays a significant role in our ability to successfully develop business solutions.
          </div>
        </div>
        <section id="action">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Mobile Application</h5>
                  <p className="card-text">Business will increasingly rely on mobile apps. You're missing out if you don't use a mobile device.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">A professionally designed website can aid in building credibility and trust with potential clients.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Software Development</h5>
                  <p className="card-text">Innovation in software affects markets, goods, and customer service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
