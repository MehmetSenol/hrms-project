import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import Sidebar from '../layouts/Sidebar'
import Section from './Section'


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={3}>
                        <Sidebar/>
                    </GridColumn>
                    <GridColumn width={13}>
                        <Section/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}
