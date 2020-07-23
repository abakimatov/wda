import React from 'react';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
//material ui stuff
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
//css
import classed from '../../css/Registration.module.css';

const IncorrectKey = ({err_valid_text_key, loading_user}) => {
    return (
        <div className={classed.incorrect_wrapper}>
            <Paper>
                <div>
                    {err_valid_text_key}
                </div>
                {loading_user && <div style={{width:'50%', margin:'20px 0px', display:'inline-block'}}><LinearProgress/></div>}
            </Paper>
        </div>
    )
}
IncorrectKey.propTypes = {
    err_valid_text_key: PropTypes.string.isRequired,
}
const mapStateToProps = state => ({
    err_valid_text_key: state.UI.err_valid_text_key
})
export default connect(mapStateToProps, {})(IncorrectKey);
