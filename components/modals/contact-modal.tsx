import React, { useEffect, useState } from 'react'


// UI COMPONENTS

import { Modal } from "@/components/ui/modal";

import { Contacts } from '../public/contacts/contact';

interface IGalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    loading: boolean;
}

export const ContactModal: React.FC<IGalleryModalProps> = ({
    isOpen,
    onClose,
    loading
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
            modalClass='max-w-xl'
        >
            {loading && (
                <h1 className=''>Loading...</h1>
            )}
            <Contacts/>
        </Modal>
    )
}
