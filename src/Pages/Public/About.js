import './About.css'
import {Topbar, Footer,Navbar,Container, Apropos, Logos, Fastbutton, Convention} from '../../components/index'
const About = () => {
  return (
    <> 
    <Navbar/>
    <Topbar title="A propos"/>
        <Apropos/>
        <Convention/>
        
        <Logos/>
        <Footer/>
    </>
  )
}

export default About