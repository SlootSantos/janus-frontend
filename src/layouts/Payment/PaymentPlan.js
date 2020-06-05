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

export default (props) => {
  const { title, slogan, bullets, price, duration, href, ctaText } = props;

  return (
    <Col lg={{ size: 3 }}>
      <Card>
        <CardHeader>
          <h5 className="card-category">{slogan}</h5>
          <CardTitle tag="h2">{title}</CardTitle>
        </CardHeader>
        <CardBody>
          <ul>
            {bullets.map(
              (Bullet) =>
                Bullet && (
                  <li>
                    <Bullet />
                  </li>
                )
            )}
          </ul>
          <div style={{ width: "100%", textAlign: "center", marginTop: 40 }}>
            <span className="text-primary h3">{price}</span>
            {duration && <span className="text-primary h5"> {duration}</span>}
          </div>

          <div
            style={{
              marginTop: "15px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to={{ pathname: "/login" }}>
              <Button
                tag="label"
                className="btn-fill"
                color="primary"
                type="submit"
                id="0"
                size="lg"
              >
                <span className=" d-sm-block d-md-block d-lg-block d-xl-block">
                  {ctaText}
                </span>
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
