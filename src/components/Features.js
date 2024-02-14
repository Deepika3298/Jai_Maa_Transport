import React from 'react'
import Heading from './Heading'

function Features() {
    return (
        <div className='mt_max' id='features_tab'>
            <div className='row m-0'>
                <div className='p-4 pt-lg-2 p-lg-5 col-lg-5'>
                    <Heading heading="Features" />
                    <p className='mb-lg-5'>Jai Maa Transport Company stands out for its reliable and punctual nationwide transportation services, facilitated by an extensive fleet accommodating diverse cargo. The company prioritizes transparency with an advanced tracking system and ensures safety through experienced drivers and compliance with regulations. Offering customized solutions at cost-effective rates, Jai Maa emphasizes customer satisfaction with responsive support. Additionally, the company displays environmental responsibility by incorporating eco-friendly practices in its operations.</p>
                </div>
                <div className='p-0 col-lg-4'></div>
                <div className='p-0 col-lg-3'>
                    <Feature
                        heading="Client Centric Approach"
                        text="JMT takes a client-centric approach, understanding that every client's cargo is unique. They work closely with their clients to tailor transportation solutions that meet specific requirements. This personalized touch sets them apart in the industry."
                        containerClass="bg_primary"
                    />
                </div>
            </div>

            <div className='row m-0'>
                <div className='p-0 col-lg-3'>
                    <Feature
                        heading="Geo-Positioning"
                        text="JMT strategically operates via 6 owned offices and warehouses, including its Head Office at Kala Amb, and branches at Ludhiana, Jalandhar, Haridwar, Rudrapur, and Ambala."
                        containerClass="bg_secondary text-white"
                    />
                </div>
                <div className='p-0 col-lg-6 position-relative'>
                    <img
                        className='w-100'
                        src={"./assets/Lightphoto.png"}
                        alt=''
                        style={{ minHeight: "15.5rem", objectFit: "cover" }}
                    />
                    <Feature
                        heading="Large Fleet of Trucks"
                        text="Intricacies abound within JMT's extensive operations, orchestrated via a fleet of over 50 proprietary trucks, while a vast network of more than 25,000 trucks across the expanse of India stands in association with this enterprise."
                        containerClass="position-absolute bottom-0"
                    />
                </div>
                <div className='p-0 col-lg-3'>
                    <Feature
                        heading="JMT's Flourishing Daily Parcel Network"
                        text="In recent years, JMT initiated a thriving Daily Parcel Service connecting Kala Amb, Haridwar, Rudrapur, and Ludhiana, eliciting an overwhelmingly positive response, and running with resounding success."
                        containerClass="bg_secondary text-white"
                    />
                </div>
            </div>

            <div className='row flex-wrap-reverse m-0'>
                <div className='p-0 col-lg-3'></div>
                <div className='p-0 col-lg-3'>
                    <Feature
                        heading="JMT: The Epitome of Dependability"
                        text="JMT is synonymous with unwavering trust and unparalleled cost-efficiency in its industry."
                        containerClass="bg_secondary text-white"
                    />
                </div>
                <div className='p-0 col-lg-6'>
                    <img className='w-100' src={"./assets/Frame49.png"} />
                </div>
            </div>
        </div>
    )
}

export default Features


function Feature({ heading, text, containerClass }) {
    return (
        <div className={`d-flex flex-column justify-content-end h-100 p-4 pt-5 pb-5 p-lg-4 ${containerClass}`}>
            <h4 className='mb-3'>{heading}</h4>
            <p className='mb-0'>{text}</p>
        </div>
    )
}