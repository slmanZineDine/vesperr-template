import { aboutInfo } from "../../data/staticData";
import aboutImg from "../../assets/imgs/about-img.svg";
import { useGetAboutUsQuery } from "../../api/apiSlice";

const About = () => {
   // ################### RTK QUERY ###################
   const { data: aboutUs, isSuccess } = useGetAboutUsQuery();

   // ################### CONTENT ###################
   let content;
   if (isSuccess)
      content = (
         <div
            className="about-info flex"
            data-aos="fade-bottom"
            data-aos-delay="500"
            data-aos-duration="1000"
         >
            <img src={aboutImg} alt="about-img" className="about-img" />
            <div className="boxs">
               {aboutUs?.Feature.map(({ icon, Discription, Title }, i) => (
                  <div key={i} className="box flex-between">
                     <i className={`bi bi-${icon} icon`}></i>
                     <div className="info">
                        <span className="number">{Title}</span>
                        <p>{Discription}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      );

   return (
      <section id="about" className="container section">
         <h2
            className="main-title"
            data-aos="fade-bottom"
            data-aos-duration="1000"
         >
            about us
         </h2>
         <div
            className="about-text flex-between"
            data-aos="fade-bottom"
            data-aos-duration="1000"
            data-aos-delay="500"
         >
            <div className="box">
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </p>
               <ul>
                  <li>
                     <i className="bi bi-check-all icon"></i>Ullamco laboris
                     nisi ut aliquip ex ea commodo consequat
                  </li>
                  <li>
                     <i className="bi bi-check-all icon"></i>Duis aute irure
                     dolor in reprehenderit in voluptate velit
                  </li>
                  <li>
                     <i className="bi bi-check-all icon"></i>Ullamco laboris
                     nisi ut aliquip ex ea commodo consequat
                  </li>
               </ul>
            </div>
            <div className="box">
               <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
               </p>
               <button className="btn btn-primary">Learn More</button>
            </div>
         </div>
         {content}
      </section>
   );
};

export default About;
