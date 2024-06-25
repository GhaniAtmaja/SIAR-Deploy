// import p5 from 'p5';
import { Info } from 'lucide-react';
import dynamic from 'next/dynamic';
import p5Types from 'p5';
import * as React from 'react';
import {
  Bs0Circle,
  BsArrowDown,
  BsArrowLeft,
  BsArrowRight,
  BsArrowUp,
} from 'react-icons/bs';

import useWindowDimensions from '@/hooks/useWindowDimensions';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover/Popover';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

const NUMTILES = 57;

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

const ORNAMENTS = [
  {
    image: '/tiles/tile-1.png',
    amount: '10',
    id: '1',
  },
  {
    image: '/tiles/tile-2.png',
    amount: '10',
    id: '2',
  },
  {
    image: '/tiles/tile-3.png',
    amount: '10',
    id: '3',
  },
  {
    image: '/tiles/tile-4.png',
    amount: '10',
    id: '4',
  },
  {
    image: '/tiles/tile-5.png',
    amount: '10',
    id: '5',
  },
  {
    image: '/tiles/tile-6.png',
    amount: '10',
    id: '6',
  },
  {
    image: '/tiles/tile-7.png',
    amount: '10',
    id: '7',
  },
  {
    image: '/tiles/tile-8.png',
    amount: '10',
    id: '8',
  },
  {
    image: '/tiles/tile-9.png',
    amount: '10',
    id: '9',
  },
  {
    image: '/tiles/tile-10.png',
    amount: '10',
    id: '10',
  },
  {
    image: '/tiles/tile-11.png',
    amount: '10',
    id: '11',
  },
  {
    image: '/tiles/tile-12.png',
    amount: '10',
    id: '12',
  },
];

const HEIGHTFIT = 250;

// console.log('Sketch:', Sketch);
export default function SurgapagePage() {
  const size = useWindowDimensions();

  //   const cat = [0, 1, 10, 11, 15, 16, 20, 24, 37]; // category tiles

  //   // grid[1][0] = 33;
  // };

  const setup = (
    p: p5Types,
    canvasParentRef: string | object | p5Types.Element,
  ) => {
    // p5.js setup function
    // ...
    p.createCanvas(size.width - HEIGHTFIT, size.height - HEIGHTFIT).parent(
      canvasParentRef,
    );
    // if(android)

    p.frameRate(60);
    // for dark mode
    // p.background("black");
    // p.fill(255);
    // p.text("Press z to download map", 200, 300);
    onkeyup = function (e) {
      keyCode(e);
    };
  };
  function keyCode(e: KeyboardEvent) {
    if (e.key === 'w' && opt === false && first === true) {
      if (cursor.x === 0) {
        moveCursor(GRID_SIZE - 3, 0);
      } else {
        moveCursor(-1, 0);
      }
      // console.log('e.key:', e.key);
      first = false;
    } else if (e.key === 's' && opt === false && first === true) {
      moveCursor(1, 0);
      first = false;
    } else if (e.key === 'a' && opt === false && first === true) {
      if (cursor.y === 0) {
        moveCursor(0, GRID_SIZE - 3);
      } else {
        moveCursor(0, -1);
      }
      first = false;
    } else if (e.key === 'd' && opt === false && first === true) {
      moveCursor(0, 1);
      first = false;
    } else if (e.key === 'w' && opt === false && first === false) {
      restoreGrid();
      if (cursor.x === 0) {
        moveCursor(GRID_SIZE - 3, 0);
      } else {
        moveCursor(-1, 0);
      }
    } else if (e.key === 's' && opt === false && first === false) {
      restoreGrid();
      moveCursor(1, 0);
    } else if (e.key === 'a' && opt === false && first === false) {
      restoreGrid();
      if (cursor.y === 0) {
        moveCursor(0, GRID_SIZE - 3);
      } else {
        moveCursor(0, -1);
      }
      first = false;
    } else if (e.key === 'd' && opt === false && first === false) {
      restoreGrid();
      moveCursor(0, 1);
    } //space
    else if (e.key === 'f' && opt === false) {
      first = true;
      switchOpt();
      grid[11][11] = grid[10][10];
    } else if (e.key === 'w' && opt === true) {
      if (tile < NUMTILES) {
        tile++;
      } else {
        tile = 0;
      }
      changeTile(tile);
    } else if (e.key === 's' && opt === true) {
      if (tile > 0) {
        tile--;
      } else {
        tile = NUMTILES;
      }
      changeTile(tile);
    } else if (e.key === 'a' && opt === true) {
      if (tile > 0) {
        tile--;
      } else {
        tile = NUMTILES;
      }
      changeTile(tile);
    } else if (e.key === 'd' && opt === true) {
      if (tile < NUMTILES) {
        tile++;
      } else {
        tile = 0;
      }
      changeTile(tile);
    } else if (e.key === 'f' && opt === true) {
      switchOpt();
      grid[cursor.x][cursor.y] = grid[11][11];
    }
    // //download map to file using z key
    // else if (e.key === "z") {
    //   saveJSON(grid, 'map.json', true);
    // }
  }

  const draw = (p: p5Types) => {
    p.background(0);
    const tile_images: p5Types.Image[] = [];
    for (let i = 0; i <= NUMTILES; i++) {
      tile_images.push(p.loadImage('./tiles/tile-' + i + '.png'));
    }

    p.draw = () => {
      // p5.js draw function
      // ...
      function draw_grid() {
        x_start = size.width / 4 + (2 * HEIGHTFIT) / 3 - TILE_WIDTH / 4;
        y_start = size.height / 4 - HEIGHTFIT - TILE_HEIGHT / 4;
        for (let i = 0; i < GRID_SIZE; i++) {
          for (let j = 0; j < GRID_SIZE; j++) {
            // if(cursor.x == j && cursor.y == i) {
            //   console.log("cursor", grid[j][i], (tile_images[grid[j][i]]), i, j);
            // }
            draw_tile(tile_images[grid[j][i]], i, j);
          }
        }
      }

      // function draw_grid2() {
      //   x_start2 = width/2 - TILE_WIDTH/2;
      //   y_start2 = 650;
      //   for (let i = 0; i < GRID2_SIZE; i++) {
      //     for (let j = 0; j < GRID2_SIZE; j++) {
      //       draw_tile2((tile_images[grid2[j][i]]), i, j);
      //     }
      //   }
      // }

      //undraw grid2
      // function undraw_grid2() {
      //   x_start2 = width/2 - TILE_WIDTH/2;
      //   y_start2 = 650;
      //   for (let i = 0; i < GRID2_SIZE; i++) {
      //     for (let j = 0; j < GRID2_SIZE; j++) {
      //       draw_tile2((tile_images[0]), i, j);
      //     }
      //   }
      // }

      function draw_tile(img: p5Types.Image, x: number, y: number) {
        const x_screen = x_start + ((x - y) * TILE_WIDTH) / 2;
        const y_screen = y_start + ((x + y) * TILE_HEIGHT) / 2;
        const z_offset = MAX_HEIGHT - img.height;
        image(img, x_screen, y_screen + z_offset);
      }

      // function draw_tile2(img, x, y) {
      //   const x_screen = x_start2 + ((x - y) * TILE_WIDTH) / 2;
      //   const y_screen = y_start2 + ((x + y) * TILE_HEIGHT) / 2;
      //   const z_offset = MAX_HEIGHT - img.height;
      //   image(img, x_screen, y_screen + z_offset);
      // }

      // function setup() {
      //   createCanvas(windowWidth, windowHeight);
      //   for (let i = 0; i <= NUMTILES; i++) {
      //     tile_images.push(loadImage("./tiles/tile-" + i + ".png"));
      //   }
      // }

      // background("black");
      p.clear();
      draw_grid();
      // draw_grid2();
      function image(img: p5Types.Image, x: number, y: number) {
        p.image(img, x, y);
      }

      // draw();
    };
  };

  //make initial position of cursor
  const cursor = {
    x: 0,
    y: 0,
  };
  let tile = 0;

  //move cursor
  let opt = false;

  let first = true;

  const TILE_WIDTH = 100;
  const TILE_HEIGHT = 50;
  const MAX_HEIGHT = 100;

  let x = 0;
  let y = 0;

  let x_start = 0;
  let y_start = 0;

  const GRID_SIZE = 12;

  const grid = [
    [14, 23, 23, 23, 23, 35, 23, 23, 23, 13, 0, 0],
    [21, 33, 33, 33, 33, 33, 33, 33, 33, 20, 0, 0],
    [21, 33, 0, 0, 33, 33, 33, 1, 33, 20, 0, 0],
    [21, 33, 0, 0, 33, 1, 1, 10, 33, 20, 0, 0],
    [36, 33, 33, 33, 33, 33, 33, 33, 33, 20, 0, 0],
    [36, 33, 38, 37, 33, 18, 17, 10, 33, 20, 0, 0],
    [21, 33, 4, 7, 33, 16, 19, 10, 33, 20, 0, 0],
    [21, 33, 6, 8, 33, 10, 10, 10, 33, 20, 0, 0],
    [21, 33, 33, 33, 33, 33, 33, 33, 33, 20, 0, 0],
    [11, 22, 22, 22, 22, 22, 22, 22, 22, 12, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  for (x = 0; x < GRID_SIZE - 1; x++) {
    //vertical roads
    for (y = 0; y < GRID_SIZE - 1; y++) {
      if (grid[x][y] === grid[x + 1][y] && grid[x][y] === 33) {
        grid[x][y] = 34;
      }
    }
  }
  for (x = 0; x < GRID_SIZE - 1; x++) {
    // x juctions roads
    for (y = 0; y < GRID_SIZE - 1; y++) {
      if (
        (grid[x][y + 1] === 34 ||
          grid[x][y + 1] === 33 ||
          grid[x][y + 1] === 32 ||
          grid[x][y + 1] === 31 ||
          grid[x][y + 1] === 25 ||
          grid[x][y + 1] === 27 ||
          grid[x][y + 1] === 28 ||
          grid[x][y + 1] === 24) && //up
        (grid[x + 1][y] === 29 ||
          grid[x + 1][y] === 32 ||
          grid[x + 1][y] === 33 ||
          grid[x + 1][y] === 34 ||
          grid[x + 1][y] === 25 ||
          grid[x + 1][y] === 26 ||
          grid[x + 1][y] === 28 ||
          grid[x + 1][y] === 24) && //left
        (grid[x + 1][y + 2] === 34 ||
          grid[x + 1][y + 2] === 33 ||
          grid[x + 1][y + 2] === 30 ||
          grid[x + 1][y + 2] === 31 ||
          grid[x + 1][y + 2] === 26 ||
          grid[x + 1][y + 2] === 27 ||
          grid[x + 1][y + 2] === 28 ||
          grid[x + 1][y + 2] === 24) && //right
        (grid[x + 2][y + 1] === 34 ||
          grid[x + 2][y + 1] === 33 ||
          grid[x + 2][y + 1] === 30 ||
          grid[x + 2][y + 1] === 29 ||
          grid[x + 2][y + 1] === 25 ||
          grid[x + 2][y + 1] === 26 ||
          grid[x + 2][y + 1] === 27 ||
          grid[x + 2][y + 1] === 24) && //down
        (grid[x + 1][y + 1] === 25 ||
          grid[x + 1][y + 1] === 26 ||
          grid[x + 1][y + 1] === 27 ||
          grid[x + 1][y + 1] === 28 ||
          grid[x + 1][y + 1] === 29 ||
          grid[x + 1][y + 1] === 30 ||
          grid[x + 1][y + 1] === 31 ||
          grid[x + 1][y + 1] === 32 ||
          grid[x + 1][y + 1] === 33 ||
          grid[x + 1][y + 1] === 34 ||
          grid[x + 1][y + 1] === 35 ||
          grid[x + 1][y + 1] === 36)
      ) {
        //middle
        grid[x + 1][y + 1] = 24;
      }
    }
  }
  for (x = 0; x < GRID_SIZE - 1; x++) {
    // T juctions up roads
    for (y = 0; y < GRID_SIZE - 1; y++) {
      if (
        (grid[x + 1][y] === 29 ||
          grid[x + 1][y] === 32 ||
          grid[x + 1][y] === 33 ||
          grid[x + 1][y] === 34 ||
          grid[x + 1][y] === 25 ||
          grid[x + 1][y] === 26 ||
          grid[x + 1][y] === 28 ||
          grid[x + 1][y] === 24) && //left
        (grid[x][y + 1] === 34 ||
          grid[x][y + 1] === 33 ||
          grid[x][y + 1] === 32 ||
          grid[x][y + 1] === 31 ||
          grid[x][y + 1] === 25 ||
          grid[x][y + 1] === 27 ||
          grid[x][y + 1] === 28 ||
          grid[x][y + 1] === 24) && //up
        (grid[x + 1][y + 2] === 34 ||
          grid[x + 1][y + 2] === 33 ||
          grid[x + 1][y + 2] === 30 ||
          grid[x + 1][y + 2] === 31 ||
          grid[x + 1][y + 2] === 26 ||
          grid[x + 1][y + 2] === 27 ||
          grid[x + 1][y + 2] === 28 ||
          grid[x + 1][y + 2] === 24) && //right
        (grid[x + 1][y + 1] === 25 ||
          grid[x + 1][y + 1] === 27 ||
          grid[x + 1][y + 1] === 28 ||
          grid[x + 1][y + 1] === 29 ||
          grid[x + 1][y + 1] === 30 ||
          grid[x + 1][y + 1] === 31 ||
          grid[x + 1][y + 1] === 32 ||
          grid[x + 1][y + 1] === 33 ||
          grid[x + 1][y + 1] === 34 ||
          grid[x + 1][y + 1] === 35 ||
          grid[x + 1][y + 1] === 36)
      ) {
        //middle
        grid[x + 1][y + 1] = 26;
      }
    }
  }
  for (x = 0; x < GRID_SIZE - 1; x++) {
    // T juctions down roads
    for (y = 0; y < GRID_SIZE - 1; y++) {
      if (
        (grid[x + 1][y] === 24 ||
          grid[x + 1][y] === 25 ||
          grid[x + 1][y] === 26 ||
          grid[x + 1][y] === 28 ||
          grid[x + 1][y] === 29 ||
          grid[x + 1][y] === 32 ||
          grid[x + 1][y] === 33 ||
          grid[x + 1][y] === 34) && //left
        (grid[x + 1][y + 2] === 24 ||
          grid[x + 1][y + 2] === 26 ||
          grid[x + 1][y + 2] === 27 ||
          grid[x + 1][y + 2] === 28 ||
          grid[x + 1][y + 2] === 30 ||
          grid[x + 1][y + 2] === 31 ||
          grid[x + 1][y + 2] === 33 ||
          grid[x + 1][y + 2] === 34) && //right
        (grid[x + 2][y + 1] === 24 ||
          grid[x + 2][y + 1] === 25 ||
          grid[x + 2][y + 1] === 26 ||
          grid[x + 2][y + 1] === 27 ||
          grid[x + 2][y + 1] === 29 ||
          grid[x + 2][y + 1] === 30 ||
          grid[x + 2][y + 1] === 33 ||
          grid[x + 2][y + 1] === 34) && //down
        (grid[x + 1][y + 1] === 25 ||
          grid[x + 1][y + 1] === 26 ||
          grid[x + 1][y + 1] === 27 ||
          grid[x + 1][y + 1] === 29 ||
          grid[x + 1][y + 1] === 30 ||
          grid[x + 1][y + 1] === 31 ||
          grid[x + 1][y + 1] === 32 ||
          grid[x + 1][y + 1] === 33 ||
          grid[x + 1][y + 1] === 34 ||
          grid[x + 1][y + 1] === 35 ||
          grid[x + 1][y + 1] === 36)
      ) {
        //middle
        grid[x + 1][y + 1] = 28;
      }
    }
  }
  for (x = 0; x < GRID_SIZE - 1; x++) {
    // T juctions left roads
    for (y = 0; y < GRID_SIZE - 1; y++) {
      if (
        (grid[x + 1][y] === 29 ||
          grid[x + 1][y] === 32 ||
          grid[x + 1][y] === 33 ||
          grid[x + 1][y] === 34 ||
          grid[x + 1][y] === 25 ||
          grid[x + 1][y] === 26 ||
          grid[x + 1][y] === 28 ||
          grid[x + 1][y] === 24) && //left
        (grid[x][y + 1] === 34 ||
          grid[x][y + 1] === 33 ||
          grid[x][y + 1] === 32 ||
          grid[x][y + 1] === 31 ||
          grid[x][y + 1] === 25 ||
          grid[x][y + 1] === 27 ||
          grid[x][y + 1] === 28 ||
          grid[x][y + 1] === 24) && //up
        (grid[x + 2][y + 1] === 34 ||
          grid[x + 2][y + 1] === 33 ||
          grid[x + 2][y + 1] === 30 ||
          grid[x + 2][y + 1] === 29 ||
          grid[x + 2][y + 1] === 25 ||
          grid[x + 2][y + 1] === 26 ||
          grid[x + 2][y + 1] === 27 ||
          grid[x + 2][y + 1] === 24) && //down
        (grid[x + 1][y + 1] === 25 ||
          grid[x + 1][y + 1] === 26 ||
          grid[x + 1][y + 1] === 28 ||
          grid[x + 1][y + 1] === 29 ||
          grid[x + 1][y + 1] === 30 ||
          grid[x + 1][y + 1] === 31 ||
          grid[x + 1][y + 1] === 32 ||
          grid[x + 1][y + 1] === 33 ||
          grid[x + 1][y + 1] === 34 ||
          grid[x + 1][y + 1] === 35 ||
          grid[x + 1][y + 1] === 36)
      ) {
        //middle
        grid[x + 1][y + 1] = 27;
      }
    }
  }
  for (x = 0; x < GRID_SIZE - 1; x++) {
    // T juctions right roads
    for (y = 0; y < GRID_SIZE - 1; y++) {
      if (
        (grid[x][y + 1] === 34 ||
          grid[x][y + 1] === 33 ||
          grid[x][y + 1] === 32 ||
          grid[x][y + 1] === 31 ||
          grid[x][y + 1] === 25 ||
          grid[x][y + 1] === 27 ||
          grid[x][y + 1] === 28 ||
          grid[x][y + 1] === 24) && //up
        (grid[x + 1][y + 2] === 34 ||
          grid[x + 1][y + 2] === 33 ||
          grid[x + 1][y + 2] === 30 ||
          grid[x + 1][y + 2] === 31 ||
          grid[x + 1][y + 2] === 26 ||
          grid[x + 1][y + 2] === 27 ||
          grid[x + 1][y + 2] === 28 ||
          grid[x + 1][y + 2] === 24) && //right
        (grid[x + 2][y + 1] === 34 ||
          grid[x + 2][y + 1] === 33 ||
          grid[x + 2][y + 1] === 30 ||
          grid[x + 2][y + 1] === 29 ||
          grid[x + 2][y + 1] === 25 ||
          grid[x + 2][y + 1] === 26 ||
          grid[x + 2][y + 1] === 27 ||
          grid[x + 2][y + 1] === 24) && //down
        (grid[x + 1][y + 1] === 26 ||
          grid[x + 1][y + 1] === 27 ||
          grid[x + 1][y + 1] === 28 ||
          grid[x + 1][y + 1] === 29 ||
          grid[x + 1][y + 1] === 30 ||
          grid[x + 1][y + 1] === 31 ||
          grid[x + 1][y + 1] === 32 ||
          grid[x + 1][y + 1] === 33 ||
          grid[x + 1][y + 1] === 34 ||
          grid[x + 1][y + 1] === 35 ||
          grid[x + 1][y + 1] === 36)
      ) {
        //middle
        grid[x + 1][y + 1] = 25;
      }
    }
  }
  for (x = 0; x < GRID_SIZE - 1; x++) {
    // ↱ roads
    for (y = 0; y < GRID_SIZE - 1; y++) {
      if (
        (grid[x + 1][y] === 34 ||
          grid[x + 1][y] === 33 ||
          grid[x + 1][y] === 30 ||
          grid[x + 1][y] === 29 ||
          grid[x + 1][y] === 25 ||
          grid[x + 1][y] === 26 ||
          grid[x + 1][y] === 27 ||
          grid[x + 1][y] === 24) && // down
        (grid[x][y + 1] === 34 ||
          grid[x][y + 1] === 33 ||
          grid[x][y + 1] === 30 ||
          grid[x][y + 1] === 31 ||
          grid[x][y + 1] === 26 ||
          grid[x][y + 1] === 27 ||
          grid[x][y + 1] === 28 ||
          grid[x][y + 1] === 24) && //right
        (grid[x][y] === 34 || grid[x][y] === 33)
      ) {
        grid[x][y] = 32;
      }
    }
  }
  for (x = 0; x < GRID_SIZE - 1; x++) {
    // ↰ roads
    for (y = 0; y < GRID_SIZE - 1; y++) {
      if (
        (grid[x][y] === 29 ||
          grid[x][y] === 32 ||
          grid[x][y] === 33 ||
          grid[x][y] === 34 ||
          grid[x][y] === 25 ||
          grid[x][y] === 26 ||
          grid[x][y] === 28 ||
          grid[x][y] === 24) && //left
        (grid[x + 1][y + 1] === 34 ||
          grid[x + 1][y + 1] === 33 ||
          grid[x + 1][y + 1] === 30 ||
          grid[x + 1][y + 1] === 29 ||
          grid[x + 1][y + 1] === 25 ||
          grid[x + 1][y + 1] === 26 ||
          grid[x + 1][y + 1] === 27 ||
          grid[x + 1][y + 1] === 24) && //down
        (grid[x][y + 1] === 33 || grid[x][y + 1] === 34)
      ) {
        grid[x][y + 1] = 31;
      }
    }
  }
  for (x = 0; x < GRID_SIZE - 1; x++) {
    // ↲ roads
    for (y = 0; y < GRID_SIZE - 1; y++) {
      if (
        (grid[x][y] === 29 ||
          grid[x][y] === 32 ||
          grid[x][y] === 33 ||
          grid[x][y] === 34 ||
          grid[x][y] === 25 ||
          grid[x][y] === 26 ||
          grid[x][y] === 28 ||
          grid[x][y] === 24) && //left
        (grid[x - 1][y + 1] === 34 ||
          grid[x - 1][y + 1] === 33 ||
          grid[x - 1][y + 1] === 32 ||
          grid[x - 1][y + 1] === 31 ||
          grid[x - 1][y + 1] === 25 ||
          grid[x - 1][y + 1] === 27 ||
          grid[x - 1][y + 1] === 28 ||
          grid[x - 1][y + 1] === 24) && //up
        (grid[x][y + 1] === 33 || grid[x][y + 1] === 34)
      ) {
        grid[x][y + 1] = 30;
      }
    }
  }
  for (x = 0; x < GRID_SIZE - 1; x++) {
    // ↳ roads
    for (y = 0; y < GRID_SIZE - 1; y++) {
      if (
        (grid[x][y + 1] === 33 ||
          grid[x][y + 1] === 34 ||
          grid[x][y + 1] === 30 ||
          grid[x][y + 1] === 31 ||
          grid[x][y + 1] === 26 ||
          grid[x][y + 1] === 27 ||
          grid[x][y + 1] === 28 ||
          grid[x][y + 1] === 24) &&
        (grid[x - 1][y] === 34 ||
          grid[x - 1][y] === 33 ||
          grid[x - 1][y] === 32 ||
          grid[x - 1][y] === 31 ||
          grid[x - 1][y] === 25 ||
          grid[x - 1][y] === 27 ||
          grid[x - 1][y] === 28 ||
          grid[x - 1][y] === 24) &&
        (grid[x][y] === 33 || grid[x][y] === 34)
      ) {
        grid[x][y] = 29;
      }
    }
  }
  // console.log(grid);

  //change grid if there's cursor
  function pointGrid() {
    grid[10][10] = grid[cursor.x][cursor.y];

    grid[cursor.x][cursor.y] = 0;
    // categorizer();
  }

  //restore grid
  function restoreGrid() {
    grid[cursor.x][cursor.y] = grid[10][10];
    grid[10][10] = 0;
  }

  //change grid after selecting tile
  function changeTile(tile: number) {
    grid[11][11] = tile;
  }

  // function categorizer(){
  //   curx = cursor.x;
  //   cury = cursor.y;
  //   grid2[1][1] = grid3[curx][cury];
  //   grid2[0][3] = grid[0][3];
  //   grid2[3][0] = grid[3][0];
  // }

  // function mousePressed() {
  //   if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
  //     let x = floor((mouseY - y_start) / TILE_HEIGHT - (mouseX - x_start) / TILE_WIDTH);
  //     let y = floor((mouseX - x_start) / TILE_WIDTH + (mouseY - y_start) / TILE_HEIGHT) -1;
  //     if (x >= 0 && x < GRID_SIZE-2 && y >= 0 && y < GRID_SIZE-2) {
  //       moveCursor(x - cursor.x, y - cursor.y);
  //     }
  //   }
  // }

  function moveCursor(x: number, y: number) {
    if (
      cursor.x + x >= 0 &&
      cursor.x + x < GRID_SIZE &&
      cursor.y + y >= 0 &&
      cursor.y + y < GRID_SIZE &&
      opt === false
    ) {
      cursor.x = (cursor.x + x) % (GRID_SIZE - 2);
      cursor.y = (cursor.y + y) % (GRID_SIZE - 2);
      pointGrid();
    }
  }
  // moveCursor(x, y);

  function switchOpt() {
    if (opt === false) {
      opt = true;
    } else {
      opt = false;
    }
  }

  // const keyReleased = (e) => {
  // console.log('Key Released:', e.key);
  // console.log('e.key:', e.key);
  // console.log('opt:', opt);
  // console.log('first:', first);
  // console.log('cursor.x:', cursor.x);
  // console.log('cursor.y:', cursor.y);

  // React.useEffect(() => {
  //   document.addEventListener('keydown', keyReleased, true);
  //   const canvas = new p5(sketch);
  //   return () => {
  //     canvas.remove();
  //   };
  // }, []);
  // function ArrowMap({
  //   xy,
  //   if00,
  //   if01,
  //   if10,
  //   if11,
  //   opti,
  //   optn,
  //   icon,
  // }: {
  //   xy: number;
  //   if00: number;
  //   if01: number;
  //   if10: number;
  //   if11: number;
  //   opti: string;
  //   optn: number;
  //   icon: IconType;
  // }) {
  //   return (
  //     <Button
  //       variant='ghost'
  //       className='rounded shadow-lg'
  //       onClick={() => {
  //         if (opt === false && first === true) {
  //           if (xy === 0) {
  //             moveCursor(if00, if01);
  //           } else {
  //             moveCursor(if10, if11);
  //           }
  //           first = false;
  //         }
  //         if (opt === false && first === false) {
  //           restoreGrid();
  //           if (xy === 0) {
  //             moveCursor(if00, if01);
  //           } else {
  //             moveCursor(if10, if11);
  //           }
  //         }
  //         if (opt === true) {
  //           if (tile > optn) {
  //             {
  //               opti;
  //             }
  //           } else {
  //             tile = NUMTILES - optn;
  //           }
  //         }
  //       }}
  //     >
  //       <Typography variant='h3' className='text-center'>
  //         <IconButton
  //           variant='outline'
  //           size='sm'
  //           className='rounded-full'
  //           icon={icon}
  //         />
  //       </Typography>
  //     </Button>
  //   );
  // }

  return (
    <DashboardLayout>
      <Seo templateTitle='Surga.page' />
      <main className=''>
        {/* <!-- This heading is hidden in portrait mode and only be shown in landscape mode--> */}
        <div className='absolute flex layout'>
          {/* button */}
          <div className='grid grid-cols-2 gap-4 justify-items-center layout w-1/6'>
            <Button
              variant='ghost'
              className='rounded shadow-lg'
              onClick={() => {
                if (opt === false && first === true) {
                  if (cursor.y === 0) {
                    moveCursor(0, GRID_SIZE - 3);
                  } else {
                    moveCursor(0, -1);
                  }
                  first = false;
                } else if (opt === false && first === false) {
                  restoreGrid();
                  if (cursor.y === 0) {
                    moveCursor(0, GRID_SIZE - 3);
                  } else {
                    moveCursor(0, -1);
                  }
                  first = false;
                } else if (opt === true) {
                  if (tile > 0) {
                    tile--;
                  } else {
                    tile = NUMTILES;
                  }
                  changeTile(tile);
                }
              }}
            >
              <Typography variant='h3' className='text-center'>
                <IconButton
                  variant='outline'
                  size='sm'
                  className='rounded-full bg-white'
                  icon={BsArrowLeft}
                />
              </Typography>
            </Button>
            <Button
              variant='ghost'
              className='rounded shadow-lg'
              onClick={() => {
                if (opt === false && first === true) {
                  if (cursor.x === 0) {
                    moveCursor(GRID_SIZE - 3, 0);
                  } else {
                    moveCursor(-1, 0);
                  }
                  first = false;
                } else if (opt === false && first === false) {
                  restoreGrid();
                  if (cursor.x === 0) {
                    moveCursor(GRID_SIZE - 3, 0);
                  } else {
                    moveCursor(-1, 0);
                  }
                } else if (opt === true) {
                  if (tile < NUMTILES) {
                    tile++;
                  } else {
                    tile = 0;
                  }
                  changeTile(tile);
                }
              }}
            >
              <Typography variant='h3' className='text-center'>
                <IconButton
                  variant='outline'
                  size='sm'
                  className='rounded-full bg-white'
                  icon={BsArrowUp}
                />
              </Typography>
            </Button>
            <Button
              variant='ghost'
              className='rounded shadow-lg'
              onClick={() => {
                if (opt === false && first === true) {
                  if (cursor.y === GRID_SIZE - 4) {
                    moveCursor(-GRID_SIZE + 3, 0);
                  } else {
                    moveCursor(1, 0);
                  }
                  first = false;
                } else if (opt === false && first === false) {
                  restoreGrid();
                  if (cursor.y === GRID_SIZE - 4) {
                    moveCursor(-GRID_SIZE + 3, 0);
                  } else {
                    moveCursor(1, 0);
                  }
                  first = false;
                } else if (opt === true) {
                  if (tile > 0) {
                    tile--;
                  } else {
                    tile = NUMTILES;
                  }
                  changeTile(tile);
                }
              }}
            >
              <Typography variant='h3' className='text-center'>
                <IconButton
                  variant='outline'
                  size='sm'
                  className='rounded-full bg-white'
                  icon={BsArrowDown}
                />
              </Typography>
            </Button>
            <Button
              variant='ghost'
              className='rounded shadow-lg'
              onClick={() => {
                if (opt === false && first === true) {
                  if (cursor.x === GRID_SIZE - 3) {
                    moveCursor(0, -GRID_SIZE + 3);
                  } else {
                    moveCursor(0, 1);
                  }
                  first = false;
                } else if (opt === false && first === false) {
                  restoreGrid();
                  if (cursor.x === GRID_SIZE - 3) {
                    moveCursor(0, -GRID_SIZE + 3);
                  } else {
                    moveCursor(0, 1);
                  }
                  first = false;
                } else if (opt === true) {
                  if (tile < NUMTILES) {
                    tile++;
                  } else {
                    tile = 0;
                  }
                  changeTile(tile);
                }
              }}
            >
              <Typography variant='h3' className='text-center'>
                <IconButton
                  variant='outline'
                  size='sm'
                  className='rounded-full bg-white'
                  icon={BsArrowRight}
                />
              </Typography>
            </Button>
            <Button
              variant='ghost'
              className='rounded shadow-lg'
              onClick={() => {
                if (opt === false) {
                  first = true;
                  switchOpt();
                  grid[11][11] = grid[10][10];
                } else {
                  switchOpt();
                  grid[cursor.x][cursor.y] = grid[11][11];
                }
              }}
            >
              <Typography variant='h3' className='text-center'>
                <IconButton
                  variant='outline'
                  size='sm'
                  className='rounded-full bg-white'
                  icon={Bs0Circle}
                />
              </Typography>
            </Button>
          </div>
        </div>

        <section>
          <div className='flex gap-4 items-center justify '>
            <div className='py-2 dashboard-layout object-scale-up'>
              {/* {JSON.stringify(size)} */}
              {size.height && size.width && (
                <Sketch
                  className='overflow-scroll '
                  setup={setup}
                  draw={draw}
                />
              )}
            </div>
            <Popover>
              <PopoverTrigger
                asChild
                className='absolute top-1/3 right-60 -translate-x-1/2 -translate-y-1/2'
              >
                <IconButton
                  variant='outline'
                  size='sm'
                  className='rounded-full'
                  icon={Info}
                />
              </PopoverTrigger>
              <PopoverContent className='w-fit'>
                <div
                  className='gap-4 grid grid-cols-3 justify-items-center'
                  id='inventory'
                >
                  {ORNAMENTS.map((ornament, i) => (
                    <OrnamentDisplay key={i} {...ornament} />
                  ))}
                </div>
                <Typography variant='s3' className='text-center grid-flow-col'>
                  <Button variant='outline' size='base'>
                    {'<'}
                  </Button>
                  <Button variant='outline' size='base'>
                    {'>'}
                  </Button>
                </Typography>
              </PopoverContent>
            </Popover>
          </div>
        </section>
        {/* guide */}
        <div className='flex layout justify-center'>
          <Typography>
            Gunakan{' '}
            <span className='text-blue-500'>[W], [A], [S], atau [D]</span> untuk
            menggerakkan kursor
            <br />
            <br />
            Gunakan <span className='text-blue-500'>[F]</span> untuk memilih
            ornamen
            <br />
            <br />
            Setelah memilih, gunakan{' '}
            <span className='text-blue-500'>[W], [A], [S], atau [D]</span> untuk
            mengganti ornamen
          </Typography>
        </div>
        <div className='flex layout gap-4'>
          {/* <ButtonLink
            href='/coba'
            variant='ghost'
            className='rounded shadow-lg lainnya'
          >
            <Typography variant='h3' className='text-center'>
              <NextImage
                className='flex'
                src='/images/ornamen/StoreIcon.png'
                alt='ornamen'
                width={25}
                height={25}
              />
              Ornamen Tersedia
            </Typography>
          </ButtonLink> */}
          <ButtonLink
            href='/purchaseornamen'
            variant='ghost'
            className='rounded shadow-lg lainnya'
          >
            <Typography variant='h3' className='text-center'>
              <NextImage
                className='flex'
                src='/images/ornamen/StoreIcon.png'
                alt='ornamen'
                width={25}
                height={25}
              />
              Toko Ornamen
            </Typography>
          </ButtonLink>
        </div>
      </main>
    </DashboardLayout>
  );
}

function OrnamentDisplay({
  image,
  amount,
  id,
}: {
  image: string;
  amount: string;
  id: string;
}) {
  return (
    <div className='rounded-xl border border-typo-outline shadow-lg flex flex-col z-10'>
      <NextImage
        src={image}
        width='100'
        height='100'
        alt='ornamen'
        className='rounded-t-lg'
        id={id}
      />
      <Typography variant='b1' className='text category numgrid text-center'>
        x{amount}
      </Typography>
    </div>
  );
}
