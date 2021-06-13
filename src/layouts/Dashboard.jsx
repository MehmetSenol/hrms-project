import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import Sidebar from '../layouts/Sidebar'
import { Route } from 'react-router'
import Employer from '../pages/Employer'
import Employee from '../pages/Employee'
import JobPosting from '../pages/JobPosting'
import Candidate from '../pages/Candidate'
import JobPostingAdd from '../pages/JobPostingAdd'



export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Sidebar/>
                    </GridColumn>
                    <GridColumn width={12}>
                        <Route exact path="/" component={JobPosting}/>
                        <Route exact path="/jobPostings" component={JobPosting} />
                        <Route path="/JobPostings/add" component={JobPostingAdd} />
                        <Route path="/employers" component={Employer} />
                        <Route path="/employees" component={Employee} />
                        <Route path="/candidate" component={Candidate} />
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}
