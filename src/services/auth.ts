export function setAuthData(authData: any) {
    localStorage.setItem('authData', JSON.stringify(authData));
}

export function Login(authData: any, redirect = true) {
    setAuthData(authData);
    redirect ? window.location.href = '/dashboard' : window.location.reload();
}

export function Logout() {
    localStorage.removeItem('authData');
    window.location.href = '/login';
}

export function getAuthData() {
    const localStorageData = localStorage.getItem('authData');
    const userData = JSON.parse(localStorageData ? localStorageData : '{}');

    return userData;
}