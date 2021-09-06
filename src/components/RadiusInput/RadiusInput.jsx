import { CircularInput, CircularTrack, CircularProgress, CircularThumb, } from 'react-circular-input'
import { useState } from 'react';

function RadiusInput () {
    const [grade, setGrade] = useState('5.7');
    const [value, setValue] = useState(0.1)

    const stepValue = v => Math.round(v * 10) / 10

    const min = 0.1
    const max = 0.9

    const valueWithinLimits = v => Math.min(Math.max(v, min), max)

    const changeValue = v => {
        setValue(stepValue(v));
        if (value === 0.1) {
            setGrade('5.7');
        } else if (value === 0.2) {
            setGrade('5.8');
        } else if (value === 0.3) {
            setGrade('5.9');
        } else if (value === 0.4) {
            setGrade('5.10');
        } else if (value === 0.5) {
            setGrade('5.11-');
        } else if (value === 0.6) {
            setGrade('5.11+');
        } else if (value === 0.7) {
            setGrade('5.12-');
        } else if (value === 0.8) {
            setGrade('5.12+');
        } else if (value === 0.9) {
            setGrade('5.13-');
        }
    }

    return (
        <>
        <div>
            <CircularInput
                value={valueWithinLimits(value)}
                onChange={changeValue}
                radius={75}>
                    
                <CircularTrack className="circularTrack"/>
                <CircularProgress className="circularProgress"/>
                <CircularThumb className="circularThumb"/>

                <text 
                    x={75} 
                    y={75} 
                    textAnchor="middle" 
                    dy="0.3em" 
                    fontWeight="bold">
                    {grade}
                </text>
            </CircularInput>
        </div>
        </>
    )
}

export default RadiusInput;