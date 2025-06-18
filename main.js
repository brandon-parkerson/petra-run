function main() {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    let spacePressed = false;
    

    const player = {
        height: 15,
        width: 15,
        x: 30,
        y: 115,
        draw: function() {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.height, this.width);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
        },
        jump: function(e) {
            if (e.key === " ") {
                this.y -= 7;
            } else return;
        }

    }

    function drawGrass() {
        ctx.beginPath();
        ctx.rect(0, 130, 299, 20);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
    }

    function render() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawGrass();
        player.draw();
        requestAnimationFrame(render);
    }

    
    

    document.addEventListener("keydown", function(e) {
        if (e.code === "Space") {
            e.preventDefault();
            player.jump(e);
        }
    });

    render();
};

main();