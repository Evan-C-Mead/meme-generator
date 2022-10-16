import React from "react";

export default function Form() {
    const [formNameData, setFormNameData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        info: "",
        isFriendly: false,
        awesomeness: ""
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormNameData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    console.log(formNameData)

    return (
        <form className="form-name-info">
            <input type="text" placeholder="first" onChange={handleChange} name="firstName" value={formNameData.firstName}/>
            <input type="text" placeholder="last" onChange={handleChange} name="lastName" value={formNameData.lastName}/>
            <input type="text" placeholder="email" onChange={handleChange} name="email" value={formNameData.email}/>
            <textarea id="form-info" placeholder="notes" onChange={handleChange} name="info" value={formNameData.info}/>
            <input type="checkbox" id="isFriend" onChange={handleChange} name="isFriendly" checked={formNameData.isFriendly}/>
            <label htmlFor="isFriend">Are you a friend?</label>
            <br/>
            <br/>
            <fieldset>
                <legend>Current Awesome Level</legend>
                <input type="radio" id="awesome" onChange={handleChange} checked={formNameData.awesomeness === "awesome"} name="awesomeness" value="awesome"/>
                <label htmlFor="awesome">Awesome!</label>
                <br/>
                <input type="radio" id="more-awesome" onChange={handleChange} checked={formNameData.awesomeness === "more-awesome"} name="awesomeness" value="more-awesome"/>
                <label htmlFor="more-awesome">More Awesome!</label>
                <br/>
                <input type="radio" id="most-awesome" onChange={handleChange} checked={formNameData.awesomeness === "most-awesome"} name="awesomeness" value="most-awesome"/>
                <label htmlFor="most-awesome">Most Awesome!</label>
                <br/>
            </fieldset>
        </form>
    )
}