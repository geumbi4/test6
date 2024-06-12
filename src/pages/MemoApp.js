import React, { useState } from 'react';
import './Article-style.css';
import { Link } from "react-router-dom";
import HomeTop from "./HomeTop";

const MemoApp = () => {
  const [memoInput, setMemoInput] = useState('');
  const [memos, setMemos] = useState([]);
  const [memoCounter, setMemoCounter] = useState(1);

  const handleSaveMemo = () => {
    if (memoInput.trim() !== '') {
      const now = new Date();
      const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      const newMemo = `게시글 ${memoCounter} : ${memoInput}`;
      setMemos([...memos, { text: newMemo, date: formattedDate }]);
      setMemoInput('');
      setMemoCounter(memoCounter + 1);
    }
  };

  return (
    <>
    <HomeTop/>
    <div className="memo-app">
      <textarea
        className="memo-input"
        value={memoInput}
        onChange={(e) => setMemoInput(e.target.value)}
      />
      <button className="save-memo" onClick={handleSaveMemo}>
        Save Memo
      </button>
      <div className="memo-list">
        {memos.map((memo, index) => (
          <div key={index} className="memo">
            <div>{memo.text}</div>
            <div className="memo-date">{memo.date}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MemoApp;
