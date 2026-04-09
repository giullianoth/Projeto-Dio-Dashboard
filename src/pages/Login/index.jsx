import { MdEmail, MdLock } from "react-icons/md"
import Header from "../../components/Header"
import Input from "../../components/Input"
import { Container } from "../../styles/container"
import { Section } from "../../styles/section"
import { AuthForm, AuthFormText, AuthFormTitle, AuthFormWrapper, AuthLinks, AuthTitle, AuthWrapper, Forgot, Redirect } from "./styles"
import { PrimaryButton } from "../../styles/button"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    email: yup.string().email("E-mail não é válido").required("E-mail é obrigatório"),
    password: yup.string().min(3, "No mínimo 3 caracteres").required("Senha é obrigatória")
}).required()

const Login = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    })

    const onSubmit = data => {
        console.log(data, isValid)
        navigate("/feed")
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

                                <AuthForm onSubmit={handleSubmit(onSubmit)}>
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