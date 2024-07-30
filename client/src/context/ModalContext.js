import React, { createContext, useState, useContext } from 'react';
import "./Modal.css"

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ image: '', name: '', description: '' });

  const openModal = (content) => {
    setModalContent({
      image: content.imageUrl,
      name: content.topic,
      description: content.message
    });
    setIsOpen(true);
  };
  
  

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, modalContent, openModal, closeModal }}>
      {children}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
            <button className="modal-close" onClick={closeModal}>X</button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {modalContent.image && <img src={modalContent.image} alt="Modal Content" style={{ width: '100%', borderRadius: '5px' }} />}
            {modalContent.name && <h3>{modalContent.name}</h3>}
            {modalContent.description && <p>{modalContent.description}</p>}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
