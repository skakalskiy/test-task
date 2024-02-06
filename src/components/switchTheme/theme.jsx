import React from 'react';
import { useState } from 'react';
import { Switch, Space } from 'antd';
import { IoMdSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import '../../index.css';

const Theme = () => {
    const [darkMode, setDarkMode] = useState(false);

    const setDarkModes = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
    }
    const setLightModes = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
    }

    const handleThemeChange = (checked) => {
        setDarkMode(checked);
        checked ? setDarkModes() : setLightModes();
    };

    return (
        <div>
            <Space direction="vertical">
                <Switch
                    checkedChildren={<IoIosMoon />}
                    unCheckedChildren={<IoMdSunny />}
                    checked={darkMode}
                    onChange={handleThemeChange}
                />
            </Space>
        </div>
    )
}

export default Theme;