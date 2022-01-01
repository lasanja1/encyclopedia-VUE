<template>
    <footer>Copyright © 2021 - {{currentYear()}} <a href="https://twitter.com/lasanja_" target="_blank">Lasanja</a>. All Rights Reserved</footer>
</template>
<script>
export default {
    name: 'Footer',
    methods: {
        currentYear: function() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
footer {
    background: #bebebe;
    color: white;
    padding: 1rem;
}
footer a {
    color: white;
}
</style>