import React from "react";

const Wrapper: React.FC = () => {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="wrapper__inner">
          <div className="cells">
            <div className="cell">
              <i className="bi bi-truck cell__img"></i>
              <h3 className="cell__title">Worldwide Delivery</h3>
              <p className="cell__desc">
                We deliver out products all over the world!
              </p>
            </div>
            <div className="cell">
              <i className="bi bi-shield-fill-check cell__img"></i>
              <h3 className="cell__title">Safe Payment</h3>
              <p className="cell__desc">
                You can be sure that if a product is defective, you will have a
                full refund!
              </p>
            </div>
            <div className="cell">
              <i className="bi bi-emoji-sunglasses cell__img"></i>
              <h3 className="cell__title">Confidence</h3>
              <p className="cell__desc">
                We offer competitive prices on our 100 million plus product any
                range.
              </p>
            </div>
            <div className="cell">
              <i className="bi bi-headset cell__img"></i>
              <h3 className="cell__title">24/7 Support</h3>
              <p className="cell__desc">
                We are ready to help you any day at any time :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wrapper;
