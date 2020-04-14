import React, { useState } from 'react';
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
} from '@rebass/forms';
import { Box, Flex, Button, Text, Heading, Card } from 'rebass';

const CustomerForm = props => {
  const [ name, setName ] = useState('')
  const [ location, setLocation ] = useState('')
  const [ checkbox, setCheckBox ] = useState('beep')
  const [ remember, setRemember ] = useState(false)
  const [ isRegistered, setRegister ] = useState(false)

  const onSubmit = () => {
    const values = {
      name,
      location,
      checkbox,
      remember,
    }
    console.log('submit', values)
    setRegister(true)
  }

  return(
    <Box
  as='form'
  onSubmit={e => e.preventDefault()}
  py={3}
  width="500px"
  >
  <Flex mx={-2} mb={3} >
    <Box width={1/2} px={2}>
      <Label htmlFor='name'>Name</Label>
      <Input
        id='name'
        name='name'
        value={name}
        placeholder="Nome"
        onChange={({ target : { value } }) => setName(value)}
      />
    </Box>
    <Box width={1/2} px={2}>
      <Label htmlFor='location'>Location</Label>
      <Select
        id='location'
        name='location'
        defaultValue='NYC'
        value={location}
        data-testid="location"
        onChange={({ target : { value } }) => setLocation(value)}
        >
        <option>NYC</option>
        <option>DC</option>
        <option>ATX</option>
        <option>SF</option>
        <option>LA</option>
      </Select>
    </Box>
  </Flex>
  <Flex mx={-2} flexWrap='wrap'>
    <Label width={[ 1/2, 1/4 ]} p={2}>
      <Radio
        id='beep'
        name='beep'
        value='beep'
        checked={!!(checkbox === 'beep')}
        onChange={({ target : { value } }) => setCheckBox(value)}
      />
      Beep
    </Label>
    <Label width={[ 1/2, 1/4 ]} p={2}>
      <Radio
        id='boop'
        name='beep'
        value='boop'
        checked={!!(checkbox === 'boop')}
        onChange={({ target : { value } }) => setCheckBox(value)}
      />
      Boop
    </Label>
    <Label width={[1/2, 1/4]} p={2}>
      <Checkbox
        id='remember'
        data-testid="remember"
        name='remember'
        checked={remember}
        onChange={() => setRemember(!remember)}
      />
      Remember Me
    </Label>
    <Box px={2} ml='auto'>
      <Button onClick={onSubmit}>
        Submit
      </Button>
    </Box>
  </Flex>
  {isRegistered && (
    <Flex mx={-2} mb={3} width="100%">
      <Card width="100%">
        <Heading fontSize={4}>Your register</Heading>
        <Flex flexDirection="row">
          <Flex flex={1} flexDirection="column">
            <Text fontWeight="bold">
              Name
            </Text>
            <Text >
              {name}
            </Text>
          </Flex>
          <Flex flex={1} flexDirection="column">
            <Text fontWeight="bold">
              Location
            </Text>
            <Text>
              {location}
            </Text>
          </Flex>
        </Flex>
        <Flex flex={1} flexDirection="row">
          <Flex flex={1} flexDirection="column">
            <Text fontWeight="bold">
              Beep?
            </Text>
            <Text>
              {checkbox}
            </Text>
          </Flex>
          <Flex flex={1} flexDirection="column">
            <Text fontWeight="bold">
              Remember?
            </Text>
            <Text>
              {remember}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )}
</Box>

  )
}

export default CustomerForm