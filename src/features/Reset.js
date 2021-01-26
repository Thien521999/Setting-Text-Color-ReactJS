import React from 'react';
import PropTypes from 'prop-types';

Reset.propTypes = {
    onSettingDefault: PropTypes.func,
};

Reset.defaultProps = {
    onSettingDefault: null,
}

function Reset(props) {
    const { onSettingDefault } = props;

    function onResetDefault() {
        onSettingDefault(true);
    }

    return (
        <button type="button" className="btn btn-primary btn-reset" onClick={onResetDefault} > Reset </button>
    );
}

export default Reset;