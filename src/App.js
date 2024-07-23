import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoreTrashTalk from "./pages/MoreTrashTalk";
import MoreFlashCard from "./pages/MoreFlashCard";
import MoreFlashCard1 from "./pages/MoreFlashCard1";
import MoreFlashCard2 from "./pages/MoreFlashCard2";
import MoreFlashCard3 from "./pages/MoreFlashCard3";
import MoreGame from "./pages/MoreGame";
import MoreGame1 from "./pages/MoreGame1";
import MoreGame2 from "./pages/MoreGame2";
import MoreGame3 from "./pages/MoreGame3";
import MoreGame4 from "./pages/MoreGame4";
import Start from "./pages/Start";
import End from "./pages/End";
import End1 from "./pages/End1";
import End2 from "./pages/End2";
import End3 from "./pages/End3";
import End4 from "./pages/End4";
import Start1 from "./pages/Start1";
import Start2 from "./pages/Start2";
import MoreTrashTalk1 from "./pages/MoreTrashTalk1";
import MoreGame5 from "./pages/MoreGame5";
import MoreTrashTalk2 from "./pages/MoreTrashTalk2";
import About from "./pages/About";
import MoreTrashTalk3 from "./pages/MoreTrashTalk3";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/moretrash-talk-3":
        title = "";
        metaDescription = "";
        break;
      case "/more-flash-card-1":
        title = "";
        metaDescription = "";
        break;
      case "/more-flash-card-2":
        title = "";
        metaDescription = "";
        break;
      case "/more-flash-card-3":
        title = "";
        metaDescription = "";
        break;
      case "/more-flash-card-4":
        title = "";
        metaDescription = "";
        break;
      case "/more-game-2":
        title = "";
        metaDescription = "";
        break;
      case "/more-game-5":
        title = "";
        metaDescription = "";
        break;
      case "/more-game-6":
        title = "";
        metaDescription = "";
        break;
      case "/more-game-3":
        title = "";
        metaDescription = "";
        break;
      case "/more-game-4":
        title = "";
        metaDescription = "";
        break;
      case "/start-1":
        title = "";
        metaDescription = "";
        break;
      case "/end-1":
        title = "";
        metaDescription = "";
        break;
      case "/end-4":
        title = "";
        metaDescription = "";
        break;
      case "/end-2":
        title = "";
        metaDescription = "";
        break;
      case "/end-3":
        title = "";
        metaDescription = "";
        break;
      case "/end-5":
        title = "";
        metaDescription = "";
        break;
      case "/start-2":
        title = "";
        metaDescription = "";
        break;
      case "/start-3":
        title = "";
        metaDescription = "";
        break;
      case "/moretrash-talk-4":
        title = "";
        metaDescription = "";
        break;
      case "/more-game-1":
        title = "";
        metaDescription = "";
        break;
      case "/moretrash-talk-1":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/moretrash-talk-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/moretrash-talk-3" element={<MoreTrashTalk />} />
      <Route path="/more-flash-card-1" element={<MoreFlashCard />} />
      <Route path="/more-flash-card-2" element={<MoreFlashCard1 />} />
      <Route path="/more-flash-card-3" element={<MoreFlashCard2 />} />
      <Route path="/more-flash-card-4" element={<MoreFlashCard3 />} />
      <Route path="/more-game-2" element={<MoreGame />} />
      <Route path="/more-game-5" element={<MoreGame1 />} />
      <Route path="/more-game-6" element={<MoreGame2 />} />
      <Route path="/more-game-3" element={<MoreGame3 />} />
      <Route path="/more-game-4" element={<MoreGame4 />} />
      <Route path="/start-1" element={<Start />} />
      <Route path="/end-1" element={<End />} />
      <Route path="/end-4" element={<End1 />} />
      <Route path="/end-2" element={<End2 />} />
      <Route path="/end-3" element={<End3 />} />
      <Route path="/end-5" element={<End4 />} />
      <Route path="/start-2" element={<Start1 />} />
      <Route path="/start-3" element={<Start2 />} />
      <Route path="/moretrash-talk-4" element={<MoreTrashTalk1 />} />
      <Route path="/more-game-1" element={<MoreGame5 />} />
      <Route path="/moretrash-talk-1" element={<MoreTrashTalk2 />} />
      <Route path="/about" element={<About />} />
      <Route path="/moretrash-talk-2" element={<MoreTrashTalk3 />} />
    </Routes>
  );
}
export default App;
