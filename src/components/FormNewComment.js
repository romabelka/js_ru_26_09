import React, {Component} from 'react'

class FormNewComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            textComment: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            userName: event.target.value
        })
    }

    handleChangeTextArea(event) {
        this.setState({
            textComment: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            userName: '',
            textComment: ''
        })
    }

    render() {
        return (
            <form>
                <label>
                    User Name:
                    <input
                        name="userName"
                        type="text"
                        value={this.state.userName}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Сomment text:
                    <textarea
                        onChange={this.handleChangeTextArea}
                        value={this.state.textComment}
                    />
                </label>
                <br/>
                <button onClick={this.handleSubmit}>
                    Add comment
                </button>
            </form>
        );
    }
}

export default FormNewComment