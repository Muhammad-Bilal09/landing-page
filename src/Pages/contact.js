import React from 'react'
import {FaYoutube,FaTwitter,FaInstagram,FaGithub,FaPhone,FaMailBulk} from "react-icons/fa";
export default function Contact() {
  return (
    <>
    <section className='contact'>
<div class="container">
    <div class="row">
        <h1 className='text-center'>Contact us</h1>
        <div class="col">
            <div className="card">
            <h4>Menu Links</h4>
            <ul style={{listStyle:"none"}}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </div>
        </div>
        <div class="col">
        <div className="card">
            <h4>our services</h4>
            <ul style={{listStyle:"none"}}>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web development</a></li>
                <li><a href="#">App development</a></li>
                <li><a href="#">product management</a></li>
                <li><a href="#">graphical design</a></li>
            </ul>
            </div>
        </div>
        <div class="col">
        <div className="card">
            <h4>information</h4>
            <ul style={{listStyle:"none"}}>
                <li><a href="#">About us</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">term & condition</a></li>
            </ul>
    </div>
    </div>

    <div class="col">
        <div>
        {/* <h4>create account with </h4> */}
        <ul className='links d-flex' style={{listStyle:"none"}}>
                <li><FaGithub/></li>
                <li><FaInstagram/></li>
                <li><FaYoutube/></li>
                <li><FaTwitter/></li>
            </ul>
            </div>
            </div>
</div>
</div>
</section>
    </>
  )
}