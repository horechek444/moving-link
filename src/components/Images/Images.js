import React from 'react';

const Images = ({linkDownRef, linkRightRef, linkUpRef, linkLeftRef}) => {
  return (
    <div className="images">
      <img
        ref={linkDownRef}
        src="https://i.imgur.com/JYUB0m3.png"
        alt="Down"/>
      <img
        ref={linkRightRef}
        src="https://i.imgur.com/GEXD7bk.gif"
        alt="Right"/>
      <img
        ref={linkUpRef}
        src="https://i.imgur.com/XSA2Oom.gif"
        alt="Up"/>
      <img
        ref={linkLeftRef}
        src="https://i.imgur.com/4LGAZ8t.gif"
        alt="Left"/>
    </div>
  );
};

export default Images;
