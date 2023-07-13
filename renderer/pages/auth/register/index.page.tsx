import React, { useState } from 'react';
import { Form } from '../@shared/Form';
import { Section } from '../@shared/Section';
import { MdEmail } from 'react-icons/md';
import { Header } from '../@shared/Header';
import { useForm } from 'react-hook-form';

export default function AuthLoginPage() {
    const { register, handleSubmit, formState: { defaultValues, isLoading }, } = useForm();


    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <Section>
            <Header.Root>
                <Header.Title>Criar nova conta</Header.Title>
            </Header.Root>
            <Form.Root onSubmit={onSubmit}>
                <Form.Control>
                    <Form.Label htmlFor='name'>Nome de Usuário</Form.Label>
                    <Form.Input type='text' name='name' id='name' {...register('name')} />
                </Form.Control>
                <Form.Control>
                    <Form.Label htmlFor='email'>E-mail</Form.Label>
                    <Form.Input type='email' name='email' id='email' {...register('email')} />
                </Form.Control>
                <Form.Control>
                    <Form.Label htmlFor='password'>Senha</Form.Label>
                    <Form.InputPassword id='password' {...register('password')} />
                    <Form.Link href="/auth/login">Já tenho uma conta, Fazer login</Form.Link>
                </Form.Control>
                <Form.Button type='submit' isLoading={isLoading}>Criar conta</Form.Button>
            </Form.Root>
        </Section >
    )
};
