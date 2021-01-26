import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorPicker.propTypes = {
    listColor: PropTypes.object,
    onReceiceColor: PropTypes.func,
};

ColorPicker.defaultProps = {
    listColor: null,
    onReceiceColor: null,

}

function ColorPicker(props) {
    const { listColor, onReceiceColor } = props;
    const [colors, setColors] = useState(['red', 'green', 'blue', 'purple']);

    function showColor(color) {
        //console.log(listColor);
        return {
            backgroundColor: color,
        }
    }

    function activeColor(listColor) {
        for (const key in listColor) {
            if (listColor.hasOwnProperty(key)) {
                const value = listColor[key];
                return value;
            }
        }
    }

    function handleActiveColor(color) {
        //console.log(color);
        onReceiceColor(color);

    }

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 color">
            <div className="panel panel-primary">
                <div className="panel-heading heading">
                    <h3 className="panel-title">Color Picker</h3>
                </div>
                <div className="panel-body">
                    {
                        colors.map((color, index) => (
                            <span
                                key={index}
                                style={showColor(color)}
                                className={activeColor(listColor) === color ? 'active' : ''}
                                onClick={() => handleActiveColor(color)}
                            >
                            </span>
                        ))
                    }
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;