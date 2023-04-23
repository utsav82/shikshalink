import React from "react";
import classes from "./Gallery.module.css";

import image1 from "../assets/Images/1.jpg";
import image2 from "../assets/Images/2 (2).jpg";
import image3 from "../assets/Images/3.jpg";
import image4 from "../assets/Images/4.jpg";
import image5 from "../assets/Images/5.jpg";
import image6 from "../assets/Images/6.jpg";
import image7 from "../assets/Images/7.jpg";
import image8 from "../assets/Images/8.jpg";
import image9 from "../assets/Images/9.jpg";
import image10 from "../assets/Images/10.jpg";
import image11 from "../assets/Images/11.jpg";
import image12 from "../assets/Images/12.jpg";
import image13 from "../assets/Images/13.jpg";
import image14 from "../assets/Images/14.jpg";
import image15 from "../assets/Images/15.jpg";
import image16 from "../assets/Images/16.jpg";
import image17 from "../assets/Images/17.jpg";
import image18 from "../assets/Images/18.jpg";
import image19 from "../assets/Images/19.jpg";

const Gallery = () => {
  return (
    <div className={classes.grid - wrapper}>
      <div>
        <img className={classes.gallery_img} src={image1} alt="Photo1" />
      </div>

      <div className={classes.wide}>
        <img className={classes.gallery_img} src={image2} alt="Photo2" />
      </div>

      <div>
        <img className={classes.gallery_img} src={image3} alt="Photo3" />
      </div>

      <div className={classes.big}>
        <img className={classes.gallery_img} src={image4} alt="Photo4" />
      </div>

      <div>
        <img className={classes.gallery_img} src={image5} alt="Photo5" />
      </div>

      <div className={classes.wide}>
        <img className={classes.gallery_img} src={image6} alt="Photo6" />
      </div>

      <div className={classes.tall}>
        <img className={classes.gallery_img} src={image7} alt="Photo7" />
      </div>

      <div className={classes.tall}>
        <img className={classes.gallery_img} src={image8} alt="Photo8" />
      </div>

      <div>
        <img className={classes.gallery_img} src={image9} alt="Photo9" />
      </div>

      <div className={classes.big}>
        <img className={classes.gallery_img} src={image10} alt="Photo10" />
      </div>

      <div>
        <img className={classes.gallery_img} src={image11} alt="Photo11" />
      </div>

      <div className={classes.wide}>
        <img className={classes.gallery_img} src={image12} alt="Photo12" />
      </div>

      <div className={classes.wide}>
        <img className={classes.gallery_img} src={image13} alt="Photo13" />
      </div>

      <div className={classes.tall}>
        <img className={classes.gallery_img} src={image14} alt="Photo14" />
      </div>

      <div className={classes.wide}>
        <img className={classes.gallery_img} src={image15} alt="Photo15" />
      </div>

      <div className={classes.tall}>
        <img className={classes.gallery_img} src={image16} alt="Photo16" />
      </div>

      <div>
        <img className={classes.gallery_img} src={image17} alt="Photo17" />
      </div>

      <div>
        <img className={classes.gallery_img} src={image18} alt="Photo18" />
      </div>

      <div className={classes.tall}>
        <img className={classes.gallery_img} src={image19} alt="Photo19" />
      </div>
    </div>
  );
};

export default Gallery;
