import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class Comment extends Component {

    constructor () {
      super()
      this.state = { formatDate: '' }
    }

    componentWillMount(){
      this._formatCreateDate()
      this._timer = setInterval( this._formatCreateDate.bind(this),5000)
    }

    componentWillUnmount () {
      clearInterval(this._timer)
    }

    _getProcessedContent (content) {
      return content
        .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    _formatCreateDate(){
      var comment = this.props.comment
        const duration = (+Date.now() - comment.createDate) / 1000
        this.setState({
          'formatDate': duration>60?`${Math.round(duration / 60)} 分钟前` : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    handleDeleteComment(){
      this.props.onDeleteComment(this.props.index);
    }

    render () {
      var comment = this.props.comment
      return (
        <div className='border2' style={{margin:1}} key={this.props.index}>
            <div style={{display:'inline-block',width:'100%'}}>
              <div style={{float:'left',width:'90%'}} ><strong>{comment.name}:</strong>
              <p dangerouslySetInnerHTML={{
                __html: this._getProcessedContent(comment.content)
              }} /></div>
              <div style={{float:'right'}}><span className='delete-item' onClick={this.handleDeleteComment.bind(this)}>刪除</span></div>
            </div>
            <div>date:{this.state.formatDate}</div>
        </div>
      )
    }
  }
  
export default Comment;