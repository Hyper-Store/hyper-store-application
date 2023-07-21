import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { RegisterService } from './services/register.service';
import { useRouter } from 'next/router';
import { RegisterLayout } from './layout';

export default function AuthLoginPage() {

    const { push } = useRouter();
    const { handleSubmit, setError, control, formState: { errors, isSubmitting }, } = useForm();


    const onSubmit = handleSubmit(async (data) => {
        try {
            const request = await RegisterService(data);

            if (request.status === 201) {
                toast.success('Conta criada com sucesso, estamos te rendirecionando para outra página!', { duration: 10000 })
                localStorage.setItem('accessToken', request.data.accessToken);
                localStorage.setItem('refreshToken', request.data.refreshToken);
                await push('/dashboard/main');
                return;
            }

            if (request.data.error.name === "UsernameAlreadyRegisteredError") {
                setError('username', { type: 'value', message: 'Já existe outro usuário cadastrado utilizando este mesmo nome de usuário!' })
                return;
            }

            if (request.data.error.name === "EmailAlreadyRegisteredError") {
                setError('email', { type: 'value', message: 'Já existe outro usuário cadastrado utilizando este mesmo e-mail!' })
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
        <RegisterLayout onSubmit={onSubmit} control={control} errors={errors} isSubmitting={isSubmitting} />
    )
};
