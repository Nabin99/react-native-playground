import React from 'react';
import ModalComponent from '../component/ModalComponent';
import ScrollViewContainer from '../containers/ScrollViewContainer';

const ModalDetail = () => {
  return (
    <ScrollViewContainer>
      <ModalComponent
        buttonName="Modal"
        modalTitle="Modal"
        modalDescription="Description about Modal"
      />
      <ModalComponent
        buttonName="Popup"
        modalTitle="Popup"
        modalDescription="Description about Popup"
      />
    </ScrollViewContainer>
  );
};

export default ModalDetail;
