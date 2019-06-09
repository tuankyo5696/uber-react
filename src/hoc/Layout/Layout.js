import React from 'react'
import './Layout.scss';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import Footer from './../../components/Footer/Footer';
import './Layout.scss';
const layout = (props) =>(
    <div className = "Layout">
        <>
        <section>
        <Toolbar/>
        <main className="Content">
                {props.children}
        </main>
        <Footer/>
        </section>
        
        </>
    </div>
  
)

export default layout;