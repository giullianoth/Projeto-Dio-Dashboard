import { MdEmail, MdLock } from "react-icons/md"
import Header from "../../components/Header/index.js"
import Input from "../../components/Input/index.js"
import { Container } from "../../styles/container.js"
import { Section } from "../../styles/section.js"
import { AuthForm, AuthFormText, AuthFormTitle, AuthFormWrapper, AuthLinks, AuthTitle, AuthWrapper, Forgot, Redirect } from "./styles.jsx"
import { PrimaryButton } from "../../styles/button.js"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useAuth } from "../../hooks/auth.js"

type FormData = yup.InferType<typeof schema>

const schema = yup.object({
    email: yup.string().email("E-mail não é válido").required("E-mail é obrigatório"),
    password: yup.string().min(3, "No mínimo 3 caracteres").required("Senha é obrigatória")
}).required()

const Login = () => {
    const { handleLogin } = useAuth()

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: "onChange",
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const handleSignIn = async (formData: FormData) => {
        await handleLogin(formData)
    }

    return (
        <>
            <Header />

            <main>
                <Section>
                    <Container>
                        <AuthWrapper>
                            <AuthTitle>
                                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                            </AuthTitle>

                            <AuthFormWrapper>
                                <AuthFormTitle>
                                    Faça seu cadastro
                                </AuthFormTitle>

                                <AuthFormText>
                                    Faça seu login e make the change._
                                </AuthFormText>

                                <AuthForm onSubmit={handleSubmit(handleSignIn)}>
                                    <Input
                                        control={control}
                                        icon={<MdEmail />}
                                        type="email"
                                        name="email"
                                        placeholder="E-mail"
                                        errorMessage={errors?.email?.message} />

                                    <Input
                                        control={control}
                                        icon={<MdLock />}
                                        type="password"
                                        name="password"
                                        placeholder="Senha"
                                        errorMessage={errors?.password?.message} />

                                    <PrimaryButton type="submit">Entrar</PrimaryButton>
                                </AuthForm>

                                <AuthLinks>
                                    <Forgot href="#">Esqueci minha senha</Forgot>
                                    <Redirect as={Link} to="/cadastrar">Criar conta</Redirect>
                                </AuthLinks>
                            </AuthFormWrapper>
                        </AuthWrapper>
                    </Container>
                </Section>
            </main>
        </>
    )
}

export default Login