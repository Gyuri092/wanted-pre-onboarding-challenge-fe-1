import axios, { AxiosError } from 'axios';

type ServerError = { errorMessage: string };

const handleError = (error: any) => {
  console.log(error);
  if (axios.isAxiosError(error)) {
    const serverError = error as AxiosError<ServerError>;
    if (serverError && serverError.response) {
      const jsonString = JSON.stringify(serverError.response.data);
      const jsonObj = JSON.parse(jsonString);
      alert(jsonObj.details);
    }
  }
};
export default handleError;
