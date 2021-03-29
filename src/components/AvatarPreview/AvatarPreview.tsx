import './AvatarPreview.css';
import React from 'react';
import CloseButton from '../Button/CloseButton';
import Slider from '../Slider/Slider';
import Button from '../Button/Button';

export type AvatarPreviewProps = {
    /**
     * Image source URL
     */
    src: string|undefined,
    /**
     * Image description (Optional)
     */
    description?: string,
    /**
     * Handle close preview
     */
    onClose: () => void,
    /**
     * Handle save upload image
     */
    onSave: () => void,
    /**
     * Handle image size change by slider
     */
    onSliderChange: (value: number) => void,
    /**
     * State flag to show edit actions
     */
    editing?: boolean
}

const AvatarPreview: React.FC<AvatarPreviewProps> = ({src, description, onClose, onSave, editing, onSliderChange}) => {
    return (
        <div className="AvatarPreview">
            <img className="Preview" src={src} alt={description} />
            {!!editing &&
                <div className="PreviewActions">
                    <Slider description="Crop" onValueChange={onSliderChange}/>
                    <Button onClick={() => onSave()} description="Save"/>
                    <CloseButton onClose={onClose} />
                </div>
            }
        </div>
    )
}

export default AvatarPreview;