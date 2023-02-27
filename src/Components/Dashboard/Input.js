import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useSpeechSynthesis } from "react-speech-kit";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Input() {
    const [totalcharacters, settotalcharacters] = useState('0');
    const [totalwords, settotalwords] = useState('0');
    const [value, setValue] = React.useState("");
    const [txtArea, settxtArea] = React.useState("");
    const { speak } = useSpeechSynthesis();

    const onchange_Event = event => {
        settotalcharacters(event.target.value.length);
        if(event.target.value)
        { 
            const totword_array = event.target.value.split(' ');
            settotalwords(totword_array.length);
            setValue(event.target.value);
        } else {
            settotalwords("0");
        }
        settxtArea(event.target.value);
    }
    
    const upper = event => {
        settxtArea(txtArea.toUpperCase());
    }

    const lower = event => {
        settxtArea(txtArea.toLowerCase());
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <FloatingLabel controlId="floatingTextarea2" label="Type Here" className="mt-5">
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '250px' }}
                        className="textarea"
                        value={txtArea}
                        onChange={onchange_Event}
                        />
                    </FloatingLabel>
                    <div className="mt-3">
                        <Button variant="outline-primary" onClick={() => speak({ text: value })} >Speech</Button>{' '}
                        <Button variant="outline-secondary" onClick={upper}>Text to Uppercase</Button>{' '}
                        <Button variant="outline-dark" onClick={lower}>Text to Lowercase</Button>{' '}
                        <Button variant="outline-info " onClick = {() => settxtArea('')}>Clear</Button>{' '}
                    </div>
                    <h3 className="mt-3 text-muted">Summary of my text</h3>
                    <p className="text-muted">Words: {totalwords}, characters: {totalcharacters}</p>
                </div>
            </div>
        </>
    )
}

export default Input