import React, { useEffect, useState } from "react";
import "./side.css";
import Slider from "react-slick";
import Heading from "../../../common/heading/Heading";
import SocialMedia from "../social/SocialMedia";

const Side = () => {
  const [ads, setAds] = useState([]);
  const [ads2, setAds2] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch advertisements
  const fetchAdvertisements = async () => {
    // Simulated data fetch; replace with your API call if needed
    const data = [
      {
        image:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b11d1156-fc6b-4ef4-bf7f-e5f34752cbe3/NIKE+DUNK+LOW+RETRO.png",
        title: "Nike Sale",
        description: "Up to 30% off select shoes and apparel.",
        link: "https://www.nike.com/sale",
      },
      {
        image:
          "https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/afaqs/media/post_attachments/a5e4f1df80d86153a1032ee45b323c423ea3fcf0798fc0e1871d3c1413423781.png",
        title: "Amazon Prime Day",
        description: "Exclusive deals for Prime members only.",
        link: "https://www.amazon.com/primeday",
      },
      {
        image:
          "https://i.ytimg.com/vi/OCtQjsFo8EA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIyTgphkh3BuKf7kwnnx-ZSzXyWw",
        title: "Target Weekly Ad",
        description: "Discover the latest deals and promotions.",
        link: "https://www.target.com/ad",
      },
      {
        image:
          "https://pragativadi.com/core/uploads/2023/05/Starbucks-Indias-New-Ad-On-LGBTQIA-Campaign-Divides-Internet.jpg",
        title: "Starbucks Rewards",
        description: "Join now and get free drinks on your birthday!",
        link: "https://www.starbucks.com/rewards",
      },
      {
        image: "https://example.com/images/ad_hulu.jpg",
        title: "Hulu Subscription Offer",
        description: "Get your first month for just $1!",
        link: "https://www.hulu.com/start",
      },
      {
        image: "https://example.com/images/ad_walmart.jpg",
        title: "Walmart Rollback Deals",
        description: "Check out our rollback prices on everyday essentials.",
        link: "https://www.walmart.com/rollback",
      },
      {
        image: "https://example.com/images/ad_uber_eats.jpg",
        title: "Uber Eats Promotions",
        description: "Get free delivery on your first order.",
        link: "https://www.ubereats.com",
      },
      {
        image: "https://example.com/images/ad_sephora.jpg",
        title: "Sephora Beauty Insider",
        description: "Sign up for exclusive offers and gifts.",
        link: "https://www.sephora.com/beautyinsider",
      },
    ];

    // Simulating network delay
    setTimeout(() => {
      setAds(data);
      setLoading(false);
    }, 500);
  };

  const fetchAdvertisements2 = async () => {
    // Simulated data fetch; replace with your API call if needed
    const data2 = [
      {
        image:
          "https://pragativadi.com/core/uploads/2023/05/Starbucks-Indias-New-Ad-On-LGBTQIA-Campaign-Divides-Internet.jpg",
        title: "Starbucks Rewards",
        description: "Join now and get free drinks on your birthday!",
        link: "https://www.starbucks.com/rewards",
      },
      {
        image: "https://example.com/images/ad_hulu.jpg",
        title: "Hulu Subscription Offer",
        description: "Get your first month for just $1!",
        link: "https://www.hulu.com/start",
      },
      {
        image: "https://example.com/images/ad_walmart.jpg",
        title: "Walmart Rollback Deals",
        description: "Check out our rollback prices on everyday essentials.",
        link: "https://www.walmart.com/rollback",
      },
      {
        image: "https://example.com/images/ad_uber_eats.jpg",
        title: "Uber Eats Promotions",
        description: "Get free delivery on your first order.",
        link: "https://www.ubereats.com",
      },
      {
        image: "https://example.com/images/ad_sephora.jpg",
        title: "Sephora Beauty Insider",
        description: "Sign up for exclusive offers and gifts.",
        link: "https://www.sephora.com/beautyinsider",
      },
    ];

    // Simulating network delay
    setTimeout(() => {
      setAds2(data2);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchAdvertisements();
    fetchAdvertisements2();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Heading title="Advertisements & Promotions" />

      {loading ? (
        <p>Loading advertisements...</p>
      ) : (
        <section className="advertisement-slider">
          <Slider {...settings}>
            {ads.map((ad, index) => (
              <div key={index} className="ad-slide">
                <img src={ad.image} alt={ad.title} className="ad-image" />
                <div className="ad-content">
                  <h2>{ad.title}</h2>
                  <p>{ad.description}</p>
                  <a href={ad.link} target="_blank" className="ad-button">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      )}

      <br />
      <br />
      {loading ? (
        <p>Loading advertisements...</p>
      ) : (
        <section className="advertisement-slider">
          <Slider {...settings}>
            {ads2.map((ad, index) => (
              <div key={index} className="ad-slide">
                <img src={ad.image} alt={ad.title} className="ad-image" />
                <div className="ad-content">
                  <h2>{ad.title}</h2>
                  <p>{ad.description}</p>
                  <a href={ad.link} target="_blank" className="ad-button">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      )}

      {/* <section className="subscribe">
        <Heading title="Subscribe for Updates" />
        <h1 className="title">Stay updated with the latest promotions</h1>
        <form action="">
          <input type="email" placeholder="Email Address..." />
          <button>
            <i className="fa fa-paper-plane"></i> SUBMIT
          </button>
        </form>
      </section> */}

      <section className="social-media">
        <Heading title="Follow Us" />
        <SocialMedia />
      </section>
    </>
  );
};

export default Side;
