import './Ouvrages.css'
import {Navbar ,Footer, Topbar, Ouvrage, Actualite} from '@/components/index'
const Ouvrages = () => {
  return (
    <> 
        <Navbar/>
       <Topbar title="Documents et  ouvrages"/>
        <Ouvrage/>

        
        <Footer/>
    </>
  )
}

export default Ouvrages