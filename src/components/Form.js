import React from "react";

export default function Form() {
    const [formNameData, setFormNameData] = React.useState({firstName: "", lastName: "", email: ""})

    function handleChange(event) {
        setFormNameData(prevFormData => {
            return {
                ...prevFormData,
            [event.target.name]: event.target.value
            }
        })
    }

    console.log(formNameData)

    return (
        <form className="form-name">
            <input type="text" placeholder="first" onChange={handleChange} name="firstName" value={formNameData.firstName}/>
            <input type="text" placeholder="last" onChange={handleChange} name="lastName" value={formNameData.lastName}/>
            <input type="text" placeholder="email" onChange={handleChange} name="email" value={formNameData.email}/>
        </form>
    )
}
