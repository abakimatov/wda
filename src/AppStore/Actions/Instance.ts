import axios from 'axios';

export const instance = (token: string) => axios.create({
    baseURL: 'https://wda.bitoobit.ru/api/CardPro/GetDataSync/wdaProcJson',
    headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
})

export const check_default = () => {
    /* if(!window.navigator.onLine){
        window.location.href = '/error_connection';
    } */
    return localStorage.getItem('default_access');
}
export const check_current = () => {
    /* if(!window.navigator.onLine){
        window.location.href = '/error_connection';
    } */
    return localStorage.getItem('current_access');
}