import { useGetTeamQuery } from "../../api/apiSlice";
import { socialMedia } from "../../data/staticData";

const Team = () => {
   // ################### RTK QUERY ###################
   const { data: team, isSuccess } = useGetTeamQuery();

   // ################### CONTENT ###################
   let content;
   if (isSuccess)
      content = (
         <div
            className="our-team"
            data-aos="fade-bottom"
            data-aos-duration="1000"
            data-aos-delay="500"
         >
            {team?.OurTeam?.Team.map(({ Name, job }, i) => (
               <div key={i} className="box">
                  <div className="img">
                     <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                     />
                     <ul className="social flex">
                        {socialMedia.map(({ icon, link }, i) => (
                           <li key={i}>
                              <a href={link} className="icon-wrap flex-center">
                                 <i className={`bi bi-${icon} icon`}></i>
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="info">
                     <h2>{Name}</h2>
                     <p>{job}</p>
                  </div>
               </div>
            ))}
         </div>
      );

   return (
      <section id="team" className="container section team">
         <h2
            className="main-title"
            data-aos="fade-bottom"
            data-aos-duration="1000"
         >
            team
         </h2>
         <p className="bio" data-aos="fade-bottom" data-aos-duration="1000">
            {team?.OurTeam?.Title ??
               "Necessitatibus eius consequatur ex aliquid fuga eum quidem"}
         </p>
         {content}
      </section>
   );
};

export default Team;
