import './CloseButton.css';
import React from 'react';
import CloseIcon from "icons/close.svg";

export type CloseButtonProps = {
    onClose?: () => void,
}

const CloseButton: React.FC<CloseButtonProps> = ({onClose}) => {
    return (
        <img onClick={onClose} src={CloseIcon} alt="Close icon" />
    )
};

export default CloseButton;