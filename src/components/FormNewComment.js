import React, {Component} from 'react'

class FormNewComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            textComment: '',
            inputStyle: {},
            textAreaStyle: {}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        if (event.target.value.length < 10)  {
            this.setState({
                inputStyle: {borderColor: 'red'}
            })
        }

        if (event.target.value.length >= 10)  {
            this.setState({
                inputStyle: {}
            })
        }

        this.setState({
            userName: event.target.value
        })
    }

    handleChangeTextArea(event) {
        if (event.target.value.length < 10)  {
            this.setState({
                textAreaStyle: {
                    borderColor: 'red',
                    borderWidth: '2px'
                }
            })
        }

        if (event.target.value.length >= 10)  {
            this.setState({
                textAreaStyle: {}
            })
        }

        this.setState({
            textComment: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.userName.length < 10 || this.state.textComment.length < 10) {
            alert('form is not valid');
        } else {
            this.setState({
                userName: '',
                textComment: ''
            })
        }

    }

    render() {
        return (
            <form>
                <label>
                    <div>User Name:</div>
                    <input
                        maxLength="50"
                        style={this.state.inputStyle}
                        name="userName"
                        type="text"
                        value={this.state.userName}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    <div>Сomment text:</div>
                    <textarea
                        style={this.state.textAreaStyle}
                        maxLength="50"
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