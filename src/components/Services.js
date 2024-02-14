import React from 'react'
import Heading from './Heading'

const services = [
    {
        i: "./assets/service1.png",
        h: "Full Load Transport",
        p: "Jai Maa Transport Company offers comprehensive full and partial truckload services connecting Himachal Pradesh, Punjab, and Uttarakhand to destinations across India."
    },
    {
        i: "./assets/service2.png",
        h: "Parcel Service",
        p: "Jai Maa Transport Company facilitates daily parcel services between Kala-Amb (Himachal Pradesh) and Haridwar (Uttarakhand), along with Ludhiana (Punjab), ensuring seamless connections."
    },
    {
        i: "./assets/service3.png",
        h: "Logistic Solutions",
        p: "Jai Maa Transport Company takes on the mantle of resolving intricate industrial logistic dilemmas with a comprehensive approach. Leveraging a versatile fleet of 10, 14, and 18-tire large trucks."
    },
]

function Services() {
    return (
        <div className='container mt_max' id='services_tab'>
            <Heading
                heading="Services"
                containerClass="ms-lg-auto me-lg-auto"
            />
            <div className='row'>
                {services.map(({ i, h, p }) => (
                    <div className='col-12 col-lg-4'>
                        <img className='w-100 mb-4' src={i} alt='' />
                        <h4 className='mb-3'>{h}</h4>
                        <p className='mb-0'>{p}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services