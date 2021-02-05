import React, { useRef, useLayoutEffect } from "react";
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: theme.palette.primary.light,
  },
  text: {
    position: 'absolute',
    color: "white",
  },
}));

const Opening = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  var ctx;
  const canvasRef = useRef(null)
  var a = []; //color blips

  window.onresize = function () {
    resize();
  }

  useLayoutEffect(() => {
    // eslint-disable-next-line
    ctx = canvasRef.current.getContext("2d");
    for (var i = 0; i < 20; i++) {
      var x = Math.random() * ctx.canvas.width;
      var y = Math.random() * ctx.canvas.height;
      var t = new NodeObject(x, y, 'white');
      a.push(t);
    }
    ctx.lineWidth = "1";
    ctx.globalAlpha = .5;
    anim();
  });

  const anim = () => {
    window.requestAnimationFrame(anim);
    ctx.fillStyle = theme.palette.primary.light;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    a.forEach(function (e, i) {
      e.dr();
    });
  }

  function resize() {
    ctx.height = window.innerHeight * .95;
    ctx.width = window.innerWidth * .95;
    canvasRef.current.width = window.innerWidth * .95;
    canvasRef.current.height = window.innerHeight * .95;
  }

  function NodeObject(x, y, color) {
    this.initialX = x
    this.initialY = y
    this.xPos = x;
    this.yPos = y;
    this.xVel = (Math.random() * (0.1 - 0.4)).toFixed(4);
    this.yVel = (Math.random() * (0.1 - 0.4)).toFixed(4);
    this.color = color;
    this.r = 5;
    this.connections = []
    for (var i = 0; i < 2; i++) {
      this.connections.push(Math.floor(Math.random() * 20))
    }
    this.dr = () => {
      this.connections.forEach((val) => {
        ctx.beginPath();
        ctx.lineWidth = .5;
        ctx.strokeStyle = theme.palette.primary.dark;
        ctx.moveTo(a[val].xPos, a[val].yPos);
        ctx.lineTo(this.xPos, this.yPos);
        ctx.stroke();
        ctx.closePath();
      })
      this.xPos = this.xPos - this.xVel
      this.yPos = this.yPos - this.yVel
      if (this.xPos < this.initialX - 100 || this.xPos > this.initialX + 100 || this.xPos < 0 || this.xPos > ctx.canvas.width) {
        this.xVel = this.xVel * -1;
      }
      if (this.yPos < this.initialY - 100 || this.yPos > this.initialY + 100 || this.yPos < 0 || this.yPos > ctx.canvas.height) {
        this.yVel = this.yVel * -1;
      }


    }
  }

  return (
    <div className={classes.root}>
      <canvas ref={canvasRef} width={window.innerWidth * .95} height={window.innerHeight * .95}>
      </canvas>
      <Typography variant="h2" className={classes.text}>
        Software Solutions <br />
          with Modern Designs
        </Typography>
    </div>
  );
};

export default Opening;
