import { Scene } from './scene.js';
import { Maze } from './maze.js';
import { Player } from './player.js';
import { Collision } from './collision.js';
import { Camera } from './camera.js';
import { Game } from './game.js';

const scene = new Scene();
const maze = new Maze(scene.scene);
const player = new Player(scene.scene);
const collision = new Collision(maze);
const camera = new Camera(scene.renderer, player, maze);
const game = new Game(maze, player, camera);

game.start();

function animate() {
  requestAnimationFrame(animate);
  player.update(collision);
  camera.update(player);
  game.update();
  scene.render(camera.getActiveCamera());
}

animate();