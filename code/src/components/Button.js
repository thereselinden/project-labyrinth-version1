import React from 'react';

const Button = ({ button, click, disabled, text, className }) => {
	return (
		<button type={button} onClick={click} disabled={disabled} className={className}>
			{text}
		</button>
	);
};

export default Button;