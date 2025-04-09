import React,{useState} from 'react';
export const ProductsContext = React.createContext({products:[],toggleFav:()=>{}})

// eslint-disable-next-line import/no-anonymous-default-export
export default props=>{
    const [productsList,setProdctsList] = useState([
            {
              id: 'p1',
              title: 'Red Scarf',
              description: 'A pretty red scarf.',
              isFavorite: false
            },
            {
              id: 'p2',
              title: 'Blue T-Shirt',
              description: 'A pretty blue t-shirt.',
              isFavorite: false
            },
            {
              id: 'p3',
              title: 'Green Trousers',
              description: 'A pair of lightly green trousers.',
              isFavorite: false
            },
            {
              id: 'p4',
              title: 'Orange Hat',
              description: 'Street style! An orange hat.',
              isFavorite: false
            }
        ]);
        const toggleFavorite = productId=>{
            setProdctsList(prevValue=>{
                const prodIndex = prevValue.findIndex(
                    p=>p.id === productId
                );
                const newFavStatus = !prevValue[prodIndex].isFavorite;
                const updatedProducts =[...prevValue];
                updatedProducts[prodIndex] ={
                    ...prevValue[prodIndex],
                    isFavorite:newFavStatus
                }
                return updatedProducts;
                
            })
        }
    return(
        <ProductsContext.Provider value={{products:productsList,toggleFav:toggleFavorite}}>
            {props.children}
        </ProductsContext.Provider>
    )
}