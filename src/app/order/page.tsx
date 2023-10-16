import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@component/redux/store";
import { setCheckout } from "@component/redux/features/billSlice";
import DrinkContainer from "../components/DrinkContainer";
import SearchSect from "../components/SearchSect";
import CheckoutSect from "../components/CheckoutSect";
import Image from "next/image";
import Fallback from "../components/Fallback";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Order() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.drink.isLoading);
  const isCheckout = useSelector((state: RootState) => state.bill.isCheckout);

  function handleCheckoutBtn() {
    dispatch(setCheckout());
  }

  return (
    <main className="orderPage">
      {!isCheckout && (
        <button
          className="chekcoutBtn"
          onClick={handleCheckoutBtn}
          title="Checkout please"
        >
          <Image
            src="/assets/checkout.png"
            alt="checkout button"
            width={60}
            height={60}
          />
        </button>
      )}
      {!isCheckout && <SearchSect />}
      {!isCheckout && !isLoading && <DrinkContainer />}
      {!isCheckout && isLoading && (
        <section className="flexC">
          <Fallback text="is loading..." />
        </section>
      )}
      {isCheckout && <CheckoutSect />}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
}
