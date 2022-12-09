import React from "react";

interface PopupProps {
  trigger: boolean;
  setToggle: any;
  children: JSX.Element;
}

const Popup: React.FC<PopupProps> = ({ trigger, children, setToggle }) => {
  return (
    <>
      {trigger && (
        <div className="popup">
          <div className="popup__inner">
            <button
              type="button"
              className="popup__btn"
              onClick={() => setToggle(false)}
            >
              <i className="bi bi-x-lg"></i>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
