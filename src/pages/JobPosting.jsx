import React, { useState,useEffect} from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import JobPositionService from '../services/JobPostingService';


export default function JobPosting() {
    const [jobPostings, setJobPostings] = useState([])
    useEffect(()=>{
        let jobPostingService=new JobPositionService()
        jobPostingService.getJobPostings().then(result=>setJobPostings(result.data.data))
    },[])
    
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Maximum Ücret</Table.HeaderCell>
                        <Table.HeaderCell>Minumum Ücret</Table.HeaderCell>
                        <Table.HeaderCell>Aranan Elaman Sayısı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        jobPostings.map(jobPosting => (
                            <Table.Row key={jobPosting.id}>
                                <Table.Cell>{jobPosting.lastApplyDate}</Table.Cell>
                                <Table.Cell>{jobPosting.maxWage}</Table.Cell>
                                <Table.Cell>{jobPosting.minWage}</Table.Cell>
                                <Table.Cell>{jobPosting.numberOfOpenPosition}</Table.Cell>
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

