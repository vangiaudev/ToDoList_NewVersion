
import React, { Component } from 'react';
import './App.css';
import Control from './component/Control';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {

  onToggleForm = () =>{
    var {itemEditting} = this.props;
    if(itemEditting && itemEditting.id !== ''){
      this.props.onOpenForm();
    }else{
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id : '',
      name : '',
      state : false
    });
    
  }
  render() {
  var {isDisplayForm} = this.props;
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <h6>-- Developer by Nguyễn Văn Giàu --</h6>
          </div>
          <div className="social">
                <a target="blank" href="https://www.facebook.com/vangiau.recca/"><i className="fab fa-facebook fa-2x" /></a>
                <a target="blank" href="https://twitter.com/vangiau_recca"><i className="fab fa-twitter fa-2x" /></a>
                <a target="blank" href="https://www.instagram.com/vangiau.recca/"><i className="fab fa-instagram fa-2x" /></a>
                <a target="blank" href="https://www.youtube.com/channel/UCaxR1aMhRUId7JzXN3unNXQ"><i className="fab fa-youtube fa-2x" /></a>
          </div>
            <div className="row main">
            <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            <TaskForm /> 
            </div>
            <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
              <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                        <i className="fa fa-plus mr-5"></i>Thêm Công Việc
              </button>              
              <Control />
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <TaskList />            
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    isDisplayForm : state.isDisplayForm,
    itemEditting : state.itemEditting
  };
};
const mapDispatchToProps = (dispatch, props) =>{
  return {
    onToggleForm : () =>{
      dispatch(actions.toggleForm());
    },
    onClearTask : (task) =>{
      dispatch(actions.updateTask(task));
    },
    onOpenForm : () =>{
      dispatch(actions.openForm());
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);