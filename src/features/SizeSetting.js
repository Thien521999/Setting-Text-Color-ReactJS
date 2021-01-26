import React from 'react';
import PropTypes from 'prop-types';

SizeSetting.propTypes = {
    fontSize: PropTypes.object,
    onChangeSize: PropTypes.func,
};

SizeSetting.defaultProps = {
    fontSize: null,
    onChangeSize: null,
}


function SizeSetting(props) {
    const { fontSize, onChangeSize } = props;

    function setSize(fontSize) {
        let secondKey = Object.keys(fontSize)[1];
        return fontSize[secondKey];
    }

    function handleChangeSize(value) {
        //console.log(value);
        onChangeSize(value);
    }
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Size : {setSize(fontSize)} px</h3>
            </div>
            <div className="panel-body">
                <button type="button" className="btn btn-success" onClick={() => handleChangeSize(-2)} > Giảm </button>&nbsp;
                <button type="button" className="btn btn-success" onClick={() => handleChangeSize(2)}  > Tăng </button>
            </div>
        </div>
    );
}

export default SizeSetting;