<template>
<div id="app">
    <div id=header>
        <router-view name="header"></router-view>
    </div>

    <div id=footer>
        <router-view name="footer"></router-view> 
    </div>
</div>
</template>

<script>
export default {
    name: 'App'
}
</script>