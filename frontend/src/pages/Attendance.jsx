import { useState, useEffect} from 'react';
import MainContainer from "../components/MainContainer";
import Login from "../components/LoginContainer";
import QRRegistrationContainer from "../components/QRRegistrationContainer";

const Main = () => {

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

const [activePage, setActivePage] = useState("main");
    return (
        <>
            {activePage === "main" && (
                <MainContainer
                    data={data}
                    onLogout={() => setActivePage("login")}
                    onQrRegistration={() => setActivePage("qr")}
                />
            )}

            {activePage === "qr" && (
                <QRRegistrationContainer
                    onBack={() => setActivePage("main")}
                />
            )}

            {activePage === "login" && (
                <Login />
            )}
        </>
    );
};

export default Main;
