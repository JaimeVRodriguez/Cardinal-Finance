import {Box, Button, Tab, Tabs, TextField, Typography} from '@mui/material';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {AuthorizationType} from '../type/AuthorizationType';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema, registerSchema} from '../helper/AuthorizationYupSchema';
import {loginAuthorization, registerAuthorization} from '../client/AuthorizationClient';
import {useNavigate} from 'react-router-dom';

export default function AuthorizationPage() {
    const [tab, setTab] = useState<'login' | 'register'>('login');
    const schema = tab === 'login' ? loginSchema : registerSchema;
    const navigate = useNavigate();

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<AuthorizationType>({
        resolver: yupResolver(schema)
    })


    const onSubmit = (data: AuthorizationType) => {
        if (tab === 'login') {
            loginAuthorization(data).then(() => {
                console.log('Logging in with: ', data)
                navigate('/home')
            })
        } else {
            registerAuthorization(data).then(() => {
                console.log('Registering with: ', data)
            })
        }
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}
             justifyContent={'center'} minHeight={'100vh'}>
            <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)} centered>
                <Tab label={'Login'} value={'login'}/>
                <Tab label={'Register'} value={'register'}/>
            </Tabs>

            <Typography>
                {tab === 'login' ? 'Login' : 'Register'}
            </Typography>
            <Box
                component={'form'}
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    label={'Username'}
                    {...register('username')}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    fullWidth
                />
                <TextField
                    label={'Password'}
                    type={'password'}
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    fullWidth
                />
                <Button type={'submit'}>
                    {tab === 'login' ? 'Login' : 'Register'}
                </Button>
            </Box>
        </Box>
    )
}
