import { sponsors } from "../../data/staticData";

const Sponsors = ({ clients }) => {
   return (
      <section className="sponsors">
         <div className="container">
            {clients.map(({ Name, Image }, i) => (
               <img
                  src={Image}
                  alt={Name}
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
