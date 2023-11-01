import { contact, socialMedia } from "../../data/staticData";
import Logo from "../shared/Logo";

const Contact = () => {
   return (
      <section className="container section contact" id="contact">
         <h2
            className="main-title"
            data-aos="fade-bottom"
            data-aos-duration="1000"
         >
            contact
         </h2>
         <div
            className="contact-container flex-between"
            data-aos="fade-bottom"
            data-aos-duration="1000"
            data-aos-delay="500"
         >
            <div className="info">
               <Logo />
               <p className="text">
                  Cras fermentum odio eu feugiat. Justo eget magna fermentum
                  iaculis eu non diam phasellus. Scelerisque felis imperdiet
                  proin fermentum leo. Amet volutpat consequat mauris nunc
                  congue.
               </p>
               <ul className="social-media flex">
                  {socialMedia.map(({ icon, link }, i) => (
                     <li key={i}>
                        <a href={link} className="icon-wrap flex-center">
                           <i className={`bi bi-${icon} icon`}></i>
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
            <ul className="details">
               {contact.map(({ icon, text }, i) => (
                  <li key={i} className="item">
                     <i className={`bi bi-${icon} icon`}></i> {text}
                  </li>
               ))}
            </ul>
            <form className="form flex">
               <input
                  type="text"
                  name="uesrname"
                  placeholder="Your Name"
                  className="input-field"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  className="input-field"
               />
               <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input-field"
               />
               <textarea name="message" placeholder="Message"></textarea>
               <input type="submit" className="btn btn-secondary" />
            </form>
         </div>
      </section>
   );
};

export default Contact;
