import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import CreateTask from '../../Components/TaskField/CreateTask';

export default function LandingPage() {
  const [currentDate, setCurrentDate] = useState('');

  const [isCreateTaskOpen, setCreateTaskOpen] = useState(false);

  const handleCreateTaskClick = () => {
    setCreateTaskOpen(true);
  };

  const handleCloseCreateTask = () => {
    setCreateTaskOpen(false);
  };

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    setCurrentDate(formattedDate);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>

      <section id="main-content">

        <main>

          <ul className="info-box-container">
          <li className="info-box click" onClick={handleCreateTaskClick}>
          <div className='tabs'>
            <i className='box-icon bx bxs-calendar-check'></i>
            <span className="info-text">
              <h3>Create </h3>
              <p>a task</p>
            </span>
          </div>
        </li>
  
        {/* Render CreateTask component conditionally */}
        {isCreateTaskOpen && <CreateTask onClose={handleCloseCreateTask} responsible={"Job Title"}/>}

            <li className="info-box">
              <i className='box-icon bx bxs-dollar-circle'></i>
              <span className="info-text">
                <h3>{currentDate}</h3>
                <p>Analysis</p>
              </span>
            </li>
          </ul>

          <div className="data-table-container">
            <div className="order" style={{ flexBasis: '300px', overflowY: 'auto', maxHeight: '370px' }}>
              <div className="table-head">
                <h3> My Tasks</h3>
                <i className='table-icon bx bx-search'></i>
                <i className='table-icon bx bx-filter'></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Job Title</th>
                    <th>Date Began</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="img/people.png" alt="Person" />
                      <p>Clean the Kitchen</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status completed">Completed</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" alt="Person" />
                      <p>Laundry</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" alt="Person" />
                      <p>Vacuum and Dust</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status process">Process</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" alt="Person" />
                      <p>Grocery Shopping</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" alt="Person" />
                      <p>Organize Closet</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status completed">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="todo" style={{ flexBasis: '300px', overflowY: 'auto', maxHeight: '370px' }}>
              <div className="table-head">
                <h3>Leader Board</h3>
                <i className='table-icon bx bx-plus'></i>
                <i className='table-icon bx bx-filter'></i>
              </div>
              <ul className="todo-list">
                <li className="completed">
                  <span style={{fontWeight:"bolder",fontSize:"large"}}>1</span>
                  <p>Kwasi mike</p>
                  <i className='todo-icon bx bx-dots-vertical-rounded'></i>
                </li>
                <li className="completed">
                <span style={{fontWeight:"bolder",fontSize:"large"}}>2</span>
                  <p>Abena Mensah</p>
                  <i className='todo-icon bx bx-dots-vertical-rounded'></i>
                </li>
                <li className="not-completed">
                <span style={{fontWeight:"bolder",fontSize:"large"}}>3</span>
                <p>Lasisi Ashesi</p>
                  <i className='todo-icon bx bx-dots-vertical-rounded'></i>
                </li>
                <li className="completed">
                <span style={{fontWeight:"bolder",fontSize:"large"}}>4</span>
                <p>Jim Key</p>
                  <i className='todo-icon bx bx-dots-vertical-rounded'></i>
                </li>
                <li className="not-completed">
                <span style={{fontWeight:"bolder",fontSize:"large"}}>5</span>
                <p>Love Keen</p>
                  <i className='todo-icon bx bx-dots-vertical-rounded'></i>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </section>

    </div>
  );
}
