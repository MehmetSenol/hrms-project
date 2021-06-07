import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import Sidebar from '../layouts/Sidebar'
import Candidate from '../pages/Candidate'
import JobPositions from '../pages/JobPosition'


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Sidebar/>
                    </GridColumn>
                    <GridColumn width={12}>
                        <Candidate/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}
