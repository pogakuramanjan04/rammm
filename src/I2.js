import Carousel from 'react-bootstrap/Carousel';
import "./app1.css";
import Tilt from 'react-parallax-tilt';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import ImageSlider from './ImageSlider';
import Card from "./Card";

const slides = [
  "https://i.postimg.cc/Z0ktfskN/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg",
  "https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg",
  "https://i.postimg.cc/8cfgmQYD/campbell-3-ZUs-NJhi-Ik-unsplash.jpg",
  "https://i.postimg.cc/8Ck5BcmS/evgeny-tchebotarev-aiwu-Lj-LPFn-U-unsplash.jpg",
  "https://i.postimg.cc/66F8J9tr/hakon-sataoen-qyfco1nf-Mtg-unsplash.jpg",
  "https://i.postimg.cc/ydbzRYvv/joey-banks-YApi-Wyp0lqo-unsplash.jpg",
  "https://i.postimg.cc/NGKKzyqG/joshua-koblin-eq-W1-MPin-EV4-unsplash.jpg",
  "https://i.postimg.cc/JhK81QJw/marcus-p-o-UBjd22g-F6w-unsplash.jpg",
];







export default function I2 () {
  const slides = [
    { url: "https://img.freepik.com/premium-photo/cargo-space-craft-earth-planet-dark-background-sci-fi-wallpaper-space-station-orbiting-earth-space-ship-space-art-wallpaper-solar-observatory-elements-this-image-furnished-by-nasa-3d-illustration_150455-16630.jpg?w=2000", title: "beach" },
    { url: "https://media.istockphoto.com/id/182062885/photo/space-station-in-earth-orbit.jpg?s=612x612&w=0&k=20&c=F_P2YJ3QDbSW2n6dWkh6JNYeQGI1-2q-wOBk9-sw_Xo=", title: "boat" },
    { url: "https://img.freepik.com/free-vector/spacecraft-realistic-background_1284-72905.jpg", title: "forest" },
    { url: "https://w0.peakpx.com/wallpaper/485/995/HD-wallpaper-8-space-art-figure-planet-space-satellite.jpg", title: "city" },
    { url: "https://e0.pxfuel.com/wallpapers/1008/368/desktop-wallpaper-satellite-background.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };





    return(
 
 
 
 
 <div className='ic1'>





    
    
    
    
    
    <div>
      <h1>Sapce View</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  </div>
    )
}