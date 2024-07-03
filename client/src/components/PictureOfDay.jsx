
import React, { useEffect, useState } from 'react'
import './css/pictureOfDay.scss'

export default function PictureOfDay() {

    const API_KEY = import.meta.env.VITE_DEMO_KEY ;
    
    const [pictureData, setPictureData] = useState();
    const [customDate, setCustomDate] = useState(null);

    useEffect(() => {
        const onContentLoaded = async () => {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            console.log(data);
            setPictureData(data);
        }
        onContentLoaded();
    }, []);

    const onClickBtn = async (evt) => {
        evt.preventDefault();
        if (customDate == null) {
            alert("Please enter a date");
        } else {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${DEMO_KEY}&date=${customDate}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            console.log(data);
            setPictureData(data);
        }
    }

    const changeDate = (evt) => {
        setCustomDate(evt.target.value);
        console.log(customDate);
    }

    const renderMedia = () => {
        if (!pictureData) return null;

        if (pictureData.media_type === 'video') {
            return (
                <iframe
                    src={pictureData.url}
                    title={pictureData.title}
                    frameBorder="0"
                    allowFullScreen
                    className="media-content"
                ></iframe>
            );
        } else {
            return (
                <img 
                    src={pictureData.hdurl || pictureData.url} 
                    alt={pictureData.title}
                    className="media-content"
                />
            );
        }
    }

    return (
        <>
            <div className="picofday">
                <span className='pic_of_day'>
                    PICTURE OF THE DAY
                </span>
                <div className="info">
                    <div className="info_image">
                        {renderMedia()}
                    </div>
                    <div className="image_info">
                        <h2>{pictureData && pictureData.title}</h2>
                        <p>{pictureData && pictureData.explanation}</p>
                    </div>
                </div>
                <div className="yourpic">
                    <span>Want to see picture for a custom date?</span>
                    <form>
                        <input type="date" id="date" name="date" onChange={changeDate}/>
                        <button onClick={onClickBtn}>Get Picture</button>
                    </form>
                </div>
            </div>
        </>
    )
}