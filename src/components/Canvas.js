import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCanvas } from '../actions/index.js';
import { Stage, Layer, Group, Text, Image } from 'react-konva';
//import Konva from 'konva';
import hash from 'object-hash';

import Logo from '../images/pchc20-logo.png';

class LogoImage extends Component {
  state = {
    image: null
  }

  componentDidMount() {
    const image = new window.Image();
    image.src = Logo;
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image: image
      });
    };


  }

  render() {
    return <Image image={this.state.image} />
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.adjustCanvas = this.adjustCanvas.bind(this);
    this.canvasResize = this.canvasResize.bind(this);
    this.canvasGenerate = this.canvasGenerate.bind(this);
  }

  adjustCanvas() {
    const { refs } = this;

    // Position elements:
    refs.credentials.position({
      x: refs.name.width() + refs.name.y(),
    });

    refs.title.position({
      y: refs.name.height() + refs.name.y(),
    });


    refs.location.position({
      y: refs.title.height() + refs.title.y()
    });

    refs.address.position({
      y: refs.location.height() + refs.location.y()
    });

    // Phone/ext/fax line:
    refs.phoneline.position({
      y: refs.address.height() + refs.address.y()
    });

    refs.ext.position({
      x: refs.phone.width() + refs.phone.x()
    });

    refs.fax.position({
      x: refs.ext.width() + refs.ext.x()
    });

    // Cell/website line:
    refs.webline.position({
      y: refs.phone.height() + refs.phoneline.y()
    });

    refs.web.position({
      x: refs.cell.width() + refs.cell.x()
    });

    this.canvasResize();
  }

  canvasGenerate() {
    this.props.updateCanvas({
      generating: true
    });

    setTimeout(() => {
      let dataURL = this.refs.canvas.toDataURL();
      let filehash = hash.sha1(dataURL);
      let filename = `pchc-signature_${filehash.substr(0,8)}.png`;

      this.props.updateCanvas({
        data: dataURL,
        filename: filename,
        generating: false,
      });
    }, 1000);
  }

  canvasResize() {
    const { refs } = this;

    // Resize canvas:

    const stage = refs.stage.getStage();
    let stageWidth = 600;
    let stageHeight = 85;

    const logoWidth = 230;
    const logoHeight = 80;

    let groupsHeight = 0;
    let groupsWidth = 0;

    // Loop through groups within signature text:
    refs.signaturetext.getChildren().map((group) => {
      let lineHeight = 0;
      let lineWidth = 0;
      // Loop through elements within group:
      group.getChildren().map((el) => {
        if(el.height() > lineHeight) {
          lineHeight = el.height();
        }

        lineWidth += el.width();

        return true;
      });

      groupsHeight += lineHeight;

      if(lineWidth > groupsWidth) {
        groupsWidth = lineWidth;
      }

      return true;
    });

    stageWidth = logoWidth + groupsWidth;
    stageHeight = groupsHeight > logoHeight ? groupsHeight : logoHeight;

    stage.width(stageWidth);
    stage.height(stageHeight);

    this.canvasGenerate();
  }

  componentDidMount() {
    this.adjustCanvas();
  }

  componentDidUpdate() {
    this.adjustCanvas();
    return;
  }

  render() {
    const fontSize = 14;
    const fontFamily = 'Helvetica, Arial, sans-serif';
    const padding = 1;

    return (
      <Stage width={600} height={100} ref="stage" className="signature--stage">
        <Layer ref="canvas">
          <Group ref="signatureimage">
            <Group x={0} y={2} ref="logoimage">
              <LogoImage />
            </Group>
            <Group x={230} y={0} ref="signaturetext">
              <Group ref="nameline">
                <Text
                  text={this.props.signature.name}
                  padding={padding}
                  fontSize={fontSize + 2}
                  fontFamily={fontFamily}
                  fontStyle="bold"
                  align="left"
                  ref="name"
                  y={0}
                />
                <Text
                  text={
                    this.props.signature.credentials
                      ? `, ${this.props.signature.credentials}`
                      : ''
                  }
                  padding={padding}
                  fontSize={fontSize + 2}
                  fontFamily={fontFamily}
                  fontStyle="bold"
                  align="left"
                  ref="credentials"
                  y={0}
                />
              </Group>
              <Group ref="titleline">
                <Text
                  text={this.props.signature.title}
                  padding={padding}
                  fontSize={fontSize}
                  fontFamily={fontFamily}
                  align="left"
                  ref="title"
                  y={20}
                />
              </Group>
              <Group ref="locationline">
                <Text
                  text={
                    this.props.signature.location.name
                      ? this.props.signature.location.name
                      : ''
                  }
                  height={
                    this.props.signature.location.name
                      ? null
                      : 0
                  }
                  padding={padding}
                  fontSize={fontSize}
                  fontFamily={fontFamily}
                  align="left"
                  ref="location"
                  y={40}
                />
              </Group>
              <Group ref="addressline">
                <Text
                  text={
                    this.props.signature.location.address
                      ? this.props.signature.location.address
                      : ''
                  }
                  height={
                    this.props.signature.location.name
                      ? null
                      : 0
                  }
                  padding={padding}
                  fontSize={fontSize}
                  fontFamily={fontFamily}
                  align="left"
                  ref="address"
                  y={40}
                />
              </Group>
              <Group ref="phoneline" y={60}>
                <Text
                  text={`207-${this.props.signature.phone}`}
                  padding={padding}
                  fontSize={fontSize}
                  fontFamily={fontFamily}
                  align="left"
                  ref="phone"
                />
                <Text
                  text={ this.props.signature.ext ?
                    ` ext. ${this.props.signature.ext}`
                    : ''
                  }
                  padding={padding}
                  fontSize={fontSize}
                  fontFamily={fontFamily}
                  align="left"
                  ref="ext"
                />
                <Text
                  text={ this.props.signature.fax ?
                    ' | Fax: 207-907-7078'
                    : ''
                  }
                  padding={padding}
                  fontSize={fontSize}
                  fontFamily={fontFamily}
                  align="left"
                  ref="fax"
                />
              </Group>
              <Group ref="webline" y={80}>
                <Text
                  text={ this.props.signature.cell ?
                    `Cell: ${this.props.signature.cell} | `
                    : ''
                  }
                  padding={ this.props.signature.cell ? padding : 0 }
                  fontSize={fontSize}
                  fontFamily={fontFamily}
                  align="left"
                  ref="cell"
                />
                <Text
                  text="pchc20.com"
                  padding={padding}
                  fontSize={fontSize}
                  fontFamily={fontFamily}
                  align="left"
                  ref="web"
                />
              </Group>
            </Group>
          </Group>
        </Layer>
      </Stage>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateCanvas }, dispatch);
}

function mapStateToProps({ signature }) {
  return { signature };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
