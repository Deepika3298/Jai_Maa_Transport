import React, { useState } from 'react'
import './styles/Home.css'
import Heading from './Heading'
import Features from './Features'
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import Services from './Services'
import ContactUs from './ContactUs'

const members = [
    {
        i: "./assets/Frame53.png",
        c: 2009,
        t: "Year Established",
        s: false
    },
    {
        i: "./assets/Frame65.png",
        c: 25000,
        t: "Associated Trucks",
        s: false
    },
    {
        i: "./assets/Frame66.png",
        c: 50,
        t: "Owned Trucks",
        s: true
    },
    {
        i: "./assets/Frame67.png",
        c: 29,
        t: "All Indian States Served",
        s: false
    },
]

function Home() {
    const [state, setState] = useState(false)

    return (
        <>
            <div className='backgroundCoverIamge position-relative' style={{ backgroundImage: `url(./assets/coverImage.png)` }}>
                <div className='text-center'>
                    <div className='mb-3 mb-lg-4 heading1'>Driving Your Logistics<br />Success Forward</div>
                    <h2 className='mb-3 mb-lg-4 heading2'>Your Goods, Our Responsibility</h2>
                    <a href='/#contact_us_tab'>Contact us</a>
                </div>
                <div id='clients_tab'></div>
            </div>

            {/* Our Clients */}
            <div className='p-4 bg_secondary our_clients'>
                <h2 className='m-0 text-white'>Our Clients</h2>
                {/* <div className='row'> */}
                    <div><img src='assets/lloyd.png' alt='' /></div>
                    <div><img src='assets/kangaro.png' alt='' /></div>
                    <div><img src='assets/artnglass.png' alt='' /></div>
                    <div><img src='assets/bluestar.png' alt='' /></div>
                    <div><img src='assets/virgo.png' alt='' /></div>
                    <div><img src='assets/patan.svg' alt='' /></div>
                    <div><img src='assets/ruchira.svg' alt='' /></div>
                    <div><img src='assets/Divisa.svg' alt='' /></div>
                {/* </div> */}
            </div>

            {/* About Us */}
            <div className='container mt_max' id='about_tab'>
                <div className='row'>
                    <div className='col-12 col-lg-6 mb-5 mb-lg-0 img_container_about_us position-relative'>
                        <img className='img1' src={"./assets/Frame50.png"} alt="" />
                        <img className='img2 position-absolute' src={"./assets/Frame47.png"} alt="" />
                        <div>Burgeoning and celebrated entity</div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <Heading heading={"About Us"} />
                        <p>
                            Jai Maa Transport Company, an epitome of exponential growth in the realm of pan-Indian surface logistics, stands tall as a preeminent entity hailing from the heart of Himachal Pradesh. The organization boasts dominion over a fleet exceeding 50 commercial conveyances, strategically stationed within the labyrinth of the Indian private sector. Their reach extends to an extensive grid of over 25,000 trucks, meticulously interconnected through a fellow network, creating a robust tapestry of mobility. JMT specializes in facilitating the dispatch of both general and priority parcels, catering to the niche of less than truckload services, and generously extending its services to encompass the expanse of full truckload solutions, through an intricate webwork that spans the length and breadth of India.
                        </p>
                        <p className='mb-0'>
                            The kaleidoscope of services offered by JMT extends its benevolence across a myriad of sectors, weaving its expertise within the fast-moving consumer goods domain. Furthermore, the multifaceted outreach envelops industries such as edibles, textiles, apparel, household appliances, pharmaceutical commodities, rubber, plastics, metallic and metallurgical products, glassware, automotive components, and heavy machinery. The company executes its operations through a unique model that possesses the virtuosity to accommodate a spectrum of parcel dimensions, ensuring access to an extensive gamut of destinations for the scheduling and delivery of goods by its discerning clientele.
                        </p>
                    </div>
                </div>
            </div>
            {/* About Us end */}

            <Features />
            <Services />

            {/* Proud Member of AIMTC */}
            <div className='mt_max'>
                <Heading
                    heading="Proud Member of AIMTC"
                    containerClass="ms-lg-auto me-lg-auto ps-4 pe-4"
                />
                <ScrollTrigger onEnter={() => setState(true)}>
                    <div className='d-flex flex-wrap'>
                        {members.map(({ i, c, t, s }) => (
                            <div className='col-12 col-lg-3 position-relative'>
                                <img className='w-100' src={i} alt='' />
                                <div className='p-4 text-white position-absolute bottom-0'>
                                    <h1 className='fw-bold' style={{ fontSize: "72px" }}>
                                        {state && <CountUp end={c} delay={0} />}
                                        {s && "+"}
                                    </h1>
                                    <h4 className='fw-bold'>{t}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollTrigger>
            </div>

            {/* Branches */}
            <div className='container mt_max' id='branches_tab'>
                <Heading
                    heading="Branches"
                    containerClass="ms-lg-auto me-lg-auto"
                />
                <div className='d-flex flex-wrap justify-content-between'>
                        <h4 className='fw-bold mb-3 p-2'>Haridwar</h4>
                        <h4 className='fw-bold mb-3 p-2'>Bhagwanpur</h4>
                        <h4 className='fw-bold mb-3 p-2'>Amritsar</h4>
                        <h4 className='fw-bold mb-3 p-2'>Jalandhar</h4>
                        <h4 className='fw-bold mb-3 p-2'>Jammu</h4>
                        <h4 className='fw-bold mb-3 p-2'>Ambala</h4>
                    {/* <div className='col-12 col-lg-6'>
                        <img className='mb-3' src='' alt='image' />
                        <h4 className='fw-bold mb-3'>Branch Office: Ludhiana</h4>
                        <p className='text-muted'>1715, Industrial Area-A Link Road Ludhiana (P.B.) | Pin: 141003</p>
                        <p className='text-muted'>Call: +91-93577-16914</p>
                        <button className='action_btn2'>Enquire</button>
                    </div> */}
                </div>
            </div>

            <ContactUs />
        </>
    )
}

export default Home