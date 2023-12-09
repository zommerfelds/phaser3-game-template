import 'phaser';

class MyGame extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image('logo', 'assets/logo.png');
        this.load.image('background', 'assets/bg.jpg');
    }

    create() {
        this.add.image(400, 300, 'background');

        const logo = this.add.image(400, 150, 'logo');

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    width: 800,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);
