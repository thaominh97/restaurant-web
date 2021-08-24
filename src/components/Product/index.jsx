import React from 'react'
import {
    ProductContainer,
    ProductHeading,
    ProductContent,
    ProductCard,
    ProductImg,
    ProductTitle,
    ProductDesc,
    ProductInfo,
    ProductBtn,
    ProductPrice,
    ProductPriceP,
    ProductSymbol
} from './ProductElements'
function Product({ heading, data }) {
    return (
        <>
            <ProductContainer>
                <ProductHeading>{heading}</ProductHeading>
                <ProductContent>
                    {data.map((item, index) => {
                        return (
                            <ProductCard key={index}>
                                <ProductImg src={item.img} alt={item.alt} />
                                <ProductInfo>
                                    <ProductTitle>{item.name}</ProductTitle>
                                    <ProductDesc>{item.decs}</ProductDesc>
                                    <ProductPrice>
                                        <ProductSymbol>{item.symbol}</ProductSymbol>
                                        <ProductPriceP>{item.price}</ProductPriceP>
                                    </ProductPrice>
                                    <ProductBtn>{item.button}</ProductBtn>
                                </ProductInfo>
                            </ProductCard>
                        )
                    })}
                </ProductContent>
            </ProductContainer>
        </>
    )
}

export default Product
