<template>
    <h1 class="text-xl">Sign in</h1>
    <section class="sign-in">
        <form @submit.prevent class="sign-in__form">
            <div class="form-item">
                <label class="label">
                    <span>Email</span>
                    <input v-model="form.email" class="input" type="text" />
                </label>
            </div>
            <div class="form-item">
                <label class="label">
                    <span>Password</span>
                    <input v-model="form.password" class="input" type="password" />
                </label>
            </div>
            <div v-if="signinError">
                <p class="label--error">{{ signinError }}</p>
            </div>
            <div class="form-item">
                <button @click="handleLogin" class="btn">Sign in</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient();

const form = ref({
    email: "",
    password: ""
})
const signinError = ref(null);

const handleLogin = async () => {
    const { data, pending, error } = await useAsyncData("login", () => supabase.auth.signInWithPassword({ email: form.value.email, password: form.value.password }));
    
    if (error.value || data.value.error) {
        signinError.value = data.value?.error?.message;    
        console.error(signinError.value);
    }
}

definePageMeta({
  middleware: 'auth'
})
</script>

<style scoped lang="scss">
.sign-in {

    &__form {
        max-width: 400px;
    }
}
</style>