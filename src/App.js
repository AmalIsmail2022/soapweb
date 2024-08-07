import { useEffect, useState } from "react";
import History from "./components/history/history";
import Landing from "./components/landing";
import Sec1 from "./components/sec1/sec1";
import Sec2 from "./components/sec2/sec2";
import Sec3 from "./components/sec3/sec3";
import Sec4 from "./components/sec4/sec4";
import Footer from "./components/utily/footer";
import Nav from "./components/utily/nav";
import Contactus from "./components/contact us/contactus";

function App() {
  const [showscroll, setshowscroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setshowscroll(true);
      } else {
        setshowscroll(false);
      }
    });
  }, []);
  return (
    <div className="App">
      <Nav />
      <Landing />
      <History />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Contactus />
      <Footer />
      <a style={{ opacity: showscroll ? 1 : 0, transition: "1s" }} href="#up">
        <button className="scrolltotop icon-arrow-right2">
          <i class="fa-solid fa-angles-up" style={{ rotate: "90deg" }}></i>
        </button>
      </a>
    </div>
  );
}

export default App;
