
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {
  onUpdateStatus = () =>{
    this.props.onUpdateStatus(this.props.task.id);
  }
  onDelete = () => {
    this.props.onDelete(this.props.task.id);
    this.props.onCloseForm();
  }
  onUpdateTask = () =>{
    this.props.onOpenForm();
    this.props.onUpdateTask(this.props.task);
  }
    render() {
      var {task, index} = this.props;
        return (
            <tr>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td className="text-center">
              <span
                onClick={this.onUpdateStatus}
                className={task.status === true ? 'label label-success' : 'label label-warning'} 
              >{task.status === true ? 'Kích Hoạt' : 'Ẩn'}</span>
            </td>
            <td>
              <button 
                type="button"
                onClick={this.onUpdateTask}
                className="btn btn-danger">
                <i className="fas fa-edit">&nbsp;Sửa</i>
              </button>
              &nbsp;
              <button
                onClick = {this.onDelete}
                type="button" 
                className="btn btn-danger" >
                <i className="fas fa-trash">&nbsp;Xóa</i>
              </button>
            </td>
          </tr>
        );
    }
}

const mapStateToProps = state =>{
  return {}
}
const mapDispatchToProps = (dispatch, props) =>{
  return {
    onUpdateStatus : (id) =>{
      dispatch(actions.updateStatus(id));
    },
    onDelete : (id) =>{
      dispatch(actions.deleteTask(id));
    },
    onCloseForm : () =>{
      dispatch(actions.closeForm());
    },
    onOpenForm : () =>{
      dispatch(actions.openForm());
    },
    onUpdateTask : (task) =>{
      dispatch(actions.updateTask(task));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);