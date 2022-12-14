import React from 'react';
import { Header } from 'antd/es/layout/layout';
import './Header.css';
import { BellOutlined } from '@ant-design/icons';
import { Affix } from 'antd';

const FixedHeader = () => {
  return (
    <Affix>
      <Header className="header">
        <div className="mainHeader">
          <span className="greySquare" />
          <span className="headerTitle"> Dazzie</span>
        </div>
        <div className="user">
          <BellOutlined className="bellIcon" />
          <span
            className="greySquare"
            style={{
              borderRadius: 35,
            }}
          />
          <div className="userName">
            <span>Sumanto</span>
            <span className="headerSubTitle">Cashier</span>
          </div>
        </div>
      </Header>
    </Affix>
  );
};
export default FixedHeader;
