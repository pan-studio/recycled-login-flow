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
    <td>{props.data[6]}</td>
  </tr>
);

let tBodyRows = [['550,00', '12/2019', 'Open Ended']];

let tHeadRowsEURO = [['EURO Amount', 'Start Month', 'End Month']];

let tHeadRowsUSD = [['USD Amount', 'Start Month', 'End Month']];

function TableGeneral(props) {
  const [show, setShow] = React.useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="tb-background">
        <div className="tb-paddinglateral tb-widthmax">
          {show && props.Valuta == 'EURO' && (
            <Table className="tv-general">
              <thead>
                {tHeadRowsEURO.map((x, i) => (
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
          {show && props.Valuta == 'USD' && (
            <Table className="tv-general">
              <thead>
                {tHeadRowsUSD.map((x, i) => (
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
          <Col sm="12">
            <Button
              variant="secondary"
              onClick={handleClose}
              className="btn-modify-table margin-right-15"
            >
              Modify
            </Button>
            <Button
              variant="secondary"
              onClick={handleClose}
              className="btn-modify-table"
            >
              Terminate
            </Button>
          </Col>
        </div>
      </Row>
    </>
  );
}
export default TableGeneral;
