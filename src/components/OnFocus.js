import React, { useState } from 'react';

export default function AllClipboard() {
    const [eventType, seteventType] = useState('');
    const [isEventFired, setIsEventFired] = useState(false);

    const handleOnCut = (e) => {
        e.persist();
        console.log({ e });
        seteventType(e.type);
        console.log('type =>', e.type);
        console.log('type =>', e.clipboardData);
        console.log('type =>', e);
        setIsEventFired(true);
        setTimeout(() => {
            setIsEventFired(false);
        }, 5000);
    };

    return (
        <div style={{ minHeight: '150px' }}>
            <p className="bg-warning p-2">
                <strong>Keyboard Events</strong>
            </p>
            <p>onKeyDown, onKeyPress, onKeyUp</p>
            <input
                onKeyDown={handleOnCut}
                type='text'
                style={{ width: '100%' }}
                defaultValue='onKeyDown events'
            />
            <input
                onKeyPress={handleOnCut}
                onKeyUp={handleOnCut}
                type='text'
                style={{ width: '100%' }}
                defaultValue='onKeyPress onKeyUp events'
            />
            {isEventFired ?
                (<p>
                    <span className='font-weight-bold'>{eventType}</span> Event fired
                </p>) : (null)
            }
        </div>
    )
}
