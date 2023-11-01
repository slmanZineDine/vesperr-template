import { About, Contact, Hero, Services, Team } from "./components";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
   return (
      <>
         <Header />
         <Hero />
         <main className="main">
            <About />
            <Services />
            <Team />
            <Contact />
         </main>
         <Footer />
      </>
   );
}

export default App;
