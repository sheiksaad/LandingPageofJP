import React from 'react'
import './Section6.css'

const Section6 = () => {
  return (
    <>
    <div className="container1">
        <form className="contact-form">
      <div className="form-group">
        <label>Name *</label>
        <input type="text" name="name" required  placeholder='Enter Your Name'/>
      </div>
      <div className="form-group">
        <label>Email *</label>
        <input type="email" name="email" required placeholder='abc@gmail.com'/>
      </div>
      <div className="form-group">
        <label>Phone Number *</label>
        <input type="tel" name="phoneNumber" required placeholder='0300123456789' />
      </div>
      <div className="form-group">
        <label>Message *</label>
        <textarea name="message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  )
}
export default Section6