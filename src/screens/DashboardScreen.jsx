import {
  Dimensions,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native'
import React, { useState } from 'react'
import {
  Avatar,
  Flex,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import { LineChart } from 'react-native-chart-kit'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'

const DashboardScreen = () => {
  const [graphIndex, setGraphIndex] = useState(0)
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'グラフ分析' },
    { key: 'second', title: 'プロジェクト一覧' },
  ])

  const FirstRoute = () => (
    <ScrollView style={{ flex: 1 }}>
      <Flex direction='column' p='24px'>
        <LinearGradient
          colors={['#7CAAFF', '#8D85F4']}
          style={{ marginBottom: 16, borderRadius: 16 }}
        >
          <HStack
            space='8px'
            p='12px 24px'
            justifyContent='center'
            rounded='xl'
          >
            <Flex
              w='30%'
              bg='#969AF8'
              rounded='xl'
              alignItems='center'
              justifyContent='center'
              p='16px'
            >
              <Flex>
                <Text bold color='white'>
                  ランキング
                </Text>
                <Flex direction='row' alignItems='flex-end'>
                  <Text fontSize='32px' bold color='white'>
                    196
                  </Text>
                  <Text mb='6px' bold color='white'>
                    位
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              w='30%'
              bg='#969AF8'
              rounded='xl'
              alignItems='center'
              justifyContent='center'
              p='16px'
            >
              <Flex>
                <Text bold color='white'>
                  レベル
                </Text>
                <Flex direction='row' alignItems='flex-end'>
                  <Text fontSize='32px' bold color='white'>
                    32
                  </Text>
                  <Text mb='6px' bold color='white'>
                    Lv
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              w='30%'
              bg='#969AF8'
              rounded='xl'
              alignItems='center'
              justifyContent='center'
              p='16px'
            >
              <Flex>
                <Text bold color='white'>
                  ポイント
                </Text>
                <Flex direction='row' alignItems='flex-end'>
                  <Text fontSize='32px' bold color='white'>
                    320
                  </Text>
                  <Text mb='6px' bold color='white'>
                    pt
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </HStack>
        </LinearGradient>
        <Flex
          shadow={2}
          w='100%'
          //   h='240px'
          bg='white'
          rounded='xl'
          mb='16px'
          //   justifyContent='center'
          alignItems='center'
          padding='16px 24px'
        >
          <Text fontSize='20px' bold alignSelf='flex-start' mb='4px'>
            推移
          </Text>
          <HStack space='16px' alignSelf='flex-start' direction='row' mb='4px'>
            <TouchableOpacity onPress={() => setGraphIndex(0)}>
              <Flex alignItems='center'>
                <Text mb='4px' bold>
                  ランキング
                </Text>
                {graphIndex === 0 && (
                  <Flex backgroundColor='#8D85F4' w='100%' h='2px' />
                )}
              </Flex>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setGraphIndex(1)}>
              <Flex alignItems='center'>
                <Text mb='4px' bold>
                  ポイント
                </Text>
                {graphIndex === 1 && (
                  <Flex backgroundColor='#8D85F4' w='100%' h='2px' />
                )}
              </Flex>
            </TouchableOpacity>
          </HStack>
          {graphIndex === 0 && (
            <LineChart
              data={{
                labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                datasets: [
                  {
                    data: [124, 110, 96, 103, 110, 70],
                  },
                ],
              }}
              width={Dimensions.get('window').width - 60} // from react-native
              height={160}
              segments={3}
              yAxisInterval={1} // optional, defaults to 1
              withVerticalLines={false}
              chartConfig={{
                backgroundColor: '#fff',
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: () => `#8D85F4`,
                labelColor: () => `#999`,
                style: {
                  overflow: 'scroll',
                },
                propsForDots: {
                  r: '0',
                  strokeWidth: '2',
                  stroke: '#8D85F4',
                },
              }}
              bezier
              style={{
                //   marginVertical: 8,
                //   borderRadius: 16,
                backgroundColor: 'white',
                marginRight: 24,
              }}
            />
          )}
          {graphIndex === 1 && (
            <LineChart
              data={{
                labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                datasets: [
                  {
                    data: [2300, 3000, 1700, 2100, 2500, 3000],
                  },
                ],
              }}
              width={Dimensions.get('window').width - 60} // from react-native
              height={160}
              segments={3}
              yAxisInterval={1} // optional, defaults to 1
              withVerticalLines={false}
              chartConfig={{
                backgroundColor: '#fff',
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: () => `#8D85F4`,
                labelColor: () => `#999`,
                style: {
                  overflow: 'scroll',
                },
                propsForDots: {
                  r: '0',
                  strokeWidth: '2',
                  stroke: '#8D85F4',
                },
              }}
              bezier
              style={{
                //   marginVertical: 8,
                //   borderRadius: 16,
                backgroundColor: 'white',
                marginRight: 24,
              }}
            />
          )}
        </Flex>
        <Flex
          padding='16px 24px'
          shadow={2}
          w='100%'
          bg='white'
          rounded='xl'
          mb='16px'
        >
          <Text fontSize='20px' bold alignSelf='flex-start' mb='4px'>
            総合評価
          </Text>
          <Flex direction='row' justifyContent='center'>
            <Image
              source={{
                uri: 'https://user-images.githubusercontent.com/66903388/216831202-a21e713a-9794-4998-8ef3-0f0d3d96bbdd.png',
              }}
              // size='xl'
              w='230px'
              h='180px'
              alt=''
            />
            <VStack space='4px' ml='19px'>
              <Flex direction='row' alignItems='flex-end'>
                <Text
                  fontSize='10px'
                  marginBottom='2px'
                  mr='2px'
                  color='#8D85F4'
                >
                  ビジネス
                </Text>
                <Text fontSize='14px' color='#8D85F4' fontWeight='bold'>
                  3.2
                </Text>
              </Flex>
              <Flex direction='row' alignItems='flex-end'>
                <Text
                  fontSize='10px'
                  marginBottom='2px'
                  mr='2px'
                  color='#8D85F4'
                >
                  技術
                </Text>
                <Text fontSize='14px' color='#8D85F4' fontWeight='bold'>
                  2.3
                </Text>
              </Flex>
              <Flex direction='row' alignItems='flex-end'>
                <Text
                  fontSize='10px'
                  marginBottom='2px'
                  mr='2px'
                  color='#8D85F4'
                >
                  デザイン
                </Text>
                <Text fontSize='14px' color='#8D85F4' fontWeight='bold'>
                  4.5
                </Text>
              </Flex>
              <Flex direction='row' alignItems='flex-end'>
                <Text
                  fontSize='10px'
                  marginBottom='2px'
                  mr='2px'
                  color='#8D85F4'
                >
                  発想
                </Text>
                <Text fontSize='14px' color='#8D85F4' fontWeight='bold'>
                  2.8
                </Text>
              </Flex>
            </VStack>
          </Flex>
        </Flex>
        <Flex padding='16px 24px' shadow={2} w='100%' bg='white' rounded='xl'>
          <Text fontSize='20px' bold alignSelf='flex-start' mb='16px'>
            レビューコメント
          </Text>
          <VStack>
            <Flex direction='column'>
              <Flex direction='row' mb='6px'>
                <Image
                  w='72px'
                  h='46px'
                  backgroundColor='gray.200'
                  alt=''
                  mr='10px'
                />
                <Text w='250px' fontSize='12px'>
                  testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                </Text>
              </Flex>
              <Flex direction='column' mb='6px'>
                <HStack space='16px'>
                  <Flex direction='row' alignItems='center'>
                    <Text fontSize='12px' mr='6px'>
                      ビジネス
                    </Text>
                    <HStack space='4px'>
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                    </HStack>
                  </Flex>
                  <Flex direction='row' alignItems='center'>
                    <Text fontSize='12px' mr='6px'>
                      技術
                    </Text>
                    <HStack space='4px'>
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                    </HStack>
                  </Flex>
                </HStack>
                <HStack space='16px'>
                  <Flex direction='row' alignItems='center'>
                    <Text fontSize='12px' mr='6px'>
                      デザイン
                    </Text>
                    <HStack space='4px'>
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                    </HStack>
                  </Flex>
                  <Flex direction='row' alignItems='center'>
                    <Text fontSize='12px' mr='6px'>
                      発想
                    </Text>
                    <HStack space='4px'>
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                    </HStack>
                  </Flex>
                </HStack>
              </Flex>
              <HStack space='8px' alignItems='center'>
                <Avatar w='18px' h='18px' />
                <Text fontSize='14px'>まつもとしょうご</Text>
              </HStack>
              <Flex w='100%' h='1px' backgroundColor='#ccc' my='16px' />
            </Flex>
            <Flex direction='column'>
              <Flex direction='row' mb='6px'>
                <Image
                  w='72px'
                  h='46px'
                  backgroundColor='gray.200'
                  alt=''
                  mr='10px'
                />
                <Text w='250px' fontSize='12px'>
                  testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                </Text>
              </Flex>
              <Flex direction='column' mb='6px'>
                <HStack space='16px'>
                  <Flex direction='row' alignItems='center'>
                    <Text fontSize='12px' mr='6px'>
                      ビジネス
                    </Text>
                    <HStack space='4px'>
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                    </HStack>
                  </Flex>
                  <Flex direction='row' alignItems='center'>
                    <Text fontSize='12px' mr='6px'>
                      技術
                    </Text>
                    <HStack space='4px'>
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                    </HStack>
                  </Flex>
                </HStack>
                <HStack space='16px'>
                  <Flex direction='row' alignItems='center'>
                    <Text fontSize='12px' mr='6px'>
                      デザイン
                    </Text>
                    <HStack space='4px'>
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                    </HStack>
                  </Flex>
                  <Flex direction='row' alignItems='center'>
                    <Text fontSize='12px' mr='6px'>
                      発想
                    </Text>
                    <HStack space='4px'>
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                      <AntDesign name='star' size={12} color='black' />
                    </HStack>
                  </Flex>
                </HStack>
              </Flex>
              <HStack space='8px' alignItems='center'>
                <Avatar w='18px' h='18px' />
                <Text fontSize='14px'>まつもとしょうご</Text>
              </HStack>
            </Flex>
          </VStack>
        </Flex>
      </Flex>
    </ScrollView>
  )

  const SecondRoute = () => (
    <ScrollView style={{ flex: 1 }}>
      <Flex direction='column' p='24px'>
        <Flex
          w='100%'
          h='226px'
          backgroundColor='gray.300'
          borderRadius='16px'
          position='relative'
          shadow={2}
          mb='32px'
        >
          <Flex
            w='84px'
            py='10px'
            bg='#684EBD'
            direction='row'
            justifyContent='center'
            top='18px'
            borderRightRadius='8px'
            _text={{
              color: 'white',
            }}
          >
            募集期間
          </Flex>
        </Flex>
        <Flex w='100%' rounded='xl' mb='16px'>
          <Text fontSize='20px' bold alignSelf='flex-start' mb='16px'>
            募集中
          </Text>
          <ScrollView horizontal>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
          </ScrollView>
        </Flex>
        <Flex w='100%' rounded='xl' mb='16px'>
          <Text fontSize='20px' bold alignSelf='flex-start' mb='16px'>
            進行中
          </Text>
          <ScrollView horizontal>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
          </ScrollView>
        </Flex>
        <Flex w='100%' rounded='xl' mb='16px'>
          <Text fontSize='20px' bold alignSelf='flex-start' mb='16px'>
            終了
          </Text>
          <ScrollView horizontal>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
            <Flex
              w='128px'
              h='76px'
              bg='gray.300'
              borderRadius='16px'
              mr='24px'
              mb='16px'
            ></Flex>
          </ScrollView>
        </Flex>
      </Flex>
    </ScrollView>
  )

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  })
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={{ backgroundColor: 'white' }}
          indicatorStyle={{ backgroundColor: 'blue' }}
          labelStyle={{ color: 'black' }}
        />
      )}
    />
  )
}

export default DashboardScreen
