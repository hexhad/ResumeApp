import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {BiHome} from 'react-icons/bi';
import {Text, View, Dimensions, StyleSheet, Image} from 'react-native';

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
  margin-bottom: 4px;
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

const MainTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  margin-bottom: 5px;
`;

const Shape = styled.View`
    background: #e1e1e1;
    border-radius: 5px
    margin-right:6px;
    margin-top:4px;
    margin-bottom:4px;
`;

const ShapeCompany = styled.View`
    background: #e1e1e1;
    border-radius: 5px
    margin-left:6px;
    margin-top:4px;
    margin-bottom:4px;
`;

const ShapeSide = styled.View`
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

const ShapeText = styled.Text`
  font-size: 12px;
  color: #262626;
  margin: 4px;
`;

const HashCard = props => (
  <Card>
    <View style={style.Row}>
      <Date>{props.year}</Date>
      <Time style={style.Time}>{props.type}</Time>
    </View>
    <View style={style.Row}>
      <Title numberOfLines={1}>{props.title}</Title>
      <ShapeCompany>
        <ShapeText>{props.org}</ShapeText>
      </ShapeCompany>
    </View>
    <Desc
    // numberOfLines={3}
    >
      {props.desc}
    </Desc>
    <View style={style.Row}>
      {props.techs.map(item => (
        <Shape>
          <ShapeText>{item.toString()}</ShapeText>
        </Shape>
      ))}
    </View>
  </Card>
);

export default function Education() {
  return (
    <>
      <ScrollView>
        <View style={style.RowSideB}>
          <Card style={style.ScreenWidth}>
            <NormalText>I am Capable with</NormalText>
          </Card>
          <View style={style.Exp}>
            <ShapeSide />
            <ShapeSide />
            <ShapeSide />
          </View>
        </View>

        <HashCard
          year="2021"
          type="Individual"
          title="Resume"
          org="FreeTime"
          desc="It's React App that allows access to my informations, this will work as a Resume"
          techs={['ReactNative']}
        />
        <HashCard
          year="2021"
          type="Group"
          title="Akvafin"
          org="Akvasoft"
          desc="Finacial Mobile Application for retriving daily Details, Notifications and Chat "
          techs={['ReactNative']}
        />
        <HashCard
          year="2021"
          type="Individual"
          title="Right to Voice"
          org="Akvasoft"
          desc="Api of the Social Application that allows users to report incidents to Goverment authorities"
          techs={['SpringBoot', 'Mysql', 'Java', 'DigitalOcean']}
        />
        <HashCard
          year="2021"
          type="Individual"
          title="Vivino"
          org="Akvasoft"
          desc="E commerce website UI Implementation"
          techs={['React']}
        />
        <HashCard
          year="2021"
          type="Individual"
          title="Carte Adventure"
          org="Akvasoft"
          desc="An Adventure web site and Dashboard Design"
          techs={['Adobe XD']}
        />
        <HashCard
          year="2021"
          type="Individual"
          title="Combined Discounts"
          org="Akvasoft"
          desc="Dashboard for a E Commerce website that allows sellers to maintain stock"
          techs={['Adobe XD']}
        />
        <HashCard
          year="2020"
          type="Group"
          title="Frozen Ice Cream"
          org="University of Ruhuna"
          desc="A Web based application for manual driven local shop that have high demand, which includes additional 
android application that developing by me with features like Order Items, Online payment method, Customize 
ice-cream, loyalty customer (App is developed by myself)"
          techs={['Android', 'Firebase', 'Adobe XD', 'PHP', 'mysql']}
        />
        <HashCard
          year="2020"
          type="Individual"
          title="Daddy's Coffee"
          org="FreeTime"
          desc="Api with CRUD and Mobile Application to View those Data"
          techs={['SpringBoot', 'Java', 'Mysql', 'Android']}
        />
        <HashCard
          year="2019"
          type="Group"
          title="Wedding Planning System"
          org="University of Ruhuna"
          desc="Abhisheka Mandapa, a Java based system that easily identify the characteristic that srilankan wedding needs
and calculate profit for situation. "
          techs={['Java', 'Mysql']}
        />
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  RowSideB: {
    flexDirection: 'row',
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
  bottomFix: {
    marginBottom: 5,
  },
  ScreenWidth: {
    width: Dimensions.get('screen').width - 70,
  },
  Exp: {
    alignSelf: 'center',
  },
});
