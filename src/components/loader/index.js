import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state = {}) => {
    return {
        loader: state.loader || {}
    }
};


const loader = (props = {}) => {
    const { loader = {} } = props;
    const { isLoading = false } = loader;
    return (
        isLoading ?
            <div className="loader-container">
                <div className="loader" />
            </div>
            : ''
    );
};

export default connect(mapStateToProps, null)(loader);

