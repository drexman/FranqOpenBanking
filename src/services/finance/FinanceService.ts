import Api from '../Api';
import { KEY } from '../../config/api'


interface Currencies {
    USD: {
        name: string, 
        variation: number,
        buy: number,
    },
    EUR: {
        name: string, 
        variation: number,
        buy: number,
    },
    BTC: {
        name: string,
        buy: number,
        variation: number,
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
    }, 
    DOWJONES: {
        name: string,
        location: string,
        points: number,
        variation: number,
    },
    NIKKEI: {
        name: string,
        location: string,
        points: number,
        variation: number
    },
    IFIX: {
        name: string,
        location: string,
        points: number,
        variation: number
    },
}


export interface DataFinance {
    results: {
        currencies: Currencies,
        stocks: Stocks 
    }
}

export const getFinance = async () => {
    try {
        const  resp = await Api.get(`/finance?format=json-cors&key=${KEY}`);
        return resp.data
    } catch (error) {
        console.error(error)
        throw error
    }
};

export const getBlueChip = async () => {
    
}