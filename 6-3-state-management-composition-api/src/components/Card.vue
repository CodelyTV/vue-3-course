<template>
  <article class="card">
    <slot />
  </article>
</template>

<style scoped>
.card {
  max-width: 50rem;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.4);
  color: #333;
  font-size: 1.2rem;
}
:slotted(a) {
  color: #333;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 2px solid #10fb7a;
  transition: all 0.2s;
}
:slotted(a:hover),
:slotted(a:focus) {
  background: #10fb7a;
  outline: none;
}
</style>
