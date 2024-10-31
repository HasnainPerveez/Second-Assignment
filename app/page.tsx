import Link from "next/link";
import React from 'react'

function Homepage() {
  return (
    <div>
        <Link href="/home">Home</Link>
        <br />
        <Link href="/services">Services</Link>
        <br />
        <Link href="/about">About</Link>
        <br />
        <Link href="/contact-us">Contact Us</Link>
    </div>
  )
}

export default Homepage