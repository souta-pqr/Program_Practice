const app = new PIXI.Application({ 
    width: 800, 
    height: 600,                       
    antialias: true, 
    transparent: false, 
    resolution: 1 
});
document.getElementById('game').appendChild(app.view);

let paddle = new PIXI.Graphics();
paddle.beginFill(0xFFFFFF);
paddle.drawRect(0, 0, 50, 10);
paddle.endFill();
paddle.x = app.screen.width / 2;
paddle.y = app.screen.height - 50;
app.stage.addChild(paddle);

let puck = new PIXI.Graphics();
puck.beginFill(0xFF0000);
puck.drawCircle(0, 0, 10);
puck.endFill();
puck.x = app.screen.width / 2;
puck.y = app.screen.height / 2;
app.stage.addChild(puck);

let puckSpeed = { x: 5, y: -5 };

app.ticker.add((delta) => {
    puck.x += puckSpeed.x;
    puck.y += puckSpeed.y;

    if (puck.x < 0 || puck.x > app.screen.width) {
        puckSpeed.x *= -1;
    }

    if (puck.y < 0) {
        puckSpeed.y *= -1;
    }

    if (hitTestRectangle(puck, paddle)) {
        puckSpeed.y *= -1;
    }

    if (puck.y > app.screen.height) {
        reset();
    }
});

function hitTestRectangle(r1, r2) {
    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    hit = false;

    r1.centerX = r1.x + r1.width / 2;
    r1.centerY = r1.y + r1.height / 2;
    r2.centerX = r2.x + r2.width / 2;
    r2.centerY = r2.y + r2.height / 2;

    r1.halfWidth = r1.width / 2;
    r1.halfHeight = r1.height / 2;
    r2.halfWidth = r2.width / 2;
    r2.halfHeight = r2.height / 2;

    vx = r1.centerX - r2.centerX;
    vy = r1.centerY - r2.centerY;

    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;

    if (Math.abs(vx) < combinedHalfWidths) {
        if (Math.abs(vy) < combinedHalfHeights) {
            hit = true;
        } else {
            hit = false;
        }
    } else {
        hit = false;
    }

    return hit;
};

function reset() {
    puck.x = app.screen.width / 2;
    puck.y = app.screen.height / 2;
    puckSpeed.y = -5;
}
