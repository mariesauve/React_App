import React, { useState } from 'react';

const ModalComponent = ({ imageInfo, altText }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Trigger the Modal */}
      <img
        src={imageInfo}
        alt={altText}
        style={{ width: '100%', maxWidth: '300px', cursor: 'pointer', borderRadius: '5px' }}
        onClick={openModal}
      />

      {/* The Modal */}
      {modalOpen && (
        <div className="modal" style={{ display: 'block' }}>
          {/* Modal Content */}
          <div className="modal-content">
            {/* Close Button */}
            <span className="close" onClick={closeModal}>&times;</span>
            
            {/* Image */}
            <img src={imageInfo} alt={altText} className="modal-content" id="img01" />
            
            {/* Caption */}
            <div id="caption">{altText}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
