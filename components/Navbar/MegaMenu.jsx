// components/MegaMenu.js

import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

const MegaMenu = ({ megaMenuData }) => {
  return (
    <Menu mode="horizontal">
      {Object.keys(megaMenuData).map((category) => (
        <SubMenu key={category} title={category}>
          {megaMenuData[category].map((item, idx) => (
            <Menu.Item key={`${category}-${idx}`}>
              <Link href={`/${item}`}>
                <a>{item}</a>
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

export default MegaMenu;
