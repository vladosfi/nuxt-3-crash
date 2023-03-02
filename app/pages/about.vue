<template>
  <div>
    <h2>About</h2>
    <p>{{ dataForCurrency }}</p>
<hr>

    <!-- <div>{{ data }}</div> -->
  </div>
</template>

<script setup>
// const { data } = await useFetch("api/ninja?name=vlado", {
//   method: "post",
//   body: { age: 30 },
// });

const { dataForCurrency } = await useFetch("api/currency/GBP");

</script>

<style scoped></style>
