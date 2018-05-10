import React from "react";
import Product from './Product'
import products from './seed';

class ProductList extends React.Component {

    // componentDidMount(){
    //     console.log(products);
    // }
    handleProductUpVote(productId) {
        console.log(productId + ' was upvoted.');
    }

    render() {
        // const product = products[0];
        const product = products.sort((a, b) => (
            b.votes - a.votes
        ));
        const productComponents = products.map((product) =>
            (
                <Product
                    key={'product-' + product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                    onVote={this.handleProductUpVote}
                />
            ));
        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div> );

    }
}

// return (
        //     <div className='ui unstackable items'>
        //         <Product
        //             id={product.id}
        //             title={product.title}
        //             description={product.description}
        //             url={product.url}
        //             votes={product.votes}
        //             submitterAvatarUrl={product.submitterAvatarUrl}
        //             productImageUrl={product.productImageUrl}
        //         />
        //     </div>
        // );



export default ProductList;