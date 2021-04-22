import React, { useState } from "react";
import { animated, useTransition } from "react-spring";

import { AiFillCaretDown, AiFillCaretUp, AiOutlineMenu } from "react-icons/ai";
import JobSelectionModal from "./Modal/Modal"

import "./styles.css";

const ImageSlider = ({ slides }) => {
  const [[current, dir], setIndex] = useState([0, 0]);
  const [modalShow, setModalShow] = useState(false);

  const slideLeft = () =>
    setIndex([(current - 1 + slides.length) % slides.length, -1]);

  const slideRight = () => setIndex([(current + 1) % slides.length, 1]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    // TODO: add default image
    return null;
  }

  const transitions = useTransition(slides[current], (item) => item.url, {
    from: {
      opacity: 0,
      transform: `translate3d(0,${dir === 1 ? 100 : -100}%,0) scale(0.5)`,
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0%,0) scale(1)",
    },
    leave: {
      opacity: 0,
      transform: `translate3d(0,${dir === 1 ? -100 : 100}%,0) scale(0.5)`,
    },
  });

  return (
    <section className="slider">
      <div className="arrow-box center">
        <AiFillCaretUp className="up-arrow" onClick={slideRight} />
        <AiOutlineMenu className="modal-icon" onClick={() => setModalShow(true)}/>
        <AiFillCaretDown className="down-arrow" onClick={slideLeft} />
      </div>
      {transitions.map(({ item, props, key }) => {
        return (
          <div className="image-container">
            <animated.img
            className="image"
            style={props}
            key={key}
            src={item.url}
          />
          </div>
            
        );
      })}
      );
      <div className="counter-container">
            <h1 className="counter">{current + 1}</h1>
          </div>
          <JobSelectionModal
        show={modalShow}
        slides={slides}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
};

export default ImageSlider;

// TODO: fix gesture control below

  // const [{ y }, set] = useSpring(() => ({ y: 0 }));
  // const bind = useDrag(({ down, cancel, canceled, movement: [x, y] }) => {
  //   set({ y: down ? y : 0 });
  //   console.log(y);
  //   if (y >= 50 && !pictureChanged) {
  //     cancel();
  //     if (canceled) {
  //       set({ y: 0 });
  //       slideLeft()
  //     }
  //   }

  //   if (y <= -50 && !pictureChanged) {
  //     cancel();
  //     if (canceled) {
  //       slideRight()
  //     }
  //   }
  // });