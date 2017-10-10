import React, { Component } from 'react'
import './style.css'

class AddCommentForm extends Component {
    constructor(props) {
        super(props)

        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    state = {
        user: '',
        message: '',
        error: {
            user: null,
            message: null
        }
    }

    /**
     * Обработка сабмита формы
     * @param ev - объект событие отправки комментария
     */
    onSubmitHandler(ev) {
        ev.preventDefault()

        if (this.validateForm()) {
            alert('Комментарий отправлен!')
            this.resetForm();
        }
    }

    /**
     * Валидация формы. Если валидация с ошибками, происходит ихменение стэйта, на экран выводятся ошибки.
     * @returns {boolean} - результат валидации.
     */
    validateForm() {
        const user = this.state.user,
            message = this.state.message;

        let result = true,
            localError = {
                user: null,
                message: null
            };

        if (message.length < 10 || message.length > 50) {
            localError.message = true
            result = false
        }

        if (user.length === 0) {
            localError.user = true
            result = false
        }

        if (!result) {
            this.setState({error: localError})
        }

        return result
    }

    /**
     * Сбрасывание состояния формы до начального.
     */
    resetForm() {
        this.setState({
            user: '',
            message: '',
            error: {
                user: null,
                message: null
            }
        })
    }

    /**
     * Обработка изменения поля Username
     * @param ev - объект события изменения поля Username
     */
    handleUserChange = (ev) => {
        this.setState({
            user: ev.target.value
        })
    }

    /**
     * Обработка изменения поля Message
     * @param ev - объект события изменения поля Message
     */
    handleMessageChange = (ev) => {
        this.setState({
            message: ev.target.value
        })
    }

    render() {
        const error = this.state.error
        return (
            <div style={{paddingLeft: 30 + 'px'}}>
                <h3>Оставить комментарий</h3>
                <div>
                    <label>Username</label>
                    <br/>
                    <input type='text'
                           value = {this.state.user}
                           onChange = {this.handleUserChange}
                           className={error.user ? 'field_error' : 'field'}
                    />
                    {error.user &&
                        <div className="error-message">
                            Пожалуйста, укажите имя пользователя
                        </div>
                    }
                </div>
                <br/>
                <div>
                    <label>Message</label>
                    <br/>
                    <textarea type='text'
                              value = {this.state.message}
                              onChange = {this.handleMessageChange}
                              className={error.message ? 'field_error' : 'field'}
                    />
                    {error.message &&
                    <div className="error-message">
                        Длина имени пользователя должна быть меньше 50 и больше 10 символов включительно
                    </div>
                    }
                </div>
                <br/>
                <button onClick = {this.onSubmitHandler}>Отправить</button>
            </div>
        )
    }
}

export default AddCommentForm