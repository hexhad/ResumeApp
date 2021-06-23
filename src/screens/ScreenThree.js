import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Dimensions, StyleSheet, View, Image} from 'react-native';

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

const CardSmall = styled.TouchableOpacity`
    height :auto;
    background : #FFF;
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

const Shape = styled.View`
  background: #262626;
  height: 5px;
  width: 15px;
  margin-top:2px
  border-radius: 5px;
  margin-left:-10px;
`;

const NormalText = styled.Text`
  font-size: 20px;
`;

const NormalTextMod = styled.Text`
  font-size: 20px;
  margin-top: 10px;
`;

const Normal = styled.Text`
  font-size: 15px;
`;

export default function ScreenThree() {
  return (
    <>
      <Container>
        <ScrollView>
          <View style={style.Row}>
            <Card style={style.ScreenWidth}>
              <NormalText>HEXHAD</NormalText>
            </Card>
            <View style={style.Exp}>
              <Shape />
              <Shape />
              <Shape />
            </View>
          </View>
          <Card style={style.imageContainer}>
            <Image
              source={require('../images/profilepic/hlog.png')}
              style={style.circleImg}
            />
            <NormalTextMod>HEXHAD</NormalTextMod>
          </Card>
          <CardSmall>
            <Normal>hashandharmapriya@gmail.com</Normal>
          </CardSmall>
          <CardSmall>
            <Normal>hexhad@gmail.com</Normal>
          </CardSmall>
          <CardSmall>
            <Normal>github.hexhad.io</Normal>
          </CardSmall>
        </ScrollView>
      </Container>
    </>
  );
}

const style = StyleSheet.create({
  ScreenWidth: {
    width: Dimensions.get('screen').width - 70,
  },
  Exp: {
    alignSelf: 'center',
  },
  Row: {
    flexDirection: 'row',
  },
  circleImg: {
    marginTop: 20,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
