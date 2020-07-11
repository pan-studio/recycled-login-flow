/*
 * FeaturePage
 *
 * List all the features
 */
//import React from 'react';
import * as React from 'react';

import InputText from '../../components/atoms/InputText';

import A from '../../components/atoms/Button/A';
import Img from '../../components/atoms/Img';
import BoxText from '../../components/atoms/BoxText';
import ModalView from '../../components/organisms/Modal';
import ModalConfirmation from '../../components/organisms/ModalConfirmation';
import ModalSuccess from '../../components/organisms/ModalSuccess';
import ModalQuestions from '../../components/organisms/ModalQuestions';
import TopInfoUser from '../../components/organisms/TopInfoUser';
import SidebarView from '../../components/organisms/Sidebar';
import TitlePageInternal from '../../components/organisms/TitlePageInternal';
import TableView from '../../components/organisms/TableView';
import TableGeneral from '../../components/organisms/TableGeneral';
import TabMembership from '../../components/organisms/TabMembership';
import TabEWithdrawal from '../../components/organisms/TabEWithdrawal';
import TopMenu from '../../components/organisms/TopMenu';
import TooltipInfo from '../../components/organisms/TooltipInfo';
import iconDashboard from '../../../assets/images/dashboard-active.png';
import DetailTransaction from '../../components/molecules/DetailTransaction';
import ItemLoanApplication from '../../components/molecules/ItemLoanApplication';
import SectionImg from '../../components/molecules/SectionImg';
import SectionLogin from '../../components/molecules/SectionLogin';
import SectionRegOne from '../../components/molecules/SectionRegOne';
import SectionCreatePassword from '../../components/molecules/SectionCreatePassword';
import FieldRegistration from '../../components/molecules/FieldRegistration';
import QuestionsRegistration from '../../components/organisms/QuestionsRegistration';
import ButtonWithNote from '../../components/molecules/ButtonWithNote';

import imgLogo from '../../assets/images/logo_contact_us.png';
import imgEmail from '../../../assets/images/img_email.png';

import imgContact from '../../assets/images/img_contactus_large.png';

import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Form,
  Button,
  Modal,
} from 'react-bootstrap';

export function Features() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Row className="topm-container">
        <Col sm="7" xs="12" style={{ marginTop: '40px' }}>
          <SectionLogin imgLogo={imgLogo} />
        </Col>
        <Col sm="5" xs="12" className="lg-margintop40">
          <SectionImg
            imgDefault={imgContact}
            textButtonTwo="Since 1954"
            textButtonOne="Service And Trust"
            btnText="Contact Us"
          />
        </Col>
        <span className="lg-circlebig"></span>
        <span className="lg-circlesmall"></span>
        <ModalView
          className="md-boxgeneral"
          title="Alert"
          text="You are not yet an eServices User. Please click on Register Now below to register"
          textButtonPrimary="Register Now"
        ></ModalView>
        <ModalConfirmation
          className="mdc-boxgeneral"
          title="Confirmation"
          text="You are not yet an eServices User. Please click on Register Now below to register"
          textButtonPrimary="Transfer"
        />
        <ModalSuccess
          title="Successful!!"
          textBody="Your request has been sent to the Credit Union and will normally be processes within 1 working day. You will be notified once the transfer has been processed."
          textBodyBis="At any moment you can review the status of the eWithdrawal by selecting the option eWithdrawal History from the menu."
          classBody=""
          textFooter="Thank you for using the eWithdrawal service"
          classFooter=""
          className="modal-success"
        />
        <ModalQuestions
          className="mdc-boxgeneral modal-questions"
          title="Please check carefully"
          text="We advise you to check carefully your questions and answers before submitting"
          textButtonPrimary="Proceed"
        />
      </Row>
      <Row className="topm-container">
        <Col sm="7" xs="12" style={{ marginTop: '40px' }}>
          <SectionRegOne imgLogo={imgLogo} />
        </Col>
        <Col sm="5" xs="12" className="lg-margintop40">
          <SectionImg
            imgDefault={imgContact}
            textButtonTwo="Since 1954"
            textButtonOne="Service And Trust"
            btnText="Contact Us"
          />
        </Col>
        <span className="lg-circlebig"></span>
        <span className="lg-circlesmall"></span>
      </Row>
      <Row className="topm-container">
        <Col sm="12" xs="12" style={{ marginTop: '40px' }}>
          <Img src={imgLogo} className="img-fluid" />
        </Col>
        <Col sm="12" xs="12" className="lg-margintop40">
          <FieldRegistration />

          <QuestionsRegistration />

          <ButtonWithNote
            text="Next"
            textNote="Please complete the form and click on next tp proceed"
            className="btn-next"
            classBox="margin-bottom-general"
            titleNote="Note"
          />
        </Col>
      </Row>

      <Row className="topm-container">
        <Col sm="12" xs="12" style={{ marginTop: '40px' }}>
          <Img src={imgLogo} className="img-fluid" />
        </Col>
        <Col sm="12" xs="12" className="lg-margintop40">
          <Img src={imgEmail} className="img-fluid img-center" />
        </Col>
      </Row>
      <Row className="topm-container">
        <Col sm="7" xs="12" style={{ marginTop: '40px' }}>
          <SectionCreatePassword imgLogo={imgLogo} />
        </Col>
        <Col sm="5" xs="12" className="lg-margintop40">
          <SectionImg
            imgDefault={imgContact}
            textButtonTwo="Created by the Staff to serve the Staff"
            textButtonOne="Created by the Staff to serve the Staff"
            btnText="Contact Us"
          />
        </Col>
        <span className="lg-circlebig"></span>
        <span className="lg-circlesmall"></span>
      </Row>
      <Row className="topm-container">
        <Col sm="12">
          <TopMenu />
        </Col>
      </Row>
      <Row className="pg-background">
        <Col sm="12">
          <TopInfoUser />
        </Col>
        <Col sm="3">
          <SidebarView></SidebarView>
        </Col>
        <Col sm="9" xs="12">
          <Row>
            <Col sm="12">
              <TitlePageInternal
                icon={iconDashboard}
                classIcon="floatLeft twi-circleicon"
                className="twi-title"
                classButton="floatRight twi-buttonicon twi-btnpaddig"
                text="Overall View"
                iconbutton={iconDashboard}
                textbutton="print"
                classIconButton="padding-right-15"
              />
            </Col>
            <Col sm="12" xs="12">
              <TableView
                headerup={true}
                title="Shares Account(s)"
                textDefault="Double click a row to view movements"
              />
              <TableGeneral
                title="Loans Account(s)"
                textDefault="Double click a row to view movements"
                action={true}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="topm-container">
        <Col sm="12">
          <TopMenu />
        </Col>
      </Row>
      <Row className="pg-background">
        <Col sm="12">
          <TopInfoUser />
        </Col>
        <Col sm="3">
          <SidebarView></SidebarView>
        </Col>
        <Col sm="9" xs="12">
          <Row>
            <Col sm="12">
              <TitlePageInternal
                icon={iconDashboard}
                classIcon="floatLeft twi-circleicon"
                className="twi-title"
                classButton="floatRight twi-buttonicon twi-btnpaddig"
                text="Membership Data"
                iconbutton={iconDashboard}
                textbutton="print"
                classIconButton="padding-right-15"
              />
            </Col>
            <Col sm="12" xs="12">
              <TabMembership />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="topm-container">
        <Col sm="12">
          <TopMenu />
        </Col>
      </Row>
      <Row className="pg-background">
        <Col sm="12">
          <TopInfoUser />
        </Col>
        <Col sm="3">
          <SidebarView></SidebarView>
        </Col>
        <Col sm="9" xs="12">
          <Row>
            <Col sm="12">
              <TitlePageInternal
                icon={iconDashboard}
                classIcon="floatLeft twi-circleicon"
                className="twi-title"
                classButton="floatRight twi-buttonicon twi-btnpaddig"
                text="eWithdrawal"
                iconbutton={iconDashboard}
                textbutton="print"
                classIconButton="padding-right-15"
              />
            </Col>
            <Col sm="12" xs="12">
              <TabEWithdrawal />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="pg-background">
        <Col sm="12">
          <TopInfoUser />
        </Col>
        <Col sm="3">
          <SidebarView></SidebarView>
        </Col>
        <Col sm="9" xs="12">
          <Row>
            <Col sm="12">
              <TitlePageInternal
                icon={iconDashboard}
                classIcon="floatLeft twi-circleicon"
                className="twi-title"
                classButton="floatRight twi-buttonicon twi-btnpaddig"
                text="Pending Loan Application"
                iconbutton={iconDashboard}
                textbutton="print"
                classIconButton="padding-right-15"
              />
            </Col>
            <Col sm="12" xs="12" className="padding-40">
              <ItemLoanApplication />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
