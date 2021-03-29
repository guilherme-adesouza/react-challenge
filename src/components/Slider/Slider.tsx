import 'rc-slider/assets/index.css';
import React from 'react';
import RCSlider from 'rc-slider';

type SliderProps = {
    description: string,
    onValueChange?: (value: number) => void,
};

const Slider: React.FC<SliderProps> = ({description, onValueChange}) => {

    const onSliderValueChange = (value: number): void => {
        onValueChange?.(value)
    }

    return (
        <div className="Slider">
            <span>{description}</span>
            <RCSlider onChange={onSliderValueChange} />
        </div>
    )
};

export default Slider;