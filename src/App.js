import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Menu } from "./Menu";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/service";
function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>} >    
          <Route index element={<Home/>}/>  
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="services" element={<Service/>} />
       </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
