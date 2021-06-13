import React, { useState } from 'react'
import { useHistory} from 'react-router'
import { Link } from 'react-router-dom'
import { Menu, Segment, Container,Icon } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'


export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()

    function handleSignOut(params) {
        setIsAuthenticated(false)
        history.push("/")

    }
    function handleSignIn(params) {
        setIsAuthenticated(true)
    }


    return (
        <div>
            <Segment inverted>
                <Container>
                    <Menu inverted secondary>
                        <Menu.Item
                            name='Hrms'

                        />
                        <Menu.Item as={Link} to={"/jobPostings"}>
                            <Icon name="list" />
                            İlanlar
                        </Menu.Item>
                        <Menu.Item as={Link} to={"/JobPostings/add"}>
                            <Icon name="list" />
                            İlan Ver
                        </Menu.Item>
                        
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut singIn={handleSignIn} />}
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Container>
            </Segment>
        </div>
    )
}
