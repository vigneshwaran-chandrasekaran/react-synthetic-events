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
        <div className='my-5' style={{ minHeight: '150px' }}>
            <p className="bg-primary p-2">
                <strong>Focus Events</strong>
            </p>
            <p>onFocus, onBlur</p>
            <input
                onFocus={handleOnCut}
                onBlur={handleOnCut}
                type='text'
                style={{ width: '100%' }}
                defaultValue='onFocus onBlur events'
            />
            {isEventFired ?
                (<p>
                    <span className='font-weight-bold'>{eventType}</span> Event fired
                </p>) : (null)
            }
        </div>
    )
}
