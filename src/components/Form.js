import React from "react";

export default function Form() {
    const [formNameData, setFormNameData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        info: "",
        isFriendly: false,
        awesomeness: "",
        favColor: ""
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

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formNameData)
    }

    // console.log(formNameData)

    return (
        <form className="form-name-info" onSubmit={handleSubmit}>
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
            <br/>
            <label htmlFor="favColor">What is your favorite color?</label>
            <br/>
            <select id="favColor" onChange={handleChange} name="favColor" value={formNameData.favColor}>
                <option value="" disabled={true}>-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br/>
            <button type="submit">Send stats</button>
        </form>
    )
}
