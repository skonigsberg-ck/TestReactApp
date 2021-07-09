import React, { Component } from 'react'
export class AddStudents extends Component {
    static displayName = AddStudents.name;

    constructor(props) {
        super(props);
        this.state = {
            studentName: "",
            studentClass: "",
            studentAge: "",
            studentsTable: []
        };
        this.setStudentName = this.setStudentName.bind(this);
        this.setStudentClass = this.setStudentClass.bind(this);
        this.setStudentAge = this.setStudentAge.bind(this);
        this.addStudent = this.addStudent.bind(this);
    }

    addStudent() {
        var table = this.state.studentsTable
        table.push(<><th>{this.state.studentName}</th><th>{this.state.studentClass}</th><th>{this.state.studentAge}</th></>)
        this.setState({
            studentsTable: table,  
            studentName: "",
            studentClass: "",
            studentAge: ""
        });
    }

    setStudentName(e) {
    this.setState({ studentName: e.target.value});
    }

    setStudentClass(e) {
        this.setState({ studentClass: e.target.value });
    }

    setStudentAge(e) {
        this.setState({ studentAge: e.target.value });
    }

    render() {
        return (
            <div>
                <h2>Add Students</h2>
                <br/>
                <input className="e-input" type="text" value={ this.state.studentName} onChange={this.setStudentName} placeholder="Student Name" />
                <input className="e-input" type="text" value={this.state.studentClass}  onChange={this.setStudentClass} placeholder="Class" style={{ marginLeft: 10}}/>
                <input className="e-input" type="text" value={this.state.studentAge} onChange={this.setStudentAge} placeholder="Age" style={{ marginLeft: 10 }} />
                <button className="btn btn-primary" style={{ marginLeft: 30 }} onClick={this.addStudent}>Add Student</button>
                <br/><br/>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Age</th>
                        </tr>
                        {this.state.studentsTable.map(f => <tr>{ f}</tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default AddStudents