import * as React from 'react';
import { Link } from 'react-router-dom';
import { Rnd }  from 'react-rnd';
import jsmpeg from 'jsmpeg';

import 'normalize.css';
import './index.css';

const canvasWidth: number = 1920;
const canvasHeight: number = 1080;

class CameraGrid extends React.Component {
  private sourceCanvas: any;
  private camera2Canvas: any;
  private camera3Canvas: any;
  private camera4Canvas: any;
  private camera5Canvas: any;

  constructor(props) {
    super(props);

    this.sourceCanvas = React.createRef();
    this.camera2Canvas = React.createRef();
    this.camera3Canvas = React.createRef();
    this.camera4Canvas = React.createRef();
    this.camera5Canvas = React.createRef();
  }

  public componentDidMount() {
    const client = new WebSocket('ws://localhost:9999');
    const client2 = new WebSocket('ws://localhost:9998');
    const client3 = new WebSocket('ws://localhost:9997');

    const player = new jsmpeg(client, {
      // forceCanvas2D: true,
      canvas: this.sourceCanvas.current,
    });

    player.volume = 0.8;
    const player2 = new jsmpeg(client2, {
      canvas: this.camera2Canvas.current,
    });
    const player3 = new jsmpeg(client3, {
      canvas: this.camera3Canvas.current,
    });
    // const player4 = new jsmpeg(client2, {
      // canvas: this.camera4Canvas.current,
    // });
    // const player5 = new jsmpeg(client3, {
      // canvas: this.camera5Canvas.current,
    // });
  }

  public render() {
    return (
      <div className="cameraGrid">
        <Rnd
          lockAspectRatio={true}
          default={{
            x: Math.random() * 500,
              y: Math.random() * 500,
              width: canvasWidth/4,
              height: canvasHeight/4,
          }}
        >
          <canvas
            className="camera sourceCanvas"
            ref={this.sourceCanvas}
            width={canvasWidth}
            height={canvasHeight}
          />
        </Rnd>
        <Rnd
          lockAspectRatio={true}
          default={{
            x: Math.random() * 500,
              y: Math.random() * 500,
              width: canvasWidth/4,
              height: canvasHeight/4,
          }}
        >
          <canvas
            className="camera camera2Canvas"
            ref={this.camera2Canvas}
            width={canvasWidth}
            height={canvasHeight}
          />

        </Rnd>
        <Rnd
          lockAspectRatio={true}
          default={{
            x: Math.random() * 500,
              y: Math.random() * 500,
              width: canvasWidth/4,
              height: canvasHeight/4,
          }}
        >
          <canvas
            className="camera camera3Canvas"
            ref={this.camera3Canvas}
            width={canvasWidth}
            height={canvasHeight}
          />
        </Rnd>

      </div>
    );
  }
}

export default CameraGrid;
