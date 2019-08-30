import React, { useState } from 'react';

export default function OnPointer() {

    const [state, setstate] = useState({});

    const handleAction = (e) => {
        console.log({ e });
        e.persist();
        setstate(e);
        console.log(e.type);
        console.log(e.clientX);
        console.log(e.clientY);
        console.log('handleAction');
    }
    return (
        <div>
            <p className="bg-warning p-2"><strong>onPointer</strong> Event</p>
            <p onPointerDown={handleAction}>
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
            </p>
            <table>
                <tbody>
                    <tr>
                        <th>Property</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>{state ? state.type : ''}</td>
                    </tr>
                    <tr>
                        <td>clientX</td>
                        <td>{state ? state.clientX : ''}</td>
                    </tr>
                    <tr>
                        <td>clientY</td>
                        <td>{state ? state.clientY : ''}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
