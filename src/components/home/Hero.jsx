import Sponsors from "./Sponsors";
import heroImg from "../../assets/imgs/hero_img.png";

const Hero = () => {
   return (
      <section className="hero">
         <div className="container flex-between">
            <div className="web-info">
               <h1
                  className="title"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos="fade-down"
               >
                  Grow your business with Vesperr
               </h1>
               <p
                  className="text"
                  data-aos-delay="250"
                  data-aos-duration="1000"
                  data-aos="fade-down"
               >
                  We are team of talented designers making websites with
                  Bootstrap{" "}
               </p>
               <button
                  className="btn btn-primary"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos="fade-down"
               >
                  Get Start
               </button>
            </div>
            <img
               src={heroImg}
               alt="hero-img"
               className="hero-img"
               data-aos-duration="1000"
               data-aos="fade-left"
            />
         </div>
         <Sponsors />
      </section>
   );
};

export default Hero;
