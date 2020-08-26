import React, {PureComponent} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Slider,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import SwipeButton from 'rn-swipe-button';
//  import Slider from '@react-native-community/slider';

class DashboardComponent extends PureComponent {
  constructor() {
    super();

    // write your constructor level code.
    // eg : state initilization

    this.state = {
      //Initial Value of slider
      sliderValue: 0,
    };
  }

//   Button clicked function
  onPress = (prm) => {
      
    if(prm === 'swiped')
        this.props.navigation.navigate('Home');

        Alert.alert(`Button Alert!`, `You have selected ${prm} button`);
  };

  render() {
    const {getName} = this.props
    let forceResetLastButton = null;

    return (
        <React.Fragment>
            <Text style={styles.greeting}>
                <Text style={styles.greetHi}>{`Hi! `}</Text>
                <Text style={styles.greetName}>{getName && getName.response ?getName.response:'Guest'}</Text>
            </Text>
        
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.topView}>
                <View style={styles.leftLine} />
                <Text style={styles.topTitle}>4 variations of a button</Text>
                <View style={styles.rightLine} />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onPress('TouchableOpacity')}>
              <Text> Press me </Text>
            </TouchableOpacity>

            <TouchableHighlight
              style={styles.button1}
              onPress={() => this.onPress('TouchableHighlight')}>
              <Text> Press me </Text>
            </TouchableHighlight>

            <Button
              style={styles.button2}
              title="Submit"
              // color="#f194ff"
              onPress={() => this.onPress('Button')}
            />

            {/* <Slider
              style={{height: 40}}
              step={1}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#307ecc"
              maximumTrackTintColor="#000000"
              onValueChange={(sliderValue) => this.setState({sliderValue})}
              value={this.state.sliderValue}
              onSlidingComplete={this.state.sliderValue===1?() => this.onPress('slider'):null}
            /> */}

            <SwipeButton
              thumbIconBackgroundColor="#FFFFFF"
              title="Slide to navigate >>>"
              railStyles={{
                backgroundColor: '#44000088',
                borderColor: '#880000FF',
              }}
              forceReset={(reset) => {
                forceResetLastButton = reset;
              }}
              onSwipeSuccess={() => this.onPress('swiped')}
            />
          </ScrollView>
        </SafeAreaView>
      </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginHorizontal: 16,
    // alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical:5
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical:5
  },
  topView:{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'},
  leftLine:{flex:0.8, height:2, backgroundColor:'gray'},
  rightLine:{flex:0.8, height:2, backgroundColor:'gray'},
  topTitle:{flex:2, textAlign: 'center', fontWeight:'bold'},
  greeting:{textAlign:'right', margin:15, fontSize:16},
  greetHi:{color:'red'},
  greetName:{fontWeight:'bold'}
});

export default DashboardComponent;
