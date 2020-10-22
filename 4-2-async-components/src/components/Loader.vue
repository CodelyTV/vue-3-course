<template>
  <div class="ripple">
    <span class="ripple__label">Cargando…</span>
  </div>
</template>

<style scoped>
.ripple {
  display: inline-block;
  position: relative;
  width: 5rem;
}
.ripple__label {
  opacity: 0;
  position: absolute;
}
.ripple:before,
.ripple:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.25rem solid #999;
  opacity: 1;
  border-radius: 50%;
  animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.ripple:after {
  animation-delay: -0.5s;
}

@keyframes ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 4.5rem;
    height: 4.5rem;
    opacity: 0;
  }
}
</style>
