import React, { useState } from 'react';

export default function UiEvents() {
    const [eventType, seteventType] = useState('');
    const [isEventFired, setIsEventFired] = useState(false);
    const [isErrorEventFired, setIsErrorEventFired] = useState(false);
    const [src, setSrc] = useState('https://picsum.photos-error/100')

    const handleEvent = (e) => {
        e.persist();
        seteventType(e.type);
        console.log('type =>', e.type);
        console.log('type =>', e);
        setIsEventFired(true);
        setTimeout(() => {
            setIsEventFired(false);
        }, 5000);
    };

    const handleErrorEvent = (e) => {
        e.persist();
        seteventType(e.type);
        console.log('type =>', e.type);
        console.log('type =>', e);
        setIsErrorEventFired(true);
        setTimeout(() => {
            setIsErrorEventFired(false);
        }, 5000);
    };

    const handleErrorImage = () => {
        setSrc('https://picsum.photos/200');
    };

    return (
        <div className='my-5' style={{ minHeight: '150px' }}>
            <p className="bg-primary p-2">
                <strong>Image Events</strong>
            </p>
            <p>onLoad onError</p>
            <div className='text-center'>
                <img onLoad={handleEvent} src='https://picsum.photos/100' alt='load-event' />
                {isEventFired ?
                    (<span className='my-3'>
                        <span className='font-weight-bol'>{eventType}</span> Event fired
                </span>) : (null)
                }
            </div>
            <hr />
            <div className='text-center'>
                <img onError={handleErrorEvent} src='https://picsum.photos-error/100' alt='error-event' />
                {isErrorEventFired ?
                    (<span className='my-3'>
                        <span className='font-weight-bol'>{eventType}</span> Event fired
                </span>) : (null)
                }
            </div>
            <hr />
            <div className='text-center'>
                <p>On initial load, src image is error image, so onError event will replace new image</p>
                <img onError={handleErrorImage} src={src} alt='error-event' />
            </div>
            <hr />
        </div>
    )
}
