import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async() => {
            const response = await fetch(process.env.REACT_APP_CART_URL);

            if(!response.ok){
                throw new Error('Could not fetch cart data');
            }
            
            const responseData = await response.json();
            return responseData;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch (error) {
            dispatch(
            uiActions.setNotification({
                status:'error',
                title: 'Error...',
                message: 'Fetch cart data failed'
            }) )
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
          dispatch(
          uiActions.setNotification({
            status:'pending',
            title: 'Sending...',
            message: 'Sending cart data'
          }) );

          const sendData = async() => {
            await fetch(process.env.REACT_APP_CART_URL, {
                method: 'PUT',
                body: JSON.stringify(cart)
            });
          };

          try {
              await sendData();
               dispatch(
                uiActions.setNotification({
                    status:'success',
                    title: 'Success...',
                    message: 'Data updated successfully'
               }));
          } catch (error) {
              dispatch(
                uiActions.setNotification({
                    status:'error',
                    title: 'Error...',
                    message: 'Failed to send data'
                }) );
          }

    };
}