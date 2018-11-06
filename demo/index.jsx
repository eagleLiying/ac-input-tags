
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';
const pkg = require('../package.json')




const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";
var DemoArray = [{ 
    "example": <Demo1 />, 
    "title": " 标签", 
    "desc": '在输入框中输入标签内容，回车后可表示一个标签 输入完成',
    "code": `
    /**
     *
     * @title 标签
     * @description 在输入框中输入标签内容，回车后可表示一个标签 输入完成
     *
     */
    
    import React, { Component } from 'react';
    import InputTag from 'ac-input-tags';
    import { Col, Row, Button, } from 'tinper-bee';
    import 'ac-input-tags/dist/index.css';
    
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
                            <Button shape="border" onClick={() => this.handleClick('primaryValue')}>获取标签 值</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <InputTag id="success" colors="success" value={successValue} onChange={(values) => this.handleChange('successValue', values)} />
                        </Col>
                        <Col xs={6}>
                            <Button shape="border" onClick={() => this.handleClick('successValue')}>获取标签 值</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <InputTag id="info" colors="info" value={infoValue} onChange={(values) => this.handleChange('infoValue', values)} />
                        </Col>
                        <Col xs={6}>
                            <Button shape="border" onClick={() => this.handleClick('infoValue')}>获取标签 值</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <InputTag id="warning" colors="warning" value={warningValue} onChange={(values) => this.handleChange('warningValue', values)} />
                        </Col>
                        <Col xs={6}>
                            <Button shape="border" onClick={() => this.handleClick('warningValue')}>获取标签 值</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <InputTag id="danger" colors="danger" value={dangerValue} onChange={(values) => this.handleChange('dangerValue', values)} />
                        </Col>
                        <Col xs={6}>
                            <Button shape="border" onClick={() => this.handleClick('dangerValue')}>获取标签 值</Button>
                        </Col>
                    </Row>
                </div>
            )
        }
    }
    
    export default Demo1;
    `
}]


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { title, example, code, desc } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={this.handleClick}>
                {caret}
                {text}
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{title}</h3>
                <p>{desc}</p>
                <Panel collapsible expanded={this.state.open} colors='bordered' header={example} footer={footer} footerStyle={{ padding: 0 }}>
                    <pre><code className="hljs javascript">{code}</code></pre>
                </Panel>
            </Col>
        )
    }
}

export default class DemoGroup extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="demoContainer margin-right-30 margin-left-30">
                <Row>
                    {DemoArray.map((child, index) => {

                        return (
                            <Demo example={child.example} title={child.title} code={child.code} desc={child.desc} key={index} />
                        )

                    })}
                </Row>
            </div>
        )
    }
}

