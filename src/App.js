import React from 'react'
import { Button, Radio, Row, Col } from 'antd'
import { ModalDemo } from './modal'
import { CheckboxDemo } from './checkbox'
import './custom-base.less'
import './App.css'

function App() {
  return (
    <div className="App">
      <div style={{ padding: 50 }}>
        <a href="//github.com">normal link</a>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      </div>
      <div style={{ padding: 50 }}>
        <Row gutter={[16, 16]}>
          <Col>
            <Button type="primary">Hello world</Button>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col>
            <Radio.Group>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>D</Radio>
            </Radio.Group>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col>
            <ModalDemo />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col>
            <CheckboxDemo />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default App
