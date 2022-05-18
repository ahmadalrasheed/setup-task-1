import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormContainer } from '../../styles/styles.styled';
import router from '../../routers/router';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
});

export const Home = () => {
    // console.log('authAPI', authAPI);
    console.log('router', router);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: yupResolver(schema) });
    const onSubmitHandler = async (data: any) => {
        try {
            const response = await axios.post('https://reqres.in/api/login', data);
            console.log(response.data.token);
            router.navigate('signin');
        } catch (error) {
            console.log('error', error);
        }

        reset();
    };
    return (
        <div>
            <FormContainer>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <h2>Sign In</h2>
                    <br />

                    <input {...register('email')} placeholder="email" type="email" required />
                    <p>{errors.email?.message}</p>
                    <br />

                    <input
                        {...register('password')}
                        placeholder="password"
                        type="password"
                        required
                    />
                    <p>{errors.password?.message}</p>
                    <br />

                    <button type="submit">Sign in</button>
                </form>
            </FormContainer>
        </div>
    );
};
