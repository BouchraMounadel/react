import React from 'react';
import { Routes, Route } from "react-router-dom"

import { ALayout, ADashboard } from '@/Pages/index'



import Error from '@/_utils/Error'

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout/>}>
                <Route index element={<ADashboard/>}/>
                <Route path="dashboard" element={<ADashboard/>}/>
                
                
                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    );
};

export default AdminRouter;