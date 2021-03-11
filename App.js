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

  makePlay(index){

  }

  render() {
    return (
        <View style={styles.container}>
          {this.state.board.map((value, index) => (
              <TouchableOpacity
                  key={index}
                  style={styles.piece}
                  onPress={() => this.makePlay(index)}
              >
                <Text>
                  {value}
                </Text>

              </TouchableOpacity>
          ))}
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  piece: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    backgroundColor: '#ddd',
  }
});

