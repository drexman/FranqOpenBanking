
import {
    Flex,
    Card,
    HStack,
    Stack,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    CardHeader,
    Text
} from "@chakra-ui/react"
import React, { useContext, useEffect, useState } from "react";
import { getFinance, DataFinance} from '@services/finance/FinanceService'
import { currencyFormatterBRL, currencyFormatterUS } from '@utils/CurrencyUtils';
import { CookieContext } from "@store/CookieProvider"
import { CookieContextType } from "@store/cookie"
import  InfiniteMarquee  from '../../components/Infinite/InfiniteMarquee';
const DashBoard = () => {

    const [results, setResults] = useState<DataFinance>()

    useEffect(() => {
       getFinance().then((response) => {
        setResults(response.results)
       })
    
    },[])
    
    return (<Flex flexDirection="column"
        width="100wh"
        height="100vh"
        bg="gray.200"
        p={"20px"}
  
    >
        {results?.stocks ? (
        <Stack gap={5}>
            <Text  fontWeight="bold" fontSize={25}>Bolsa de valores</Text>        
            <HStack gap={5}>
                <Card width={"250px"}>
                    <CardHeader>
                        <Stat>
                            <StatLabel>IBOVESPA</StatLabel>
                            <StatNumber>{currencyFormatterBRL(results.stocks.IBOVESPA.points)}</StatNumber>
                                <StatHelpText>
                                    {results.stocks.IBOVESPA.variation > 0 ? (
                                        <StatArrow type='increase' />
                                    ): (
                                        <StatArrow type='decrease' />
                                    )}
                                    {results.stocks.IBOVESPA.variation + '%'}
                                </StatHelpText>
                        </Stat>
                    </CardHeader>
                </Card>
                <Card width={"250px"}>
                    <CardHeader>
                        <Stat>
                            <StatLabel>NASDAQ</StatLabel>
                            <StatNumber>{currencyFormatterUS(results.stocks.NASDAQ.points)}</StatNumber>
                                <StatHelpText>
                                    {results.stocks.NASDAQ.variation > 0 ? (
                                        <StatArrow type='increase' />
                                    ): (
                                        <StatArrow type='decrease' />
                                    )}
                                    {results.stocks.NASDAQ.variation + '%'}
                                </StatHelpText>
                        </Stat>
                    </CardHeader>
                </Card>
                <Card width={"250px"}>
                    <CardHeader>
                        <Stat>
                            <StatLabel>DOWJONES</StatLabel>
                            <StatNumber>{currencyFormatterUS(results.stocks.DOWJONES.points)}</StatNumber>
                                <StatHelpText>
                                    {results.stocks.DOWJONES.variation > 0 ? (
                                        <StatArrow type='increase' />
                                    ): (
                                        <StatArrow type='decrease' />
                                    )}
                                    {results.stocks.DOWJONES.variation + '%'}
                                </StatHelpText>
                        </Stat>
                    </CardHeader>
                </Card>
            </HStack>
        </Stack>
        ): null}
        {results?.currencies ? (
        <Stack gap={5} marginTop={10}>
            <Text  fontWeight="bold" fontSize={25}>Câmbio</Text>        
            <HStack gap={5}>
                <Card width={"250px"}>
                    <CardHeader>
                        <Stat>
                            <StatLabel>Dólar Hoje</StatLabel>
                            <StatNumber>{currencyFormatterBRL(results.currencies.USD.buy)}</StatNumber>
                                <StatHelpText>
                                    {results.currencies.USD.variation > 0 ? (
                                        <StatArrow type='increase' />
                                    ): (
                                        <StatArrow type='decrease' />
                                    )}
                                    {results.currencies.USD.variation + '%'}
                                </StatHelpText>
                        </Stat>
                    </CardHeader>
                </Card>
                <Card width={"250px"}>
                    <CardHeader>
                        <Stat>
                            <StatLabel>Euro Hoje</StatLabel>
                            <StatNumber>{currencyFormatterUS(results.currencies.EUR.buy)}</StatNumber>
                                <StatHelpText>
                                    {results.currencies.EUR.variation > 0 ? (
                                        <StatArrow type='increase' />
                                    ): (
                                        <StatArrow type='decrease' />
                                    )}
                                    {results.currencies.EUR.variation + '%'}
                                </StatHelpText>
                        </Stat>
                    </CardHeader>
                </Card>
            </HStack>
        </Stack>
        ): null}
    </Flex>
    );
}

export default DashBoard;