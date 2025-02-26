export function getAuthToken() {
    const token = localStorage.getItem('token');
    const tokenDuration = getTokenDuration();
    if (tokenDuration < 0) {
        return 'EXPIRED'
    }
    return token
}

export function checkAuthLoader() {
    const token = getAuthToken();
    if (!token) {
        return redirect('/auth')
    }
    return null;
}

export function getTokenDuration() {
    const storedExpiration = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpiration);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}
