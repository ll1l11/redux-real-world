import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    withRouter, Route
} from 'react-router'
import { push } from 'react-router-redux'
import Explore from '../components/Explore'
import { resetErrorMessage } from '../actions'
import RepoPage from '../containers/RepoPage'
import UserPage from '../containers/UserPage'

class App extends Component {

    static propTypes = {
        errorMessage: PropTypes.string,
        resetErrorMessage: PropTypes.func.isRequired,
        inputValue: PropTypes.string.isRequired,
        children: PropTypes.node
    }

    handleDismissClick = e => {
        this.props.resetErrorMessage()
        e.peventDefault()
    }

    handleChange = nextValue => {
        this.props.push(`/${nextValue}`)
    }

    renderErrorMessage() {
        const { errorMessage } = this.props
        if (!errorMessage) {
            return null
        }

        return (
            <p style={{ backgroundColor: '#e99', padding: 10 }}>
                <b>{errorMessage}</b>
                {' '}
                (<button onClick={this.handleDismissClick}>
                  Dismiss
                </button>)
            </p>
        )
    }

    render() {
        const { inputValue } = this.props
        return (
            <div>
                <Explore value={inputValue}
                        onChange={this.handleChange} />
                <hr />
                {this.renderErrorMessage()}
                <Route path="/:login/:name"
                       component={RepoPage} />
                <Route path="/:login"
                       component={UserPage} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    errorMessage: state.errorMessage,
    inputValue: ownProps.location.pathname.substring(1),
})

export default withRouter(
    connect(mapStateToProps, {
        push, resetErrorMessage 
    })(App)
)