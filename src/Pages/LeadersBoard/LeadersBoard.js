import React from 'react';
import './leadersboard.css';

export default function LeadersBoard() {
  return (
    <div className='file_Not_Found'>
      <h1>Leaders' Board</h1>
      <div className="todo" style={{ flexBasis: '300px', overflowY: 'auto', maxHeight: '370px' }}>
        <div className="table-head">
          <h3>Leader Board</h3>
          <i className='table-icon bx bx-plus'></i>
          <i className='table-icon bx bx-filter'></i>
        </div>
        <ul className="todo-list">
          <li className="completed">
            <span style={{ fontWeight: "bolder", fontSize: "large" }}>1</span>
            <p>Kwasi mike</p>
            <i className='todo-icon bx bx-dots-vertical-rounded'></i>
          </li>
          <li className="completed">
            <span style={{ fontWeight: "bolder", fontSize: "large" }}>2</span>
            <p>Abena Mensah</p>
            <i className='todo-icon bx bx-dots-vertical-rounded'></i>
          </li>
          <li className="not-completed">
            <span style={{ fontWeight: "bolder", fontSize: "large" }}>3</span>
            <p>Lasisi Ashesi</p>
            <i className='todo-icon bx bx-dots-vertical-rounded'></i>
          </li>
          <li className="completed">
            <span style={{ fontWeight: "bolder", fontSize: "large" }}>4</span>
            <p>Jim Key</p>
            <i className='todo-icon bx bx-dots-vertical-rounded'></i>
          </li>
          <li className="not-completed">
            <span style={{ fontWeight: "bolder", fontSize: "large" }}>5</span>
            <p>Love Keen</p>
            <i className='todo-icon bx bx-dots-vertical-rounded'></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
