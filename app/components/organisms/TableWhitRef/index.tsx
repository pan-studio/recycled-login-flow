import React from 'react';
import classnames from 'classnames';
import { Button, Modal, Table, Row, Col } from 'react-bootstrap';

import A from '../../atoms/Button/A';
import TitleTable from '../../molecules/TitleTable';
import iconRef from '../../../../assets/images/dashboard-active.png';

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
    <th className="tv-headnormal">{props.data[7]}</th>
    <th className="tv-headnormal">{props.data[8]}</th>
    <th className="tv-headnormal">{props.data[9]}</th>
    <th className="tv-headnormal">{props.data[10]}</th>
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
    {props.data[6] == 'icon' && (
      <td><Icon src={iconRef} className={classnames('')}/></td>
    )}
    {props.data[6] != 'icon' && (
      <td></td>
    )}
    <td>{props.data[7]}</td>
    <td>{props.data[8]}</td>
    <td>{props.data[9]}</td>
    <td>{props.data[10]}</td>
  </tr>
);

let tBodyRows = [
  ['95037', 'EUR', 'Processed', 'EUR', '100.00', 'Blanca Maria Bouzas Louzao', 'icon', '24/10/2019', '24/10/2019', '892251', '22'],
  ['95037', 'EUR', 'Processed', 'EUR', '100.00', 'Blanca Maria Bouzas Louzao', '', '24/10/2019', '24/10/2019', '892251', '22'],
  ['95037', 'EUR', 'Processed', 'EUR', '100.00', 'Blanca Maria Bouzas Louzao', 'icon', '24/10/2019', '24/10/2019', '892251', '22'],
  ['95037', 'EUR', 'Processed', 'EUR', '100.00', 'Blanca Maria Bouzas Louzao', '', '24/10/2019', '24/10/2019', '892251', '22'],
  ['95037', 'EUR', 'Processed', 'EUR', '100.00', 'Blanca Maria Bouzas Louzao', 'icon', '24/10/2019', '24/10/2019', '892251', '22'],
];

let tHeadRows = [
  [
    'eWith. Ref',
    'Req. Date',
    'Status',
    'CCY',
    'Amount',
    'Beneficiary',
    'Ref',
    'Trans. Date',
    'Transf. Date',
    'DJ No.',
    'Acc. Ref',
  ],
];

function TableWhitRef(props) {
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
export default TableWhitRef;
