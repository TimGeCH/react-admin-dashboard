import React from "react";
import { Button, Layout, Avatar, Dropdown } from 'antd';
import '../commonHeader/index.css'
import { MenuFoldOutlined } from "@ant-design/icons";
const { Header } = Layout;

const CommonHeader = () => {

    const logout = () => {
        console.log('Logout')
    }
    const items = [
        {
            key: '1',
            label: (
                <a onClick={() => logout} target="_blank" rel="noopener noreferrer">
                    Profile
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick target="_blank" rel="noopener noreferrer">
                    Log out
                </a>
            ),
        },
    ];

    return (
        <Header className="header-container">
            <Button
                type="text"
                icon={<MenuFoldOutlined />}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: '#fff'
                }}
            />
            <Dropdown menu={{ items }}>
                <Avatar size={36} src={<img src={require("../../assets/images/user.png")} />} />
            </Dropdown>

        </Header>
    )
}

export default CommonHeader