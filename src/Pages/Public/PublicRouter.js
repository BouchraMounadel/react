import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Home,Dashboard,Geostory,Ouvrages,Projects,Vulnerability,About,Map,Demography,Environnement,Infrastructure,Social,Women, WomenStory,RehamnaStory,ClimatStory,Login, Benguerir} from '@/Pages/index'
import Error from '@/_utils/Error'



const PublicRouter = () => {
    return (
        <Routes>
        <Route>
        <Route index element={<Home/>} />

                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/geostory' element={<Geostory/>} />
                <Route path='/ouvrages' element={<Ouvrages/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/map' element={<Map/>} />
                <Route path='/vulnerability' element={<Vulnerability/>} />

                <Route path='/Dashboard/Demography' element={<Demography/>} />
                <Route path='/Dashboard/Environnement' element={<Environnement/>} />
                <Route path='/Dashboard/Infrastructure' element={<Infrastructure/>} />
                <Route path='/Dashboard/Social' element={<Social/>} />
                <Route path='/Dashboard/Women' element={<Women/>} />

                <Route path='/Geostory/WomenStory' element={<WomenStory/>} />
                <Route path='/Geostory/RehamnaStory' element={<RehamnaStory/>} />
                <Route path='/Geostory/ClimatStory' element={<ClimatStory/>} />


                <Route path='/vulnerability/scenariis/benguerir' element={<Benguerir/>} />





                <Route path='/auth/login' element={<Login/>} />



                <Route path="/*" element={<Error />}/>

          </Route>

        </Routes>
    );
};

export default PublicRouter;