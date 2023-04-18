import { useAuthStore } from "@/store/auth";

export default defineNuxtPlugin(nuxtApp => {
    const user = useSupabaseUser()
    const store = useAuthStore();    

    if (user.value) {
        store.setLoggedIn(true);
        store.setUser(user.value);
    } else {
        store.setLoggedIn(false);
        store.setUser({});
    }
  })