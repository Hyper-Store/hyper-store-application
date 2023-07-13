import React, { useState } from 'react';
import { Form } from '../../../components/Form';
import { Section } from '../@shared/components/Section';
import { Header } from '../@shared/components/Header';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { PasswordValidator } from '../@shared/validators';
import { useRouter } from 'next/router';

export default function AuthLoginPage() {

    const { handleSubmit, control, formState: { errors, isSubmitting }, } = useForm();

    const { push } = useRouter();

    const onSubmit = handleSubmit(async (data) => {

        return new Promise(resolve => {
            setTimeout(() => {
                resolve('a');
                toast.success('Logado com sucesso!')
                push('/dashboard/main')
            }, 2000);
        });
    })

    return (
        <Section>
            <Header.Root>
                <Header.Title>Fazer login</Header.Title>
                <Header.Description>Faça seu login na plataforma para continuar...</Header.Description>
            </Header.Root>
            <Form.Root onSubmit={onSubmit}>
                <Form.Control>
                    <Form.Label htmlFor='emailorusername'>Nome de Usuário</Form.Label>
                    <Form.Input disabled={isSubmitting} type='text' name='emailorusername' id='emailorusername' control={control} rules={{ required: { value: true, message: "E-mail ou nome de usuário é obrigatório" } }} />
                    {errors.emailorusername && (<Form.Error>{errors.emailorusername?.message as string}</Form.Error>)}
                </Form.Control>
                <Form.Control>
                    <Form.Label htmlFor='password'>Senha</Form.Label>
                    <Form.InputPassword disabled={isSubmitting} id='password' name='password' control={control} rules={PasswordValidator} />
                    {errors.password && (<Form.Error>{errors.password?.message as string}</Form.Error>)}
                    <Form.Link href="/auth/login">Já tenho uma conta, Fazer login</Form.Link>
                </Form.Control>
                <Form.Button isLoading={isSubmitting}>Fazer login</Form.Button>
            </Form.Root>
        </Section>
    )
};
