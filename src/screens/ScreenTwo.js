import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const Date = styled.Text`
  font-size: 15px;
`;

const Time = styled.Text`
  font-size: 15px;
`;

const Reply = styled.TouchableOpacity`
  font-size: 15px;
`;

const Title = styled.Text`
  font-size: 20px;
`;

const Desc = styled.Text`
  font-size: 15px;
`;

const ScrollView = styled.ScrollView`
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 20px;
  background: #f1f1f1;
`;

const Card = styled.View`
    height :auto;
    background : #FFF;
    border-radius: 8px
    margin-bottom:5px;
    margin-top:5px;
    padding: 15px;
`;
const NormalText = styled.Text`
  font-size: 20px;
`;

const MainTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  margin-bottom: 15px;
`;

const Shape = styled.View`
  background: #262626;
  height: 5px;
  width: 15px;
  margin-top:2px
  border-radius: 5px;
  margin-left:-10px;
`;

const ShapeText = styled.Text`
  font-size: 10px;
  text-align: center;
  color: #000;
`;

export default function ScreenTwo() {
  return (
    <>
      <ScrollView>
        <View style={style.Row}>
          <Card style={style.ScreenWidth}>
            <NormalText>I am Capable with</NormalText>
          </Card>
          <View style={style.Exp}>
            <Shape />
            <Shape />
            <Shape />
          </View>
        </View>
        <View style={style.RowCol}>
          <Card style={style.SqCards}>
            <Image
              source={require('../images/technologies/android.png')}
              resizeMode="contain"
              style={{
                width: 'auto',
                height: 30,
                tintColor: '#262626',
                margin: 5,
              }}
            />
            <ShapeText>Android</ShapeText>
          </Card>
          <Card style={style.SqCards}>
            <Image
              source={require('../images/technologies/java.png')}
              resizeMode="contain"
              style={{
                width: 'auto',
                height: 30,
                tintColor: '#262626',
                margin: 5,
              }}
            />
            <ShapeText>Java</ShapeText>
          </Card>
          <Card style={style.SqCards}>
            <Image
              source={require('../images/technologies/react.png')}
              resizeMode="contain"
              style={{
                width: 'auto',
                height: 30,
                tintColor: '#262626',
                margin: 5,
              }}
            />
            <ShapeText>RN</ShapeText>
          </Card>
          <Card style={style.SqCards}>
            <Image
              source={require('../images/technologies/react.png')}
              resizeMode="contain"
              style={{
                width: 'auto',
                height: 30,
                tintColor: '#262626',
                margin: 5,
              }}
            />
            <ShapeText>React</ShapeText>
          </Card>
          <Card style={style.SqCards}>
            <Image
              source={require('../images/technologies/sb.png')}
              resizeMode="contain"
              style={{
                width: 'auto',
                height: 30,
                tintColor: '#262626',
                margin: 5,
              }}
            />
            <ShapeText>Spring</ShapeText>
          </Card>
          <Card style={style.SqCards}>
            <Image
              source={require('../images/technologies/mysql.png')}
              resizeMode="contain"
              style={{
                width: 'auto',
                height: 30,
                tintColor: '#262626',
                margin: 5,
              }}
            />
            <ShapeText>MySQL</ShapeText>
          </Card>
          <Card style={style.SqCards}>
            <Image
              source={require('../images/technologies/ag.png')}
              resizeMode="contain"
              style={{
                width: 'auto',
                height: 30,
                tintColor: '#262626',
                margin: 5,
              }}
            />
            <ShapeText>Angular</ShapeText>
          </Card>
          <Card style={style.SqCards}>
            <Image
              source={require('../images/technologies/fb.png')}
              resizeMode="contain"
              style={{
                width: 'auto',
                height: 30,
                tintColor: '#262626',
                margin: 5,
              }}
            />
            <ShapeText>Firebase</ShapeText>
          </Card>
        </View>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  RowCol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  Time: {
    position: 'absolute',
    right: 0,
  },
  Reply: {
    position: 'absolute',
    right: 0,
    marginTop: 5,
  },
  statusBar: {
    height: 35,
  },
  technology: {
    width: 20,
    height: 20,
    padding: 5,
    marginRight: 10,
    marginTop: 10,
  },
  SqCards: {
    width: (Dimensions.get('screen').width - 100) / 4,
  },
  Exp: {
    alignSelf: 'center',
  },
  ScreenWidth: {
    width: Dimensions.get('screen').width - 70,
  },
  Row: {
    flexDirection: 'row',
  },
});
