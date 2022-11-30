import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__info box">
            <h1>Chiga</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              minus, officiis illo unde non iure mollitia ipsa dolore cumque a
            </p>
            <div className="footer__refs">
              <button type="button" className="footer__btn">
                <i className="bi bi-google-play"></i>
                <a href="#">Google Play</a>
              </button>
              <button type="button" className="footer__btn">
                <i className="bi bi-google-play"></i>
                <a href="#">App Store</a>
              </button>
            </div>
          </div>
          <div className="footer__about box">
            <h2 className="footer-title">About Us</h2>
            <ul className="footer-list">
              <li className="footer-list__item">Careers</li>
              <li className="footer-list__item">Our Stores</li>
              <li className="footer-list__item">Our Cores</li>
              <li className="footer-list__item">Terms & Conditions</li>
              <li className="footer-list__item">Privacy Policy</li>
            </ul>
          </div>
          <div className="footer__care box">
            <h2 className="footer-title">Customer Care</h2>
            <ul className="footer-list">
              <li className="footer-list__item">Help Center</li>
              <li className="footer-list__item">How to Buy</li>
              <li className="footer-list__item">Track your Order</li>
              <li className="footer-list__item">Corporate & Bulk Purchasing</li>
              <li className="footer-list__item">Return & Refunds</li>
            </ul>
          </div>
          <div className="footer__contact box">
            <h2 className="footer-title">Contact Us</h2>
            <ul className="footer-list contacts">
              <li>
                70 Washington Square South, New Yorl, NY 100012, United States
              </li>
              <li>
                Email:
                <a className="contacts-anc" href="mailto:chiga.help@gmail.com">
                  chiga.help@gmail.com
                </a>
              </li>
              <li>
                Phone:
                <a className="contacts-anc" href="tel:+1 1123 456 780">
                  +1 1123 456 780
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
