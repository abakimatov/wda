import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
//redux
import { connect } from 'react-redux';
//material ui stuff
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop:'10px'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    items_wrapper: {
        width:'100%'
    },
    item: {
        display:'flex',
        justifyContent:'space-between',
    }
  }));

const IssuedKeys = ({keys_list}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Созданные ссылки</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.items_wrapper}>
                {keys_list && keys_list.map(item => (
                    <Fragment key={item.value}>
                        <div>
                            <div className={classes.item}>
                                <div>Ссылка:</div>
                                <div>
                                  <a href={`/registration/link/${item.value}`}>{`https://wda.lk.bitoobit.ru/registration/link/${item.value}`}</a>
                                </div>
                            </div>
                            <div className={classes.item}>
                                <div>Роль:</div>
                                <div>
                                    {item.roleName}
                                </div>
                            </div>
                            <div className={classes.item}>
                                <div>Дата создания:</div>
                                <div>{dayjs(item.dateCreated).format('DD.MM.YYYY')}</div>
                            </div>
                            <div className={classes.item}>
                                <div>Истекает:</div>
                                <div>{dayjs(item.dateTo).format('DD.MM.YYYY')}</div>
                            </div>
                        </div>
                        <Divider style={{margin:'10px 0px'}}/>
                    </Fragment>
                ))}
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      );
}
IssuedKeys.propTypes = {
    keys_list: PropTypes.array.isRequired,
}
const mapStateToProps = state => ({
    keys_list: state.user.keys_list
})

export default connect(mapStateToProps, {})(IssuedKeys);
