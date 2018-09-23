import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <body className="skin-blue">
                <div className="left-sidebar">
          
            <div className="scroll-sidebar custom-scroll-sidebar-bg">
               
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="user-pro"> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><img src={require('../../assets/images/users/1.jpg')} /><span className="hide-menu">Mark Jeckson</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="javascript:void(0)"><i className="ti-user"></i> My Profile</a></li>
                                <li><a href="javascript:void(0)"><i className="ti-wallet"></i> My Balance</a></li>
                                <li><a href="javascript:void(0)"><i className="ti-email"></i> Inbox</a></li>
                                <li><a href="javascript:void(0)"><i className="ti-settings"></i> Account Setting</a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-power-off"></i> Logout</a></li>
                            </ul>
                        </li>
                       
                        {/* <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="fa fa-tachometer" aria-hidden="true"></i><span className="hide-menu">Dashboard</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="index.html">Minimal </a></li>
                                <li><a href="index2.html">Analytical</a></li>
                                <li><a href="index3.html">Demographical</a></li>
                                <li><a href="index4.html">Modern</a></li>
                            </ul>
                        </li> */}
                        {/* <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="fa fa-cubes" aria-hidden="true"></i><span className="hide-menu">Products</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ='/AddProduct'>Add Products</Link></li>
                                <li><Link to="/ProductTable">View Product</Link></li>
                            </ul>
                        </li> */}
                        
                       
                      
                        {/* <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="fa fa-rss" aria-hidden="true"></i><span className="hide-menu">Blog</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/AddBlog"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Blog</Link></li>
                                <li><a href="pages-blank.html"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Blog</a></li>
                            </ul>
                        </li> */}
                        <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="fa fa-mobile" aria-hidden="true"></i><span className="hide-menu">Mobile</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/Mobile"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Form</Link></li>
                                
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="fa fa-bolt" aria-hidden="true"></i><span className="hide-menu">Electricty</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/Electricity"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Form</Link></li>
                                
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="fa fa-television" aria-hidden="true"></i><span className="hide-menu">Dth</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/Dth"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Form</Link></li>
                                
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="fa fa-phone" aria-hidden="true"></i><span className="hide-menu">Landline</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/Landline"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Form</Link></li>
                                
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="fa fa-server" aria-hidden="true"></i><span className="hide-menu">Datacard</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/Datacard"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Form</Link></li>
                                
                            </ul>
                        </li>
                        {/* <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="fa fa-user" aria-hidden="true"></i><span className="hide-menu">User</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/AddUser"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Users</Link></li>
                                <li><a href="pages-blank.html"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Users</a></li>
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="fa fa-user-plus" aria-hidden="true"></i><span className="hide-menu">Partner</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/AddPartner"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Partner</Link></li>
                                <li><a href="pages-blank.html"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Partner</a></li>
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="fa fa-user-plus" aria-hidden="true"></i><span className="hide-menu">Forms</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/AddForms"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Forms</Link></li>
                                <li><a href="pages-blank.html"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Partner</a></li>
                            </ul>
                        </li> */}
                  
                    </ul>
                </nav>
               
            </div>
                   </div>
                   </body>
           
        );
    }
}

export default Sidebar;