import { moreServices, services } from "../../data/staticData";
import service_1 from "../../assets/imgs/services/service_1.jpg";

const Services = () => {
   return (
      <section id="services" className="container section services">
         <h2
            className="main-title"
            data-aos="fade-bottom"
            data-aos-duration="1000"
         >
            services
         </h2>
         <p className="bio" data-aos="fade-bottom" data-aos-duration="1000">
            Magnam dolores commodi suscipit eius consequatur ex aliquid fug
         </p>
         <div className="our-services">
            <div
               className="boxs"
               data-aos="fade-bottom"
               data-aos-duration="1000"
               data-aos-delay="500"
            >
               {services.map(({ icon, title, text }, i) => (
                  <div key={i} className="box">
                     <div className="icon-wrap flex-center">
                        <i className={`bi bi-${icon} icon`}></i>
                     </div>
                     <h3 className="title">{title}</h3>
                     <p className="text">{text}</p>
                  </div>
               ))}
            </div>
            <div
               className="more-services"
               data-aos="fade-bottom"
               data-aos-duration="1000"
               data-aos-delay="500"
            >
               {moreServices.map(({ title, text, imgName }, i) => (
                  <div
                     key={i}
                     style={{
                        backgroundImage: `url(${imgName})`,
                     }}
                     className="service"
                  >
                     <div className="info">
                        <h2 className="title">{title}</h2>
                        <p className="text">{text}</p>
                        <a href="/" className="link">
                           <i className="bi bi-arrow-right icon"></i>
                           READ MORE
                        </a>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Services;
