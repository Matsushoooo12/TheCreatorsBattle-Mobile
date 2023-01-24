import { View } from 'react-native'
import React from 'react'
import { Flex, HStack, ScrollView, Text } from 'native-base'

const DashboardScreen = () => {
  return (
    <ScrollView h='80'>
      <Flex direction='column' p='24px'>
        <HStack
          space='8px'
          h='120px'
          bg='blue.300'
          p='12px 24px'
          justifyContent='center'
          rounded='xl'
          mb='16px'
        >
          <Flex
            w='30%'
            bg='white'
            //   opacity={0.4}
            rounded='xl'
            alignItems='center'
            justifyContent='center'
            p='16px'
          >
            <Text bold>レベル</Text>
            <Flex direction='row' alignItems='flex-end'>
              <Text fontSize='32px' bold>
                32
              </Text>
              <Text mb='6px' bold>
                Lv
              </Text>
            </Flex>
          </Flex>
          <Flex
            w='30%'
            bg='white'
            rounded='xl'
            alignItems='center'
            justifyContent='center'
            p='16px'
          >
            <Text bold>ランキング</Text>
            <Flex direction='row' alignItems='flex-end'>
              <Text fontSize='32px' bold>
                196
              </Text>
              <Text mb='6px' bold>
                位
              </Text>
            </Flex>
          </Flex>
          <Flex
            w='30%'
            bg='white'
            rounded='xl'
            alignItems='center'
            justifyContent='center'
            p='16px'
          >
            <Text bold>レベル</Text>
            <Flex direction='row' alignItems='flex-end'>
              <Text fontSize='32px' bold>
                320
              </Text>
              <Text mb='6px' bold>
                pt
              </Text>
            </Flex>
          </Flex>
        </HStack>
        <Flex
          shadow={2}
          w='100%'
          h='200px'
          bg='white'
          rounded='xl'
          mb='16px'
        ></Flex>
        <Flex
          shadow={2}
          w='100%'
          h='200px'
          bg='white'
          rounded='xl'
          mb='16px'
        ></Flex>
        <Flex shadow={2} w='100%' h='200px' bg='white' rounded='xl'></Flex>
      </Flex>
    </ScrollView>
  )
}

export default DashboardScreen
