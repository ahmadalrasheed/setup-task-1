import axios from './axios';
import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';

const request = ({ storeName, _url, exact, ...rest }: any) => {
    return createAsyncThunk(_url + exact, async (params: any, { rejectWithValue }: any) => {
        let url = _url || '';
        console.log('paramas', params);

        if (params?.urlParams) {
            url += params?.urlParams;
            delete params?.urlParams;
        }

        try {
            const result = await axios({
                params,
                url,
                ...rest,
            });

            return result;
        } catch (err: any) {
            const { response, message } = err;

            return rejectWithValue({
                status: response?.status,
                message: response?.data,
                cancelToken: message?.cancelToken,
                id: nanoid(),
            });
        }
    });
};

export default request;
