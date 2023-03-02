<template>
  <div>
    <h2>About</h2>
    <h3>Data for specific currency</h3>
    <p>{{ dataForCurrency }}</p>
    <br>
<hr/>

<br>
    <h3>Data for all currencies</h3>

    <div>{{ data.message }}</div>
    <br>
<hr/>

    <div>{{ data.messageForCurrency }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("api/ninja?name=vlado", {
  method: "post",
  body: { age: 30 },
});

const { data: dataForCurrency } = await useFetch("api/currency/GBP");

</script>

<style scoped></style>
