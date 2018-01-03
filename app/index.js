import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import CommentList from './CommentList'
import CommentInput from './CommentInput'
import './style.css'


class CommentApp extends Component {
 
  constructor(){
        super();
        this.state={
          comments:[]
        }
    }

    componentWillMount(){
     this._loadComments();
    }

    _loadComments(){
      var comments = localStorage.getItem('comments')
      if(comments){
        comments = JSON.parse(comments)
        this.setState({comments})
      }
    }

    _saveComments(comments){
      localStorage.setItem('comments',JSON.stringify(comments))
    }

    handleSubmitComment(comment){
      var comments = this.state.comments
      comments.push(comment)
      this.setState({
        comments:this.state.comments
      })
      this._saveComments(comments)
    }

    handleDeleteComment(index){
      var comments = this.state.comments
      comments.splice(index, 1)
      this.setState({comments})
      this._saveComments(comments);
    }

    render () {
      return (
        <AppContainer>
          <div style={{display:'inline-block'}}>
            <CommentInput  onSubmit={this.handleSubmitComment.bind(this)} />
            <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)} /> 
          </div>
        </AppContainer>
      )
    }
  }
  
  ReactDOM.render(
    <CommentApp />,
    document.getElementById('app')
  )