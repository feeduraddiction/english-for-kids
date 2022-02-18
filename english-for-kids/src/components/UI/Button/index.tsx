import React from 'react';
import './index.scss';

interface ButtonProps {
    id?: string
    children?: React.ReactNode
    onClick?: (e: React.MouseEvent) => void
    type?: "button" | "submit" | "reset" | undefined
}

const Button = ({
                    id,
                    children,
                    onClick,
                    type,
                }: ButtonProps) => {

    return (
        <button id={id} type={type} className="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;