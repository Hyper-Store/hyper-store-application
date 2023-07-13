import React, { useState } from 'react';
import { Form } from '../@shared/Form';
import { Section } from '../@shared/Section';
import { MdEmail } from 'react-icons/md';
import { Header } from '../@shared/Header';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function AuthLoginPage() {

    const { handleSubmit, control, formState: { errors, isLoading }, } = useForm();

    return (
        <Section>
            <Header.Root>
                <Header.Title>Fazer login</Header.Title>
                <Header.Description>Faça seu login na plataforma para continuar...</Header.Description>
            </Header.Root>
            <Form.Control>
                <Form.Label htmlFor='email'>Usuário ou Email</Form.Label>
                <Form.Input type='text' name='email' id='email' control={control} />
            </Form.Control>
            <Form.Control>
                <Form.Label htmlFor='password'>Senha</Form.Label>
                <Form.InputPassword id='password' name='password' control={control} />
                <Form.Link href="/auth/register">Ainda não tenho uma conta, Criar nova conta</Form.Link>
            </Form.Control>
            <Form.Button isLoading={isLoading}>Fazer login</Form.Button>
        </Section>
    )
};
