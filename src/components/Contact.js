import React from "react";
import Star from "./Star";

export default function Contact() {
    const [contact, setContact] = React.useState({
        firstName: "the",
        lastName: "bo55",
        phone: "+1 (719) 555-1212",
        email: "getscrapped@trappedmau5.com",
        isFavorite: true
    })

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }

    return (
        <main>
            <article className="card">
                <img src="/images/profile-pic.png" className="card--image"  alt="contact-avatar"/>
                <div className="card--info">
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName} <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}
