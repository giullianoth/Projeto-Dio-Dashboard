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
import api from "../../services/api"

const schema = yup.object({
    email: yup.string().email("E-mail não é válido").required("E-mail é obrigatório"),
    password: yup.string().min(3, "No mínimo 3 caracteres").required("Senha é obrigatória")
}).required()

const Login = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    })

    const handleSignIn = async formData => {
        try {
            const { data } = await api.get(`users?email=${encodeURIComponent(formData.email)}`)

            if (!data.length) {
                alert("E-mail inválido")
                return
            }

            const [user] = data

            if (formData.password !== user.password) {
                alert("Senha inválida")
                return
            }

            navigate("/feed")
        } catch {
            alert("Houve um erro, tente novamente.")
        }
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