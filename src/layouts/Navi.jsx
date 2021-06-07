import React from 'react'
import { Menu, Segment,Button, Container } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Segment inverted>
                <Container>
                <Menu inverted secondary>
                    <Menu.Item
                        name='home'
                        
                    />
                    <Menu.Item
                        name='Job Postings'
                        
                    />
                    <Menu.Item
                        name='Cvs'
                        
                    />
                    <Menu.Item
                        name='Employers'
                        
                    />
                     <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                </Container>
            </Segment>
        </div>
    )
}
