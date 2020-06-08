import React from "react";

import { Card, CardHeader, CardBody, CardTitle, Col, Button } from "reactstrap";

export default (props) => {
  const { title, slogan, price, duration, onClick, ctaText } = props;

  return (
    <Col lg={{ size: 3 }}>
      <Card>
        <CardHeader>
          <h5 className="card-category">{slogan}</h5>
          <CardTitle tag="h2">{title}</CardTitle>
        </CardHeader>
        <CardBody>
          {props.children}
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
            <div onClick={onClick}>
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
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
