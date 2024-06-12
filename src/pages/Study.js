import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import HomeTop from "./HomeTop";

function Study() {

  const downloadPdf = () => {
    axios({
      url: 'https://kscms.ks.ac.kr/haksa/ajx_json/UploadMgr/downloadRun.do?qcode=Q29udGVudE1nciwxODEzNDcsWQ==',
      method: 'GET',
      responseType: 'blob',
    })
      .then(response => {
        const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', '2024교육과정.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch(error => {
        console.error('Error while downloading the PDF:', error);
      });
  }


  return (
    <>
    <HomeTop/>
    <div>
        <h1>교육과정편람</h1>
    </div>
    <button onClick={downloadPdf}>다운로드</button>

    </>

  );
}

export default Study;
