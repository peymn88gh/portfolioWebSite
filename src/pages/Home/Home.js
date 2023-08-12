import { Element } from 'react-scroll'
import './Home.css'
import Contact from 'components/Contact/Contact.jsx'


export default function(){
    return <>
        <div className="homebackground">
            <div className="content-container">
                <h1 className=' font-bold text-5xl mb-10'>LeoNet Informatik GmbH</h1>
                <button className='rounded-full text-lg bg-red-500 py-2 px-4 m-5'>
                    LEARN MORE
                </button>
                <button className='rounded-full text-lg bg-red-500 py-2 px-4 '>
                    .NET ENTWICKLUNG
                </button>
            </div>
        </div>
        <Contact/>
        <Element name="services" className="services bg-gray-100 py-10">
           <div className='h-10'>
                <p>this is services</p>
            </div> 
        </Element>
        
        
    </>
}