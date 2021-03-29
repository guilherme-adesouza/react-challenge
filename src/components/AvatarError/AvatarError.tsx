import './AvatarError.css';
import React from 'react';
import CloseButton, {CloseButtonProps} from 'components/Button/CloseButton';

export const AvatarError: React.FC<CloseButtonProps> = ({onClose}) => {
    return (
        <div className="AvatarError">
            <CloseButton onClose={onClose} />
        </div>
    )
};

export default AvatarError;