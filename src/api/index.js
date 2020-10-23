import axios from 'axios';

const url = "https://api.covid19india.org/data.json";

export const fetchData = async () => {
    try {
        const { data: { statewise } } = await axios.get(url);
        return statewise;
    } catch (error) {
        console.log(error);
    }
}