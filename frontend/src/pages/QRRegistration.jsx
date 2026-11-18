import { useState } from 'react';
import MainContainer from "../components/MainContainer";

const QrRegistration = () => {
    const [data, setData] = useState([]);
   

    const getData = async () => {
        const response = await fetch('http://127.0.0.1:3000/attendancesystem');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = response.json();

        return data;


    };

    getData().then((result) => {
        setData(result);
        console.log(result)
    }).catch((e) => {
        console.log(e.message);
    });


  return (
    <>
    <MainContainer data = {data} />
    </>
  )
}

export default QrRegistration;
