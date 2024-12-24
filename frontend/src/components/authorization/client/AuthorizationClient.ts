import axios from 'axios';
import {AuthorizationType} from '../type/AuthorizationType';

export const loginAuthorization = async (data: AuthorizationType): Promise<void> => {
    await axios.post<AuthorizationType>('http://localhost:8080/api/login', data);
}

export const registerAuthorization = async (data: AuthorizationType): Promise<void> => {
    await axios.post<AuthorizationType>('http://localhost:8080/api/register', data);
}
