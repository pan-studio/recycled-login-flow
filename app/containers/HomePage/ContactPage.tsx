/*
 * FeaturePage
 *
 * List all the features
 */
import React from "react";

import { Row, Col } from "react-bootstrap";
import LinkBack from "../../components/molecules/LinkBack";
import BoxListQuestions from "../../components/molecules/BoxListQuestions";
import Img from "../../components/atoms/Img";
import BoxText from "../../components/atoms/BoxText";

import imgLogo from "../../assets/images/logo_contact_us.png";
import imgContact from "../../assets/images/img_contact.png";

export function ContactPage() {
  return (
    <div>
      <Row
        style={{
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        <Col sm="7" xs="12" style={{ marginTop: "40px" }}>
          <Img alt="a" src={imgLogo} className="img-fluid" />
          <>
            <LinkBack
              linkBack="#"
              text="Contact Us"
              className="ct-linkcontactusback"
            />
            <div className="ct-positionquestions">
              <li>
                <BoxListQuestions
                  title="Who can join the FAO Credit Union?"
                  text="FAO and WFP staff members with graded appointments, under FAO or WFP payroll. Consultants are not eligible to join."
                ></BoxListQuestions>
              </li>
              <li>
                <BoxListQuestions
                  title="How to join the FAO Credit Union?"
                  text="It is very easy to join us and it is totally free of charge, 
                      just send us an email at credit-union@fao.org and we will guide you through the process."
                ></BoxListQuestions>
              </li>
            </div>
          </>
        </Col>
        <Col sm="5" xs="12">
          <Img src={imgContact} className="img-fluid marginTop40" />
          <div className="ct-textneed">
            <BoxText
              text="Need to contact us?"
              className="ct-titleneed"
            ></BoxText>
            <Row>
              <Col sm="2" xs="12">
                <BoxText text="Email" className="ct-contacitem"></BoxText>
              </Col>
              <Col sm="5" xs="12">
                <BoxText
                  text="credit-union@fao.org"
                  className="ct-email"
                ></BoxText>
              </Col>
            </Row>
            <Row>
              <Col sm="2" xs="12">
                <BoxText text="Phone" className="ct-contacitem"></BoxText>
              </Col>
              <Col sm="5" xs="12">
                <BoxText text="FAO Office" className="ct-labeloffice"></BoxText>
                <BoxText
                  text="+39 06 570 53666"
                  className="ct-telnumber"
                ></BoxText>
              </Col>
              <Col sm="5" xs="12">
                <BoxText text="WFP Office" className="ct-labeloffice"></BoxText>
                <BoxText
                  text="+39 06 570 53666"
                  className="ct-telnumber"
                ></BoxText>
              </Col>
            </Row>
            <Row>
              <Col sm="2" xs="12">
                <BoxText text="Skype" className="ct-contacitem"></BoxText>
              </Col>
              <Col sm="5" xs="12">
                <BoxText text="fao_cu" className="ct-email"></BoxText>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
