import { useState } from 'react';
import ColorInput from './ColorInput';
import ColorText from './ColorText';

function ParentColorComp() {
    const [color, setColor] = useState('');

    return (
        <div>
            <ColorInput onColorChange={setColor} />
            <ColorText color={color} />
        </div>
    )
}

export default ParentColorComp;