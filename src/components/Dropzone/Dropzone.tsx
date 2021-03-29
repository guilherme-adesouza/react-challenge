import './Dropzone.css';
import React, {useRef, useState} from 'react';
import PictureIcon from 'icons/picture.svg';

type DropzoneProps = {
    /**
     * Handler when file is added to dropzone
     */
    onFileAdded: (file: File | null) => void,
    /**
     * Input type of accept files
     */
    accept: string,
}

const Dropzone: React.FC<DropzoneProps> = ({children, onFileAdded, accept}) => {
    const [highlight, setHighlight] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const openFileDialog = (): void => {
        fileInputRef?.current?.click();
    }

    const onChange = (fileAddEvent: React.ChangeEvent<HTMLInputElement>): void => {
        const files = fileAddEvent.target.files;
        if (!!files) handleFileAdd(files);
    }

    const onDragOver = (dragOverEvent: React.DragEvent<HTMLElement>): void => {
        dragOverEvent.preventDefault();
        setHighlight(true);
    }

    const onDragLeave = (): void => {
        setHighlight(false);
    }

    const onDrop = (dropFilesEvent: React.DragEvent<HTMLElement>) => {
        dropFilesEvent.preventDefault();
        const files = dropFilesEvent.dataTransfer.files;
        handleFileAdd(files);
        setHighlight(false);
    }

    const handleFileAdd = (files: FileList) => {
        if (!files || files.length === 0) return;
        onFileAdded(files.item(0));
    }

    return (
        <div
            className={`Dropzone ${highlight ? 'Highlight' : ''}`}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClick={openFileDialog}
        >
            <input ref={fileInputRef} className="FileInput Ghost" type="file" accept={accept} onChange={onChange}/>
            {children}
            <div className="DropzoneInfo">
                <div className="TextWrapper">
                    <img src={PictureIcon} alt="Picture icon" />
                    <span>Organization Logo</span>
                </div>
                <span>Drop the image here or click to browse.</span>
            </div>
        </div>
    );
};

export default Dropzone;