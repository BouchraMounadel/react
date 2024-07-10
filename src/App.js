import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PublicRouter from '@/Pages/Public/PublicRouter';
import AdminRouter from '@/Pages/Admin/AdminRouter';
import Error from '@/_utils/Error'
const App = () => {
    return (
        <>
            
            <Router>
                <Routes>

                    <Route path="/*" element={<PublicRouter />}/>
                    <Route path="/admin/*" element={ <AdminRouter /> }/>







                    <Route path="/*" element={<Error />}/>
                    
                </Routes>
                
                
            </Router>
            
            
        </>
    )
}

export default App