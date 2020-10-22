import React, {useState} from 'react';
import './form.scss'

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
        <div className='form'>
            <h3>ADD A NEW SONG</h3>
            <form onSubmit={handleSubmit}>
                <p>TITLE</p>
                <input
                    type='text'
                    name='title'
                    // value={formData.title}
                    onChange={handleChange}
                />
                <p>ARTIST</p>
                <input
                    type='text'
                    name='artist'
                    // value={formData.artist}
                    onChange={handleChange}
                />
                <p>TIME</p>
                <input
                    type='text'
                    name='time'
                    // value={formData.time}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value='Add Song'/>
            </form>
        </div>
    )
}

export default Form; 