import React, { Component } from 'react'
import './Dth.css';

export class Dth extends Component {
    state = {
        operator: "",
        customerid: "",
        amount: ""
      };
    
      change = e =>
      {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
    
    onSubmit = e =>
    {
      e.preventDefault();
      console.log(this.state);
    }
    
      render() {
        return (
          <React.Fragment>
           <body className="skin-blue fixed-layout">
                <div className="page-wrapper">
  
            <div className="container-fluid">

             <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Dashboard 1</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard 1</li>
                            </ol>
                            <button type="button" className="btn btn-info d-none d-lg-block m-l-15"><i className="fa fa-plus-circle"></i> Create New</button>
                        </div>
                    </div>
                </div>

          <div className = "custom-forms-content">
     <div className = "container">
     <div className = "custom-dth-forms-content">
       <div className = "row">
       <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
       <form>
       <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
         <h5 className="dth-form-header">Dth</h5>
       </div>
    
     <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
       <div className="form-row">
         <div className="form-group col-md-12">
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Operator" name="operator"
            value = {this.state.operator}
             onChange = {e => this.change(e)}/>
         </div>
         
           
         <div className="form-group col-md-12">
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Customer Id" name="customerid"
            value = {this.state.customerid} 
            onChange = { e => this.change(e)}/>
         </div>

         <div className="form-group col-md-12">
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Amount" name="amount"
            value = {this.state.amount} 
            onChange = { e => this.change(e)}/>
         </div>

       </div>
       <button className="btn btn-info" onClick={e => this.onSubmit(e)}>Proceed</button>
      
    
    
         </div>
       </form>
       </div>
       </div>
       </div>
    </div>
    
    
    
            
          </div>
          </div>
          </div></body>
          </React.Fragment>
        )
      }
    }

export default Dth
