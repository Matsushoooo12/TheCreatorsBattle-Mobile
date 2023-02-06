import { View, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Flex, HStack, Text } from 'native-base'

const ProfileScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Flex w='100%' h='72px' bg='gray.300' mb='12px'></Flex>
      <Flex direction='column' w='100%' alignItems='center' mb='30px'>
        <Avatar w='64px' h='64px' mb='10px' />
        <Flex direction='column'>
          <Text fontSize='24px' fontWeight='bold'>
            まつもとしょうご
          </Text>
          <Text fontWeight='bold'>@matsushoooo12</Text>
          <Text mb='8px'>🙋‍♂️自己紹介 ></Text>
          <HStack space='4px'>
            <Flex w='30px' h='30px' bg='gray.300' borderRadius='full' />
            <Flex w='30px' h='30px' bg='gray.300' borderRadius='full' />
            <Flex w='30px' h='30px' bg='gray.300' borderRadius='full' />
          </HStack>
        </Flex>
      </Flex>
      <Flex direction='column' mx='24px' mb='40px'>
        <Flex w='100%' h='320px' bg='gray.300' borderRadius='16px' mb='44px'>
          <Flex w='100%' h='200px' bg='red.300' borderTopRadius='16px'></Flex>
          <Flex direction='column' p='12px 20px'>
            <Text fontSize='14px' color='gray.500'>
              Webアプリ
            </Text>
            <Text fontWeight='bold' mb='10px'>
              テストテストテストテストテストテストテスト
            </Text>
            <HStack space='8px' mb='4px'>
              <Flex w='46px' h='15px' bg='gray.500' borderRadius='full'></Flex>
              <Flex w='46px' h='15px' bg='gray.500' borderRadius='full'></Flex>
              <Flex w='46px' h='15px' bg='gray.500' borderRadius='full'></Flex>
            </HStack>
            <Text fontSize='14px' color='gray.500'>
              2022/02/01
            </Text>
          </Flex>
        </Flex>
        <Flex direction='column'>
          <Flex direction='row' mb='24px'>
            <Flex
              h='90px'
              w='154px'
              bg='gray.500'
              mt='4px'
              borderRadius='16px'
            ></Flex>
            <Flex direction='column' px='20px' w='220px'>
              <Text fontSize='14px' color='gray.500'>
                Webアプリ
              </Text>
              <Text fontWeight='bold' mb='10px'>
                テストテストテストテストテストテストテスト
              </Text>
              <HStack space='8px' mb='4px'>
                <Flex
                  w='46px'
                  h='15px'
                  bg='gray.500'
                  borderRadius='full'
                ></Flex>
                <Flex
                  w='46px'
                  h='15px'
                  bg='gray.500'
                  borderRadius='full'
                ></Flex>
                <Flex
                  w='46px'
                  h='15px'
                  bg='gray.500'
                  borderRadius='full'
                ></Flex>
              </HStack>
              <Text fontSize='14px' color='gray.500'>
                2022/02/01
              </Text>
            </Flex>
          </Flex>
          <Flex direction='row' mb='24px'>
            <Flex
              h='90px'
              w='154px'
              bg='gray.500'
              mt='4px'
              borderRadius='16px'
            ></Flex>
            <Flex direction='column' px='20px' w='220px'>
              <Text fontSize='14px' color='gray.500'>
                Webアプリ
              </Text>
              <Text fontWeight='bold' mb='10px'>
                テストテストテストテストテストテストテスト
              </Text>
              <HStack space='8px' mb='4px'>
                <Flex
                  w='46px'
                  h='15px'
                  bg='gray.500'
                  borderRadius='full'
                ></Flex>
                <Flex
                  w='46px'
                  h='15px'
                  bg='gray.500'
                  borderRadius='full'
                ></Flex>
                <Flex
                  w='46px'
                  h='15px'
                  bg='gray.500'
                  borderRadius='full'
                ></Flex>
              </HStack>
              <Text fontSize='14px' color='gray.500'>
                2022/02/01
              </Text>
            </Flex>
          </Flex>
          <Flex direction='row' mb='24px'>
            <Flex
              h='90px'
              w='154px'
              bg='gray.500'
              mt='4px'
              borderRadius='16px'
            ></Flex>
            <Flex direction='column' px='20px' w='220px'>
              <Text fontSize='14px' color='gray.500'>
                Webアプリ
              </Text>
              <Text fontWeight='bold' mb='10px'>
                テストテストテストテストテストテストテスト
              </Text>
              <HStack space='8px' mb='4px'>
                <Flex
                  w='46px'
                  h='15px'
                  bg='gray.500'
                  borderRadius='full'
                ></Flex>
                <Flex
                  w='46px'
                  h='15px'
                  bg='gray.500'
                  borderRadius='full'
                ></Flex>
                <Flex
                  w='46px'
                  h='15px'
                  bg='gray.500'
                  borderRadius='full'
                ></Flex>
              </HStack>
              <Text fontSize='14px' color='gray.500'>
                2022/02/01
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </ScrollView>
  )
}

export default ProfileScreen
