import React from 'react';
import { Button, Modal, Table, Row } from 'react-bootstrap';

import TitleTable from '../../molecules/TitleTable';

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
    <th className="tv-headdown">{props.data[2]}</th>
    <th className="tv-headdown">{props.data[3]}</th>
    <th className="tv-headnormal">{props.data[4]}</th>
    <th className="tv-headdown">{props.data[5]}</th>
    <th className="tv-headdown">{props.data[6]}</th>
    <th className="tv-headdown">{props.data[7]}</th>
  </tr>
);



let RowTR = (props: any, actionclik) => (
  <tr onClick={props.actionclik}>
    <td>{props.data[0]}</td>
    <td>{props.data[1]}</td>
    <td>{props.data[2]}</td>
    <td>{props.data[3]}</td>
    <td>{props.data[4]}</td>
    <td>{props.data[5]}</td>
    <td>{props.data[6]}</td>
    <td>{props.data[7]}</td>
  </tr>
);

let tBodyRows = [
  [
    'EUR',
    '10.075,00',
    '0,00',
    '0,00',
    '10.075,00',
    '2.500,00',
    '08/2019',
    '12/9999',
  ],
  [
    'USD',
    '10.075,00',
    '0,00',
    '0,00',
    '10.075,00',
    '2.500,00',
    '08/2019',
    '12/9999',
  ],
];

let tHeadRows = [
  [
    'CCY',
    'Balance',
    'With a future value date',
    'eWithdrawal pending',
    'Available Balance',
    'Amount',
    'Start Month',
    'End Month',
  ],
];

function TableView(props) {
  return (
    <>
      <div className="background-field">
        <Row className="tb-background test">
          <TitleTable title={props.title} text={props.textDefault} />
          <div className="tb-paddinglateral tb-widthmax">
            <Table className="tv-general">
              <thead>
                {props.headerup && (
                  <tr>
                    <th></th>
                    <th></th>
                    <th colSpan={2} className="tv-headup">
                      Funds not available
                    </th>
                    <th></th>
                    <th colSpan={3} className="tv-headup">
                      Savings Standing Order
                    </th>
                  </tr>
                )}
                {tHeadRows.map((x, i) => (
                  <RowTH key={i} data={x} />
                ))}
              </thead>
              <tbody>
                {tBodyRows.map((x, i) => (
                  <RowTR key={i} data={x} actionclik="t();"/>
                ))}
              </tbody>
            </Table>
          </div>
        </Row>
      </div>
    </>
  );
}
export default TableView;
