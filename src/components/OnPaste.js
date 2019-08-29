import React, { useState } from 'react';

export default function OnPaste() {
    const [pastedText, setPastedText] = useState('');
    const [isPasted, OnPaste] = useState(false);

    const handleOnCut = async (e) => {
        console.log('type =>', e.type);
        console.log('type =>', e.clipboardData);
        console.log('type =>', e);
        OnPaste(true);
        setTimeout(() => {
            OnPaste(false);
        }, 5000);
        navigator.clipboard.readText()
            .then(text => {
                // `text` contains the text read from the clipboard
                console.log('copied text =>', text);
                setPastedText(text);
            })
            .catch(err => {
                // maybe user didn't grant access to read from clipboard
                console.log('Something went wrong', err);
            });
    };

    return (
        <div style={{ minHeight: '150px' }}>
            <p className="bg-warning p-2"><strong>OnPaste</strong> Event</p>
            <input onPaste={handleOnCut} type='text' style={{ width: '100%' }} defaultValue='Paste part or full of this string and see copied text bellow' />
            {isPasted ?
                (<p>Pasted Text -> <span style={{ color: 'red' }}>{pastedText}</span></p>) : (null)
            }
        </div>
    )
}
