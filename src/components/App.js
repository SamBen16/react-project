import Header from './Header'
import Footer from './Footer'
import SectionUne from './SectionUne'
import Gallery from './Gallery'


function App() {
  return (
  <div>
    <Header /> 
    <div className="body">
    <SectionUne />
    <Gallery />
    </div>
    <Footer/>
  </div>
  )
}

export default App