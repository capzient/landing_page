'use server';
import { stringifyData } from '@/utils/stringifyUrl';

export const submitForm = async (data) => {
  const stringifiedData = await stringifyData(data);

  console.log(stringifiedData);

  const response = await fetch(process.env.GOOGLE_FORM_URL + stringifiedData, {
    method: 'POST',
    cache: 'no-cache',
  });
  if (response.status !== 200) {
    return false;
  } else {
    return true;
  }
};
