import React, {Component} from "react";
import {Link} from 'react-router-dom';
import 'babel-es6-polyfill';
import StudentService from '../services/StudentService';
import {
  Badge,
  Button,
  Row,
  Col,
  Card,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardHeader,
  CardBlock,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

let prev  = 0;
let next  = 0;
let last  = 0;
let first = 0;
class Tables extends Component {

  constructor(props) {
    super(props);

    this.state = {
      students: [],
      currentPage: 1,
      studentsPerPage: 6,
      modal: false,
      studentDelId: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleLastClick = this.handleLastClick.bind(this);
    this.handleFirstClick = this.handleFirstClick.bind(this);
    this.handleFirstDelete = this.handleFirstDelete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);  
    this.toggle = this.toggle.bind(this);
  }

  async componentDidMount() {
    console.log('testing');
    this.state.students = (await StudentService.index()).data;
    console.log(this.state.students);
    this.setState({ students: this.state.students });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  handleFirstDelete(id) {
    this.toggle();
    console.log(id);
    // await StudentService.remove(id);
    this.setState({
      studentDelId: id
    });
  }

  async handleDelete(id) {
    await StudentService.remove(id);
    this.toggle();
    this.setState({
      students: (await StudentService.index()).data
    });
  }

  handleLastClick(event) {
    event.preventDefault();
    this.setState({
      currentPage:last
    });
  }
  handleFirstClick(event) {
    event.preventDefault();
    this.setState({
      currentPage:1
    });
  }
  render() {
    const { students, currentPage, studentsPerPage, studentDelId } = this.state;
    // Logic for displaying current todos
    let indexOfLastStudent = currentPage * studentsPerPage;
    let indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    let currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);
     prev  = currentPage > 0 ? (currentPage -1) :0;
     last = Math.ceil(students.length/studentsPerPage);
     next  = (last === currentPage) ?currentPage: currentPage +1;

    // Logic for displaying page numbers
    let pageNumbers = [];
    for (let i = 1; i <=last; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <strong>Students </strong>
                <small>List</small>
                <div className="card-actions">
                  <Link to={'/students/create'}>
                    <i className="fa fa-plus"></i>
                  </Link>
                </div>
              </CardHeader>
              <CardBlock className="card-body">
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Reg. No</th>
                    <th>Surname</th>
                    <th>First Name</th>
                    <th>Email</th>
                  </tr>
                  </thead>
                  <tbody>
                  { currentStudents.map((student) => <tr key={ student.id }>
                    <td>{student.regno}</td>
                    <td>{student.surname}</td>
                    <td>{student.firstname}</td>
                    <td>
                      <Badge color="success"><Link to={`/students/${student.id}`}>Edit</Link></Badge>
                      <Badge onClick={() => this.handleFirstDelete(student.id)} color="danger">Delete</Badge>
                    </td>
                  </tr>)}
                  </tbody>
                </Table>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Delete Student</ModalHeader>
                  <ModalBody>
                    Do you really want to delete student?
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={() => this.handleDelete(studentDelId)} color="primary">Delete</Button>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
                <nav>
                {
                  this.state.students.length > this.state.studentsPerPage ? (
                    <Pagination>
                    <PaginationItem>
                    { prev === 0 ? <PaginationLink disabled>First</PaginationLink> :
                        <PaginationLink onClick={this.handleFirstClick} id={prev} href={prev}>First</PaginationLink>
                    }
                    </PaginationItem>
                    <PaginationItem>
                    { prev === 0 ? <PaginationLink disabled>Prev</PaginationLink> :
                        <PaginationLink onClick={this.handleClick} id={prev} href={prev}>Prev</PaginationLink>
                    }
                    </PaginationItem>
                      {
                        pageNumbers.map((number,i) =>
                        <Pagination key= {i}>
                        <PaginationItem active = {pageNumbers[currentPage-1] === (number) ? true : false} >
                        <PaginationLink onClick={this.handleClick} href={number} key={number} id={number}>
                        {number}
                        </PaginationLink>
                        </PaginationItem>
                        </Pagination>
                      )}
      
                  <PaginationItem>
                  {
                    currentPage === last ? <PaginationLink disabled>Next</PaginationLink> :
                    <PaginationLink onClick={this.handleClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Next</PaginationLink>
                  }
                  </PaginationItem>
      
                  <PaginationItem>
                  {
                    currentPage === last ? <PaginationLink disabled>Last</PaginationLink> :
                    <PaginationLink onClick={this.handleLastClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Last</PaginationLink>
                  }
                  </PaginationItem>
                  </Pagination>
                  ) : ""
                }
                </nav>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

export default Tables;
