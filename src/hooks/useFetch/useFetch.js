import { useEffect, useState } from "react";
import axios from "axios";

function useFetch (url){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [error, setError] =useState(null);

    const fetchData = async () => {

        try {
            const {data:responseData}= await axios.get(url)
            setData(responseData)
            setLoading(false);
        } catch (err) {
            setError(err.message)
        }
     
    };

    useEffect(( )=> {
        fetchData();
    },[]);

    return {loading,data,error}
}

export default useFetch;