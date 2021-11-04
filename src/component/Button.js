import PropTypes from 'prop-types'

const Button = ({text}) => {
    return <button type="submit" className="submit-btn">
        {text}
    </button>
}

Button.defaultProps = {
    text: 'Submit'
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button
