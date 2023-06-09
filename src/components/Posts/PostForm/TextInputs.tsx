import { Button, Flex, Input, Stack, Textarea } from '@chakra-ui/react';
import React from 'react';

type Props = {
    textInputs: {
        title: string;
        body: string;
    }
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleCreatePost: () => void;
    loading: boolean
}


const TextInputs = ({ textInputs, onChange, handleCreatePost, loading }: Props) => {


    return (
        <Stack spacing={3} width='100%'>
            <Input
                name='title'
                value={textInputs.title}
                onChange={onChange}
                fontSize='10pt'
                borderRadius={4}
                placeholder='Title'
                _placeholder={{ color: 'gray.500' }}
                _focus={{
                    outline: 'none',
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'black'

                }}
            />
            <Textarea
                name='body'
                fontSize='10pt'
                value={textInputs.body}
                borderRadius={4}
                onChange={onChange}
                placeholder='Text (optional)'
                height='100px'
                _placeholder={{ color: 'gray.500' }}
                _focus={{
                    outline: 'none',
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'black'

                }} />
            <Flex justify='flex-end'>
                <Button
                    isLoading={loading}
                    height='34px'
                    padding='0px 30px'
                    disabled={!textInputs.title}
                    onClick={handleCreatePost} >
                    Post
                </Button>
            </Flex>
        </Stack>
    )
}

export default TextInputs