import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignRight, faArrowRight, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  const [Products, setProducts] = useState([]);
  const [CartItems, setCartItems] = useState([]);
  const [Price, setPrice] = useState(0);

  useEffect(() => {
    loadProducts();
  }, []);

  const getProducts = async () => {
    return await axios.get("https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7");
  };
  const loadProducts = async () => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  };
  const removeFromCart = (id) => {
    for (var i in CartItems) {
      if (CartItems[i].id === id) {
        if (CartItems[i].count === 1) {
          setPrice(Price - CartItems[i].price);
          const index = CartItems.map((item) => {
            return item.id;
          }).indexOf(id);
          CartItems.splice(index, 1);
          setCartItems(CartItems);
          console.log(CartItems);
        } else {
          CartItems[i].count = CartItems[i].count - 1;
          setPrice(Price - CartItems[i].price);
        }
      }
    }
  };

  const addToCart = (id) => {
    let data = Products.filter((x) => x.id === id);
    data[0]["count"] = 1;
    const index = CartItems.some((x) => x.id === id);
    if (!index) {
      setCartItems([...CartItems, ...data]);
      setPrice(Price + data[0].price);
    } else {
      alert("Item already added in the cart");
    }
  };
  const addMoreItems = (id) => {
    for (var i in CartItems) {
      if (CartItems[i].id === id) {
        CartItems[i].count = CartItems[i].count + 1;

        console.log(CartItems[i].count);
        setPrice(Price + CartItems[i].price);
      }
    }
  };
  return (
    <div>
      <nav className="navbar  navbar-dark navbar__header fixed-top">
        <div className="container-fluid">
          <p className="navbar-brand navbar__header_text">McDonald's</p>
          <p className="navbar-brand">
            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              Go to Cart Screen
            </Link>
          </p>
        </div>
        <div className="d-flex justify-content-start ml-3" style={{ marginTop: "-20px" }}>
          <p className="navbar-brand navbar__subText">&#9733;4.3{" |"} </p>
          <p className="navbar-brand navbar__subText"> 35 mins | </p>
          <p className="navbar-brand navbar__subText"> &#8377; 400 for two</p>
        </div>
        <div className="navbar__compnents row mt-3 ml-3 form-group col-md-12 pl-0">
          <input className="form-control col-md-2" type="text" placeholder="Search for dishes..." />
          <button className="btn btn-white bg-white col-md-1 ml-2">Veg Only</button>
          <button className="btn btn-white bg-white col-md-1 ml-2">Favourite</button>
        </div>
      </nav>
      <div className="d-flex justify-contents-betweeen container-fluid ml-4" style={{ marginTop: "150px" }}>
        <div className="col-md-7  m-2">
          {Products.map((p) => (
            <div className="row card__header mt-4" key={p.id}>
              <div className="card-body col-md-7 ">
                <img
                  height="16"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACbCAMAAABCvxm+AAAAZlBMVEX///8AgAB/v3+v16+Hw4fH48c3mzcWixbP58+327f7/fun06eXy5fp9Olfr18+nz5Pp0+/37/v9+8qlSqfz5/i8OKPx48hkCEPhw/b7dtns2c4nDiRyJF3u3cejx7U6dRYrFhxuHF76C9RAAADxElEQVR4nO3bi3aiMBAG4IwoIirUC4j2Yvv+L1mt66lbd5KZyQzSs/lfgO+EJCRh4mC4cY8GeJJssgzf5oaWZJMl2WRJNlmSTZZkkyXZZEk2WZJNlmSTJdlk+W9sy0k2X7SjdjGfTZbDsRVtlXdwm+65ejk+3NZs36fw70yrbfM4W9PWiOua+kXIi7Mdx3kAdkk+3vdsKxc7kuyc3aLs05bRZV+6rDdbEepm96mLXmzLA1t2zmFtb5thc0Yo05mxrXwVys55pY8JgW3J72m3qclfM75t/xZFA3ijTsVs217a1W5wxImYayviaacRQcMxbUXneyYdR5rpeLZGo9W+cJQ+x7KtN0o0gA1hFubY1rRFBy15eJ7j2CpFGkCladuq0gC2erajzhD9ThfaTZBtpd44uGYT6HJk20idBjDSsTUGNAD/LEe1PZnYnjRsMxMagHepSbTpD4RL8nhbZkQD8G2+aDarZvM3HMlm12zehiPZ7JrN23AU296QBoCvgSk2i0/Cd/CPA8XGO/fgZhNjW5nSANC9A8Fm+0o9L5Vgi9vGh1PLbaUxDQBbxoVt1t0NYCW2WXc3vMOFbTYrt9tgq7iwLfbYKBxshgva7IcCOhiCNpuNwt9Btg1B26QH20Ros9op3AbZNQRt8x5sc6Ft0YNtIbSNe7C1QlvMvwRqxgNuN6ltyP1tyOPUcm96jXR+G/J3Yd2DDTnPD9qc9jHvfTrkyWGb5YHDJdixQ9hmv+7F/jSEba25DflkEWz2AxXb2Idt5otybCgMYV+PHpYTbNYbVORLT7IVxraYcyTjGS7q/M34paKv9Nef9zrNf+E/E3lObrq+RNaVZFtpdxq98/zfJdkMNw2+n/Y0W6lVs/IzU99vcZrNrOG8tQ5EW2kzVL2/T8n/xG1WSv6SKapNuajmkoP/kWTbWn8eeQvUS5FtBm8V2ZYKbOqf/EDlCq+OS3cBjP7GEtkUS/NIxXkcm2v0xsOOUOXLsmkU0F5CqlTl2bSK4IKlbxJbfFX0OcTiY67NNfEDYkMs2mbb4qtVa+olBr7NlbJ7FdccyJcEBDbnMvmI6Bi3ZkQ210jfa865qiWzubKVNF3Xsi5CCW3OLd/ZtIp5f1FsOy2aeN/+OrQk0rQ5t6J3uxwrArGynUYsbSbOOVeftGzOFR+h7//0Q3JRUcN2SnbAW29zYF8DVLWdUq7a6vnu3m674l+e1LddspzM/tx3ziasm3892JSTbLIkmyzJJkuyyZJssiSbLMkmS7LJkmyyJJssv8Q2zCSbLMkmyycYVz02m2n0fAAAAABJRU5ErkJggg=="
                  alt=""
                />
                <h6>{p.item_name}</h6>
                <p>&#8377; {p.price}</p>
                <p className="mt-0">The combo of favourites! Get 2 McVeggie +2 </p>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-3 text-center">
                <img
                  className="card__image"
                  src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
                <div className="d-flex justify-contents-around align-items-center border-1 cart__buttons">
                  <button className="btn btn-white text-success font-weight-bold" onClick={() => addToCart(p.id)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-5 mt-5 mr-5" style={{ position: "fixed", right: " 0", left: "62%" }}>
          <h2 className="mb-0">
            Cart <FontAwesomeIcon icon={faShoppingBag} color="black" size="1x" />
          </h2>
          <p className="cart__text">{CartItems.length} ITEMS</p>
          <div style={{ height: CartItems.length > 0 ? "300px" : "0", overflowY: "auto" }}>
            {CartItems.map((c) => (
              <div className="row mt-3" key={c.id}>
                <div className="col-md-7">
                  <p>
                    <span>
                      <img
                        height="16"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACbCAMAAABCvxm+AAAAZlBMVEX///8AgAB/v3+v16+Hw4fH48c3mzcWixbP58+327f7/fun06eXy5fp9Olfr18+nz5Pp0+/37/v9+8qlSqfz5/i8OKPx48hkCEPhw/b7dtns2c4nDiRyJF3u3cejx7U6dRYrFhxuHF76C9RAAADxElEQVR4nO3bi3aiMBAG4IwoIirUC4j2Yvv+L1mt66lbd5KZyQzSs/lfgO+EJCRh4mC4cY8GeJJssgzf5oaWZJMl2WRJNlmSTZZkkyXZZEk2WZJNlmSTJdlk+W9sy0k2X7SjdjGfTZbDsRVtlXdwm+65ejk+3NZs36fw70yrbfM4W9PWiOua+kXIi7Mdx3kAdkk+3vdsKxc7kuyc3aLs05bRZV+6rDdbEepm96mLXmzLA1t2zmFtb5thc0Yo05mxrXwVys55pY8JgW3J72m3qclfM75t/xZFA3ijTsVs217a1W5wxImYayviaacRQcMxbUXneyYdR5rpeLZGo9W+cJQ+x7KtN0o0gA1hFubY1rRFBy15eJ7j2CpFGkCladuq0gC2erajzhD9ThfaTZBtpd44uGYT6HJk20idBjDSsTUGNAD/LEe1PZnYnjRsMxMagHepSbTpD4RL8nhbZkQD8G2+aDarZvM3HMlm12zehiPZ7JrN23AU296QBoCvgSk2i0/Cd/CPA8XGO/fgZhNjW5nSANC9A8Fm+0o9L5Vgi9vGh1PLbaUxDQBbxoVt1t0NYCW2WXc3vMOFbTYrt9tgq7iwLfbYKBxshgva7IcCOhiCNpuNwt9Btg1B26QH20Ros9op3AbZNQRt8x5sc6Ft0YNtIbSNe7C1QlvMvwRqxgNuN6ltyP1tyOPUcm96jXR+G/J3Yd2DDTnPD9qc9jHvfTrkyWGb5YHDJdixQ9hmv+7F/jSEba25DflkEWz2AxXb2Idt5otybCgMYV+PHpYTbNYbVORLT7IVxraYcyTjGS7q/M34paKv9Nef9zrNf+E/E3lObrq+RNaVZFtpdxq98/zfJdkMNw2+n/Y0W6lVs/IzU99vcZrNrOG8tQ5EW2kzVL2/T8n/xG1WSv6SKapNuajmkoP/kWTbWn8eeQvUS5FtBm8V2ZYKbOqf/EDlCq+OS3cBjP7GEtkUS/NIxXkcm2v0xsOOUOXLsmkU0F5CqlTl2bSK4IKlbxJbfFX0OcTiY67NNfEDYkMs2mbb4qtVa+olBr7NlbJ7FdccyJcEBDbnMvmI6Bi3ZkQ210jfa865qiWzubKVNF3Xsi5CCW3OLd/ZtIp5f1FsOy2aeN/+OrQk0rQ5t6J3uxwrArGynUYsbSbOOVeftGzOFR+h7//0Q3JRUcN2SnbAW29zYF8DVLWdUq7a6vnu3m674l+e1LddspzM/tx3ziasm3892JSTbLIkmyzJJkuyyZJssiSbLMkmS7LJkmyyJJssv8Q2zCSbLMkmyycYVz02m2n0fAAAAABJRU5ErkJggg=="
                        alt=""
                      />
                    </span>
                    <span>{c.item_name}</span>
                  </p>
                </div>
                <div className="col-md-2">
                  <div className="d-flex justify-contents-around align-items-center cart__buttons2">
                    <button className="btn btn-white font-weight-bold" onClick={() => removeFromCart(c.id)}>
                      -
                    </button>
                    <p className="mb-0 text-success font-weight-bold">{c.count}</p>
                    <button className="btn btn-white text-success font-weight-bold" onClick={() => addMoreItems(c.id)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="col-md-2">
                  <p className="mt-2">&#8377; {c.price * c.count}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <p className="subtotal mb-0">Subtotal</p>
              <p className="subtotal2">Extra charges may apply</p>
            </div>
            <div className="col-md-6">
              <p className="subtotal">&#8377; {Price}</p>
            </div>
          </div>
          <div>
            <button className="custom__button btn">
              CHECKOUT <FontAwesomeIcon icon={faArrowRight} />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
