import React, {useState} from 'react'; 

const Form = (props) => {
    const [formData, setFormData] = useState();

    const handleSubmit = (event)=>{
        event.preventDefault();
        props.handleSubmit(formData);
        props.history.push('/')//this can be change base on route, but this should ne the display page route
    };

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    return(
        <div>
            <h2>ADD A NEW SONG</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='artist'
                    value={formData.artist}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='time'
                    value={formData.time}
                    onChange={handleChange}
                />
                <input type="submit" value={props.label}/>
            </form>
        </div>
    )
}

export default Form; 