import React from "react";

export default function Form() {
    const [formNameData, setFormNameData] = React.useState({firstName: "", lastName: ""})

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
            <input type="text" placeholder="First Name" onChange={handleChange} name="firstName"/>
            <input type="text" placeholder="Last Name" onChange={handleChange} name="lastName"/>
        </form>
    )
}
