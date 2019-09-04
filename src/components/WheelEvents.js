import React, { useState } from 'react';

export default function WheelEvents() {
    const [eventType, seteventType] = useState('');
    const [isEventFired, setIsEventFired] = useState(false);

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

    return (
        <div className='my-5' style={{ minHeight: '150px' }}>
            <p className="bg-primary p-2">
                <strong>UI Events</strong>
            </p>
            <p>onWheel</p>
            <p>Scroll the below div using mouse wheel to fire the wheel event</p>
            <p>Wheel and Scroll events basically similar one, wheel event only fire when mouse scrolled, but sroll event fire using mouse wheel and also using mouse drag (both ways)</p>
            <div
                onWheel={handleEvent}
                style={{ maxHeight: '150px', scrollBehavior: 'smooth', overflow: 'auto' }}>
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>

            {isEventFired ?
                (<p className='my-3'>
                    <span className='font-weight-bold'>{eventType}</span> Event fired
                </p>) : (null)
            }
        </div>
    )
}
