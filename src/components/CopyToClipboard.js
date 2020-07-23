import React from 'react';
import PropTypes from "prop-types";
import {copyToClipboard} from 'js-copy-to-clipboard'

const CopyToClipboard = (props) => {

    const clickHandler = (event) =>{
        const { onCopy, text } = props;
        onCopy(copyToClipboard(text));
    }
    return (
       <div onClick={clickHandler}>
           {props.children}
       </div>
    );
}

CopyToClipboard.propTypes = {
    text: PropTypes.string.isRequired,
    onCopy: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
  };

  CopyToClipboard.defaultProps = {
   text: '',
   onCopy:() => {},
   children: React.createElement('span') 


  };
export default CopyToClipboard;