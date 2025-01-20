import styled, {keyframes} from "styled-components";
const loopAnimation = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-45%);
    }
`

export const Section = styled.div`
    display: flex;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    fontFamily 'sans-serif';
`;

export const Body = styled.div`
    display: flex;
    width: 100%;
    fontFamily 'sans-serif';
    animation: ${loopAnimation} 30s linear infinite; 
`;

export const Item = styled.div`
    padding: 0 0.25em;
     
`

