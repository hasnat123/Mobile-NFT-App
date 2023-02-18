import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import { COLORS, NFTData } from './../constants'
import { HomeHeader, Card, FocusedStatusBar } from '../Components'

const Home = () => {

  const [nftData, setNftData] = useState(NFTData)

  const HandleSearch = (value) =>
  {
    if(!value.length) return setNftData(NFTData)

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()))

      // filteredData.length ? setNftData(filteredData) : setNftData(NFTData)
    setNftData(filteredData)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar background={ COLORS.primary }/>

      <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
          <FlatList
            data={nftData}
            renderItem={({item}) => <Card data={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader HandleSearch={HandleSearch}/>}
          />
        </View>
        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1
          }}>
            <View style={{height: 300, backgroundColor: COLORS.primary}}/>
            <View style={{flex: 1, backgroundColor: COLORS.white}}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})