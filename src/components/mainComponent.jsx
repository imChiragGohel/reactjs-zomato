import React, { Component } from "react";
import ProductComponent from "../Common_Components/productComponent";

class MainComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menus: [
                {
                    id: 1,
                    menuName: "Bundles",
                    products: [
                        {
                            pid: 1,
                            productName: "Family Bundle",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 20.00,
                            qty: 1
                        },
                        {
                            pid: 2,
                            productName: "Meal Deal X1",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 10.00,
                            qty: 1
                        },
                        {
                            pid: 3,
                            productName: "Meal Deal X2",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 20.00,
                            qty: 1
                        },
                        {
                            pid: 4,
                            productName: "Meal Deal X3",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 10.00,
                            qty: 1
                        },
                        {
                            pid: 5,
                            productName: "Meal Deal X4",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 30.00,
                            qty: 1
                        }
                    ]
                },
                {
                    id: 2,
                    menuName: "Starters",
                    products: [
                        {
                            pid: 1,
                            productName: "Family Bundle",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 20.00,
                            qty: 1
                        },
                        {
                            pid: 2,
                            productName: "Meal Deal X1",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 10.00,
                            qty: 1
                        },
                        {
                            pid: 3,
                            productName: "Meal Deal X2",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 20.00,
                            qty: 1
                        },
                        {
                            pid: 4,
                            productName: "Meal Deal X3",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 10.00,
                            qty: 1
                        },
                        {
                            pid: 5,
                            productName: "Meal Deal X4",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 30.00,
                            qty: 1
                        }
                    ]
                },
                {
                    id: 3,
                    menuName: "Main Dishes",
                    products: [
                        {
                            pid: 1,
                            productName: "Family Bundle",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 20.00,
                            qty: 1
                        },
                        {
                            pid: 2,
                            productName: "Meal Deal X1",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 10.00,
                            qty: 1
                        },
                        {
                            pid: 3,
                            productName: "Meal Deal X2",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 20.00,
                            qty: 1
                        },
                        {
                            pid: 4,
                            productName: "Meal Deal X3",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 10.00,
                            qty: 1
                        },
                        {
                            pid: 5,
                            productName: "Meal Deal X4",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 30.00,
                            qty: 1
                        }
                    ]
                },
                {
                    id: 4,
                    menuName: "Sides",
                    products: [
                        {
                            pid: 1,
                            productName: "Family Bundle",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 20.00,
                            qty: 1
                        },
                        {
                            pid: 2,
                            productName: "Meal Deal X1",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 10.00,
                            qty: 1
                        },
                        {
                            pid: 3,
                            productName: "Meal Deal X2",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 20.00,
                            qty: 1
                        },
                        {
                            pid: 4,
                            productName: "Meal Deal X3",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 10.00,
                            qty: 1
                        },
                        {
                            pid: 5,
                            productName: "Meal Deal X4",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 30.00,
                            qty: 1
                        }
                    ]
                },
                {
                    id: 5,
                    menuName: "Desserts",
                    products: [
                        {
                            pid: 1,
                            productName: "Family Bundle",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 20.00,
                            qty: 1
                        },
                        {
                            pid: 2,
                            productName: "Meal Deal X1",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 10.00,
                            qty: 1
                        },
                        {
                            pid: 3,
                            productName: "Meal Deal X2",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 20.00,
                            qty: 1
                        },
                        {
                            pid: 4,
                            productName: "Meal Deal X3",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 10.00,
                            qty: 1
                        },
                        {
                            pid: 5,
                            productName: "Meal Deal X4",
                            description: "Loireum ismprin goeiod dvkSmd ismprin goeiod dvkSmd ismprin goeiod dvkSmd",
                            price: 30.00,
                            qty: 1
                        }
                    ]
                },
            ],
            mainBasket: [],
            mainTotal: 0
        }
    };

    onMainBasket = (item) => {
        let mainBasket = [...this.state.mainBasket];
        let total = 0;
        mainBasket.push(item);
        mainBasket.map(x => {
            total += parseFloat(x.subBasketTotal)
        });
        this.setState({ mainBasket: mainBasket, mainTotal: total.toFixed(2) });
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {this.state.menus.map((menu, i) => (
                                <li key={i} className="nav-item">
                                    {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                                    <a className="nav-link" href={`#${menu.id}-menu`}>{menu.menuName}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-8">
                        <div className="row pl-4">
                            {this.state.menus.map((menu, i) => (
                                <>
                                    <div key={i} className="col-12" id={`${menu.id}-menu`}>
                                        <span className=""><h4>{menu.menuName}</h4></span>
                                    </div>
                                    {menu.products.map((product, j) => (
                                        <div key={`${j}-id`} className="col-sm-6">
                                            <ProductComponent product={product} menuId={menu.id} onMainBasket={this.onMainBasket}></ProductComponent>
                                        </div>
                                    ))}
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="col-4 pr-5">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Your basket</h3>
                                {(this.state.mainBasket && this.state.mainBasket.length > 0) && this.state.mainBasket.map((mainCategory, i) => (
                                    <React.Fragment>
                                        <div>
                                            <h6>
                                                <span className="card-text mr-2">{mainCategory.product.qty}</span>
                                                <span className="card-text mr-2">{mainCategory.product.productName}</span>
                                                <span className="card-text mr-2">&nbsp;</span>
                                                <span className="text-right text-success ml-2">&#xa3;{mainCategory.product.total ? mainCategory.product.total.toFixed(2) : mainCategory.product.price.toFixed(2)}</span>
                                            </h6>
                                        </div>
                                        {mainCategory.subItem.map((subitem, j) => (
                                            <React.Fragment>
                                                <div className="text-muted">
                                                    <span className="card-text mr-2">&nbsp;</span>
                                                    <span className="card-text mr-2">{subitem.selectedExtraPizza.name}</span>
                                                </div>
                                                {subitem.chooseItem.map((chooseitem, k) => (
                                                    <div className="text-muted">
                                                        <span className="card-text mr-2">&nbsp;</span>
                                                        <span className="card-text mr-3">{chooseitem.name}</span>
                                                        {/* <span className="card-text mr-3">{chooseitem.qty}</span> */}
                                                        <span className="card-text mr-3">&nbsp;</span>
                                                        <span className="text-right text-success">&#xa3;{chooseitem.total.toFixed(2)}</span>
                                                    </div>
                                                ))}
                                                {subitem.notes && <div>
                                                    <span className="card-text mr-2">&nbsp;</span>
                                                    <span className="card-text mr-3">Nots:</span>
                                                    <span className="card-text">{subitem.notes}</span>
                                                </div>}
                                            </React.Fragment>
                                        ))}
                                        {mainCategory.addon.isChecked && <div>
                                            <span className="card-text mr-2">&nbsp;</span>
                                            <span className="card-text mr-3">Add on: Drinks</span>
                                            {/* <span className="card-text mr-3">{mainCategory.addon.qty}</span> */}
                                            <span className="card-text mr-3">&nbsp;</span>
                                            <span className="text-right text-success ml-2">&#xa3;{mainCategory.addon.total.toFixed(2)}</span>
                                        </div>}
                                    </React.Fragment>
                                ))}
                                {(this.state.mainBasket && this.state.mainBasket.length == 0) &&
                                    <div className="text-center text-muted mb-5">
                                        No added items yet
                                    </div>
                                }

                                <a href="#" className="btn btn-success">CHECKOUT &#xa3;{this.state.mainTotal ? this.state.mainTotal : "0.00"}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainComponent;