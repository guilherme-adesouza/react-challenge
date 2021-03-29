import './AvatarUpload.css';
import React, {useEffect, useState} from 'react';
import AvatarPreview from 'components/AvatarPreview/AvatarPreview';
import Dropzone from 'components/Dropzone/Dropzone';
import AvatarError from 'components/AvatarError/AvatarError';

/**
 * Current status of component
 */
type AvatarUploadStatus = "EMPTY" | "ERROR" | "CROPPING" | "EDIT" | "LOADING";

type AvatarUploadProps = {}

const AvatarUpload: React.FC<AvatarUploadProps> = () => {
    const [status, setStatus] = useState<AvatarUploadStatus>("EMPTY");
    const [file, setFile] = useState<File|null>(null);

    useEffect(() => {
        setStatus(!!file ? "CROPPING" : "EMPTY");
    }, [file])

    const handleFileAdded = (file: File | null): void => {
        setFile(file);
    }

    const resetStatus = () => setFile(null);

    const onSave = (): void => {
        setStatus("LOADING");
        setTimeout(() => {
            alert("Upload finished");
            setStatus("EDIT");
        }, 1000)
    }

    const cropImageByFactor = (value: number): void => {
        alert(value);
    }

    const imageURL = (): string|undefined => !!file ? URL.createObjectURL(file) : undefined;

    const CurrentComponent = ()  => {
        switch (status) {
            case "EMPTY":
                return <Dropzone onFileAdded={handleFileAdded}
                                 accept="image/*"/>
            case "EDIT":
                return (
                    <Dropzone onFileAdded={handleFileAdded}
                              accept="image/*">
                        <AvatarPreview src={imageURL()}
                                       description="Image uploaded"
                                       onClose={() => resetStatus()}
                                       onSliderChange={cropImageByFactor}
                                       onSave={onSave}/>
                    </Dropzone>
                )
            case "ERROR":
                return <AvatarError onClose={() => resetStatus()}/>
            case "CROPPING":
                return <AvatarPreview src={imageURL()}
                                      editing={true}
                                      description="Image uploaded"
                                      onClose={() => resetStatus()}
                                      onSliderChange={cropImageByFactor}
                                      onSave={onSave}/>
            case "LOADING":
                return <span>LOADING...</span>
        }
    }

    return (
        <div className={`AvatarUpload AvatarStatus-${status}`}>
            <div className="AvatarUploadContent">
                <CurrentComponent />
            </div>
        </div>
    )
};

export default AvatarUpload;