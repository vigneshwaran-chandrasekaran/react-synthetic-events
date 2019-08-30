import React, { useState } from 'react';

export default function OnPointer() {

    const [state, setstate] = useState({});

    const handleAction = (e) => {
        console.log({ e });
        e.persist();
        setstate(e);
    };
    return (
        <div>
            <p className="bg-success p-2 mt-5"><strong>onPointer</strong> Event</p>
            <div className='text-center'>
                <img src='https://www.w3.org/TR/pointerevents/pointer.png' alt='pointer-event' />
            </div>
            <p className='my-3 text-success'>
                Click/touch below text to trigger pointer events
            </p>
            <div
                onPointerDown={handleAction}
                onPointerMove={handleAction}
                onPointerUp={handleAction}
                onPointerCancel={handleAction}
                onGotPointerCapture={handleAction}
                onLostPointerCapture={handleAction}
                onPointerEnter={handleAction}
                onPointerLeave={handleAction}
                onPointerOver={handleAction}
                onPointerOut={handleAction}
            >
                <p>
                    The Pointer Events API is an HTML5 specification that combines touch, mouse, pen and other inputs into a single unified API.
                </p>
                <p>
                    The simple idea behind it, is that mouse and touch and stylus input events are unified into a single event API.
                </p>
                <p className='font-weight-bold'>
                    List of available pointer events
                </p>
                <p>
                    onPointerDownonPointerMove, onPointerUp, onPointerCancel, onGotPointerCapture,
                    onLostPointerCapture, onPointerEnter, onPointerLeave, onPointerOver, onPointerOut
                </p>
            </div>
            <div>
                <a href='https://mobiforge.com/design-development/html5-pointer-events-api-combining-touch-mouse-and-pen'
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    for more details about pointer events click here
                </a>
            </div>

            <table className='table table-bordered table-hover table-condensed table-striped my-3' >
                <tbody>
                    <tr>
                        <th>Property</th>
                        <th>Value</th>
                    </tr>
                    {Object.keys(state).map(key =>
                        (typeof (state[key]) !== 'object' && typeof (state[key]) !== 'function') ?
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{String(state[key])}</td>
                                {console.log(key, state[key])}
                            </tr> : null
                    )}
                </tbody>
            </table>
        </div >
    )
}
