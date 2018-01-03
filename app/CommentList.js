import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Commnet from './Comment'


class CommentList extends Component {
    handleDeleteComment(index){
      this.props.onDeleteComment(index)
    }
    render () {
        // var list  = this.props.list;
      return (
        <div className='border' style={{marginTop:5}}>
          <div><h3>List</h3></div>
           { this.props.comments.map((comment,i)=>
                 <Commnet comment={comment} key={i} index={i} onDeleteComment={this.handleDeleteComment.bind(this)} />
           )}
        </div>
      )
    }
  }
  CommentList.defaultProps = {
    comments: []
  };
  
export default CommentList;