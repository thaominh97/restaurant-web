import styled from "styled-components";

export const ProductContainer = styled.div`
    /* width: 100vw; */
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #150f0f;
    color: #fff;
`;
export const ProductHeading = styled.h2`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`;
export const ProductContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;

`;

export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;
export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px rgb(129, 127, 120);
`;
export const ProductTitle = styled.h4`
    font-weight: 400;
    font-size: 1.5rem;
`;
export const ProductDesc = styled.p`
    margin-bottom: 1rem;
`;
export const ProductPrice = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-around;
    margin-bottom: 1rem;
`;
export const ProductPriceP = styled.p`
    font-size: 2rem;
`;

export const ProductSymbol = styled.p`
    font-size: 2rem;
`;

export const ProductBtn = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2 ease-out;
    &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    }
`;