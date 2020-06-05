import React from "react";

import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";
import logo from "assets/img/janus_white.png";
import PaymentPlan from "./PaymentPlan";

export default () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(transparent, rgba(225, 78, 202, .7))",
        // display: "flex",
        justifyContent: "center",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <Row>
        <div style={{ marginLeft: 15, marginTop: 15 }}>
          <Link to={{ pathname: "/" }}>
            <img src={logo} height="60" style={{ marginBottom: 20 }} />
          </Link>
        </div>
      </Row>
      <Row style={{ marginBottom: 50 }}>
        <Col lg="12">
          <div style={{ textAlign: "center" }}>
            <h1>Stackers goes Pro!</h1>
            <p>
              Whether you want to build & deploy hobby applications, open source
              projects, or critical & high scalability Enterprise apps,
              Stackers.io got you covered!
            </p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <PaymentPlan
          title="Starter Plan"
          slogan="Free"
          price="Free"
          //   duration="forever"
          ctaText="Stay free"
          bullets={[
            () => (
              <span>
                <span className="text-primary">Blue-Green deployment</span> out
                of the box
              </span>
            ),
            () => (
              <span>
                <span className="text-primary">SSL encryption</span> by default
              </span>
            ),
            () => (
              <span>
                <span className="text-primary">3</span> JAM-Stacks included
              </span>
            ),
            () => (
              <span>
                Default <span className="text-primary">Integration tests</span>{" "}
                on every build
              </span>
            ),
          ]}
        />
        <PaymentPlan
          title="Pro Plan"
          slogan="Premium"
          price="9,99€"
          duration="/month"
          ctaText="Go Pro!"
          bullets={[
            () => (
              <span>
                <span className="text-primary">Blue-Green deployment</span> out
                of the box
              </span>
            ),
            () => (
              <span>
                <span className="text-primary">SSL encryption</span> by default
              </span>
            ),
            () => (
              <span>
                <span className="text-primary">Unlimited</span> JAM-Stacks
              </span>
            ),
            () => (
              <span>
                Custom <span className="text-primary">Integration tests</span>{" "}
                on every build
              </span>
            ),
            () => (
              <span>
                <span className="text-primary">Custom</span> Subdomains
              </span>
            ),
          ]}
        />
        <PaymentPlan
          title="Self hosted"
          slogan="Full control"
          price="99,99€"
          duration="/month"
          ctaText="Contact Enterprise Team"
          bullets={[
            () => (
              <span>
                <span className="text-primary">All features</span> of Free & Pro
                plan
              </span>
            ),
            () => (
              <span>
                <span className="text-primary">Full control</span> over
                Infrastructre
              </span>
            ),
            () => (
              <span>
                <span className="text-primary">Full access</span> to your data
              </span>
            ),
          ]}
        />
      </Row>
    </div>
  );
};

// <Col lg={{ size: 3, offset: 0 }}>
//   <Card>
//     <CardHeader>
//       <h5 className="card-category">Free</h5>
//       <CardTitle tag="h2">Starter Plan</CardTitle>
//     </CardHeader>
//     <CardBody>
//       <ul>
//         <li>
//           <span className="text-primary">Blue-Green deployment</span>{" "}
//           out of the box
//         </li>
//         <li>
//           <span className="text-primary">SSL encryption</span> by
//           default
//         </li>
//         <li>
//           <span className="text-primary">3</span> JAM-Stacks included
//         </li>
//         <li>
//           Default{" "}
//           <span className="text-primary">Integration tests</span> on
//           every build
//         </li>
//       </ul>
//       <div
//         style={{ width: "100%", textAlign: "center", marginTop: 40 }}
//       >
//         <span className="text-primary h3">Free</span>
//       </div>

//       <div
//         style={{
//           marginTop: "15px",
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <Link to={{ pathname: "/login" }}>
//           <Button
//             tag="label"
//             className="btn-fill"
//             color="primary"
//             type="submit"
//             id="0"
//             size="lg"
//           >
//             {/* <input
//       defaultChecked
//       className="d-none"
//       name="options"
//       type="submit"
//       onClick={() =>
//         window.location.replace(
//           process.env.REACT_APP_API_BASE_URL + "/login"
//         )
//       }
//     /> */}
//             <span className=" d-sm-block d-md-block d-lg-block d-xl-block">
//               For ever free!
//             </span>
//           </Button>
//         </Link>
//       </div>
//     </CardBody>
//   </Card>
// </Col>
// <Col lg={{ size: 3 }}>
//   <Card>
//     <CardHeader>
//       <h5 className="card-category">Premium</h5>
//       <CardTitle tag="h2">Pro Plan</CardTitle>
//     </CardHeader>
//     <CardBody>
//       <ul>
//         <li>
//           <span className="text-primary">Blue-Green deployment</span>{" "}
//           out of the box
//         </li>
//         <li>
//           <span className="text-primary">SSL encryption</span> by
//           default
//         </li>
//         <li>
//           <span className="text-primary">Unlimited</span> JAM-Stacks
//         </li>
//         <li>
//           Custom <span className="text-primary">Integration tests</span>{" "}
//           on every build
//         </li>
//         <li>
//           <span className="text-primary">Custom</span> Subdomains
//         </li>
//       </ul>

//       <div
//         style={{ width: "100%", textAlign: "center", marginTop: 40 }}
//       >
//         <span className="text-primary h3">9,99€</span>
//         <span className="text-primary h5"> /month</span>
//       </div>

//       <div
//         style={{
//           marginTop: "15px",
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <Link to={{ pathname: "/login" }}>
//           <Button
//             tag="label"
//             className="btn-fill"
//             color="primary"
//             type="submit"
//             id="0"
//             size="lg"
//           >
//             {/* <input
//       defaultChecked
//       className="d-none"
//       name="options"
//       type="submit"
//       onClick={() =>
//         window.location.replace(
//           process.env.REACT_APP_API_BASE_URL + "/login"
//         )
//       }
//     /> */}
//             <span className=" d-sm-block d-md-block d-lg-block d-xl-block">
//               Go Pro now!
//             </span>
//           </Button>
//         </Link>
//       </div>
//     </CardBody>
//   </Card>
// </Col>
