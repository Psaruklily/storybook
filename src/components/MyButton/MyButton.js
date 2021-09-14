import React from 'react';
import './style.css';

const MyButton = ({label}) => {
    return (
        <div className='first-button'>{label}</div>
    )
}

export default MyButton;

// export default function MyButton({label}) {
//     return (
//         <div className='first-button'>{label}</div>
//     )
// }

