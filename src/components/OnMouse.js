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
            <div>
                <p className='font-weight-bold'>
                    List of available mouse events
                </p>
                <p>
                    onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, onDragEnter, onDragExit,
                    onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown, onMouseEnter, onMouseLeave,
                    onMouseMove, onMouseOut, onMouseOver, onMouseUp
                </p>
            </div>
            <p className='my-3 text-success'>
                Click/touch below text to trigger mouse events
            </p>

            <div class="row">
                <div class="col">
                    <p onClick={handleAction}>onClick event</p>
                    <p onContextMenu={handleAction}>onContextMenu event</p>
                    <p onDoubleClick={handleAction}>onDoubleClick event</p>
                    <p onDrag={handleAction}>onDrag event</p>
                    <p onDragEnd={handleAction}>onDragEnd event</p>
                    <p onDragEnter={handleAction}>onDragEnter event</p>
                    <p onDragExit={handleAction}>onDragExit event</p>
                    <p onDragLeave={handleAction}>onDragLeave event</p>
                    <p onDragOver={handleAction}>onDragOver event</p>
                    <p onDragStart={handleAction}>onDragStart event</p>
                    <p onDrop={handleAction}>onDrop event</p>
                    <p onMouseDown={handleAction}>onMouseDown event</p>
                    <p onMouseEnter={handleAction}>onMouseEnter event</p>
                    <p onMouseLeave={handleAction}>onMouseLeave event</p>
                    <p onMouseMove={handleAction}>onMouseMove event</p>
                    <p onMouseOut={handleAction}>onMouseOut event</p>
                    <p onMouseOver={handleAction}>onMouseOver event</p>
                    <p onMouseUp={handleAction}>onMouseUp event</p>
                </div>
                <div class="col">
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
                </div>
            </div>
        </div >
    )
}
