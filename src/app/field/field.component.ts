import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent implements OnInit {
  playerTurn = 1;
  cells: string[] = ['', '', '', '', '', '', '', '', ''];
  indexArray = new Array(3);
  checked: boolean = false;

  constructor() {}

  ngOnInit(): void {
    document.getElementById('player1')?.classList.add('player-turn');
  }

  cellClicked(cellId: string): void {
    if (this.gameFinishedCheck()) return;
    const value = document.getElementById(cellId);
    if (value?.innerHTML == '') {
      if (this.playerTurn == 1) {
        value.innerHTML = 'X';
        this.cells[+cellId - 1] = value.innerHTML;
        if (this.gameFinishedCheck() == 1) {
          //document.getElementById('player-won')?.classList.remove('player-won');
          var gameFinished = document.getElementById('game-finished');
          gameFinished
            ? (gameFinished.innerHTML = 'Player ' + this.playerTurn + ' won')
            : '';
          return;
        } else if (this.gameFinishedCheck() == 2) {
          var gameFinished = document.getElementById('game-finished');
          gameFinished ? (gameFinished.innerHTML = 'Draw') : '';
          return;
        }
        this.playerTurn = 2;
        document.getElementById('player1')?.classList.remove('player-turn');
        document.getElementById('player2')?.classList.add('player-turn');
      } else {
        value.innerHTML = 'O';
        this.cells[+cellId - 1] = value.innerHTML;
        if (this.gameFinishedCheck()) {
          //document.getElementById('player-won')?.classList.remove('player-won');
          var gameFinished = document.getElementById('game-finished');
          gameFinished
            ? (gameFinished.innerHTML = 'Player ' + this.playerTurn + ' won')
            : '';
          return;
        }
        this.playerTurn = 1;
        document.getElementById('player2')?.classList.remove('player-turn'); //add the class
        document.getElementById('player1')?.classList.add('player-turn'); //add the class
      }
    }
  }

  gameFinishedCheck(): number {
    //TODO: add background to right cells
    /*
    if (
      (this.cells[0] == 'X' && this.cells[1] == 'X' && this.cells[2] == 'X') ||
      (this.cells[3] == 'X' && this.cells[4] == 'X' && this.cells[5] == 'X') ||
      (this.cells[6] == 'X' && this.cells[7] == 'X' && this.cells[8] == 'X') ||
      (this.cells[0] == 'X' && this.cells[3] == 'X' && this.cells[6] == 'X') ||
      (this.cells[1] == 'X' && this.cells[4] == 'X' && this.cells[7] == 'X') ||
      (this.cells[2] == 'X' && this.cells[5] == 'X' && this.cells[8] == 'X') ||
      (this.cells[0] == 'X' && this.cells[4] == 'X' && this.cells[8] == 'X') ||
      (this.cells[2] == 'X' && this.cells[4] == 'X' && this.cells[6] == 'X') ||
      (this.cells[0] == 'O' && this.cells[1] == 'O' && this.cells[2] == 'O') ||
      (this.cells[3] == 'O' && this.cells[4] == 'O' && this.cells[5] == 'O') ||
      (this.cells[6] == 'O' && this.cells[7] == 'O' && this.cells[8] == 'O') ||
      (this.cells[0] == 'O' && this.cells[3] == 'O' && this.cells[6] == 'O') ||
      (this.cells[1] == 'O' && this.cells[4] == 'O' && this.cells[7] == 'O') ||
      (this.cells[2] == 'O' && this.cells[5] == 'O' && this.cells[8] == 'O') ||
      (this.cells[0] == 'O' && this.cells[4] == 'O' && this.cells[8] == 'O') ||
      (this.cells[2] == 'O' && this.cells[4] == 'O' && this.cells[6] == 'O')
    ) {
      document.getElementById('1')?.classList.add('cell-background');
      document.getElementById('5')?.classList.add('cell-background');
      document.getElementById('9')?.classList.add('cell-background');
      return 1;
      return 1;
    }
    */

    if (
      (this.cells[0] == 'X' && this.cells[1] == 'X' && this.cells[2] == 'X') ||
      (this.cells[0] == 'O' && this.cells[1] == 'O' && this.cells[2] == 'O')
    ) {
      document.getElementById('1')?.classList.add('cell-background');
      document.getElementById('2')?.classList.add('cell-background');
      document.getElementById('3')?.classList.add('cell-background');
      return 1;
    }

    if (
      (this.cells[3] == 'X' && this.cells[4] == 'X' && this.cells[5] == 'X') ||
      (this.cells[3] == 'O' && this.cells[4] == 'O' && this.cells[5] == 'O')
    ) {
      document.getElementById('4')?.classList.add('cell-background');
      document.getElementById('5')?.classList.add('cell-background');
      document.getElementById('6')?.classList.add('cell-background');
      return 1;
    }

    if (
      (this.cells[6] == 'X' && this.cells[7] == 'X' && this.cells[8] == 'X') ||
      (this.cells[6] == 'O' && this.cells[7] == 'O' && this.cells[8] == 'O')
    ) {
      document.getElementById('7')?.classList.add('cell-background');
      document.getElementById('8')?.classList.add('cell-background');
      document.getElementById('9')?.classList.add('cell-background');
      return 1;
    }

    if (
      (this.cells[0] == 'X' && this.cells[3] == 'X' && this.cells[6] == 'X') ||
      (this.cells[0] == 'O' && this.cells[3] == 'O' && this.cells[6] == 'O')
    ) {
      document.getElementById('1')?.classList.add('cell-background');
      document.getElementById('4')?.classList.add('cell-background');
      document.getElementById('7')?.classList.add('cell-background');
      return 1;
    }

    if (
      (this.cells[1] == 'X' && this.cells[4] == 'X' && this.cells[7] == 'X') ||
      (this.cells[1] == 'O' && this.cells[4] == 'O' && this.cells[7] == 'O')
    ) {
      document.getElementById('2')?.classList.add('cell-background');
      document.getElementById('5')?.classList.add('cell-background');
      document.getElementById('8')?.classList.add('cell-background');
      return 1;
    }

    if (
      (this.cells[0] == 'X' && this.cells[4] == 'X' && this.cells[8] == 'X') ||
      (this.cells[0] == 'O' && this.cells[4] == 'O' && this.cells[8] == 'O')
    ) {
      document.getElementById('1')?.classList.add('cell-background');
      document.getElementById('5')?.classList.add('cell-background');
      document.getElementById('9')?.classList.add('cell-background');
      return 1;
    }

    if (
      (this.cells[2] == 'X' && this.cells[4] == 'X' && this.cells[6] == 'X') ||
      (this.cells[2] == 'O' && this.cells[4] == 'O' && this.cells[6] == 'O')
    ) {
      document.getElementById('3')?.classList.add('cell-background');
      document.getElementById('5')?.classList.add('cell-background');
      document.getElementById('7')?.classList.add('cell-background');
      return 1;
    }

    if (
      (this.cells[2] == 'X' && this.cells[5] == 'X' && this.cells[8] == 'X') ||
      (this.cells[2] == 'O' && this.cells[5] == 'O' && this.cells[8] == 'O')
    ) {
      document.getElementById('3')?.classList.add('cell-background');
      document.getElementById('6')?.classList.add('cell-background');
      document.getElementById('9')?.classList.add('cell-background');
      return 1;
    }

    if (
      this.cells[0].length >= 1 &&
      this.cells[1].length >= 1 &&
      this.cells[2].length >= 1 &&
      this.cells[3].length >= 1 &&
      this.cells[4].length >= 1 &&
      this.cells[5].length >= 1 &&
      this.cells[6].length >= 1 &&
      this.cells[7].length >= 1 &&
      this.cells[8].length >= 1
    ) {
      return 2;
    }

    return 0;
  }

  newGameClicked(): void {
    let value;
    for (let i = 0; i <= this.cells.length; i++) {
      value = document.getElementById(i.toString());
      if (value?.innerHTML) {
        value.innerHTML = '';
      }
    }
    this.cells = ['', '', '', '', '', '', '', '', ''];
    this.playerTurn = 1;
    document.getElementById('player2')?.classList.remove('player-turn');
    document.getElementById('player1')?.classList.add('player-turn');
    var gameFinished = document.getElementById('game-finished');
    gameFinished ? (gameFinished.innerHTML = '') : '';
    for (let i = 1; i <= this.cells.length; i++) {
      document
        .getElementById(i.toString())
        ?.classList.remove('cell-background');
    }
  }

  modeChanged(): void {
    if (this.checked) {
      document.body.classList.add('dark-background');
    } else {
      document.body.classList.remove('dark-background');
    }
  }
}
