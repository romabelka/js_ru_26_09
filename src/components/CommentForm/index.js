import React, {Component} from 'react'
import './style.css';

class CommentForm extends Component{
    state = {
        userValue: '',
        userState: '',
        textValue: '',
        textState: ''
    };

    render() {
        const inputUser = this.getInput(
            'text',
            this.state.userValue,
            this.state.userState,
            {onChange: this.highlightInput(3, 10, 'userValue', 'userState')
            });
        const inputText = this.getInput(
            'text',
            this.state.textValue,
            this.state.textState,
            {onChange: this.highlightInput(10, 50, 'textValue', 'textState')
            });
        const inputSubmit = this.getInput(
            'submit',
            'Send',
            '',
            {onClick: this.submitForm
            });
        return (
            <form action=''>
                <label className='label'>User (3 - 10) : {inputUser}</label>
                <label className='label'>Text (10 - 50) : {inputText}</label>
                {inputSubmit}
            </form>
        )
    }
    getInput(type, value, state, events) {
        return (
            <input
                type={type}
                value = {value}
                className={'input ' + state}
                {...events}
            />
        )
    }
    highlightInput = (min, max, value, state) =>(ev) => {
        if (ev.target.value.length > max || ev.target.value.length < min) {
            this.setState({
                [state]: 'error'
            });
        } else {
            this.setState({
                [state]: ''
            });
        }
        this.setState({
            [value]: ev.target.value
        })
    };
    submitForm = (ev) => {
        ev.preventDefault();
        const {userState, textState} = this.state;
        if (userState === 'error') this.setState({
            userState : 'input--error'
        });
        if (textState === 'error') this.setState({
            textState : 'input--error'
        });
        if (!userState && !textState) {
            this.setState({
                userValue: '',
                textValue: ''
            })
        }
    }
}


export default CommentForm;
