import { sponsors } from "../../data/staticData";

const Sponsors = () => {
   return (
      <section className="sponsors">
         <div className="container">
            {sponsors.map((spon, i) => (
               <img
                  src={spon}
                  alt="sponsor"
                  key={i}
                  className="sponsor"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="1000"
               />
            ))}
         </div>
      </section>
   );
};

export default Sponsors;
