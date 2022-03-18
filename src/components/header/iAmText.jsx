import './header.css';

import React, {useEffect, useState} from 'react';

const IAmText = () => {
    const [text, setText] = useState('')
    const words = [
        'Hi',
        'I\'m Stanislav Gorenkov',
        'I\'m  Front-end Developer'
    ]
    let part, i = 0, offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 20,
        speed = 80;

    const wordflick = () => {
        setInterval(() => {
            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count == skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                if (offset == 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }
            part = words[i].substr(0, offset);

            !skip_count && (forwards? offset++: offset--);
            
            setText(part)
        }, speed);
    };
    
    useEffect(() => {
        wordflick();
    }, [])

    
    return (
            <div className='iAmText'>
                {text}
            </div>
    );
};

export default IAmText;
