import React, { Component } from 'react';
import Auxil from '../Auxil';
import Modal from '../../components/UI/Modal/Modal';

const ErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount = () => {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            axios.interceptors.response.use(null, error => {
                this.setState({ error: error })
            })
        }
        clearErrorHandler = () => {
            this.setState({ error: null })
        }
        render() {
            return (
                <Auxil>
                    <Modal
                        show={this.state.error != null}
                        backClick={this.clearErrorHandler}>
                        {this.state.error ?  this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Auxil>
            )
        }
    }
}

export default ErrorHandler;