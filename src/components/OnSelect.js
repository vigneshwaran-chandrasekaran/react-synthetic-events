import React, { useState } from 'react';

export default function AllClipboard() {
    const [eventType, seteventType] = useState('');
    const [isEventFired, setIsEventFired] = useState(false);

    const handleOnCut = (e) => {
        e.persist();
        seteventType(e.type);
        console.log('type =>', e.type);
        console.log('type =>', e);
        setIsEventFired(true);
        setTimeout(() => {
            setIsEventFired(false);
        }, 5000);
    };

    return (
        <div className='my-5' style={{ minHeight: '150px' }}>
            <p className="bg-primary p-2">
                <strong>Selection Events</strong>
            </p>
            <p>onSelect</p>
            <p>Select below text box text to fire the onSelect event</p>
            <input
                onSelect={handleOnCut}
                type='text'
                style={{ width: '100%' }}
                defaultValue='onSelect events'
            />
            {isEventFired ?
                (<p>
                    <span className='font-weight-bold'>{eventType}</span> Event fired
                </p>) : (null)
            }
        </div>
    )
}
