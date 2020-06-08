import React from "react";
import axios from "axios";
import PaymentPlan from "./PaymentPlan";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_6oYM3GjbiSZqfQQY3xkc1RFz00u5df7u7q");

export default ({ history }) => {
  return (
    <PaymentPlan
      title="Pro Plan"
      slogan="Premium"
      price="9,99€"
      duration="/month"
      ctaText="Go Pro!"
      onClick={async () => {
        try {
          const { data } = await axios.get(
            process.env.REACT_APP_API_BASE_URL + "/payment",
            {
              withCredentials: true,
            }
          );
          const stripe = await stripePromise;
          await stripe.redirectToCheckout({
            sessionId: data.session,
          });
        } catch (error) {
          console.dir(error);
          if (error.response.status === 401) {
            history.push("/login?redirect=" + window.location);
          }
        }
      }}
    >
      <ul>
        <li>
          <span>
            <span className="text-primary">Blue-Green deployment</span> out of
            the box
          </span>
        </li>
        <li>
          <span>
            <span className="text-primary">SSL encryption</span> by default
          </span>
        </li>
        <li>
          <span>
            <span className="text-primary">Unlimited</span> JAM-Stacks
          </span>
        </li>
        <li>
          <span>
            Custom <span className="text-primary">Integration tests</span> on
            every build
          </span>
        </li>
        <li>
          <span>
            <span className="text-primary">Custom</span> Subdomains
          </span>
        </li>
      </ul>
    </PaymentPlan>
  );
};
