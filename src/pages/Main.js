import '../App.css';
import Modal from "react-modal";
import React, { useState } from "react";



function Main() {
  const [modal, setModal] = useState(true);  // 초기값을 true로 설정

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="App">
        <div className= "banner"> 
          <div className="banner-txt">
          <h1>경성대학교 소프트웨어학과 </h1> 
          <button onClick={toggleModal}>학사 일정</button>

      {modal && (
        <Modal
          isOpen={modal}
          onRequestClose={toggleModal}
          contentLabel="Example Modal"
        >
          <img src={process.env.PUBLIC_URL + './img/img2.jpg'} />
          <button onClick={toggleModal}>닫기</button>
        </Modal>
      )}
          </div>
        </div>
        <footer>
          <p>&copy; 2024 경성대학교 소프트웨어학과 홈페이지.</p>
      </footer>     
    </div>
  );
}

export default Main;
