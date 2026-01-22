import { isNotEmptyArray, isString } from '../type-utils';

export const getApiError = (resp: any, defaultMessage = 'Something went wrong') => {
  let err: string = defaultMessage;

  if (isNotEmptyArray(resp?.data?.errors)) {
    err = resp.data.errors.map((error: any) => error.message).join(', ');
  } else if (isString(resp?.data?.message)) {
    err = resp.data.message;
  } else if (isNotEmptyArray(resp?.response?.data?.errors)) {
    err = resp.response.data.errors.map((error: any) => error.message).join(', ');
  } else if (isString(resp?.response?.data?.message)) {
    err = resp.response.data.message;
  } else if (isNotEmptyArray(resp?.original?.response?.data?.errors)) {
    err = resp.original.response.data.errors.map((error: any) => error.message).join(', ');
  } else if (isString(resp?.original?.response?.data?.message)) {
    err = resp.original.response.data.message;
  }

  // If error message is too long (verbose/technical), return default message
  if (err && err.length > 200) {
    return defaultMessage;
  }

  return err;
};

export function getApiResponseMsg(resp: any, defaultMessage = 'Successfully Executed!') {
  let responseMsg: string = defaultMessage;

  if (isString(resp?.data?.message)) {
    responseMsg = resp.data.message;
  } else if (isString(resp?.message)) {
    responseMsg = resp.message;
  } else if (isString(resp?.data?.display_message?.message)) {
    responseMsg = resp?.data?.display_message?.message;
  }
  return responseMsg;
}
