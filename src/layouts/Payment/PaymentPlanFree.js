import React from "react";
import PaymentPlan from "./PaymentPlan";

export default (props) => (
  <PaymentPlan
    title="Starter Plan"
    slogan="Free"
    price="Free"
    //   duration="forever"
    ctaText="Stay free"
    onClick={() => props.history.push("/login")}
  >
    <ul>
      <li>
        <span>
          <span className="text-primary">Blue-Green deployment</span> out of the
          box
        </span>
      </li>
      <li>
        <span>
          <span className="text-primary">SSL encryption</span> by default
        </span>
      </li>
      <li>
        <span>
          <span className="text-primary">3</span> JAM-Stacks included
        </span>
      </li>
      <li>
        <span>
          Default <span className="text-primary">Integration tests</span> on
          every build
        </span>
      </li>
    </ul>
  </PaymentPlan>
);
