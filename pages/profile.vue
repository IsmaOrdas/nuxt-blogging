<template>
    profile
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/auth";
const store = useAuthStore();
definePageMeta({
  middleware: 'auth'
})

</script>