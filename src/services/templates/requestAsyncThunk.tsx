import axios from "./axios";
import { createAsyncThunk, nanoid, } from "@reduxjs/toolkit";

interface RequestProps {
  storeName: string,
  _url: string,
  exact?: string,
  method: 'POST' | 'GET' | 'PATCH' | 'UPLOAD'
}

interface ParamsProps {
  urlParams?: string | '',
}

const request = ({
  storeName,
  _url,
  exact,
  ...rest
}: RequestProps) => {
  return createAsyncThunk(
    _url + exact,
    async (params: ParamsProps, { rejectWithValue }) => {

      let url = _url || "";

      if (params?.urlParams) {
        url += params?.urlParams;
        delete params?.urlParams;
      }

      try {
        const result = await axios({
          params,
          url,
          ...rest
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
    }
  );
};

export default request