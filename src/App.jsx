import { HashRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Home, Academic, Principle, AdmissionProcedure, RegistrationProcedure, OnlinePayment, FeeStructure, Gallery, Sports, ContactUs, Login, Curriculum, MainPannel, ComputerLab, MusicLab, SmartClassRoom, Library } from "./components";
import Header from "./components/Header/Header";
import ShowAndHideComponent from "./components/Header/ShowAndHideComponent";

function App(props) {
 

  return (
    <>
      <HashRouter >
      <ShowAndHideComponent>
        <Header/>
        </ShowAndHideComponent> 
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='academic' element={<Academic />} />
          <Route path='principle' element={<Principle />} />
          <Route path='curriculan' element={<Curriculum />} />
          <Route path='admission-procedure' element={<AdmissionProcedure />} />
          <Route path='registration-procedure' element={<RegistrationProcedure />} />
          <Route path='online-payment' element={<OnlinePayment />} />
          <Route path='fee-structure' element={<FeeStructure />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='smart-class' element={<SmartClassRoom />} />
          <Route path='library' element={<Library />} />
          <Route path='computer-lab' element={<ComputerLab />} />
          <Route path='music-lab' element={<MusicLab />} />
          <Route path='sports' element={<Sports />} />
          <Route path='contact' element={<ContactUs />} />
          <Route path='login' element={<Login />} />
          <Route path='admin' element={<MainPannel />} />
        </Routes>
       <ShowAndHideComponent>
         <Footer/>
       </ShowAndHideComponent>
      
      </HashRouter>
    </>
  )
}

export default App
