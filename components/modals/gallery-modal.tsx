import React, { useEffect, useState } from 'react'


// UI COMPONENTS

import { Modal } from "@/components/ui/modal";
import { ImageCarousel } from '@/components/image-carousel';


interface IGalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    loading: boolean;
    images: any;
    imgWidth: number;
    imgHeight: number;
    imageCarouselClasses: string;
}

export const GalleryModal: React.FC<IGalleryModalProps> = ({
    images,
    isOpen,
    onClose,
    loading,
    imgWidth,
    imgHeight,
    imageCarouselClasses
}) => {
    const [isMounted, setIsMounted] = useState(false);
    // console.log('GALLERY-Modal', images);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (

        <Modal
            title=''
            description=''
            isOpen={isOpen}
            onClose={onClose}
            modalClass='max-w-5xl'
        >
            {loading && (
                <h1>Loading...</h1>
            )}
            <ImageCarousel isCarouselButton={true} images={images} imgWidth={imgWidth} imgHeight={imgHeight} className={imageCarouselClasses} />
        </Modal>
    )
}
