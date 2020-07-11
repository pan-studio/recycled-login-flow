import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Roboto;
  src: local(Roboto), url(../assets/fonts/Roboto/Roboto-Regular.ttf);
}

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Roboto';
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
    background-color: ${p => p.theme.background};
  }

  body.fontLoaded {
    font-family: 'Roboto';
  }
  
  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .overline {
    text-decoration: overline;
  }

  .underline {
    text-decoration: underline;
  }

  //BOOTSTRAP OVERRIDE
  .container{
    max-width:100%;
  }
  //COMPONENT LINKBACK
  .linkBack {
    textAlign: 'left',
    font: 'Regular 24px/32px Roboto',
    letterSpacing: '0px',
    color: '#213F7F',
    opacity: 1,
    marginTop: '50px',
    marginLeft: '40px',
  }



  //BOXLIST QUESTION

    .bxQuestion {
      background: #F8F9FC 0% 0% no-repeat padding-box;
          border-radius: 10px;
          opacity: 1;
          border-radius: 0
    }

    .bxTitle {
      textAlign: left;
            font: Bold 20px/26px Roboto;
            letter-spacing: 0px;
            color: #2B2B2B;
            opacity: 1;
            margin-top: 18px;
            padding-top: 18px;
            padding-bottom: 18px;
            padding-left: 24px;
    }

    .bxText {
      list-style: disc outside none;
      display: list-item;
      margin-Left: 25px;
    }
  
    //img
    .marginTop40 {
      margin-Top: 40px
    }
    

    // PAGE FEATURES

    .lg-title{
      text-align: left;
      font: bold 28px / 37px Roboto;
      letter-spacing: 0px;
      color: rgb(43, 43, 43);
      opacity: 1;
      margin-top: 110px;
    }
    .lg-subtitle{
      text-align: left;
      font: bold 18px / 24px Roboto;
      letter-spacing: 0px;
      color: rgb(43, 43, 43);
      opacity: 0.8;
    }
    .lg-forgortrpwd{
      text-align: right;
      letter-spacing: 0.03px;
      color: rgb(33, 63, 127);
      opacity: 1;
      border: none;
      padding: 0px;
      width: 100%;
    }
    .lg-colforgotpwd{
      text-align: right;
      padding: 0px;
    }
    .lg-btnlogin{
      width: 100%;
      background: 0% 0% no-repeat padding-box padding-box rgb(33, 63, 127);
      border-radius: 8px;
      opacity: 1;
      border: none;
      color: rgb(255, 255, 255);
      height: 48px;
      padding: 10px;
      text-align: center;
    }
    .lg-eservice{
      text-align: left;
      letter-spacing: 0.03px;
      color: rgb(43, 43, 43);
      opacity: 0.8;
      margin-top: 32px;
      padding: 0px;
    }
    .lg-linkorange{
      text-align: left;
      letter-spacing: 0.03px;
      color: rgb(248, 155, 36);
      border: none;
      padding: 24px 0px 0px;
    }
    .lg-linkblue{
      text-align: left;
      letter-spacing: 0.03px;
      color: rgb(33, 63, 127);
      border: none;
      padding: 24px 0px 0px;
    }
    .lg-margintop40{
      margin-top:24px;
    }
    .lg-imgprincipal{
      height: 1000px;
      filter: brightness(0.5);
      width: inherit;
    }
    .lg-rowbtncontact{
      position: relative;
      top: -941px;
    }
    .lg-colpositioncontact{
      width: 100%;
      text-align: right;
    }
    .lg-btncontactus{
      text-align: left;
      letter-spacing: 0.03px;
      color: rgb(255, 255, 255)!important;
      border: 1px solid rgb(255, 255, 255);
      border-radius: 4px;
      opacity: 1;
      padding: 10px;
    }
    .lg-positiontextinimage{
      position: relative;
      top: -140px;
    }
    .lg-alignright{
      width: 100%; 
      text-align: right; 
    }
    .lg-textservice{
      text-align: center;
      letter-spacing: 1.8px;
      color: rgb(255, 255, 255);
      text-transform: uppercase;
      opacity: 1;
      margin-bottom: 0px;
    }
    .lg-textsince{
      text-align: center;
      letter-spacing: 1.14px;
      color: rgb(255, 255, 255);
      opacity: 1;
      text-decoration-color: rgb(255, 255, 255);
    }
    .lg-circlebig{
      top: -238px;
      left: 50%;
      width: 300px;
      height: 150px;
      background-color: rgb(248, 155, 36);
      opacity: 0.6;
      position: relative;
      border-top-left-radius: 165px;
      border-top-right-radius: 165px;
    }
    .lg-circlesmall{
      top: -500px;
      left: 36%;
      width: 79px;
      height: 79px;
      background-color: rgb(248, 155, 36);
      opacity: 0.8;
      border-radius: 100%;
      position: relative;
    }


    // CONTACT
    .ct-positionquestions{
      list-style-type: none;
      max-width: 560px;
      margin-top: 270px;
    }
    .ct-titleneed{
      font: Bold 20px/26px Roboto;
    }
    .ct-textneed{
      position: relative;
      left: 35px;
      top: 50px;
      z-index: 9999;
      margin: auto;
      display: block;
    }
    .ct-contacitem{
      text-align: left;
      letter-spacing: 0px;
      color: rgb(33, 63, 127);
      opacity: 1;
      margin-top: 0px;
      font: Medium 16px/21px Roboto;
    }
    .ct-labeloffice{
      text-align: left;
      letter-spacing: 0px;
      color: rgb(43, 43, 43);
      opacity: 0.5;
      margin-bottom: 0px;
    }
    .ct-telnumber{
      text-align: left;
      letter-spacing: 0px;
      color: rgb(43, 43, 43);
      opacity: 1;
    }
    .ct-email{
      text-align: left;
      letter-spacing: 0px;
      color: rgb(62, 142, 222);
      opacity: 1;
      margin-bottom: 0px;
    }
    .ct-linkcontactusback{
      text-align: left;
      font: Regular 24px/32px Roboto;
      letter-spacing: 0px;
      color: #213F7F;
      opacity: 1;
      margin-top: 55px;
    }

    //MODAL 
    .md-boxgeneral{
      box-shadow: 0px 3px 26px #0000004D;
      border-radius: 10px;
      opacity: 1;
    }
    .md-modaltitle{
      text-align: left;
      font: Bold 28px/37px Roboto;
      letter-spacing: 0px;
      color: #213F7F;
      opacity: 1;
    }
    .md-boxgeneral .h4{
      text-align: center;
      font: Bold 28px/37px Roboto;
      letter-spacing: 0px;
      color: #213F7F;
      opacity: 1;
      width: 100%;
    }
    .md-boxgeneral .modal-header{
      border:none;
    }
    .md-boxgeneral .modal-body{
      text-align: center;
      font: Regular 14px/30px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 0.7;
    }
    .md-boxgeneral .modal-footer{
      margin: auto;
      display: block;
      border:none;
    }
    .md-boxgeneral .btn-secondary{
      border: 1px solid #2B2B2B;
      border-radius: 8px;
      opacity: 1;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      text-align: center;
      font: Bold 16px/21px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1;
      min-height: 48px;
      width: 194px;

    }
    .md-boxgeneral .btn-primary{
      background: #213F7F 0% 0% no-repeat padding-box;
      border-radius: 8px;
      opacity: 1;
      text-align: center;
      font: Bold 16px/21px Roboto;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;
      min-height: 48px;
      width: 194px;
      border-color: #213F7F;
    }

    //SIDEBAR

    .sidebar {
      background: #213F7F 0% 0% no-repeat padding-box;
      border-radius: 0px 12px 12px 0px;
      opacity: 1;
      padding:24px;
      padding-top:40px;
  }
  #sidebar-wrapper{
      min-height: 100vh !important;
      width: 100vw;
      margin-left: -1rem;
      -webkit-transition: margin .25s ease-out;
      -moz-transition: margin .25s ease-out;
      -o-transition: margin .25s ease-out;
      transition: margin .25s ease-out;
  }
  #sidebar-wrapper .sidebar-heading {
      padding: 0.875rem 1.25rem;
      font-size: 1.2rem;
  }

  #page-content-wrapper {
      min-width: 0;
      width: 100%;
  }
  .navbar-text{
    text-align: left;
    font: Medium 16px/21px Roboto;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding-left:20px;
  }
  .sidebar img{
    padding-right:20px;
  }
  .sidebar .nav-item{
    height: 48px;
    width: 100%;
    margin-bottom: 24px;
  }
  .sidebar .active{
    background-color: #fff;
    border-radius: 10px;
    opacity: 0.9;
    border-right: 10px solid #f9af50;
    color: rgba(33, 63, 127, 1);
    padding-top: 13px;
  }
  .sidebar a{
    width: 100%;
    height: 48px;
  }
  .sidebar-collapse{
    background: #3E8EDE 0% 0% no-repeat padding-box;
    border-radius: 0px 12px 0px 35px;
    opacity: 1;
    width: 35px;
    height: 40px;
    position: relative;
    right: -271px;
    top: -40px;
  }
  //TOPUSERINFO
  .tui-box{
    margin:24px 0px;
    background: rgba(240, 243, 250, 1) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px rgba(78, 78, 78, 0.16);
    opacity: 1;
  }
  .tui-box .nav-item{
    width:25%;
  }
  .tui-box .nav-item .tui-label{
    text-align: left;
    font: Bold 14px/19px Roboto;
    letter-spacing: 0px;
    color: rgba(40, 69, 130, 1)!important;
    opacity: 1;
    font-weight: bold;
  }
  .tui-box .nav-item a{
    text-align: left;
    font: Regular 14px/19px Roboto;
    letter-spacing: 0px;
    color: rgba(40, 69, 130, 1)!important;
    opacity: 1;
    font-weight: normal;
  }
  .floatLeft{
    float: left;
  }
  .floatRight{
    float:right;
  }
  .twi-circleicon{
    border: 2px solid rgba(40, 69, 130, 1);
    opacity: 1;
    border-radius: 50%;
    padding: 5px;
    margin-right: 20px;
  }
  .twi-title{
    text-align: left;
    font: Bold 24px/32px Roboto;
    letter-spacing: 0px;
    color: rgba(40, 69, 130, 1);
    opacity: 1;
    margin-left:20px
  }
  .twi-buttonicon{
    border: 1px solid #213F7F;
    border-radius: 8px;
    opacity: 1;
    background-color: transparent;
    text-align: left;
    font: Medium 14px/19px Roboto;
    letter-spacing: 0px;
    color: #213F7F;
    opacity: 1;
  }
  .twi-btnpaddig{
    padding: 5px 24px;
  }
  .padding-right-15{
    padding-right: 15px;
  }
  .tv-general th{
    background: rgb(240, 249, 255) 0% 0% no-repeat padding-box;
    border-radius: 0px 0px 0px 0px;
    opacity: 0.5;
    border:none!important;
  }
  .tv-general tbody td{
    border:none!important;
    text-align:center;
    font: 13px/18px Roboto;
    letter-spacing: 0px;
    color: #2B2B2B;
    opacity: 1;
    background: #FBFCFF 0% 0% no-repeat padding-box;
  }
  .tv-general .tv-headup{
    text-align: center;
    font: 14px/16px Roboto;
    letter-spacing: 0px;
    color: #2B2B2B;
    opacity: 1;
    background: #E8F3FB 0% 0% no-repeat padding-box;
  }
  .tv-general .tv-headdown{
    text-align: center;
    font: Bold 14px/16px Roboto;
    letter-spacing: 0px;
    color: #2B2B2B;
    opacity: 1;
    background: #E8F3FB 0% 0% no-repeat padding-box;
  }
  .tv-general .tv-headnormal{
    text-align: center;
    font: Bold 14px/16px Roboto;
    letter-spacing: 0px;
    color: #2B2B2B;
    opacity: 1;
    background-color:transparent;
    background: #f8fcff 0% 0% no-repeat padding-box;
  }
  .table-title{
    text-align: left;
    font: Bold 16px/21px Roboto;
    letter-spacing: 0px;
    color: #213F7F;
    opacity: 1;
  }
  .table-textgeneral{
    text-align: left;
    font: Regular 14px/19px Roboto;
    letter-spacing: 0px;
    color: #2B2B2B;
    opacity: 0.7;
  }
  .margin-bottom-general{
    margin-bottom:24px;
  }
  .margin-top-general{
    margin-top:24px;
  }
  .pg-background{
    background: #F8F9FC 0% 0% no-repeat padding-box;
    opacity: 1;
    width: 1440px;
    margin: auto;
  }
  .tb-background{
    /*background: #FFFFFF 0% 0% no-repeat padding-box;*/
    border-radius: 14px;
    opacity: 1;
    margin-bottom:20px;
    padding: 20px; 
  }
  .tb-scroll .tb-scroll-style{
    overflow-y: scroll;
    height: 175px;
  }
  .tb-widthmax{
    width: 100%;
  }
    /* width */
    .tb-scroll ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    .tb-scroll ::-webkit-scrollbar-track {
      background: #f1f1f1; 
    }
    
    /* Handle */
    .tb-scroll ::-webkit-scrollbar-thumb {
      background: #213F7F;
      border-radius:10px; 
    }

    /* Handle on hover */
     ::-webkit-scrollbar-thumb:hover {
      background: #213F7F ; 
    }
    .tb-paddinglateral{
      padding: 0px 20px;
    }
    .table-closed{
      text-align: left;
      font: Medium 16px/21px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 0.7;
    }
    .table-active{
      text-align: left;
      font: Bold 16px/21px Roboto;
      letter-spacing: 0px;
      color: #F89B24!important;
      background-color:transparent;
      opacity: 1;
      border-bottom: 3px solid #F89B24;
    }
    .table-textalign-right{
      text-align:right;
    }
    .table-ml{
      margin-left: 20px;
    }
    .table-mr{
      margin-right: 20px;
    }

    //TAB

    .tab-background{
      background-color:#fff;
    }

    .nav-tabs{
      border:none;
    }
    .nav-tabs .nav-item{
      border:none;
    }
    .nav-tabs .active{
      text-align: left;
      font: Bold 14px/19px Roboto;
      letter-spacing: 0px;
      color: #F89B24!important;
      opacity: 1!important;
    }
    .nav-tabs .nav-link{
      text-align: left;
      font: 13px/18px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 0.5;
    }
    //CHANGEPWD

    .cpwd-box{
      width: 500px;
      padding: 40px 40px 0px;
      height: 430px;
    }
    .cquest-box{
      padding: 40px 40px 0px;
      height: 430px;
    }
    .cpwd-box .input-group-prepend{
      background: #213F7F 0% 0% no-repeat padding-box;
      border: 1px solid #2B2B2B33;
      border-radius: 10px 0px 0px 10px;
      height:40px;
    }
    .cpwd-box .tab-info-text{
      text-align: center;
      font: Bold 14px/19px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1;
    }
    .cpwd-box #userIndex {
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 1px solid #2B2B2B33;
      border-radius: 0px 10px 10px 0px;
      opacity: 1;
      height: 40px;
    }
    .cpwd-box #userEmail {
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 1px solid #2B2B2B33;
      border-radius: 0px 10px 10px 0px;
      opacity: 1;
      height: 40px;
    }
    .cpwd-box .change-item-input{
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 1px solid #707070;
      border-radius: 8px;
      opacity: 0.4;
      height: 40px;
      margin-top:24px;
    }
    .cpwd-box-note .cpwd-subtitle{
      text-align: left;
      font: 14px/19px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1;
      margin-top:24px;
      width:100%;
    }
    .cpwd-box-note{
      padding: 0px 40px;
    }
    .cpwd-box-note .cpwd-note{
      text-align: left;
      font: 12px/24px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 0.8;
      margin:0px;
      width:100%;
    }
    .cpwd-max-width{
      width: 100%;
    }

    .label-show{
      position: relative;
      top: 40px;
      text-align: left;
      font: 14px/19px Roboto;
      letter-spacing: 0.03px;
      opacity: 1;
    }
    .label-notshow{
      position: relative;
      top: 40px;
      text-align: left;
      font: 14px/19px Roboto;
      letter-spacing: 0.03px;
      opacity: 1;
      color:transparent;
    }
    .label-show span{
      text-align: left;
      font:14px/19px Roboto;
      letter-spacing: 0.03px;
      color: #E24B4B;
    }
    .cquest-box{
      padding: 40px 40px 0px;
    }
    .change-quest-input{
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 1px solid #70707033;
      border-radius: 8px;
      opacity: 1;
      height: 48px;
    }


    .cquest-box ::placeholder {
      text-align: left;
      font:Bold 14px/19px Roboto;
      letter-spacing: 0.03px;
      opacity: 1;
    }
    
    .cquest-box :-ms-input-placeholder { /* Internet Explorer 10-11 */
      text-align: left;
      font:Bold 14px/19px Roboto;
      letter-spacing: 0.03px;
    }
    
    .cquest-box ::-ms-input-placeholder { /* Microsoft Edge */
      text-align: left;
      font:Bold 14px/19px Roboto;
      letter-spacing: 0.03px;
    }
    

    .box-note .note-subtitle{
      text-align: left;
      font: 14px/19px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1;
      margin-top:24px;
      width:100%;
    }
    .box-note{
      padding: 0px 40px;
    }
    .box-note .note-text{
      text-align: left;
      font: 12px/24px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 0.8;
      margin:0px;
      width:500px;
    }
    .btn-note{
      background: #213F7F 0% 0% no-repeat padding-box;
      border-radius: 8px;
      opacity: 1;
      border-color: #213f7f;
      position: relative;
      top: 50%;
      width: 118px;
      height: 48px;
    }
    
    //TOPMENU
    .topm-item{
      text-align: left;
      font: Medium 14px/19px Roboto;
      letter-spacing: 0.03px;
      color: #2B2B2B;
      text-transform: uppercase;
      opacity: 0.8;
      padding: 0px 20px;
    }
    .topm-container{
      width: 1440px;
      margin: auto;
    }
    .topm-space{
      padding: 0px 20px;
    }
    .ov-backwhite{
      background-color:#FFFFFF;
    }

    .popover{
      background: #FFFFFF 0% 0% no-repeat padding-box;
      box-shadow: 0px 10px 26px #00000029;
      opacity: 1;
      border:none!important;
      max-width: 600px;
    }
    .popover-header{
      background: #FFFFFF 0% 0% no-repeat padding-box;
      opacity: 1;
      border:none!important;
    }
    .popover-btn{
      background-color:transparent;
      border:none!important;
    }
    .popover-btn:hover{
      background-color:transparent!important;
      border:none!important;
    }
    .popover-title{
      text-align: left;
      font: Bold 16px/21px Roboto;
      letter-spacing: 0px;
      color: #213F7F;
      opacity: 1;
    }
    .popover-text{
      text-align: left;
      font: 14px/19px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 0.7;
    }
    .f-margin-right{
      margin-right:24px;
    }
    .f-margin-left{
      margin-left:24px;
    }
    .f-margin-lm{
      margin-right:24px;
      margin-left:24px;
    }

    //MODALCONFIRMATION

    .mdc-boxgeneral{
      box-shadow: 0px 3px 26px #0000004D;
      border-radius: 10px;
      opacity: 1;
    }
    .mdc-modaltitle{
      text-align: left;
      font: Bold 28px/37px Roboto;
      letter-spacing: 0px;
      color: #213F7F;
      opacity: 1;
    }
    .mdc-boxgeneral .h4{
      text-align: left;
      font: Bold 28px/37px Roboto;
      letter-spacing: 0px;
      color: #213F7F;
      opacity: 1;
      width: 100%;
    }
    .mdc-boxgeneral .modal-header {
      border: none;
  }
    .mdc-btnsecondary{
      border: 1px solid #213F7F;
      border-radius: 8px;
      opacity: 1;
      background-color: transparent;
      color: #213F7F;
      height: 36px;
    }
    .mdc-btnsuccess{
      background: #25B725 0% 0% no-repeat padding-box;
      border-radius: 8px;
      opacity: 1;
      color: #FFFFFF;
      height: 36px;
      border-color:#25B725;
    }
    .mdc-boxgeneral .modal-footer {
      border: none;
    }
    .tb-statusactive{
      text-align: left;
      font: 13px/18px Roboto;
      letter-spacing: 0px;
      color: #25B725!important;
      opacity: 1;
    }
    .table-active-add{
      text-align: left;
      font: Bold 16px/21px Roboto;
      letter-spacing: 0px;
      color: #F89B24!important;
      background-color:transparent;
      opacity: 1;
    }

    .item-input{
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 1px solid #707070;
      border-radius: 8px;
      opacity: 0.4;
      height: 40px;
      margin-top:24px;
    }
    .label-input{
      text-align: center;
      font: 14px/19px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1;
    }
    .label-input-bold{
      text-align: center;
      font: Bold 14px/19px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1
    }
    .value-green-bold{
      text-align: center;
      font: Bold 24px/32px Roboto;
      letter-spacing: 0px;
      color: #25B725;
      opacity: 1;
    }
    .padding-top-40{
      padding-top: 40px;
    }
    .box-balance{
      padding:16px;
      background: #ecf4fc;
      border-radius: 10px;
    }
    .box-background {
      background: #F8F9FC 0% 0% no-repeat padding-box;
      margin-bottom:8px;
    }
    .padding-16{
      padding: 16px;
    }
    .padding-40{
      padding: 40px;
    }
    .padding-24{
      padding: 24px;
    }
    .padding-0{
      padding: 0px;
    }
    .padding-lr-24{
      padding:0px 24px;
    }
    .title-back-orange{
      text-align: left;
      font: Bold 20px/26px Roboto;
      letter-spacing: 0px;
      color: #F89B24;
      opacity: 1;
    }
    .arrow-back{
      color: #2B2B2B;
      opacity: 1;
      float: left;
      padding-right: 20px;   
    }
    .note-confirm{
      text-align: left;
      font: 14px/27px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1;
    }
    .btn-dimension{
      height: 36px;
    }
    .btn-margin-cofirm{
      margin: 8px;
    }
    .padding-top-15px{
      padding-top: 15px;
    }
    .box-confirm{
      background: #EEF5FC 0% 0% no-repeat padding-box;
      box-shadow: 0px -1px 6px #6B6B6B29;
      border-radius: 0px 0px 14px 14px;
      opacity: 1;
    }
    .margin-lr-0{
      margin-left:0px;
      margin-right:0px;
    }
    .item-input-simple{
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 1px solid #707070;
      border-radius: 8px;
      opacity: 0.4;
      height: 40px;
    }
    .separation{
      border-right:1px solid #c6c6c6; 
    }
    .title-box{
      text-align: left;
      font: Bold 16px/21px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1
    }
    .sub-title-box{
      text-align: left;
      font: 12px/20px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 0.8;
    }
    .text-align-right{
      text-align:right;
    }
    .box-noresutl-header{
      background: #F0F9FF 0% 0% no-repeat padding-box;
      border-radius: 12px 12px 0px 0px;
      opacity: 0.5;
      height: 36px;
    }
    .sub-title-text-center{
      text-align: center;
      font: 12px/24px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 0.7;
    }
    .text-align-center{
      text-align:center;
    }

    .modal-text-success{
      text-align: center;
      font: Bold 28px/37px Roboto;
      letter-spacing: 0px;
      color: #25B725;
      opacity: 1;
    }
    .modal-success .modal-title{
      width:100%;
    }
    .modal-success .modal-header{
      border:none;
    }
    .modal-success .modal-body p{
      text-align: center;
      font: 14px/27px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1;
      padding:0 24px;
    }
    .modal-success .modal-footer{
      border:none;
      padding:24px;
      text-align:center;
    }
    .modal-success .modal-footer p{
      text-align: center;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1;
      width: 100%;
      font: Bold 14px/27px Roboto;
    }
    .modal-content{
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border-radius: 10px;
      opacity: 1;
      border: none; 
    }
    .text-error{
      text-align: left;
      font: 14px/27px Roboto;
      letter-spacing: 0px;
      color: #EB3939;
      opacity: 1;
    }
    .label-input{
      text-align: left;
      font: Bold 14px/19px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1;
    }
    .radio-item{
      text-align: left;
      font: 14px/19px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1;
      margin-bottom:16px;
    }
    .panel-loan{
      background: #FFFFFF 0% 0% no-repeat padding-box;
      padding:24px;
    }
    .background-next{
      background-color: #fff;
      padding: 24px;
    }
    .input-boxappend{
      background: transparent;
      border-left: none;
    }
    .item-input-boxappend{
      border-right: none;  
    }

    .btn-next-login{
      width: 100%;
      background: #F89B24 0% 0% no-repeat padding-box;
      border-radius: 8px;
      opacity: 1;
      border: none;
      color: rgb(255, 255, 255);
      height: 48px;
      padding: 10px;
      text-align: center;
      margin-top: 350px
    }
    .input-reg{
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 1px solid #707070;
      border-radius: 8px;
      opacity: 0.4;
      height:48px;
    }
    .text-bold-black{
      text-align: left;
      font: Bold 16px/21px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1;
    }
    .title-black{
      text-align: left;
      font: Bold 28px/37px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1;
    }
    .background-field{
      background: #fcfcfc 0% 0% no-repeat padding-box;
      border-radius: 14px;
      
    }
    .btn-next{
      background: #F89B24 0% 0% no-repeat padding-box;
      border-radius: 8px;
      opacity: 1;
      border-color: #F89B24;
      position: relative;
      top: 50%;
      width: 118px;
      height: 48px;
      float:right;
    }
    .modal-questions .modal-dialog{
      max-width: 700px;
    }
    .img-center{
      margin: auto;
    display: block;
    }
    .cpwd-box-pwd{
      margin-top: 150px
    }
    
    .cpwd-box-pwd .cpwd-subtitle{
      text-align: left;
      font: 14px/19px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1;
      margin-top:24px;
      width:100%;
    }
    .cpwd-box-pwd .cpwd-note{
      text-align: left;
      font: 12px/24px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 0.8;
      margin:0px;
      width:100%;
    }
    .btn-confirm-pwd{
      width: 100%;
      background: #F89B24 0% 0% no-repeat padding-box;
      border-radius: 8px;
      opacity: 1;
      border: none;
      color: rgb(255, 255, 255);
      height: 48px;
      padding: 10px;
      text-align: center;
    }
    .btn-modify-table{
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 1px solid #3E8EDE;
      border-radius: 8px;
      opacity: 1;
      text-align: center;
      font: 14px/19px Roboto;
      letter-spacing: 0px;
      color: #3E8EDE;
    }
    .text-float-left{
      float:left;
    }
    .margin-right-15{
      margin-right:15px;
    }
    .text-table-change{
      text-align: left;
      font: 14px/19px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
    }
    .box-check-mail{
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 1px solid #B3C0C666;
      border-radius: 10px;
      opacity: 1;
      min-height:500px;
    }
    .box-title-check-mail{
      text-align: center;
      font: Bold 28px/37px Roboto;
      letter-spacing: 0px;
      color: #2B2B2B;
      opacity: 1;
    }
    .box-text-check-mail-bold{
      text-align: center;
      font: Bold 16px/24px Roboto;
      letter-spacing: 0px;
      color: #171717;
    }
    .box-text-check-mail{
      text-align: center;
      font: 16px/24px Roboto;
      letter-spacing: 0px;
      color: #171717;
    }
    .center-block{
      margin: auto;
      display: block;
    }
    
    
`;
