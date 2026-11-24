import { useState, useEffect} from 'react';
import MainContainer from "../components/MainContainer";

const Main = () => {
    console.log("MAIN SYSTEM IS RUNNING");

    const [data, setData] = useState([]);
    
    const getData = async () => {

        const response = await fetch('http://127.0.0.1:3000/employee/all');

        if (!response.ok) {
            throw new Error(response.status);
        }
        const result = await response.json();

        return result;


    };

    useEffect(() => {
    
    getData().then((result) => {
        setData(result);
        console.log(result)
    }).catch((e) => {
        console.log(e.message);
    });
},[]);

return (
    <>
    <MainContainer data = {data} />
    </>
);
};

export default Main;
