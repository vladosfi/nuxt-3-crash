<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa non beatae rem, tempore, ut, libero corporis quidem aspernatur odio velit nesciunt ipsa ea
      maiores id harum voluptatibus ab eum! Suscipit?
    </p>

    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("api/ninja?name=vlado", {
  method: "post",
  body: { age: 30 },
});
</script>

<style scoped></style>
