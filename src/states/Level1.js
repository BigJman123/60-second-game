class Level1 extends Phaser.State {

	create() {
		this.game.add.image(0, 0, 'bgimage');
		this.game.add.image(0, 0, 'player');
		
	}

}

export default Level1;