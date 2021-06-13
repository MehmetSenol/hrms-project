import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

export default function User() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item as={Link} to={"/employers"}>
                    <Icon name="list"/>
                    İş Verenler
                </Menu.Item>

                <Menu.Item as={Link} to={"/candidate"}>
                    <Icon name="list"/>
                    İş Arayanlar
                </Menu.Item>

                <Menu.Item as={Link} to={"/employees"}>
                    <Icon name="list"/>
                    Çalışanlar
                </Menu.Item>
                    
                
            </Menu>
        </div>
    )
}
