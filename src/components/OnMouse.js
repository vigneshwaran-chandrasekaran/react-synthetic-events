import React, { useState } from 'react';

export default function OnMouse() {

    const [state, setstate] = useState({});

    const handleAction = (e) => {
        console.log({ e });
        e.persist();
        setstate(e);
    };
    return (
        <div>
            <p className="bg-success p-2 mt-5"><strong>onMouse</strong> Event</p>
            <p className='my-3 text-success'>
                Click/touch below text to trigger mouse events
            </p>
            <div
                onClick={handleAction}
                onDoubleClick={handleAction}
                onMouseDown={handleAction}
                onMouseEnter={handleAction}
                onMouseLeave={handleAction}
                onMouseMove={handleAction}
                onMouseOut={handleAction}
                onMouseOver={handleAction}
                onMouseUp={handleAction}
            >
                <p className='font-weight-bold'>
                    List of available mouse events
                </p>
                <p>
                    onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, onDragEnter, onDragExit,
                    onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown, onMouseEnter, onMouseLeave,
                    onMouseMove, onMouseOut, onMouseOver, onMouseUp
                </p>
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
