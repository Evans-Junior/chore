import React,{useState,useEffect} from 'react'
import Sidebar from '../../Components/SideBar/Sidebar'
import './Admin.css'
import CreateTask from '../../Components/TaskField/CreateTask'


export default function AdminHomePage() {
  const [currentDate, setCurrentDate] = useState('');
  const [isCreateTaskOpen, setCreateTaskOpen] = useState(false);

  const handleAssignTaskClick = () => {
    setCreateTaskOpen(true);
  };

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    setCurrentDate(formattedDate);
  }, []);
  return (
    <div>
    <Sidebar/>
	<section id="content">
		<nav>
			<i className='bx bx-menu' ></i>
			<a href="#" className="nav-link">Add User</a>
			
			<input type="checkbox" id="switch-mode" hidden/>
			<a href="#" className="notification">
				<i className='bx bxs-bell' ></i>
				<span className="num">8</span>
			</a>
			<a href="#" className="profile">
				<img src="img/people.png"/>
			</a>
		</nav>

		<main>
			<div className="head-title">
				<div className="left">
					<h1>Dashboard</h1>
					<ul className="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i className='bx bx-chevron-right' ></i></li>
						<li>
							<a className="active" href="#">Home</a>
						</li>
					</ul>
				</div>

			</div>

			<ul className="box-info" >
				<li className='click' onClick={handleAssignTaskClick}>
					<i className='bx bxs-calendar-check'  ></i>
					<span className="text">
						<h3>Assign </h3>
						<p>a task</p>
					</span>
				</li>
        {isCreateTaskOpen && <CreateTask onClose={() => setCreateTaskOpen(false)} responsible={"Person"} />}

				<li>

        
					<i className='bx bxs-group' ></i>
					<span className="text">
						<h3>2834</h3>
						<p>Visitors</p>
					</span>
				</li>
				<li>
					<i className='bx bxs-dollar-circle' ></i>
					<span className="text">
						<h3>{currentDate}</h3>
						<p>Aanalysis</p>
					</span>
				</li>
			</ul>


			<div className="table-data">
				<div className="order">
					<div className="head">
						<h3>Tasks</h3>
						<i className='bx bx-search' ></i>
						<i className='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>Person</th>
								<th>Date Began</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img src="img/people.png"/>
									<p>Kwasi mike</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png"/>
									<p>Abena Mensah</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png"/>
									<p>Lasisi Ashesi</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status process">Process</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png"/>
									<p>Jim Key</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png"/>
									<p>Love Keen</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status completed">Completed</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="todo">
					<div className="head">
						<h3>My Todos</h3>
						<i className='bx bx-plus' ></i>
						<i className='bx bx-filter' ></i>
					</div>
					<ul className="todo-list">
						<li className="completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="not-completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="not-completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
					</ul>
				</div>
			</div>
		</main>
 	</section>
    </div>
  )
}
