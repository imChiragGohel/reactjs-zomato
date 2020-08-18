import React, { Component } from 'react';
import ProductSelectModel from './productSelectModel';

class ProductComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: this.props.product,
            menuId: this.props.menuId,
            isModel: false
        }
    }

    onClickProduct = () => {
        this.setState({ isModel: true });
    }

    modelClose = () => {
        this.setState({ isModel: false });
    }

    onGetManiBasket = (item) => {
        this.setState({ isModel: false }, () => {
            this.props.onMainBasket(item);
        });
    }

    render() {
        return (
            <>
                {this.state.isModel &&
                    <ProductSelectModel
                        isModel={this.state.isModel}
                        product={this.state.product}
                        menuId={this.state.menuId}
                        onGetManiBasket={this.onGetManiBasket}
                        modelClose={this.modelClose} >
                    </ProductSelectModel>}
                <div className="card mb-3 pointer" onClick={() => this.onClickProduct()}>
                    <div className="card-body imagedisplay">
                        <div>
                            <h5 className="card-title">{this.state.product.productName}</h5>
                            <p className="card-text">{this.state.product.description}</p>
                            <p className="card-text font-weight-bold text-success">&#xa3;{this.state.product.price.toFixed(2)}</p>
                        </div>
                        <div >
                            <img className="imageRadius" src="food.png" height="100" width="100" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductComponent;