
window.setTimeout(function() {
    let gridThickness = 1;
    let gridDashColor = '#aaa';
    let gridBoxColor = '#888';
    let rectSize = 120;
    let drawWidth = 3;
    let drawStroke = 'black';

    class Whiteboard {
      constructor(container) {
        this.drawing = false;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext("2d");
        this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        this.canvas.addEventListener('mousemove', (e) => this.draw(e));
        window.addEventListener('mouseup', (e) => this.stopDrawing(e));
        this.bindToContainer(container);
      }

      bindToContainer(container) {
        this.canvas.width = container.clientWidth;
        this.canvas.height = container.clientHeight;
        this.ctx.lineWidth = gridThickness;
        let startX = ((this.canvas.width - rectSize) >> 1) + 0.5;
        let startY = ((this.canvas.height - rectSize) >> 1) + 0.5;
        this.ctx.strokeStyle = gridBoxColor;
        this.ctx.strokeRect(startX, startY, rectSize, rectSize);
        this.ctx.strokeStyle = gridDashColor;
        this.ctx.setLineDash([2,2]);
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY + (rectSize>>1));
        this.ctx.lineTo(startX + rectSize, startY + (rectSize>>1));
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(startX + (rectSize>>1), startY);
        this.ctx.lineTo(startX + (rectSize>>1), startY+rectSize);
        this.ctx.stroke();

        this.ctx.strokeStyle = drawStroke;
        this.ctx.lineWidth = drawWidth;
        this.ctx.setLineDash([]);
        container.appendChild(this.canvas);
        this.saveImageData();
      }

      getCoords(e) {
        let bbox = this.canvas.getBoundingClientRect();
        let top = bbox.top + document.body.scrollTop;
        let left = bbox.left + document.body.scrollLeft;
        return {x: e.clientX - left, y: e.clientY - top};
      }

      startDrawing(e) {
        let coords = this.getCoords(e);
        this.drawing = true;
        this.ctx.beginPath();
        this.ctx.moveTo(coords.x, coords.y);
      }

      draw(e) {
        if (!this.drawing)
          return;
        let coords = this.getCoords(e);
        this.ctx.lineTo(coords.x, coords.y);
        this.ctx.stroke();
      }

      stopDrawing(e) {
        this.drawing = false;
        this.ctx.closePath();
        this.saveImageData();
      }

      saveImageData() {
        this.imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
      }
    };

    window.whiteboard = new Whiteboard(document.getElementById('whiteboard-container'));
}, 0);

