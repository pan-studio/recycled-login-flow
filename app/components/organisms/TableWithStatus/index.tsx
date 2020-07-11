import React from 'react';
import classnames from 'classnames';
import { Button, Modal, Table, Row, Col } from 'react-bootstrap';

import A from '../../atoms/Button/A';
import TitleTable from '../../molecules/TitleTable';

import Icon from '../../atoms/Icon';

interface Props {
  height?: any;
  width?: any;
  className?: string;
  src?: any;
}

const RowTH = (props: any) => (
  <tr>
    <th className="tv-headnormal">{props.data[0]}</th>
    <th className="tv-headnormal">{props.data[1]}</th>
    <th className="tv-headnormal">{props.data[2]}</th>
    <th className="tv-headnormal">{props.data[3]}</th>
    <th className="tv-headnormal">{props.data[4]}</th>
    <th className="tv-headnormal">{props.data[5]}</th>
    <th className="tv-headnormal">{props.data[6]}</th>
  </tr>
);

const RowTR = (props: any) => (
  <tr>
    <td>{props.data[0]}</td>
    <td>{props.data[1]}</td>
    <td>{props.data[2]}</td>
    <td>{props.data[3]}</td>
    <td>{props.data[4]}</td>
    <td>{props.data[5]}</td>
    {props.data[6] == 'Active' && (
      <td className="tb-statusactive">{props.data[6]}</td>
    )}
    {props.data[6] != 'Active' && <td>{props.data[6]}</td>}
  </tr>
);

let tBodyRows = [
  [
    '22',
    'EUR',
    'Blanca Maria Bouzas Louzao',
    '625019832098',
    'Banca Intesa',
    'FAO',
    'Pending Approval',
  ],
  [
    '2544',
    'EUR',
    'Blanca Maria Bouzas Louzao',
    '625019832098',
    'Bankinter',
    'e-Bankinter',
    'Pending Approval',
  ],
  [
    '3274',
    'EUR',
    'Blanca Maria Bouzas Louzao',
    '625019832098',
    'BPS',
    'FAO',
    'Active',
  ],
  [
    '3851',
    'EUR',
    'Blanca Maria Bouzas Louzao',
    '625019832098',
    'UNFCU',
    'Internet',
    'Active',
  ],
];

let tHeadRows = [
  [
    'Acc. Ref',
    'CCY',
    'Beneficiary',
    'Account Number',
    'Bank',
    'Branch',
    'Status',
  ],
];

function TableWithStatus(props) {
  const [show, setShow] = React.useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="tb-background tb-scroll">
        <Row className="tb-widthmax tb-paddinglateral">
          <TitleTable
            title={props.title}
            text={props.textDefault}
            action={props.action}
          />
          {props.action && (
            <Col
              sm="3"
              xs="12"
              className={classnames(
                'margin-bottom-general margin-top-general table-textalign-right',
              )}
            >
              <A
                className={
                  show ? 'table-active table-mr' : 'table-closed table-mr'
                }
                onClick={handleShow}
              >
                Active
              </A>
              <A
                className={
                  !show ? 'table-active table-ml' : 'table-closed table-ml'
                }
                onClick={handleClose}
              >
                Closed
              </A>
            </Col>
          )}
          {props.additem && (
            <Col
              sm="3"
              xs="12"
              className={classnames(
                'margin-bottom-general margin-top-general table-textalign-right',
              )}
            >
              <A className={'table-active-add'} onClick={handleShow}>
                + Add new account
              </A>
            </Col>
          )}
        </Row>

        <div className="tb-scroll-style tb-paddinglateral tb-widthmax">
          {show && (
            <Table className="tv-general">
              <thead>
                {tHeadRows.map((x, i) => (
                  <RowTH key={i} data={x} />
                ))}
              </thead>
              <tbody>
                {tBodyRows.map((x, i) => (
                  <RowTR key={i} data={x} />
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </Row>
    </>
  );
}
export default TableWithStatus;
