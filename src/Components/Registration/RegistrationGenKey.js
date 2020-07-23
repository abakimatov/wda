import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
import { genRegKey, getMyRegKeys } from '@AppStore/Actions/User';
import { getRoles } from '@AppStore/Actions/Ui.types';
import { getOrganizations } from '@AppStore/Actions/Derictories/Organizations';
//material ui stuff
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
//components
import { DefaultButton } from '../../Utils/Buttons';
import IssuedKeys from './IssuedKeys';
//css
import classed from '../../css/Registration.module.css';

const RegistrationGenKey = ({
    genRegKey, 
    loading_user, 
    reg_key, 
    getMyRegKeys, 
    keys_list_length, 
    getRoles, 
    isSuperAdmin,
    roles, 
    organizations_data,
    getOrganizations}) => {
    useEffect(() => {
        getMyRegKeys();
        getRoles();
        getOrganizations();
        document.title = 'Регистрация пользователей'
    },[getMyRegKeys]);
    const [val, setVal] = useState('def')
    const [valOrg, setValOrg] = useState('def');
    const onChangeSelectRole = e => setVal(e.currentTarget.value);
    const onChangeSelectOrg = e => setValOrg(e.currentTarget.value);
    const handleSubmit = async () => {
        await genRegKey({
            roleId: val,
            orgId: valOrg
        });
        getMyRegKeys();
    }
    return (
        <>
            <h1>Регистрация новых пользователей</h1>
            <div className={classed.gen_reg_key}>
                <Paper className={classed.paper}>
                    <div className={classed.gen_reg_key_actions}>
                        <div className={classed.select_wrapper}>
                            <div style={{width:'35%'}}>Роль:</div>
                            <div style={{width:'60%'}}>
                                <select value={val} onChange={onChangeSelectRole} style={{width:'100%'}}>
                                    <option disabled value='def'>Роль:</option>
                                    {roles && roles.map(item => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {isSuperAdmin &&
                        <div className={classed.select_wrapper}>
                            <div style={{width:'35%'}}>Огранизация:</div>
                            <div style={{width:'60%'}}>
                                <select value={valOrg} onChange={onChangeSelectOrg} style={{width:'100%'}}>
                                    <option disabled value='def'>Организация:</option>
                                    {organizations_data && organizations_data.map(item => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>}
                        {/* <div className={classed.gen_reg_key_lifetime}>
                            <div>Время жизни ключа:</div>
                            <div></div>
                        </div> */}
                        <Divider style={{margin:'10px 0px'}}/>
                        <DefaultButton loading={loading_user} text='создать ссылку' callback={handleSubmit}/>
                        <div className={classed.gen_reg_key_new}>
                            {reg_key && 
                            <div className={classed.new_key}>
                                <div>Новая ссылка:</div>
                                <a href={`/registration/link/${reg_key}`}>{`https://wda.lk.bitoobit.ru/registration/link/${reg_key}`}</a>
                            </div>}
                        </div>
                    </div>
                </Paper>
                {keys_list_length > 0 && <IssuedKeys/>}
            </div>
        </>
    )
}
RegistrationGenKey.propTypes = {
    genRegKey: PropTypes.func.isRequired,
    loading_user: PropTypes.bool.isRequired,
    reg_key: PropTypes.string.isRequired,
    getMyRegKeys: PropTypes.func.isRequired,
    keys_list_length: PropTypes.number.isRequired,
    roles: PropTypes.array.isRequired,
    organizations_data: PropTypes.array.isRequired,
    isSuperAdmin: PropTypes.bool.isRequired,
}
const mapStateToProps = state => ({
    loading_user: state.UI.loading_user,
    reg_key: state.user.reg_key,
    keys_list_length: state.user.keys_list.length,
    isSuperAdmin: state.user.isSuperAdmin,
    roles: state.UI.roles,
    organizations_data: state.data.organizations_data,
})

export default connect(mapStateToProps, { genRegKey, getMyRegKeys, getRoles, getOrganizations })(RegistrationGenKey);
