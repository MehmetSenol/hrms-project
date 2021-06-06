import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function User() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item
                    name='İş Veren'
                />
                <Menu.Item
                    name='İş Arayan'
                />
                <Menu.Item
                    name='Çalışanlar'
                />
            </Menu>
        </div>
    )
}
