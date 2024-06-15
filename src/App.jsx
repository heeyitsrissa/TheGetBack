import React from 'react';
import { Outlet } from 'react-router-dom';
// import Nav from './component/NavBar';

function App() {
    return (
        <>

        <main
        className="mx-3">
        <Outlet />
        </main>
        </>
    )
}

export default App;