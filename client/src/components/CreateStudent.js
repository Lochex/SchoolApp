import React, {Component} from "react";
import DatePicker from 'react-datepicker';
import 'babel-es6-polyfill';
import StudentService from '../services/StudentService';
import moment from 'moment';
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBlock,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from "reactstrap";

import 'react-datepicker/dist/react-datepicker.css';

class CreateStudent extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   surname: '',
    //   firstname: '',
    //   middlename: '',
    //   gender: '',
    //   email: '',
    //   parentno1: '',
    //   parentno2: '',
    //   dob: ''
    // };

    this.state = {
      surname: '',
      firstname: '',
      regno: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // this.setState({
    //   startDate: date
    // });
  }

  handleDate(date) {
    this.setState({
      dob: date
    });
  }

  async onSubmit() {
    await StudentService.create(this.state);
    // console.log(this.state.students);
    // this.setState({ students: this.state.students });
  }

  render() {
    const { surname, firstname, regno, gender, email, parentno1, parentno2, dob} = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <strong>Create Student</strong>
                <small> Form</small>
              </CardHeader>
              <CardBlock className="card-body">
                <Row>
                  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="name">Surname</Label>
                      <Input type="text" id="name" onChange={this.handleChange} placeholder="Enter your Surname" name="surname" value={surname} required/>
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="name">First Name</Label>
                      <Input type="text" id="name" onChange={this.handleChange} placeholder="Enter your First name" name="firstname" value={firstname} required/>
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="name">Middle Name</Label>
                      <Input type="text" id="name" onChange={this.handleChange} placeholder="Enter your Middle name" name="regno" value={regno} required/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Date of Birth</Label>
                      <DatePicker 
                        selected={dob}
                        onChange={this.handleDate}
                        showYearDropdown
                        showMonthDropdown
                        className="form-control"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="cgender">Gender</Label>
                      <Input type="select" onChange={this.handleChange} name="cgender" id="cgender" name="gender" value={gender}>
                        <option>Male</option>
                        <option>Female</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="email">Email</Label>
                      <Input type="text" id="email" onChange={this.handleChange} name="email" value={email} required/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="parentno1">Parent No. 1</Label>
                      <Input type="text" id="parentno1" onChange={this.handleChange} name="parentno1" value={parentno1} required/>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="parentno2">Parent No. 2</Label>
                      <Input type="text" id="parentno2" onChange={this.handleChange} name="parentno2" value={parentno2} required/>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.onSubmit}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CreateStudent;