import './Geostory.css'
import {Topbar, Footer, Navbar,Geostories} from '../../components/index'
const Geostory = () => {
  return (
    <> 
    <div>
    <Navbar/>
        <Topbar title="Geostory"/>
        <Geostories/>

        </div>
        <Footer/>
    </>
  )
}

export default Geostory