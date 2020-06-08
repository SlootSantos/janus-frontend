import React from "react";
import PaymentPlan from "./PaymentPlan";

export default () => {
  return (
    <PaymentPlan
      title="Self hosted"
      slogan="Full control"
      price="99,99€"
      duration="/month"
      ctaText="Contact Enterprise Team"
      onClick={() => {
        window.open(
          "mailto:enterprise@stackers.io?subject=Interest%20in%20the%20Stackers%20Enterprise%20Version",
          "_blank"
        );
      }}
    >
      <ul>
        <li>
          <span>
            <span className="text-primary">All features</span> of Free & Pro
            plan
          </span>
        </li>
        <li>
          <span>
            <span className="text-primary">Full control</span> over
            Infrastructre
          </span>
        </li>
        <li>
          <span>
            <span className="text-primary">Full access</span> to your data
          </span>
        </li>
      </ul>
    </PaymentPlan>
  );
};
