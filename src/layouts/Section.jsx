import React from 'react'
import { Grid } from "semantic-ui-react";
import Candidate from '../pages/Candidate';
import Employer from '../pages/Employer';
import JobPositions from '../pages/JobPosition';

export default function Section() {
    return (
        <div>
           <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Candidate/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Employer/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <JobPositions/>
                    </Grid.Column>
                </Grid.Row>
                
            </Grid> 
        </div>
    )
}
