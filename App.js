/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
    Alert,
} from 'react-native';

import tictactoe from './src/tictactoe';

export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    tictactoe.start();

    this.state = {
      board: tictactoe.board,
      gameOver: tictactoe.gameover,
    };
  }

  makePlay(index) {
    tictactoe.make_play(index);

    this.setState({
      board: tictactoe.board,
      gameOver: tictactoe.gameover,
    });
  }

  isGameOver() {
    if (this.state.gameOver) {
      return (
          <View style={styles.gameOver}>
            <Text style={styles.gameOverText} >Game Over</Text>
          </View>
      );
    }
  }

  restartGame() {
    tictactoe.start();

    this.setState({
      board: tictactoe.board,
      gameOver: tictactoe.gameover,
    });
  }

  render() {
    return (
        <View style={styles.container}>

          {this.state.board.map((value, index) => (
              <TouchableOpacity
                  key={index}
                  style={styles.piece}
                  onPress={() => {
                    this.makePlay(index)
                  }}
              >
                <Text style={styles.pieceText}>
                  {value}
                </Text>

              </TouchableOpacity>
          ))}
          {
            this.isGameOver()
          }

          <TouchableOpacity
              style={styles.restart}
                onPress={() => {
                    this.restartGame()
                }}
            >
              <Text style={styles.restartButton}>
                Reiniciar
              </Text>
          </TouchableOpacity>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  piece: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 0.7,
    borderColor: '#111',
  },

  pieceText: {
    fontSize: 60,
  },

  gameOver: {
    width: '100%',
    height: 60,
    backgroundColor: '#DC143C',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },

  gameOverText: {
    fontSize: 18,
  },

  restart: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  restartButton: {
    fontSize: 18,
    width: '100%',
    height: 60,
    textAlign: 'center',
    backgroundColor: '#8FBC8F',
    borderRadius: 10,
  },
});

