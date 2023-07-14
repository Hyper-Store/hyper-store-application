import React, { useState } from 'react';
import { Form } from '../../../components/Form';
import { Section } from '../@shared/components/Section';
import { Header } from '../@shared/components/Header';
import { useForm } from 'react-hook-form';
import { PasswordValidator } from '../@shared/validators';
import { useRouter } from 'next/router';
import { LoginService, LoginServiceProps } from './services/login.service';

export default function AuthLoginPage() {

    const { handleSubmit, control, setError, formState: { errors, isSubmitting }, } = useForm();

    const { push } = useRouter();

    const onSubmit = handleSubmit(async (data: LoginServiceProps) => {
        const request = await LoginService(data);

        console.log(request)
        // if (request.data.name === "InvalidCredentialsError") {
        //     setError('emailOrUsername', { type: 'value', message: 'E-mail ou nome de usuário inválidos' })
        // }
    })

    return (
        <Section>
            <Header.Root>
                <Header.Title>Fazer login</Header.Title>
                <Header.Description>Faça seu login na plataforma para continuar...</Header.Description>
            </Header.Root>
            <Form.Root onSubmit={onSubmit}>
                <Form.Control>
                    <Form.Label htmlFor='emailOrUsername'>E-mail ou Nome de usuário</Form.Label>
                    <Form.Input disabled={isSubmitting} type='text' name='emailOrUsername' id='emailOrUsername' control={control} rules={{ required: { value: true, message: "E-mail ou nome de usuário é obrigatório" } }} />
                    {errors.emailorusername && (<Form.Error>{errors.emailOrUsername?.message as string}</Form.Error>)}
                </Form.Control>
                <Form.Control>
                    <Form.Label htmlFor='password'>Senha</Form.Label>
                    <Form.InputPassword disabled={isSubmitting} id='password' name='password' control={control} rules={PasswordValidator} />
                    {errors.password && (<Form.Error>{errors.password?.message as string}</Form.Error>)}
                    <Form.Link href="/auth/register">💚 Criar nova conta</Form.Link>
                </Form.Control>
                <Form.Button isLoading={isSubmitting}>Fazer login</Form.Button>
            </Form.Root>
        </Section>
    )
};
