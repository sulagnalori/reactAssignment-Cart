import React from "react";
import "./Cart.css";
import logo from "../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faHeart, faSearch, faShoppingBag, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <div class="d-flex flex-row-reverse bd-highlight top__nav">
        <div class="p-2 bd-highlight">
          {" "}
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Go to Menu Screen
          </Link>
        </div>
        <div class="p-2 bd-highlight">My Account</div>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div class="p-2 bd-highlight">
          <img className="logo_img" src={logo} alt="" />
        </div>
        <div class=" d-flex flex-row align-items-center">
          <div class="p-2 bd-highlight categories">Women</div>
          <div class="p-2 bd-highlight categories">Men</div>
          <div class="p-2 bd-highlight categories">Kids</div>
          <div class="p-2 bd-highlight categories">Home & Living</div>
          <div class="p-2 bd-highlight categories">Books & More</div>
        </div>
        <div class="d-flex flex-row justify-content-around align-items-center">
          <div className="mr-2">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </div>
          <div className="mr-2 ml-4">
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </div>
          <div className="mr-4 ml-4">
            <FontAwesomeIcon icon={faShoppingBag} size="lg" />
          </div>
        </div>
      </div>
      <div className="header">
        <div>
          <FontAwesomeIcon icon={faShoppingBag} size="2x" />
        </div>
        <div className="header__text">Items in your cart</div>
      </div>
      <div className="product__body">
        <div className="col-md-9">
          <div className="product__header row mt-5">
            <p className="col-md-6 product__heading text-left">Product</p>
            <p className="col-md-2 product__heading text-left">Color</p>
            <p className="col-md-2 product__heading text-left">Size</p>
            <p className="col-md-1 product__heading text-left">Quantity</p>
            <p className="col-md-1 product__heading text-right">Price</p>
          </div>
          <div className="product__header row mt-5">
            <div className="col-md-6 product__heading text-left d-flex">
              <img
                className="product__image"
                src="https://images.unsplash.com/photo-1613253619224-bf06d60b2833?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                alt=""
              />
              <div className="ml-3">
                <p className="mb-0 product__heading1">Desire Peach Top</p>
                <p className="product__subHeading">Sold by: Peter Escobar</p>
                <div className="mt-4 button-group">
                  <button className="btn btn-white btn-sm">
                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    Remove Item
                  </button>
                  <button className="btn btn-white btn-sm text-primary">
                    <FontAwesomeIcon icon={faHeart} className="mr-2" />
                    Move to Favourite
                  </button>
                </div>
              </div>
            </div>
            <p className="col-md-2 product__heading2 text-left mt-4">
              Peach <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-2 product__heading2 text-left mt-4">
              Medium <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-1 product__heading2 text-left  mt-4">
              1
              <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-1 product__heading2 text-right  mt-4">$ 15.4</p>
          </div>
          <hr />
          <div className="product__header row mt-5">
            <div className="col-md-6 product__heading text-left d-flex">
              <img
                className="product__image"
                src="https://images.unsplash.com/photo-1613253619224-bf06d60b2833?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                alt=""
              />
              <div className="ml-3">
                <p className="mb-0 product__heading1">Desire Peach Top</p>
                <p className="product__subHeading">Sold by: Peter Escobar</p>
                <div className="mt-4 button-group">
                  <button className="btn btn-white btn-sm">
                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    Remove Item
                  </button>
                  <button className="btn btn-white btn-sm text-primary">
                    <FontAwesomeIcon icon={faHeart} className="mr-2" />
                    Move to Favourite
                  </button>
                </div>
              </div>
            </div>
            <p className="col-md-2 product__heading2 text-left mt-4">
              Peach <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-2 product__heading2 text-left mt-4">
              Medium <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-1 product__heading2 text-left  mt-4">
              1
              <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-1 product__heading2 text-right  mt-4">$ 15.4</p>
          </div>
          <hr />
          <div className="product__header row mt-5">
            <div className="col-md-6 product__heading text-left d-flex">
              <img
                className="product__image"
                src="https://images.unsplash.com/photo-1613253619224-bf06d60b2833?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                alt=""
              />
              <div className="ml-3">
                <p className="mb-0 product__heading1">Desire Peach Top</p>
                <p className="product__subHeading">Sold by: Peter Escobar</p>
                <div className="mt-4 button-group">
                  <button className="btn btn-white btn-sm">
                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    Remove Item
                  </button>
                  <button className="btn btn-white btn-sm text-primary">
                    <FontAwesomeIcon icon={faHeart} className="mr-2" />
                    Move to Favourite
                  </button>
                </div>
              </div>
            </div>
            <p className="col-md-2 product__heading2 text-left mt-4">
              Peach <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-2 product__heading2 text-left mt-4">
              Medium <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-1 product__heading2 text-left  mt-4">
              1
              <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-1 product__heading2 text-right  mt-4">$ 15.4</p>
          </div>
          <hr />
          <div className="product__header row mt-5">
            <div className="col-md-6 product__heading text-left d-flex">
              <img
                className="product__image"
                src="https://images.unsplash.com/photo-1613253619224-bf06d60b2833?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                alt=""
              />
              <div className="ml-3">
                <p className="mb-0 product__heading1">Desire Peach Top</p>
                <p className="product__subHeading">Sold by: Peter Escobar</p>
                <div className="mt-4 button-group">
                  <button className="btn btn-white btn-sm">
                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    Remove Item
                  </button>
                  <button className="btn btn-white btn-sm text-primary">
                    <FontAwesomeIcon icon={faHeart} className="mr-2" />
                    Move to Favourite
                  </button>
                </div>
              </div>
            </div>
            <p className="col-md-2 product__heading2 text-left mt-4">
              Peach <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-2 product__heading2 text-left mt-4">
              Medium <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-1 product__heading2 text-left  mt-4">
              1
              <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-1 product__heading2 text-right  mt-4">$ 15.4</p>
          </div>
          <hr />
          <div className="product__header row mt-5">
            <div className="col-md-6 product__heading text-left d-flex">
              <img
                className="product__image"
                src="https://images.unsplash.com/photo-1613253619224-bf06d60b2833?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                alt=""
              />
              <div className="ml-3">
                <p className="mb-0 product__heading1">Desire Peach Top</p>
                <p className="product__subHeading">Sold by: Peter Escobar</p>
                <div className="mt-4 button-group">
                  <button className="btn btn-white btn-sm">
                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    Remove Item
                  </button>
                  <button className="btn btn-white btn-sm text-primary">
                    <FontAwesomeIcon icon={faHeart} className="mr-2" />
                    Move to Favourite
                  </button>
                </div>
              </div>
            </div>
            <p className="col-md-2 product__heading2 text-left mt-4">
              Peach <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-2 product__heading2 text-left mt-4">
              Medium <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-1 product__heading2 text-left  mt-4">
              1
              <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-1 product__heading2 text-right  mt-4">$ 15.4</p>
          </div>
          <hr />
          <div className="product__header row mt-5">
            <div className="col-md-6 product__heading text-left d-flex">
              <img
                className="product__image"
                src="https://images.unsplash.com/photo-1613253619224-bf06d60b2833?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                alt=""
              />
              <div className="ml-3">
                <p className="mb-0 product__heading1">Desire Peach Top</p>
                <p className="product__subHeading">Sold by: Peter Escobar</p>
                <div className="mt-4 button-group">
                  <button className="btn btn-white btn-sm">
                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    Remove Item
                  </button>
                  <button className="btn btn-white btn-sm text-primary">
                    <FontAwesomeIcon icon={faHeart} className="mr-2" />
                    Move to Favourite
                  </button>
                </div>
              </div>
            </div>
            <p className="col-md-2 product__heading2 text-left mt-4">
              Peach <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-2 product__heading2 text-left mt-4">
              Medium <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-1 product__heading2 text-left  mt-4">
              1
              <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-1 product__heading2 text-right  mt-4">$ 15.4</p>
          </div>
          <hr />
          <div className="product__header row mt-5">
            <div className="col-md-6 product__heading text-left d-flex">
              <img
                className="product__image"
                src="https://images.unsplash.com/photo-1613253619224-bf06d60b2833?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                alt=""
              />
              <div className="ml-3">
                <p className="mb-0 product__heading1">Desire Peach Top</p>
                <p className="product__subHeading">Sold by: Peter Escobar</p>
                <div className="mt-4 button-group">
                  <button className="btn btn-white btn-sm">
                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    Remove Item
                  </button>
                  <button className="btn btn-white btn-sm text-primary">
                    <FontAwesomeIcon icon={faHeart} className="mr-2" />
                    Move to Favourite
                  </button>
                </div>
              </div>
            </div>
            <p className="col-md-2 product__heading2 text-left mt-4">
              Peach <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-2 product__heading2 text-left mt-4">
              Medium <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-1 product__heading2 text-left  mt-4">
              1
              <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <p className="col-md-1 product__heading2 text-right  mt-4">$ 15.4</p>
          </div>
          <hr />
        </div>

        <div className="col-md-3  mt-5">
          <div className="cart">
            <h2>Summary</h2>
            <hr />
            <div className="d-flex justify-content-between p-2">
              <p className="mb-0 cart__text">SUBTOTAL</p>
              <p className="mb-0 font-weight-bold">1500</p>
            </div>
            <div className="d-flex justify-content-between p-2">
              <p className="mb-0 cart__text">ESTIMATED TAX</p>
              <p className="mb-0 font-weight-bold">$100</p>
            </div>
            <div className="d-flex justify-content-between p-2">
              <p className="cart__text">SHIPPING CHARGES</p>
              <p className="font-weight-bold">FREE</p>
            </div>
            <hr />
            <div class="input-group mb-3">
              <input type="text" placeholder="Enter Coupon Code" class="form-control" />
              <button class="btn btn-primary" type="button" id="button-addon2">
                Apply Coupon
              </button>
            </div>
            <hr />
            <div className="d-flex justify-content-between p-2">
              <p className="mb-0 cart__text2 font-weight-bold">Total</p>
              <p className="mb-0 font-weight-bold">$1048</p>
            </div>
          </div>
          <button className="btn btn-sm button_proceed btn-block">Proceed to Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
