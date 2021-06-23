import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {BiHome} from 'react-icons/bi';

// import AsyncStorage from '@react-native-community/async-storage';
// import {color} from 'react-native-reanimated';

const Container = styled.View`
  background: #f1f1f1;
  flex: 1;
`;
const Text = styled.Text``;

const ScrollView = styled.ScrollView`
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 20px;
`;

const CardSmall = styled.View`
    height :auto;
    background : #FFF;
    border-radius: 8px
    margin-bottom:5px;
    margin-top:5px;
    padding: 15px;
`;

const TitleMin = styled.Text`
  font-size: 15px;
  color: #000;
  text-align: center;
`;

const SmallText = styled.Text`
  font-size: 11px;
`;

const Card = styled.View`
    height :auto;
    background : #FFF;
    border-radius: 8px
    margin-bottom:5px;
    margin-top:5px;
    padding: 15px;
`;
const CardDark = styled.View`
    height :auto;
    background : #262626;
    border-radius: 8px
    margin-bottom:5px;
    margin-top:5px;
    padding: 15px;
`;
const SmallTextWhite = styled.Text`
  font-size: 11px;
  color: #e1e1e1;
`;

const TitleWhite = styled.Text`
  font-size: 15px;
  color: #e1e1e1;
`;

const NormalText = styled.Text`
  font-size: 20px;
  margin-top: 10px;
`;

const Social = () => (
  <Card style={style.Row}>
    <View style={style.Item}>
      <Image
        source={require('../images/social/bh.png')}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: '#e1e1e1',
          margin: 10,
        }}
      />
    </View>
    <View style={style.Item}>
      <Image
        source={require('../images/social/linked.png')}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: '#e1e1e1',
          margin: 10,
        }}
      />
    </View>
    <View style={style.Item}>
      <Image
        source={require('../images/social/gh.png')}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: '#e1e1e1',
          margin: 10,
        }}
      />
    </View>
    <View style={style.Item}>
      <Image
        source={require('../images/social/fb.png')}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: '#e1e1e1',
          margin: 10,
        }}
      />
    </View>
  </Card>
);

export default function ScreenFour() {
  return (
    <>
      <Container>
        <ScrollView>
          <Card style={style.imageContainer}>
            <Image
              source={require('../images/profilepic/hlog.png')}
              style={style.circleImg}
            />
            <NormalText>HEXHAD</NormalText>
          </Card>
          <View>
            <CardSmall>
              <TitleMin>Jack of all trades master of None</TitleMin>
            </CardSmall>
            <View style={style.imageContainer}>
              <Image
                source={require('../images/profilepic/pro.png')}
                style={style.imageFill}
              />
            </View>
          </View>

          <CardDark>
            <TitleWhite>About Me</TitleWhite>
            <SmallTextWhite>
              Self-motivated and highly competent individual in computer
              programming, networking, web designing and database handling,
              currently reading for Bachelor of Information and Communication
              Technology Degree, acquiring 2.56 CGPA. In addition to that, have
              a creative mind, typographical and graphic design skills with a
              talent of thinking outside the box. Also prefer both team and
              individual working environment.{' '}
            </SmallTextWhite>
          </CardDark>
          <Social />
        </ScrollView>
      </Container>
    </>
  );
}

const style = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleImg: {
    marginTop: 20,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  imageFill: {
    width: 30,
    height: 30,
    borderRadius: 40,
    marginTop: -20,
    marginBottom: 5,
    alignSelf: 'flex-end',
    right: 0,
    marginRight: 15,
  },
  Row: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flex: 1,
    textAlign: 'center',
  },
  Item: {
    width: (Dimensions.get('screen').width - 210) / 4,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
