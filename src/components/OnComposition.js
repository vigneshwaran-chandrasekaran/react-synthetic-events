import React, { useState } from 'react';

export default function AllClipboard() {
    const [eventType, seteventType] = useState('');
    const [isEventFired, setIsEventFired] = useState(false);

    const handleOnCut = (e) => {
        e.persist();
        seteventType(e.type);
        console.log('type =>', e.type);
        console.log('e =>', e);
        setIsEventFired(true);
        setTimeout(() => {
            setIsEventFired(false);
        }, 5000);
    };

    return (
        <div className='my-5' style={{ minHeight: '150px' }}>
            <p className="bg-success p-2">
                <strong>Composition Events</strong>
            </p>
            <p>Composition events fire for non-latin character typing e.g (Tamil, Chinese, japanese, etc..)</p>
            <p>onCompositionEnd, onCompositionStart, onCompositionUpdate</p>
            <div>
                <a href='https://blog.evanyou.me/2014/01/03/composition-event/'
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    for more details about composition events click here
                </a>
            </div>
            <div className='text-center'>
                <img src='https://i.stack.imgur.com/7D5U0.gif' alt='composition-event' />
            </div>
            <p>Type non-latin characters to fire the Composition events</p>
            <input
                onCompositionStart={handleOnCut}
                type='text'
                style={{ width: '100%' }}
                defaultValue='onCompositionStart ஆரம்பம்'
            />
            <input
                onCompositionUpdate={handleOnCut}
                type='text'
                style={{ width: '100%' }}
                defaultValue='onCompositionUpdate மாறுதல்கள்'
            />
            <input
                onCompositionEnd={handleOnCut}
                type='text'
                style={{ width: '100%' }}
                defaultValue='onCompositionEnd இறுதி'
            />
            {isEventFired ?
                (<p>
                    <span className='font-weight-bold'>{eventType}</span> Event fired
                </p>) : (null)
            }
        </div>
    )
}
