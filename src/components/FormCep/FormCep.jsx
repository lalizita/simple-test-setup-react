import React, { useState } from 'react';
import { Box, Flex } from 'rebass'
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
} from '@rebass/forms';
import axios from 'axios'

const FormCep = () => {
  const initialAddress = {
    logradouro: '',
    bairro: ''
  }
  const [ cep, setCep ] = useState('')
  const [ address, setAddress ] = useState(initialAddress)

  const fetchCep = async (cep) => {
    const cepResult = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const { logradouro, bairro } = await cepResult.json()
    setAddress({ logradouro, bairro })
  }

  const handleCepField = value => {
    if(value.length === 8) fetchCep(value)
    setCep(value)
  }

  return (
    <Box as='form' onSubmit={(e) => e.preventDefault()} py={3} width='500px'>
      <Flex mx={-2} mb={3}>
        <Box width={1 / 2} px={2}>
        <Label htmlFor='cep'>Cep</Label>
          <Input
            id='cep'
            name='cep'
            placeholder="CEP"
            onChange={({ target : { value } }) => handleCepField(value)}
          />
        </Box>
        <Box width={1 / 2} px={2}>
        <Label htmlFor='bairro'>Bairro</Label>
          <Input
            id='bairro'
            name='bairro'
            placeholder="bairro"
            value={address.bairro}
            onChange={({ target : { value } }) => setAddress({...address, bairro: value})}
          />
        </Box>
        <Box width={1 / 2} px={2}>
        <Label htmlFor='logradouro'>Logradouro</Label>
          <Input
            id='logradouro'
            name='logradouro'
            placeholder="logradouro"
            value={address.logradouro}
            onChange={({ target : { value } }) => setAddress({...address, logradouro: value})}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default FormCep;
