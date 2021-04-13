import logo from './logo.svg';
import './App.css';
import Modal from './modal';
import React from 'react';

function App() {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal()
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal ref={modalRef}>
        <h1>Modal Header</h1>
        <button onClick={() => modalRef.current.close()}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default App;
