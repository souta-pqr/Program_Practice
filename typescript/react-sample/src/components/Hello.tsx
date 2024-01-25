import React from 'react';

const Hello = () => {
    const onClick = () => {
        alert('Hello, React');
    }

    const text = "Click me!";

    return (
        <button 
            onClick={onClick} 
            style={{
                padding: '10px 20px',
                fontSize: '20px',
                cursor: 'pointer',
                borderRadius: '5px',
                border: 'none',
                color: 'white',
                backgroundColor: '#007BFF',
                transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
        >
            {text}
        </button>
    )
}

export default Hello;
