import "./App.css";
import logo from "./assets/images/logo.png";
import avatar from "./assets/images/avatar.png";
import avatar1 from "./assets/images/avatar (1).png";
import avatar2 from "./assets/images/avatar (2).png";
import avatar3 from "./assets/images/avatar (3).png";
import avatar4 from "./assets/images/avatar (4).png";
import avatar5 from "./assets/images/avatar (5).png";
import avatar6 from "./assets/images/avatar (6).png";
import avatar7 from "./assets/images/avatar (7).png";
import avatar8 from "./assets/images/avatar (8).png";
import avatar9 from "./assets/images/avatar (9).png";
import avatar10 from "./assets/images/avatar (10).png";
import revenue from "./assets/images/revenue (1).png";
import sales from "./assets/images/sales.png";
import employee from "./assets/images/employees.png";
import client from "./assets/images/clients.png";
import { BsArrowLeft } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { LiaBookSolid } from "react-icons/lia";
import { TiContacts } from "react-icons/ti";
import { MdOutlineInventory2, MdPeopleAlt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { TiTimes } from "react-icons/ti";

function App() {
	const [mobile, setMobile] = useState(false);
	const handleMobile = () => {
		setMobile(!mobile);
	};
	return (
		<>
			<div className="container">
				<aside className={mobile ? "side_bar show" : "side_bar"}>
					<div className="logo">
						<img src={logo} alt="logo" />
						<BsArrowLeft />
					</div>
					<div className="menu">
						<div className="menu_bar">
							<span>
								<RiDashboardFill />
							</span>
							<span>Dashboard</span>
						</div>
						<div className="menu_bar">
							<span>
								<LiaBookSolid />
							</span>
							<span>Books</span>
						</div>
						<div className="menu_bar">
							<span>
								<MdOutlineInventory2 />
							</span>
							<span>Sell</span>
						</div>
						<div className="menu_bar">
							<span>
								<MdOutlineInventory2 />
							</span>
							<span>Source</span>
						</div>
						<div className="menu_bar">
							<span>
								<MdOutlineInventory2 />
							</span>
							<span>Stock</span>
						</div>
						<div className="menu_bar">
							<span>
								<MdPeopleAlt />
							</span>
							<span>Talents</span>
						</div>
						<div className="menu_bar">
							<span>
								<TiContacts />
							</span>
							<span>Contact</span>
						</div>
						<div className="menu_bar setting">
							<span>
								<IoSettingsOutline />
							</span>
							<span>Settings</span>
						</div>
					</div>
				</aside>
				<main>
					<div className={mobile ? "mobile_link" : "link"}>
						{mobile ? (
							<div onClick={handleMobile} className="icons">
								<TiTimes />
							</div>
						) : (
							<div onClick={handleMobile} className="icons">
								<FaBars />
							</div>
						)}
						<img src={logo} alt="logo" />
					</div>
				</main>
				<div className="main_bar">
					<div className="main_bar_top">
						<h1>Overview</h1>
						<div className="top_admin">
							<img src={avatar} alt="avatar" />
							<h4>Administrator</h4>
						</div>
					</div>
					<div className="test">
						<div className="main_bar_content">
							<div className="cards">
								<img src={revenue} alt="revenuecard" />
								<img src={sales} alt="salescard" />
								<img src={employee} alt="employeecard" />
								<img src={client} alt="clientcard" />
							</div>
							<div className="act">
								<h1>Latest Activities</h1>
								<div>
									<div className="card card1">
										<span></span>
										<p>Aslam Dhikrullahi created a new invoice INV001.</p>
									</div>
									<div className="card card2">
										<span></span>
										<p>Aslam Dhikrullahi applied for leave</p>
									</div>
									<div className="card card3">
										<span></span>
										<p>
											24 Desktop Computers were shipped to Client (Aslam
											Dhikrullahi).
										</p>
									</div>
									<div className="card card4">
										<span></span>
										<p>Aslam Dhikrullahi added 32 Laptops to the inventory.</p>
									</div>
									<div className="card card5">
										<span></span>
										<p>You assigned admin privileges to Aslam Dhikrullahi.</p>
									</div>
									<div className="card card1">
										<span></span>
										<p>Aslam Dhikrullahi created a new invoice INV001.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="main_bar_side">
							<div>
								<h2>Employees</h2>
								<div>
									<div className="admin">
										<img src={avatar} alt="avatar" width="30px" />
										<div>
											<h4>Aslam Dhikrullahi</h4>
											<p>Admin</p>
										</div>
									</div>
									<div className="admin">
										<img src={avatar1} alt="avatar" width="30px" />
										<div>
											<h4>Aslam Dhikrullahi</h4>
											<p>Admin</p>
										</div>
									</div>
									<div className="admin">
										<img src={avatar3} alt="avatar" width="30px" />
										<div>
											<h4>Aslam Dhikrullahi</h4>
											<p>Admin</p>
										</div>
									</div>
									<div className="admin">
										<img src={avatar2} alt="avatar" width="30px" />
										<div>
											<h4>Aslam Dhikrullahi</h4>
											<p>Admin</p>
										</div>
									</div>
								</div>
							</div>
							<div className="contact">
								<h2>Contacts</h2>
								<div>
									<div className="admin">
										<img src={avatar4} alt="avatar" width="30px" />
										<div>
											<h4>Aslam Dhikrullahi</h4>
											<p>Client</p>
										</div>
									</div>
									<div className="admin">
										<img src={avatar5} alt="avatar" width="30px" />
										<div>
											<h4>Aslam Dhikrullahi</h4>
											<p>Client</p>
										</div>
									</div>
									<div className="admin">
										<img src={avatar6} alt="avatar" width="30px" />
										<div>
											<h4>Aslam Dhikrullahi</h4>
											<p>Client</p>
										</div>
									</div>
									<div className="admin">
										<img src={avatar7} alt="avatar" width="30px" />
										<div>
											<h4>Aslam Dhikrullahi</h4>
											<p>Client</p>
										</div>
									</div>
									<div className="admin">
										<img src={avatar8} alt="avatar" width="30px" />
										<div>
											<h4>Aslam Dhikrullahi</h4>
											<p>Client</p>
										</div>
									</div>
									<div className="admin">
										<img src={avatar9} alt="avatar" width="30px" />
										<div>
											<h4>Aslam Dhikrullahi</h4>
											<p>Client</p>
										</div>
									</div>
									<div className="admin">
										<img src={avatar10} alt="avatar" width="30px" />
										<div>
											<h4>Aslam Dhikrullahi</h4>
											<p>Client</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
