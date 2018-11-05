/**
 *
 * @title 页签
 * @description 应用组件描述
 *
 */

import React, { Component } from 'react';
import InputTag from '../../src/index';
import { Col, Row, Button, } from 'tinper-bee';

class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            primaryValue: ['primary'],
            successValue: ['success'],
            infoValue: ['info'],
            warningValue: ['warning'],
            dangerValue: ['danger'],
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name, values) {
        this.setState({
            [name]: values
        })
    }

    handleClick(name) {
        const string = this.state[name].join();
        alert(string);
    }
    render() {
        const { primaryValue, warningValue, successValue, dangerValue, infoValue } = this.state;
        return (
            <div className="demoPadding">
                <Row>
                    <Col xs={6}>
                        <InputTag id="primary" colors="primary" value={primaryValue} onChange={(values) => this.handleChange('primaryValue', values)} />
                    </Col>
                    <Col xs={6}>
                        <Button shape="border" onClick={() => this.handleClick('primaryValue')}>获取标签值</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <InputTag id="success" colors="success" value={successValue} onChange={(values) => this.handleChange('successValue', values)} />
                    </Col>
                    <Col xs={6}>
                        <Button shape="border" onClick={() => this.handleClick('successValue')}>获取标签值</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <InputTag id="info" colors="info" value={infoValue} onChange={(values) => this.handleChange('infoValue', values)} />
                    </Col>
                    <Col xs={6}>
                        <Button shape="border" onClick={() => this.handleClick('infoValue')}>获取标签值</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <InputTag id="warning" colors="warning" value={warningValue} onChange={(values) => this.handleChange('warningValue', values)} />
                    </Col>
                    <Col xs={6}>
                        <Button shape="border" onClick={() => this.handleClick('warningValue')}>获取标签值</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <InputTag id="danger" colors="danger" value={dangerValue} onChange={(values) => this.handleChange('dangerValue', values)} />
                    </Col>
                    <Col xs={6}>
                        <Button shape="border" onClick={() => this.handleClick('dangerValue')}>获取标签值</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Demo1;