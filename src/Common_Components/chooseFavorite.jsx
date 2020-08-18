import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class ChooseFavorite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChooseModel: this.props.isChooseModel,
            currentTab: 1,
            notes: "",
            subBasket: { extraItemTotal: 0, total: 0, chooseItem: null, notes: "", selectedExtraPizza: null, qty: 1 },
            extraPizza: [
                {
                    eid: 1,
                    name: "Margerita",
                    description: "Tomato,Bassila,Mozzarelia",
                    //price: 10.00
                },
                {
                    eid: 2,
                    name: "Margerita",
                    description: "Tomato,Bassila,Mozzarelia",
                    //price: 10.00
                },
                {
                    eid: 3,
                    name: "Margerita",
                    description: "Tomato,Bassila,Mozzarelia",
                    //price: 10.00
                },
                {
                    eid: 4,
                    name: "Margerita",
                    description: "Tomato,Bassila,Mozzarelia",
                    //price: 10.00
                }
            ],
            extraItem: [{
                eid: 1,
                name: "French Fries",
                price: "5.00",
                qty: 0
            },
            {
                eid: 1,
                name: "Green Salad",
                price: "5.00",
                qty: 0
            },
            {
                eid: 1,
                name: "Tomato Brushchetta",
                price: "5.00",
                qty: 0
            }]
        }
    }

    onClickDecreement = (index) => {
        let data = [...this.state.extraItem];
        if (data[index].qty != 0) {
            --data[index].qty
            this.setState({ extraItem: data }, () => {
                this.totalBasket();
            });
        }
    };

    onClickIncrement = (index) => {
        let data = [...this.state.extraItem];
        ++data[index].qty
        this.setState({ extraItem: data }, () => {
            this.totalBasket();
        });
    };

    totalBasket = () => {
        let subBasket = { ...this.state.subBasket };
        let extraItemTotal = 0;
        let chooseItem = [];
        this.state.extraItem.map(x => {
            if (x.qty != 0) {
                x.total = parseFloat(x.price) * x.qty;
                extraItemTotal += x.total;
                chooseItem.push(x);
            }
        });
        let total = extraItemTotal + subBasket.selectedExtraPizza.price;
        subBasket.extraItemTotal = extraItemTotal.toFixed(2);
        subBasket.chooseItem = chooseItem;
        subBasket.total = extraItemTotal.toFixed(2);
        //subBasket.total = total.toFixed(2);
        this.setState({ subBasket: subBasket });
    };

    onChangeAddtionalNotes = (value) => {
        let data = { ...this.state.subBasket };
        data.notes = value;
        this.setState({ notes: value, subBasket: data });
    };

    onSelectExtraPizza = (item, index) => {
        let data = { ...this.state.subBasket };
        data.selectedExtraPizza = item;
        this.setState({ currentTab: 2, subBasket: data }, () => {
            this.totalBasket();
        });
    };

    onClickAddBasket = () => {
        this.props.onClickChooseBasket(this.state);
    };

    render() {
        const { onCloseChooseModel } = this.props;

        return (
            <>
                <Modal show={this.state.isChooseModel} onHide={onCloseChooseModel}>
                    <Modal.Header closeButton>
                        <Modal.Title>Choose your favorites</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="tab">
                            <div className={`tab-item ${this.state.currentTab == 1 ? 'tab-active' : ''}`} onClick={() => this.setState({ currentTab: 1 })}>
                                Pizza
                            </div>
                            <div className={`tab-item ${this.state.currentTab == 2 ? 'tab-active' : ''}`} onClick={() => this.setState({ currentTab: this.state.subBasket.selectedExtraPizza ? 2 : 1 })}>
                                Extra
                            </div>
                        </div>
                        {this.state.currentTab == 1 &&
                            <React.Fragment>
                                <div className="pointer div-choose-item mb-2">
                                    Choose max 1 item
                                </div>
                                {this.state.extraPizza.map((item, i) => (
                                    <div className="extraItem-div" key={i} onClick={() => this.onSelectExtraPizza(item, i)}>
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                ))}
                            </React.Fragment>
                        }
                        {this.state.currentTab == 2 &&
                            <React.Fragment>
                                {this.state.extraItem.map((item, i) => (
                                    <div className="extraItem-div" key={i}>
                                        <h5 className="card-title">{item.name}
                                            <button
                                                className="btn btn-secondary btn-sm m-2 btn-plus-minus" onClick={() => this.onClickDecreement(i)}>
                                                <i className="fa fa-minus"></i>
                                            </button>

                                            <span>{item.qty}</span>

                                            <button
                                                className="btn btn-secondary btn-sm m-2 btn-plus-minus" onClick={() => this.onClickIncrement(i)}>
                                                <i className="fa fa-plus"></i>
                                            </button>

                                            &#xa3;{item.price}
                                        </h5>
                                    </div>
                                ))}
                                <div className="mt-2">
                                    <textarea className="form-control" placeholder="Additional Notes" row={4} value={this.state.notes} onChange={(e) => this.onChangeAddtionalNotes(e.target.value)}></textarea>
                                </div>
                            </React.Fragment>
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-success" onClick={() => this.onClickAddBasket()} disabled={this.state.subBasket.selectedExtraPizza && this.state.subBasket.total != 0 ? false : true}>
                            ADD TO BASKET &#xa3; {this.state.subBasket.total ? this.state.subBasket.total : "0.00"}
                        </button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ChooseFavorite;