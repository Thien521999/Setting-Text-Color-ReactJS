import PropTypes from 'prop-types';
import React from 'react';
Result.propTypes = {
    listColor: PropTypes.object,
};

Result.defaultProps = {
    listColor: null,
}


function Result(props) {
    const { listColor } = props;
    function setStyle(listColor) {
        //Cach # 
        // for (const key in listColor) {
        //     if (listColor.hasOwnProperty(key)) {
        //         const value = listColor[key];
        //         return {
        //             color: value,
        //             borderColor: value,
        //         }
        //     }
        // }

        let onekey = Object.keys(listColor)[0];
        let setColor = listColor[onekey];
        let secondKey = Object.keys(listColor)[1];
        let setSize = listColor[secondKey];

        return {
            color: setColor,
            borderColor: setColor,
            fontSize: setSize,
        }
    }

    function setColor(listColor) {
        let onekey = Object.keys(listColor)[0];
        return listColor[onekey]
    }

    function setSize(listColor) {
        let secondKey = Object.keys(listColor)[1];
        return listColor[secondKey];
    }

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>Color : {setColor(listColor)} - FontSize : {setSize(listColor)}px</p>
            <div id="content" style={setStyle(listColor)}>
                Nội dung setting
            </div>
        </div>
    );
}

export default Result;