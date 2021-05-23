<template>
  <div>
    <div v-if="error.statusCode === 404" class="pageWrapper">
        <h1>Page Not Found</h1>
    </div>
    <div v-else class="pageWrapper">
        <h1>An error occurred</h1>
        <p>{{error}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog'
}
</script>

<style scoped>
.pageWrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px 100px;
  box-sizing: border-box;
}
.image404 {
  width: 100%;
  max-width: 300px;
}
.pageWrapper h1 {
  margin: 30px 0 0;
  padding: 0;
  text-align: center;
  color: #FFF;
}
.dm .pageWrapper h1 {
  color: #FFF;
}
</style>