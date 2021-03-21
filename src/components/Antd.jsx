import { Button, Col, Radio, Row } from "antd";
import { React, useState } from "react";
import { MessageOutlined } from "@ant-design/icons";

const Antd = () => {
  const [size, setSize] = useState()

  const handleSizeChange = value => {
    setSize(value)
  }

  const clickBtn = () => {
    console.log('click');
  }

  return (
    <Row>
      <Col span={24}>
        <h1>Antd</h1>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Col>
      <hr/>

      <Col span={18} order={1}>
        <Radio.Group value={size} onChange={handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
      </Col>

      <hr/>
      <Col span={6}>
        <Button 
          danger={false}
          block={false}
          loading={false}
          onClick={clickBtn}
          icon={<MessageOutlined />}
        />
      </Col>
    </Row>
  )
}

export default Antd
