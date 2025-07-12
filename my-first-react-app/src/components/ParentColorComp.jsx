import { useState } from 'react';
import ColorInput from './ColorInput';
import ColorAlert from './ColorAlert';

function ParentColorComp() {
    const [color, setColor] = useState('');

    return (
        <div>
            <ColorInput onColorChange={setColor} />
            <ColorAlert color={color} />
        </div>
    )
}

export default ParentColorComp;