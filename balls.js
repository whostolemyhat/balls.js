// if(Modernizr.canvas) {
        var canvas = $('#canvas');
        var ctx;
        var WIDTH = canvas.width();
        var HEIGHT = canvas.height();
        var SCREENHEIGHT = $(window).height();
        var SCREENWIDTH = $(window).width();
        var intervalId = 0;
        var colourList = new Array(6);
        colourList[0] = "#00A0B0"; // blue
        colourList[1] = "#de31be"; // purple
        colourList[2] = "#CC333F"; // red
        colourList[3] = "#EB6841"; // orange
        colourList[4] = "#EDC951"; // yellow
        

        function Ball(x, y, size, colour) {
            var balldx = new Array(4);
            balldx[0] = 5;
            balldx[1] = -6;
            balldx[2] = -4;
            balldx[3] = 4;
            
            var balldy = new Array(4);
            balldy[0] = 5;
            balldy[1] = -4;
            balldy[2] = -6;
            balldy[3] = 3;

            this.colour = colour;
            this.dx = balldx[(Math.floor(Math.random()*4))];
            this.dy = balldy[(Math.floor(Math.random()*4))];
            this.x = x;
            this.y = y;
            this.size = size;
            
            this.draw = function() {
                ctx.fillStyle = this.colour;
                circle(this.x, this.y, this.size);
                if ((this.x + this.dx - this.size/2 <= 0) || (this.x + this.dx + this.size/2 >= WIDTH)) {
                    this.dx = -this.dx;
                }
                this.x += this.dx;
                
                if ((this.y + this.dy - this.size/2 <= 0) || (this.y + this.dy + this.size/2 >= HEIGHT)) {
                    this.dy = -this.dy;
                }
                this.y += this.dy;
            }
        }
        
        function randomColour() {
            colour = colourList[(Math.floor(Math.random()*5))];
            return colour;
        }
        
        function randomSize() {
            size = (Math.floor(Math.random()*12)+6);
            return size; 
        }

        function circle(x,y,r) {
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI*2, true);
          ctx.closePath();
          ctx.fill();
        }

        function clear() {
          ctx.clearRect(0, 0, WIDTH, HEIGHT);
        }

        function updateCanvasDimensions() {
            canvas.attr({height: $(window).height(), width: $(window).width()});
            WIDTH = canvas.width();
            HEIGHT = canvas.height();
            canvasMinX = canvas.offset().left;
            canvasMaxX = canvasMinX + WIDTH;
            canvasMinY = canvas.offset().top;
            canvasMaxY = canvasMinY + HEIGHT;
        }
        
        function init() {
            updateCanvasDimensions();
            ctx = canvas[0].getContext("2d");
            intervalId = setInterval(draw, 40);
            return intervalId;

        }
        
        function draw() {
            clear();
            for(var i = 0; i < balls.length; i++) {
                balls[i].draw();
            }
            
        }
        
        function stop() {
            clear();
            clearInterval(intervalId);
        }
        
        var balls = [new Ball(100, 100, randomSize(), randomColour()), new Ball(SCREENWIDTH/2, SCREENHEIGHT/2, randomSize(), randomColour()), new Ball(SCREENWIDTH-200, SCREENHEIGHT-200, randomSize(),  randomColour())];

        init();
// }