import React from 'react'

const Footer = () => {
    const date = new Date();
    return (
        <div className='footerContent'>
        &copy; <span id="date">{date.getFullYear()}</span>
        <span>Built by no compila team</span>
        </div>
    )
}

export default Footer
