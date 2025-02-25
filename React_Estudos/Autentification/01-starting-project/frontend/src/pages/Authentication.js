import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;
export async function action({ request }) {
  const params = new URL(request.url).searchParams;
  const mode = params.get('mode') || 'login';

  const data = await request.formData();
  const autData = {
    email: data.get('email'),
    password: data.get('password'),
  }
}