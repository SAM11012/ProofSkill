import axios, { AxiosRequestConfig } from "axios";

export const getPeopleData = async () => {
  const config: AxiosRequestConfig = {
    url: "https://forinterview.onrender.com/people",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};


export const getDataID = async (id:string) => {
    const config: AxiosRequestConfig = {
      url: `https://forinterview.onrender.com/people/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
