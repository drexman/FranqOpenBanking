import Api from '../Api';
import { KEY } from '../../config/api'


interface Currencies {
    USD: {
        name: string, 
        variation: number,
        buy: number,
    }
    EUR: {
        name: string, 
        variation: number,
        buy: number,
    }
}

interface Stocks  {
    IBOSVESPA: {
        name: string,
        location: string,
        points: number,
        variation: number,
    },
    NASDAQ: {
        name: string,
        location: string,
        points: number,
        variation: number,
    } 
    DOWJONES: {
        name: string,
        location: string,
        points: number,
        variation: number,
    }
}

export interface DataFinance {
    results: {
        currencies: Currencies,
        stocks: Stocks 
    }
}

export const getFinance = async () => {
    try {
        const  resp = await Api.get(`/finance?key=${KEY}`);
        return resp.data
    } catch (error) {
        console.error(error)
        throw error
    }
};