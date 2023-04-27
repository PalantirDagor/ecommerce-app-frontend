import { Routes, Route } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';


export const AppRouter = () => {

    return(
        <>
            <Routes>
                <Route path="/*" element={
                        <HeroesRoutes />
                } />
            </Routes>
        </>
    );
}
