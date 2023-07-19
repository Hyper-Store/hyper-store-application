import React, { useState } from 'react';
import { Form } from '../../../components/Form';
import { Section } from '../@shared/components/Section';
import { Header } from '../@shared/components/Header';
import { useForm } from 'react-hook-form';
import { PasswordValidator } from '../@shared/validators';
import { useRouter } from 'next/router';
import { LoginService, LoginServiceProps } from './services/login.service';
import toast from 'react-hot-toast';

export default function AuthLoginPage() {

    const { handleSubmit, control, setError, formState: { errors, isSubmitting }, } = useForm();

    const { push } = useRouter();

    const onSubmit = handleSubmit(async (data: LoginServiceProps) => {

        try {
            const request = await LoginService(data);

            if (request.status === 200) {
                toast.success('Logado com sucesso sucesso, estamos te rendirecionando para outra página!', { duration: 10000 })

                await push('/dashboard/main');
                return;
            }

            if (request.data.error.name === "InvalidCredentialsError") {
                setError('value', { type: 'value', message: 'As credênciais estão incorretas, tente novamente!' })
                setError('password', { type: 'value', message: 'A senha não corresponde' })
                return;
            }

            if (request.status !== 201 && !request.data?.error) {
                toast.error(`O servidor retornou um erro do codigo ${request.status}`)
                return;
            }
        } catch (error) {
            toast.error(`Houve um erro no sevidor, tente novamente mais tarde! Codigo de erro: ${error.message}`)
        }
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
                    <Form.Input disabled={isSubmitting} type='text' name='value' id='value' control={control} rules={{ required: { value: true, message: "E-mail ou nome de usuário é obrigatório" } }} />
                    {errors.value && (<Form.Error>{errors.value?.message as string}</Form.Error>)}
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
