<template>
    <header class="app-header">
        <div class="flex justify-between">
            <div>
                logo test
            </div>
            <div>
                <NuxtLink to="/signin">Sign in</NuxtLink>
                <NuxtLink to="/profile">Profile</NuxtLink>
            </div>
        </div>
    </header>
</template>

<style scoped>
.app-header {
    height: var(--header-height);
    padding: .5rem 1rem;
}
</style>