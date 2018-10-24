import React, { Component } from 'react';
import './User.css';
import {Link} from 'react-router-dom';
class UserReport extends Component {
    state = {
       dummy: ""
     
       };
       change  = e => {
         this.setState ({
           [e.target.name]: e.target.value
         });
       };
       onSubmit = e =>
       {
           e.preventDefault();
           console.log(this.state);
           this.setState ({
             dummy : ""
 
           })
       };
   render() {
     return (
         <body className="skin-blue fixed-layout">
         <div className="page-wrapper">
 
              <div className="container-fluid">
                
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        {/* <h4 className="text-themecolor">Forms</h4> */}
                        <nav aria-label="breadcrumb">
                             <ol class="breadcrumb">
                                 <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                 <li className="breadcrumb-item active" aria-current="page">Add Report</li>
                             </ol>
                             </nav>
                    </div>
                   
                </div>
 
 
             </div>
 
     {/*Form content begin */}
    
 <div className = "product-form-upper">
     <div className = "container">
     <div className = "below-custom-form">
         <div className = "row">
            <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h3>Add New Report</h3>
            </div>
         </div>
         <form className="custom-content-form-user">
   <div class="form-row">
     <div class="form-group col-md-12">
     <label for="inputCategory">Enter Dummy</label>
      <input type="text" className="form-control" placeholder="dummy" name="dummy" value = {this.state.dummy} onChange = {e => this.change(e)} />
     </div>
    
   </div>
  
   <button class="btn btn-primary" onClick = {e => this.onSubmit(e)}>Submit</button>
 </form>
     </div>
     </div>
 </div>
 
 
 
 
 
 
         </div>
         </body>
 
     )
   }
 }

export default UserReport;