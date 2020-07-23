import React, { Component } from 'react';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
import { getUserFields, getUserFrames, setUserInfo } from '@AppStore/Actions/UserData/UserData';
import { getLicenseParams } from '@AppStore/Actions/Ui.types'
//material ui stuff
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
//components
import { DefaultButton } from '../../Utils/Buttons';
import InputMaskComponentProfile from '@Templates/InputMaskComponentProfile';
//css
import classed from '../../css/Profile.module.css';
import Divider from '@material-ui/core/Divider';
 
class ProfileContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            editMode: false,
            user: []
        }
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.user && prevState.user.length === 0){
            let user = nextProps.user.map(item => ({
                ...item,
                value: item.value ? item.value : ''
            }))
            return {
                user
            }
        } else return null
    }
    componentDidMount(){
        this.props.getUserFields();
        this.props.getUserFrames();
        this.props.getLicenseParams();
        document.title = 'Профиль';
    }
    onToggleEditMode = flag => this.setState({editMode: flag});
    markUpProfile = () => (
        <div className={classed.profile}>
            {this.state.user && this.state.user.map((item, index) => (
                <div key={index} className={classed.profile_item}>
                    <div>{`${item.name}:`}</div>
                    <div>{item.value}</div>
                </div>
            ))}
        </div>
    )
    //edit items
    onChangeProfileItems = event => {
        let [index, value] = [event.currentTarget.id, event.currentTarget.value];
        let user = this.state.user;
        user[index].value = value.replace(/-/g, "");
        this.setState({user})
    }
    markUpEditProfile = user => (
        <div style={{display:'flex', flexDirection:'column'}}>
            {user && user.map((item, index) => (
                <>
                {item.key === 'phone' && <InputMaskComponentProfile
                    keyParam={index} 
                    item={item} 
                    index={index} 
                    value={item.value} 
                    helperText=''
                    onChange={this.onChangeProfileItems}
                />}
                {item.key !== 'phone' && <TextField
                    disabled={!item.isEdit}
                    id={`${index}`}
                    key={item.name}
                    name={`${item.key}`}
                    placeholder={item.name}
                    label={item.name}
                    variant='outlined'
                    margin='normal'
                    value={item.value}
                    onChange={this.onChangeProfileItems}
                />}
                </>
            ))}
        </div>
    )
    onSubmit = () => {
        let obj = {};
        let user = this.state.user;
        for(let i = 0; i < user.length; i++){
            obj[user[i].key] = user[i].value;
        }
        this.props.setUserInfo(obj, () => this.onToggleEditMode(false));
    }
    render(){
        const { editMode } = this.state;
        const { loading_user } = this.props;
        return (
            <>
                <h1>Профиль</h1>
                <div className={classed.profile_wrapper}>
                    <Paper className={classed.paper}>
                        <h1>Данные пользователя</h1>
                        {!editMode && this.markUpProfile()}
                        {editMode && this.markUpEditProfile(this.state.user)}
                        <Divider/>
                        {!editMode && <DefaultButton callback={() => this.onToggleEditMode(true)} loading={false} text='редактировать' style={{margin: '10px 0px'}}/>}
                        {editMode && <DefaultButton callback={this.onSubmit} loading={loading_user} text='сохранить'/>}
                    </Paper>
                </div>
            </>
        )
    }
}
ProfileContainer.propTypes = {
    user: PropTypes.array.isRequired,
    setUserInfo: PropTypes.func.isRequired,
    getLicenseParams: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    user: state.user.user,
    loading_user: state.UI.loading_user
})

export default connect(mapStateToProps, { getUserFields, getUserFrames, setUserInfo, getLicenseParams })(ProfileContainer);
