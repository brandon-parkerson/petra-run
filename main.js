const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


const player = {
    x: 50,
    y: 50,
    height: 10,
    width: 10,
    color: "blue",
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(25, 25, 50, 50);
    }
}

player.draw();