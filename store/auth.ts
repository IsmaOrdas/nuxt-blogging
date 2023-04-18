export const useAuthStore = defineStore('auth', () => {
    const isLoggedIn = ref(false);
    const userLogged = ref({});

    function setLoggedIn(status: boolean) {
        isLoggedIn.value = status;
    }

    function setUser (val) {
        userLogged.value = val;
    }

    return { isLoggedIn, userLogged, setLoggedIn, setUser }
})