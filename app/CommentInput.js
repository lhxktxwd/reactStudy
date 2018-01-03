import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class CommentInput extends Component {
    constructor () {
        super()
        this.state = {
          name: '',
          content: '',
        }
    }

    componentWillMount () {
        this._loadUsername()
    }

    componentDidMount(){
        this.input.focus();
    }

    _saveUsername(name){
        localStorage.setItem('name',name)
    }

    _loadUsername () {
        const name = localStorage.getItem('name')
        if (name) {
          this.setState({ name })
        }
    }

    handleSubmit (e){
        if(this.props.onSubmit){
            const { name, content } = this.state
            const createDate = +new Date()
            this.props.onSubmit({name, content, createDate})
        }
        this.setState({ content: '' })
    }

    handleUsernameBlur(e){
        _saveUsername(e.target.value)
    }

    handleContentChange (e){
        this.setState({
           content: e.target.value
        })
    }

    handleNameChange (e){
        this.setState({
            name: e.target.value
        })
    }
    render () {
       
      return (
         <div className="border" style={{ width: 500,height:145}}>
             <div style={{padding:5}}>
                用户名<input className='input' value={this.state.name} onBlur={this.handleUsernameBlur.bind(this)} onChange={this.handleNameChange.bind(this)} />
             </div>
             <div style={{padding:5}}>
                评论内容<input className='input' ref={(input)=>this.input=input}  value={this.state.content} onChange={this.handleContentChange.bind(this)} />
             </div>
             <div style={{float:'right',padding:5}}>
                <button onClick={this.handleSubmit.bind(this)}>发布</button>
             </div>
         </div>
      )
    }
  }
  
export default CommentInput;