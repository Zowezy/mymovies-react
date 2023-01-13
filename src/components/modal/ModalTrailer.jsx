import React from 'react';
import Button from '../Button';
import { BsCollectionPlay } from 'react-icons/bs';
import useModal from '../hooks/useModal';

function ModalTrailer({src}) {

    const { openModal, isOpen, Modal } = useModal({
        background: "rgba(0, 0, 0, 0.5)"
      });

    return (
        <>
        <Button id={"openModal"} onClick={openModal} circle><i><BsCollectionPlay /></i></Button>
        {  isOpen && (        
        <Modal>
            <div className="modal-video">
                <div className="content-video">
                    <iframe className="embed-responsive-item" width="100%" height="100%" src={`https://www.youtube.com/embed/${src}`} title="Trailer" allowFullScreen ></iframe>
                </div>
            </div>
            {/* <div className="modal-wrapper" onClick={closeModal}>
                <div className="content-video">
                    <div class="ratio ratio-16x9">
                        <iframe className="embed-responsive-item" width="100%" height="100%" src={`https://www.youtube.com/embed/${src}`} title="Trailer" allowFullScreen ></iframe>
                    </div>
                </div>
            </div> */}
        </Modal>) 
        }
        </>
    )
}

export default ModalTrailer