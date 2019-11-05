import React, { useState } from 'react';

export default function AllClipboard() {
	const [eventText, setEentText] = useState('');
	const [eventType, seteventType] = useState('');
	const [isEventFired, setIsEventFired] = useState(false);

	const handleOnCut = e => {
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
		navigator.clipboard
			.readText()
			.then(text => {
				// `text` contains the text read from the clipboard
				console.log('copied text =>', text);
				setEentText(text);
			})
			.catch(err => {
				// maybe user didn't grant access to read from clipboard
				console.log('Something went wrong', err);
			});
	};

	return (
		<div style={{ minHeight: '150px' }}>
			<p className="bg-warning p-2">
				<strong>OnCopy, OnCut, OnPaste</strong> Events
			</p>
			<textarea
				onCopy={handleOnCut}
				onCut={handleOnCut}
				onPaste={handleOnCut}
				cols={100}
				rows={5}
				style={{ width: '100%' }}
				defaultValue="Paste part or full of this string and see copied text below"
			/>
			{isEventFired ? (
				<p>
					<span className="font-weight-bold">{eventType}</span> Event fired ->{' '}
					<span style={{ color: 'red' }}>{eventText}</span>
				</p>
			) : null}
		</div>
	);
}
