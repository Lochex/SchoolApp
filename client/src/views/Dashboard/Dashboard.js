import React, { Component } from 'react';
import {Bar, Line} from "react-chartjs-2";
import 'babel-es6-polyfill';
import StudentService from '../../services/StudentService';
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBlock,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table
} from "reactstrap";

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ],
};

const cardChartOpts4 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.6,
    }],
    yAxes: [{
      display: false,
    }]
  }
}

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      students: []
    };
  }

  async componentDidMount() {
    console.log('testing');
    this.state.students = (await StudentService.index()).data;
    console.log(this.state.students);
    this.setState({ students: this.state.students });
  }

  render() {
    const { students } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBlock className="card-body pb-0">
                <h4 className="mb-0">{students.length}</h4>
                <p>Students</p>
              </CardBlock>
              <div className="chart-wrapper px-3" style={{height:'70px'}}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70}/>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard;
