import React, { useRef, useEffect, useReducer, useState } from 'react'
import './styles/ContactUs.css'
import axios from 'axios'

const initialState = {
    name: '',
    email: '',
    _subject: 'Jai Maa Transport Customer',
    phone: '',
    message: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ON_CHANGE':
            const { name, value } = action.payload
            return { ...state, [name]: value, }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

function ContactUs() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [submitting, setSubmitting] = useState(false)

    const submit = e => {
        e.preventDefault()
        setSubmitting(true)
        axios.defaults.headers.post['Content-Type'] = 'application/json'
        axios.post('https://formsubmit.co/ajax/6391eeba631ff65226a236f700704d63', state)
            .then(() => {
                alert("Your response has been submitted, Thank you!")
                setSubmitting(false)
                dispatch({ type: 'RESET' })
            })
            .catch(() => alert("Your response has not been submitted, please try again."))
    }

    return (
        <div id='contact_us_tab' className='container mt_max'>
            <div className='bg-white position-relative'>
                <div className='row align-items-center'>
                    <div className="col-12 col-lg-6">
                        <h2 className='fw-bold mb-4'>Get in touch</h2>
                        <h5 className='text-muted'>Our friendly team would love to hear from you.</h5>
                        <form className='col-lg-11' onSubmit={submit} method="POST">
                            <input type="text" value={state.name} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="name" placeholder="Full Name" required />
                            <input type="email" value={state.email} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="email" placeholder="Email" required />
                            <input type="text" pattern="[1-9][0-9]{9}" value={state.phone} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="phone" placeholder="Phone number (10 digits)" required />
                            <input type="hidden" name="_captcha" value="false" />
                            <textarea value={state.message} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="message" placeholder="Your Message" required />
                            <button type="submit" className="action_btn2 w-100">{submitting ? "Submitting..." : "Submit"}</button>
                        </form>
                    </div>
                    <div className="col-12 col-lg-6 d-none d-lg-block">
                        <img
                            className="contact_image w-100"
                            src={"./assets/contactform.png"}
                            alt=""
                        />
                    </div>
                    <div className='box1_contact_form'></div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
