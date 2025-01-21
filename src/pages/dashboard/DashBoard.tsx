
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
    Text,
    Table,
    Thead,
    Th,
    Tr,
    Td,
    Tbody
} from "@chakra-ui/react"
import React, { useContext, useEffect, useState } from "react";
import { getFinance, DataFinance} from '@services/finance/FinanceService'
import { currencyFormatterBRL, currencyFormatterUS,  currencyFormatterJAP } from '@utils/CurrencyUtils';
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
            <Text  fontWeight="bold" fontSize={25}>Os índices</Text>        
            <HStack gap={5}>
                <Card width={"210px"}>
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
                <Card width={"210px"}>
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
                <Card width={"210px"}>
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
                <Card width={"210px"}>
                    <CardHeader>
                        <Stat>
                            <StatLabel>IFIX</StatLabel>
                            <StatNumber>{currencyFormatterBRL(results.stocks.IFIX.points)}</StatNumber>
                                <StatHelpText>
                                    {results.stocks.IFIX.variation > 0 ? (
                                        <StatArrow type='increase' />
                                    ): (
                                        <StatArrow type='decrease' />
                                    )}
                                    {results.stocks.IFIX.variation + '%'}
                                </StatHelpText>
                        </Stat>
                    </CardHeader>
                </Card>
                <Card width={"210px"}>
                    <CardHeader>
                        <Stat>
                            <StatLabel>NIKKEI</StatLabel>
                            <StatNumber>{currencyFormatterJAP(results.stocks.NIKKEI.points)}</StatNumber>
                                <StatHelpText>
                                    {results.stocks.NIKKEI.variation > 0 ? (
                                        <StatArrow type='increase' />
                                    ): (
                                        <StatArrow type='decrease' />
                                    )}
                                    {results.stocks.NIKKEI.variation + '%'}
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
                            <StatNumber>{currencyFormatterBRL(results.currencies.EUR.buy)}</StatNumber>
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
                <Card width={"250px"}>
                    <CardHeader>
                        <Stat>
                            <StatLabel>BITCOINS Hoje</StatLabel>
                            <StatNumber>{currencyFormatterBRL(results.currencies.BTC.buy)}</StatNumber>
                                <StatHelpText>
                                    {results.currencies.BTC.variation > 0 ? (
                                        <StatArrow type='increase' />
                                    ): (
                                        <StatArrow type='decrease' />
                                    )}
                                    {results.currencies.BTC.variation + '%'}
                                </StatHelpText>
                        </Stat>
                    </CardHeader>
                </Card>
            </HStack>
        </Stack>
        ): null}
        <Stack gap={5} marginTop={10}>
            <Text  fontWeight="bold" fontSize={25}>Taxas de Juros Nacionais</Text>        
            <HStack gap={5}>
                <Table variant='striped' colorScheme='teal' width={500}>
                    <Thead>
                        <Tr>
                            <Th>Taxa Selic</Th>
                            <Th>Taxa CDI</Th>
                            <Th>Atualizado em</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {results?.taxes.map((taxe) => (
                            <Tr>
                                <Td>
                                    {taxe.selic + "%"} 
                                </Td>
                                <Td>
                                    {taxe.cdi + "%"}
                                </Td>
                                <Td>
                                    {new Date(taxe.date).toLocaleDateString()}
                                </Td>
                            </Tr>
                        ))}
          
                    </Tbody>
                </Table>
            </HStack>
        </Stack>
    </Flex>
    );
}

export default DashBoard;