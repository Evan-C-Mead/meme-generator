import React from "react";

export default function SignUp() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        newsletter: false
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    console.log(formData)

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.confirmPassword) {
            console.log("Credentials created")
        } else {
            console.log("Password doesn't match...")
            return
        }

        if (formData.newsletter) {
            console.log("Thanks for joining our newsletter")
        }
    }

    return (
        <div className="form-container">
            <form className="sign-up--form" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email address" className="form--input" onChange={handleChange} name="email" value={formData.email}/>
                <input type="password" placeholder="Password" className="form--input" onChange={handleChange} name="password" value={formData.password}/>
                <input type="password" placeholder="Confirm password" className="form--input" onChange={handleChange} name="confirmPassword" value={formData.confirmPassword}/>
                <div className="form--email">
                    <input className="email--check" id="checkEmail" type="checkbox" onChange={handleChange} name="newsletter" checked={formData.newsletter}/>
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button className="form--submit">Sign up</button>
            </form>
        </div>
    )
}
