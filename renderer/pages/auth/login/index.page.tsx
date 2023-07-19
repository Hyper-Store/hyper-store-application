import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { LoginService, LoginServiceProps } from './services/login.service';
import toast from 'react-hot-toast';
import { LoginLayout } from './layout';

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
        <LoginLayout onSubmit={onSubmit} control={control} errors={errors} isSubmitting={isSubmitting} />
    )
};
