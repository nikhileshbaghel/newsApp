import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';



import { BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
     <Route  exact path='/health'  element={<News key="health" country="in" def="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqd666AEPrB5o_k2qaEPQxMA3GIZl1DWVGA&usqp=CAU" category="health" />}>
     </Route>
     <Route  exact path='/technology'  element={<News key="tech" country="in" def="https://images.theconversation.com/files/447353/original/file-20220218-45245-1hgu9fk.jpg?ixlib=rb-1.1.0&rect=51%2C153%2C5700%2C2850&q=45&auto=format&w=668&h=324&fit=crop" category="technology" />}>
     </Route>
     <Route  exact path='/entertainment'  element={<News key="enter" country="in" def="https://www.pwc.com/gx/en/entertainment-media/outlook-2021/gemo-anchor-super-hero.jpg" category="entertainment" />}>
     </Route>
     <Route exact path='/business'  element={<News  key="busi" country="in" def="https://www.incimages.com/uploaded_files/image/1920x1080/getty_180152187_970679970450042_64007.jpg" category="business" />}>
     </Route>
     <Route  exact path='/science'  element={<News key="sci" country="in" def="https://yt3.ggpht.com/ytc/AKedOLT-5Q6ApOqGPdtPuIN78j9x8VW8b5h4kMj_8PFXcw=s900-c-k-c0x00ffffff-no-rj" category="science" />}>
     </Route>
     <Route  exact path='/'  element={<News key="gen" country="in" def="https://chessdailynews.com/wp-content/uploads/2015/03/general_news5.jpg" category="general" />}>
     </Route>
     <Route exact path="/sport"  element={<News key="sport" country="in" def="https://media.istockphoto.com/photos/various-sport-equipments-on-grass-picture-id949190756?k=20&m=949190756&s=170667a&w=0&h=RBVLWqBNY1OrRyUX-bi-gcEPtszzZOxzmU-ori5467M=" category="sport" />}>
     </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
