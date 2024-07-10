import './Dashboard.css'
import { Footer, Container, Navbar,Topbar ,ContentSection} from '../../components/index'
const Dashboard = () => {
  return (
    <> 
        <Navbar/>
        <Topbar title="Tableaux de bord"/>
        <br></br>
        <br></br><br></br>
        <ContentSection/>
        <Footer/>
        
    </>
  )
}

export default Dashboard