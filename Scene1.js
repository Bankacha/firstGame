class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image('background', 'assets/images/background.png');

        this.load.spritesheet('ship', 'assets2/spritesheets/ship.png', {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet('ship2', 'assets2/spritesheets/ship2.png', {
            frameWidth: 32,
            frameHeight: 16
        });
        this.load.spritesheet('ship3', 'assets2/spritesheets/ship3.png', {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet('explosion', 'assets2/spritesheets/explosion.png', {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet('power-up', 'assets3/spritesheets/power-up.png', {
            frameWidth: 16,
            frameHeight: 16
        })
        this.load.spritesheet('player', 'assets3/spritesheets/player.png', {
            frameWidth: 16,
            frameHeight: 24
        })
        this.load.spritesheet('beam', 'assets3/spritesheets/beam.png', {
            frameWidth: 16,
            frameHeight: 16
        })
        this.load.bitmapFont('pixelFont', 'assets3/font/font.png', 'assets3/font/font.xml')
        this.load.audio('audio_beam', ['assets3/sounds/beam.ogg', 'assets3/sounds/beam.mp3']);
        this.load.audio('audio_explosion', ['assets3/sounds/explosion.ogg', 'assets3/sounds/explosion.mp3'])
        this.load.audio('audio_pickup', ['assets3/sounds/pickup.ogg', 'assets3/sounds/pickup.mp3'])
        this.load.audio('music', ['assets3/sounds/sci-fi_platformer12.ogg', 'assets3/sounds/sci-fi_platformer12.mp3'])
    }

    create() {
        this.add.text(30, 50, "Loading game...");
        this.scene.start("playGame");

        this.anims.create({
            key: 'ship1_anim',
            frames: this.anims.generateFrameNumbers('ship'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'ship2_anim',
            frames: this.anims.generateFrameNumbers('ship2'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'ship3_anim',
            frames: this.anims.generateFrameNumbers('ship3'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion'),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });

        this.anims.create({
            key: 'red',
            frames: this.anims.generateFrameNumbers('power-up', {
                start: 0,
                end: 1
            }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            kay: 'grey',
            frames: this.anims.generateFrameNumbers('power-up', {
                start: 2,
                end: 3
            }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'thrust',
            frames: this.anims.generateFrameNumbers('player'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'beam_anim',
            frames: this.anims.generateFrameNumbers('beam'),
            frameRate: 20,
            repeat: -1
        });

    }
}