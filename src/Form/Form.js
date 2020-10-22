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
                <h4>TITLE</h4>
                <input
                    type='text'
                    name='title'
                    // value={formData.title}
                    onChange={handleChange}
                />
                <h4>ARTIST</h4>
                <input
                    type='text'
                    name='artist'
                    // value={formData.artist}
                    onChange={handleChange}
                />
                <h4>TIME</h4>
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