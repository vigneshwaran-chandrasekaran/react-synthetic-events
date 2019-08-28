import React, { useState } from 'react';

export default function OnCut() {
    const [cuttedText, setCuttedText] = useState('');
    const [isCutted, onCut] = useState(false);

    const handleOnCut = async (e) => {
        console.log('type =>', e.type);
        console.log('type =>', e.clipboardData);
        console.log('type =>', e);
        onCut(true);
        setTimeout(() => {
            onCut(false);
        }, 5000);
        navigator.clipboard.readText()
            .then(text => {
                // `text` contains the text read from the clipboard
                console.log('copied text =>', text);
                setCuttedText(text);
            })
            .catch(err => {
                // maybe user didn't grant access to read from clipboard
                console.log('Something went wrong', err);
            });
    };

    return (
        <div style={{ minHeight: '150px' }}>
            <p className="bg-warning p-2"><strong>OnCut</strong> Event</p>
            <input onCut={handleOnCut} type='text' defaultValue='Cut part or full of this string and see copied text bellow' />
            {isCutted ?
                (<p>Cutted Text -> <span style={{ color: 'red' }}>{cuttedText}</span></p>) : (null)
            }
        </div>
    )
}
