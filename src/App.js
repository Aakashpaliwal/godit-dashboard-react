import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
// import AddProduct from './components/Product/AddProduct';
// import ProductTable from './components/Product/ProductTable';
// import AddBlog from './components/Blog/AddBlog';
// import AddUser from './components/User/AddUser';
// import AddPartner from './components/Partner/AddPartner';
// import AddForms from './components/Forms/AddForms';
// import AddLogin from './components/Login/AddLogin';
// import Register from './components/Login/Register';
import SettingForm from './components/AdminSettings/SettingForm';
import SettingTable from './components/AdminSettings/SettingTable';
import UserSetting from './components/User/UserSetting';
import ViewUserSetting from './components/User/ViewUserSetting';
import Dth from './components/Dth/Dth';
import Electricity from './components/Electricity/Electricity';
import Landline from './components/Landline/Landline';
import Mobile from './components/Mobile/Mobile';
import { Route } from 'react-router-dom';
import Formfirebase from './components/Forms/Formfirebase';
import UserReport from './components/User/UserReport';
import ViewUserReport from './components/User/ViewUserReport';
import AddMessage from './components/Message/AddMessage';
import AddComplaint from './components/Complaint/AddComplaint';
import UserRegistration from './components/User/UserRegistration';
import Balance from './components/Balance/Balance';
import PortalLimit from './components/AdminSettings/PortalLimit';


class App extends Component {
  render() {
    return (
     
        <div>
        <Header />
        <Sidebar />
        <Route path = "/" exact component = {Home} />
        {/* <Route path = "/AddProduct" exact = {true} component = {AddProduct} />
        <Route path = "/ProductTable" exact = {true} component = {ProductTable} />
        <Route path="/AddBlog" exact = {true} component = {AddBlog} />
        <Route path = "/AddUser" exact = {true} component = {AddUser} />
        <Route path = "/AddPartner" exact = {true} component = {AddPartner} />  
        <Route path = "/AddForms" exact = {true} component = {AddForms} />
        <Route path = "/AddLogin" exact = {true} component = {AddLogin} />
        <Route path = "/Register" exact = {true} component = {Register} /> */}
        <Route path = "/PortalLimit" exact component = {PortalLimit}/>
        <Route path = "/SettingForm" exact component = {SettingForm}/>
        <Route path = "/SettingTable" exact component = {SettingTable}/>
        <Route path = "/UserSetting" exact component = {UserSetting}/>
        <Route path = "/ViewUserSetting" exact component = {ViewUserSetting}/>
        <Route path = "/UserReport" exact component = {UserReport}/>
        <Route path = "/ViewUserReport" exact component = {ViewUserReport}/>
        <Route path = "/AddMessage" exact component = {AddMessage}/>
        <Route path = "/AddComplaint" exact component = {AddComplaint}/>
        <Route path = "/UserRegistration" exact component = {UserRegistration}/>
        <Route path = "/Balance" exact component = {Balance}/>
        {/* <Route path = "/Dth" exact component = {Dth}/>
        <Route path = "/Electricity" exact component = {Electricity}/>
        <Route path = "/Landline" exact component = {Landline}/>
        <Route path = "/Mobile" exact component = {Mobile}/>
        <Route path = "/Formfirebase" exact component = {Formfirebase}/> */}

         

          <Footer />
          
          </div>
     
    );
  }
}

export default App;
