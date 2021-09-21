/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class Sort extends Component {
  onClick = (sortBy, sortValue) =>{
    this.props.onSort({
      by : sortBy,
      value : sortValue
    })
  }
    render() {
      var {by, value} = this.props.sort;
        return (
            <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          Sắp Xếp <i className="fas fa-sort"></i>
            </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li onClick={() => this.onClick('name', 1)} >
                              <a role="button" >
                                    <i className="fas fa-sort-alpha-up">
                                      &nbsp; Tên A-Z &nbsp;
                                      <span className={(by === 'name' && value === 1) ? 'fa-check-circle' : ''}></span>
                                    </i>
                              </a>
                            </li>
                            <li onClick={() => this.onClick('name', -1)}>
                                <a role="button" >
                                  <i className="fas fa-sort-alpha-down">
                                          &nbsp; Tên Z-A &nbsp;
                                          <span className={(by === 'name' && value === -1) ? 'fa-check-circle' : ''}></span>
                                  </i>
                                </a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li onClick={() => this.onClick('status', 1)}>
                              <a role="button" className={(by === 'status' && value === 1) ? 'sort_selected' : ''}>Trạng Thái Kích Hoạt
                              </a>
                              
                            </li>
                            <li onClick={() => this.onClick('status', -1)}>
                              <a role="button" className={(by === 'status' && value === -1) ? 'sort_selected' : ''}>Trạng Thái Ẩn &nbsp;
                              </a>          
                            </li>
              </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    sort : state.sort
  }
}
const mapDispatchToProps = (dispatch, props) =>{
  return {
      onSort : (sort) =>{
          dispatch(actions.sortTask(sort));
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);