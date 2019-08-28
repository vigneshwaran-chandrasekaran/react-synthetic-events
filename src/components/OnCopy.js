import React, { useState } from 'react';

export default function OnCopy() {
    const [copiedText, setCopiedText] = useState('');
    const [isCopied, onCopy] = useState(false);

    const handleOnCopy = async (e) => {
        console.log('type =>', e.type);
        onCopy(true);
        setTimeout(() => {
            onCopy(false);
        }, 3000);
        navigator.clipboard.readText()
            .then(text => {
                // `text` contains the text read from the clipboard
                console.log('copied text =>', text);
                setCopiedText(text);
            })
            .catch(err => {
                // maybe user didn't grant access to read from clipboard
                console.log('Something went wrong', err);
            });
    };

    return (
        <div style={{ minHeight: '150px' }}>
            <p className="bg-warning p-2"><strong>onCopy</strong> Event</p>
            <h4 onCopy={handleOnCopy}>Copy part or full of this string and see copied text below</h4>
            {isCopied ?
                (<p>Copied Text -> <span style={{ color: 'red' }}>{copiedText}</span></p>) : (null)
            }
        </div>
    )
}
