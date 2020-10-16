import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Burger from '../../components/burger';
import Builder from '../../components/builder';
import Checkout from '../../components/checkout';
import OrderList from '../../components/orderList';
import navigateTo from '../../helper/navigateTo';
import Constants from '../../constants/index';
import {
  getAllOrders,
  createOrder
} from '../../store/actions';

const Home = (props = {}) => {
  const [ingredients, setIngredients] = useState({
    cheese: 0,
    lettuce: 0,
    beefBacon: 0,
    meat: 0
  });
  const [ingredientsOrder, setIngredientsOrder] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { createOrder, getAllOrders } = props;
  useEffect(() => {
    getAllOrders();
  }, [createOrder, getAllOrders]);
  const onChangeBurgerIngredients = (type, isMore) => {

    const newIngredients = {
      ...ingredients
    };
    isMore ? ++newIngredients[type] : --newIngredients[type];
    setIngredients(newIngredients);

    const lastIndexOfIngre = ingredientsOrder.lastIndexOf(type);
    const newIngredientsOrder = [
      ...ingredientsOrder
    ];
    if (isMore) {
      newIngredientsOrder.push(type);
    } else if (!isMore && lastIndexOfIngre > -1) {
      newIngredientsOrder.splice(lastIndexOfIngre, 1);
    }
    setIngredientsOrder(newIngredientsOrder);
  };
  
  const OnOrderConfirm = () => {
    const payload = {
      payment: "RM21.4",
      burger: {
        cheese: 2,
        lettuce: 3,
        beefBacon: 2,
        meat: 1
      }
    };
    createOrder(payload).then(res => {
      const { pagePath } = Constants;
      if (res && res.status === 'success') {
        navigateTo(pagePath.ORDER_PREPARING)
      };
    });
  };
  const {allOrders = []} = props;
  return (
    <>
      <OrderList allOrders={allOrders} />
      <Checkout
        showModal={showModal}
        setShowModal={setShowModal}
        ingredients={ingredients}
        OnOrderConfirm={OnOrderConfirm}
      />
      <div className="home container my-5">
        <div className="row">
          <Burger
            ingredientsOrder={ingredientsOrder}
          />
          <Builder
            onChangeBurgerIngredients={onChangeBurgerIngredients}
            ingredientsOrder={ingredientsOrder}
            setShowModal={setShowModal}
          />
        </div>
      </div>

    </>
  );
};
const mapStateToProps = (state = {}) => {
  return {
    allOrders: (state && state.orders && state.orders.all) || []
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllOrders: () => dispatch(getAllOrders()),
    createOrder: (payload) => dispatch(createOrder(payload))
  }
};
// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// https://codepen.io/honeybadger126/pen/KBXzpq
// https://placeit.net/c/design-templates/stages/youtube-banner-maker-for-food-channels-399?checkboxText_T2=true&checkboxText_T4=true&textText_T4=order%20now&pos-size_T1=0.3067_0.4668_0.1226_0.0616_d&pos-size_T2=0.5629_0.4668_0.1303_0.0616_d&pos-size_T3=0.8469_0.4810_0.1129_0.0355_d&textText_T3=&checkboxText_T3=false&textText_T2=Builder%20&checkboxText_T1=true&textText_T1=Burgers&colorFolder_Background=%23b5b5b5

// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>