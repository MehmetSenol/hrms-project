import React, { useState,useEffect} from 'react';
import EmployeeService from '../services/EmployeeService';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

export default function Employee() {
    const [employees, setEmployees] = useState([])
    useEffect(()=>{
        let employeeService=new EmployeeService()
        employeeService.getEmployee().then((result)=>setEmployees(result.data.data))
    },[])
    
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Adı</Table.HeaderCell>
                        <Table.HeaderCell>Soyadı</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        employees.map(employee => (
                            <Table.Row key={employee.id}>
                                <Table.Cell>{employee.firstName}</Table.Cell>
                                <Table.Cell>{employee.lastName}</Table.Cell>
                                <Table.Cell>{employee.email}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}