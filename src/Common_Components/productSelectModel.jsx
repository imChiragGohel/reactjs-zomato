import React, { Component } from 'react';
import { Modal, Form } from 'react-bootstrap'
import ChooseFavorite from './chooseFavorite';

class ProductSelectModel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModel: this.props.isModel,
            product: this.props.product,
            menuId: this.props.menuId,
            isChooseModel: false,
            subBasketTotal: this.props.product.price.toFixed(2),
            addon: { name: "Choose Your drinks", qty: 1, price: 5.00, isChecked: false },
            subItem: [] //{ extraItemTotal: 0, total: 0, chooseItem: null, notes: "", selectedExtraPizza: null },
        }
    }

    modelClose = () => {
        this.props.modelClose();
    };

    onClickChooseFavorite = () => {
        this.setState({ isChooseModel: !this.state.isChooseModel });
    };

    onIncrement = () => {
        let extraItemTotal = 0;
        let subItem = [...this.state.subItem];
        let product = { ...this.state.product };
        let addon = { ...this.state.addon };
        ++product.qty;
        subItem.map(x => {
            x.qty = product.qty;
            x.chooseItem.map(y => {
                y.total = (x.qty * y.qty) * (parseFloat(y.price));
                extraItemTotal += y.total;
            });
            x.extraItemTotal = extraItemTotal.toFixed(2);
        });
        addon.qty = product.qty;
        this.setState({ product: product, subItem: subItem, addon: addon }, () => {
            this.calculationSubBasket();
        });
    };

    onDecrement = () => {
        let extraItemTotal = 0;
        let subItem = [...this.state.subItem];
        let product = { ...this.state.product };
        let addon = { ...this.state.addon };
        if (product.qty != 1) {
            --product.qty;
            subItem.map(x => {
                x.qty = product.qty;
                x.chooseItem.map(y => {
                    y.total = (x.qty * y.qty) * (parseFloat(y.price));
                    extraItemTotal += y.total;
                });
                x.extraItemTotal = extraItemTotal.toFixed(2);
            });
            addon.qty = product.qty;
            this.setState({ product: product, subItem: subItem, addon: addon }, () => {
                this.calculationSubBasket();
            });
        }
    };

    onAddonChange = (isChecked) => {
        let addon = { ...this.state.addon };
        addon.isChecked = isChecked;
        this.setState({ addon: addon }, () => {
            this.calculationSubBasket();
        });
    };

    onClickChooseFavoriteBasket = (item) => {
        let data = [...this.state.subItem];
        item.subBasket.qty = this.state.product.qty;
        data.push(item.subBasket);
        this.setState({ isChooseModel: !this.state.isChooseModel, subItem: data }, () => {
            this.calculationSubBasket();
        });
    };

    calculationSubBasket = () => {
        let extraItemTotal = 0;
        let data = [...this.state.subItem];
        console.log('data:', data)
        let product = { ...this.state.product };
        let addon = { ...this.state.addon };
        let subTotal = 0;
        data.map(x => {
            x.chooseItem.map(y => {
                y.total = (x.qty * y.qty) * (parseFloat(y.price));
                extraItemTotal += y.total;
            });
            x.extraItemTotal = extraItemTotal.toFixed(2);
            let total = x.qty * parseFloat(x.total);
            subTotal += parseFloat(total);
        });
        product.total = product.qty * parseFloat(this.props.product.price);
        addon.total = addon.isChecked ? addon.qty * parseFloat(addon.price) : 0.00;
        let total = parseFloat(subTotal) + parseFloat(product.total) + parseFloat(addon.total);
        this.setState({ subBasketTotal: total.toFixed(2), product: product, addon: addon, subItem: data });
    };

    onClickMainBasket = () => {
        this.props.onGetManiBasket(this.state);
    };

    render() {
        return (
            <>
                {this.state.isChooseModel &&
                    <ChooseFavorite
                        isChooseModel={this.state.isChooseModel}
                        onCloseChooseModel={this.onClickChooseFavorite}
                        onClickChooseBasket={this.onClickChooseFavoriteBasket}>
                    </ChooseFavorite>
                }
                <Modal show={this.state.isModel} onHide={this.modelClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Item To Basket</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="font-weight-bold">
                            <h4>{this.state.product.productName} <span className="text-success">&#xa3; {this.state.product.price.toFixed(2)}</span></h4>
                        </div>
                        <div>
                            <p className="text-muted">{this.state.product.description}</p>
                        </div>
                        <div className="font-weight-bold">
                            Choose Your Favorites
                        </div>
                        {this.state.subItem.map((item, i) => (
                            <div key={i} className="chooseItem-div" >
                                <h6 className="">{item.selectedExtraPizza.name} <span className="text-right text-success ml-5">&#xa3;{item.total}</span></h6>
                                <div className="">{item.selectedExtraPizza.description} </div>
                            </div>
                        ))}
                        <div className="pointer div-choose-item" onClick={() => this.onClickChooseFavorite()}>
                            Choose your second pizza
                        </div>
                        <div className="font-weight-bold">
                            Add on
                        </div>
                        <div className="input-checkbox">
                            <Form.Check
                                type="checkbox"
                                id={`default-`}
                                label={`${this.state.addon.name}`}
                                checked={this.state.addon.isChecked}
                                onChange={(e) => this.onAddonChange(e.target.checked)}
                            />
                            <span className="text-right text-success font-weight-bold ml-5">&#xa3;{this.state.addon.price.toFixed(2)}</span>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            className="btn btn-secondary btn-sm m-2 btn-plus-minus" onClick={() => this.onDecrement()}>
                            <i className="fa fa-minus"></i>
                        </button>

                        <span>{this.state.product.qty}</span>

                        <button
                            className="btn btn-secondary btn-sm m-2 btn-plus-minus" onClick={() => this.onIncrement()}>
                            <i className="fa fa-plus"></i>
                        </button>

                        <button className="btn btn-success" onClick={() => this.onClickMainBasket()}>
                            ADD TO BASKET &#xa3; {this.state.subBasketTotal}
                        </button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ProductSelectModel;