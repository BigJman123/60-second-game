export default class Preload extends Phaser.State {

    preload() {

        this.load.image('bgimage', 'assets/bgimage.png');
        this.load.image('player', 'assets/player.png');

    }

    create() {
        this.state.start('Level1');
    }

}