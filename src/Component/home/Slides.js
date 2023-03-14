import React from "react";
import Slide from "./Slide";

function slides(props) {
  const { userName, imge, profile } = props;


  
  return (
    <div>
      {imge && imge.map((imag) => (
       <Slide  key = {imag.imgurl} userName = {userName} imge={imge} imgCaption={imag.imgCaption} vidCaption={imag.vidCaption} imgurl={imag.imgurl} vidurl={imag.vidurl} createTime={imag.createTime} profile={profile}/>
      ))}
    </div>
  );
}

export default slides;
