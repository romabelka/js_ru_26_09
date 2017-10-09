import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddCommentForm extends Component {
    static propTypes = {

    };

    state = {
        username: {
            value: "",
            valid: null
        },
        comment: {
            value: "",
            valid: null
        }
    };

    styles = {
        valid: {
            null: {

            },
            true: {
                border: "none"
            },
            false: {
                border: "1px solid red"
            }
        }
    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <p>
                        <label htmlFor="username">Имя пользователя:&nbsp;</label>
                        <input type='text'
                               value = {this.state.username.value}
                               onChange = {this.handleChange}
                               name = "username"
                               id = "username"
                               maxLength = "50"
                               style={this.styles.valid[this.state.username.valid]}/>
                    </p>
                    <p>
                        <label htmlFor="comment">Имя пользователя:&nbsp;</label>
                        <textarea value = {this.state.comment.value}
                                  onChange = {this.handleChange}
                                  name = "comment"
                                  id = "comment"
                                  maxLength = "50"
                                  style={this.styles.valid[this.state.comment.valid]}/>/>
                    </p>
                    <button type="submit">Оставить комментарий</button>

                </form>
            </div>
        )
    }

    handleChange = (ev) => {

        let name = ev.target.name;

        let valid = ev.target.value.length >= 10;

        let fieldStateObj = {};

        fieldStateObj[name] = {
            value: ev.target.value,
            valid: valid
        };

        this.setState(fieldStateObj)
    };

    handleSubmit = (ev) => {

        ev.preventDefault()

        for (let field in this.state) {
            if (!this.state[field]["valid"]) {

                console.log("Invalid Form");
                return false;
            }
        }

        console.log("Valid Form");


        this.setState({
            username: {
                value: "",
                valid: null
            },
            comment: {
                value: "",
                valid: null
            }
        });

    };

}

export default AddCommentForm