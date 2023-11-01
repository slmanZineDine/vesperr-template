import { useGetServicesQuery } from "../../api/apiSlice";
import { moreServices, services } from "../../data/staticData";

const Services = () => {
   // ################### RTK QUERY ###################
   const { data: ourServices, isSuccess } = useGetServicesQuery();

   // ################### CONTENT ###################
   let content;
   if (isSuccess)
      content = (
         <div
            className="boxs"
            data-aos="fade-bottom"
            data-aos-duration="1000"
            data-aos-delay="500"
         >
            {ourServices?.Services?.Services.map(
               ({ icon, Title, Discription }, i) => (
                  <div key={i} className="box">
                     <div className="icon-wrap flex-center">
                        <i className={`bi bi-${icon} icon`}></i>
                     </div>
                     <h3 className="title">{Title}</h3>
                     <p className="text">{Discription}</p>
                  </div>
               )
            )}
         </div>
      );
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
            {ourServices?.Services?.Title ??
               "Magnam dolores commodi suscipit eius consequatur ex aliquid fug"}
         </p>
         <div className="our-services">
            {content}
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
