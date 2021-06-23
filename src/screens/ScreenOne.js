import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {StyleSheet, View, Dimensions, Image} from 'react-native';
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
const CardDark = styled.View`
    height :auto;
    background : #262626;
    border-radius: 8px
    margin-bottom:5px;
    margin-top:5px;
    padding: 15px;
`;

const Card = styled.View`
    height :auto;
    width:auto;
    background : #FFF;
    border-radius: 8px
    margin-bottom:5px;
    margin-top:5px;
    padding: 15px;
`;

const NormalText = styled.Text`
  font-size: 20px;
`;

const SmallText = styled.Text`
  font-size: 11px;
`;
const SmallTextWhite = styled.Text`
  font-size: 11px;
  color: #e1e1e1;
`;

const TitleWhite = styled.Text`
  font-size: 15px;
  color: #e1e1e1;
`;

const Shape = styled.View`
  background: #262626;
  height: 5px;
  width: 15px;
  margin-top:2px
  border-radius: 5px;
  margin-left:-10px;
`;

export default function ScreenOne() {
  const [isGreeting, setGreeting] = useState('Hi');
  useEffect(() => {
    let day = new Date();
    let hr = day.getHours();
    if (hr >= 0 && hr < 12) {
      setGreeting('Good Morning');
    } else if (hr >= 12 && hr <= 16) {
      setGreeting('Good Afternoon');
    } else if (hr >= 16 && hr <= 18) {
      setGreeting('Good Evening');
    } else {
      setGreeting('Good Night');
    }
  });
  return (
    <>
      <Container>
        <ScrollView>
          <View style={style.Row}>
            <Card style={style.ScreenWidth}>
              <NormalText>{isGreeting}</NormalText>
            </Card>
            <View style={style.Exp}>
              <Shape />
              <Shape />
              <Shape />
            </View>
          </View>
          <Card style={style.imageContainer}>
            <Image
              source={require('../images/profilepic/pro.png')}
              style={style.circleImg}
            />
            <SmallText>Hello I am</SmallText>
            <NormalText>Hashan Dharmapriya</NormalText>
          </Card>
          <CardDark>
            <TitleWhite>About Me</TitleWhite>
            <SmallTextWhite>
              Self-motivated and highly competent individual in computer
              programming, networking, web designing and database handling,
              currently reading for Bachelor of Information and Communication
              Technology Degree, acquiring 2.56 CGPA. In addition to that, have
              a creative mind, typographical and graphic design skills with a
              talent of thinking outside the box. Also prefer both team and
              individual working environment.
            </SmallTextWhite>
          </CardDark>
          <CardDark>
            <TitleWhite>Education</TitleWhite>
            <SmallTextWhite>
              Bachelor of Information and Communication Technology in University
              of Ruhuna
            </SmallTextWhite>
          </CardDark>
        </ScrollView>
      </Container>
    </>
  );
}

const style = StyleSheet.create({
  Row: {
    flexDirection: 'row',
  },
  ScreenWidth: {
    width: Dimensions.get('screen').width - 70,
  },
  Exp: {
    alignSelf: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleImg: {
    marginTop: 20,
    marginBottom: 10,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
