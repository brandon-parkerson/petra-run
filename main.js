

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function main() {
    const player = {
        x: 50,
        y: 150,
        width: 25,
        height: 25,
        color: "white",
        velocityY: 0,
        isJumping: false,
        gravity: 0.5,
        jumpStrength: -10,
        draw: function() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        },
        update: function() {
            this.velocityY += this.gravity;
            this.y += this.velocityY;

            // Ground collision
            if (this.y + this.height >= canvas.height) {
                this.y = canvas.height - this.height;
                this.velocityY = 0;
                this.isJumping = false;
            }
        }
    };

    document.addEventListener("keydown", function(e) {
        if (e.code === "Space" && !player.isJumping) {
            player.velocityY = player.jumpStrength;
            player.isJumping = true;
        }
    });

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.update();
        player.draw();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
}

main();

