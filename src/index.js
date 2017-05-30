// import GameState from 'states/GameState';
import Level1 from 'states/Level1';
import Preload from 'states/Preload';

class Game extends Phaser.Game {

	constructor() {
		super(750, 600, Phaser.AUTO, 'content', null);
		// this.state.add('GameState', GameState, false);
		this.state.add('Preload', Preload, false);
		this.state.add('Level1', Level1, false);
		this.state.start('Preload');
	}

}

new Game();