export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()
  
    if (!user.value) {
      return navigateTo('/signin');
    }
    if (to.name === "signin") {
      return navigateTo("/profile");
    }
  })
  