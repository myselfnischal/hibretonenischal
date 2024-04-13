import React, {useState} from 'react';
import BackToTop from '../elements/BackToTop';
import Footer from './Footer';

const NoSSRHeader = dynamic(() => import('./Header'), {ssr: false})
import Sidebar from './Sidebar';
import dynamic from "next/dynamic";

const Layout = ({children}) => {
    const [openClass, setOpenClass] = useState('');

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible")
    }

    const handleRemove = () => {
        if (openClass === "sidebar-visible") {
            setOpenClass("")
            document.body.classList.remove("mobile-menu-active");
        }
    }
    return (
        <>
            <div className="body-overlay-1" onClick={handleRemove}/>
            <NoSSRHeader handleOpen={handleOpen} handleRemove={handleRemove} openClass={openClass}/>
            <Sidebar openClass={openClass}/>
            <main className="main">
                {children}
            </main>
            <Footer/>
            <BackToTop/>
        </>
    );
};

export default Layout;
