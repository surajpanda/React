import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            SkillList: "React"
        }

        this.EventhandlerTextBox = this.EventhandlerTextBox.bind(this);
        this.EventhandlerTextArea = this.EventhandlerTextArea.bind(this);
        this.EventhandlerSkillList = this.EventhandlerSkillList.bind(this);
        this.EventHandlerSubmit = this.EventHandlerSubmit.bind(this);
    }

    EventhandlerTextBox(event) {
        this.setState({
            username: event.target.value
        })
    }
    EventhandlerTextArea(event) {
        this.setState({
            comments: event.target.value
        })
    }
    EventhandlerSkillList(event) {
        this.setState({
            SkillList: event.target.value            
        })
    }
    EventHandlerSubmit(event) {
        alert(`${this.state.username} ${this.state.comments} ${this.state.SkillList}`)
        event.preventDefault()
    }

    // EXAMPLE
    // OnChangeEventHandler = (event) => {
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

    render() {
        return (
            <form onSubmit={this.EventHandlerSubmit}>
                <div>
                    <label>UserName</label>
                    <input type='text' value={this.state.username} onChange={this.EventhandlerTextBox} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.EventhandlerTextArea} />
                </div>
                <div>
                    <label>Skills</label>
                    <select value={this.state.SkillList} onChange={this.EventhandlerSkillList}  >
                        <option value="React" >React</option>
                        <option value="Angular" >Angular</option>
                        <option value="Vue" >Vue</option>
                    </select>
                </div>
                <div>
                    <button type="Submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
