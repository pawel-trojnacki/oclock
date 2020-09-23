import React, { useState, useCallback, useContext } from 'react';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import { cartTotal, updateCart, getCart } from '../utils/cart';
// import { CartContext } from '../context/CartContext';
import Checkout from '../components/Checkout';

const CartPage = () => {
  // const { cart, addToCart } = useContext(CartContext);
  const cart = getCart();
  const totalPrice = cartTotal(cart);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [showCheckout, setShowCheckout] = useState(false);
  return (
    <Layout>
      <SEO title="Cart" />
      <h1>Cart</h1>
      {cart && cart.length > 0 ? (
        <>
          <ul>
            {cart.map(product => {
              const price = (product.price_in_cents / 100).toFixed(2);
              return (
                <li key={product.id}>
                  <h2>{product.name}</h2>
                  <p>
                    Quantity:
                    <span
                      onClick={() => {
                        updateCart(product, -1);
                        forceUpdate();
                      }}
                    >
                      -
                    </span>
                    <span>{product.quantity}</span>
                    <span
                      onClick={() => {
                        updateCart(product, 1);
                        forceUpdate();
                      }}
                    >
                      +
                    </span>
                  </p>
                  <p>{`$${price}`}</p>
                  <Img fixed={product.image.childImageSharp.fixed} />
                </li>
              );
            })}
          </ul>
          <h3>{totalPrice}</h3>

          <div>
            {cart && cart.length > 0 && (
              <button onClick={() => setShowCheckout(true)}>Checkout</button>
            )}
            {showCheckout && <Checkout />}
          </div>
        </>
      ) : (
        <div>
          <p>Your cart is currently empty</p>
        </div>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fuga
        obcaecati mollitia aperiam odio, voluptates quos atque nisi quasi fugiat
        quam iure hic temporibus similique repellat perspiciatis. Maiores cum
        delectus enim sed quasi eveniet! Magni similique, itaque velit soluta
        ratione doloremque fugiat, deserunt hic, nemo illo accusamus! Sequi,
        impedit id fugit quos, autem cupiditate quo obcaecati eum alias facilis
        dignissimos a labore tempore ducimus esse asperiores quis! Neque saepe
        rerum ipsam eligendi error veniam ex? Voluptates exercitationem,
        corrupti debitis cum aliquid commodi, quasi tenetur asperiores in quam
        sed officia delectus vero temporibus facilis consectetur beatae ex. Quia
        itaque veniam sed neque cumque quidem mollitia repellat eaque minus
        doloribus! Quia eaque cum assumenda qui, temporibus tempore. Ut
        excepturi repudiandae porro aspernatur, dignissimos, illum autem
        cupiditate quod, blanditiis magnam temporibus facilis? Dolorum quidem
        officiis magni quasi doloremque iusto provident, nostrum facere sequi
        earum, error praesentium facilis temporibus quisquam tempore libero et
        possimus, aspernatur labore magnam. Nesciunt sint atque maiores rerum
        est, dolorum eaque quam animi. Tempore aut doloribus natus molestias
        inventore, nihil voluptatibus possimus facere illum ipsa ipsam
        reiciendis optio necessitatibus, a illo molestiae modi provident vel
        beatae iste aperiam! Incidunt non voluptatem magni, ipsam earum commodi
        repudiandae tempore nam ab ducimus aliquam facilis quod libero labore
        unde delectus pariatur odio fugiat facere sapiente fuga dolorum tenetur
        temporibus sequi? Sapiente quas ad dolores, minus perferendis sunt
        similique. Cum culpa harum nesciunt hic, labore accusamus aliquid
        delectus recusandae, itaque earum ipsum totam magni placeat veniam.
        Velit in voluptatem, commodi labore quidem at minus hic qui? Eos aliquam
        culpa doloremque pariatur est quis dignissimos quae a tenetur ex, odit
        itaque eveniet obcaecati nemo cupiditate placeat velit, architecto sint
        similique accusamus autem temporibus? Omnis, numquam! Repellendus
        deleniti tenetur minus, molestiae enim earum sed harum ipsum recusandae
        quibusdam doloribus non voluptatum quia error expedita eligendi rem!
      </p>
    </Layout>
  );
};

export default CartPage;
