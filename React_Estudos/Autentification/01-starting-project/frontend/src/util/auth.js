export function getAuthToken() {
    const token = localStorage.getItem('token');
    return token
}

export function checkAuthLoader() {
    const token = getAuthToken();
    if (!token) {
        return redirect('/auth')
    }
    return null;
}
