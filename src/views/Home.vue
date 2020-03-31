<template>
    <div class="home">
        <Navbar></Navbar>
        <Hero/>
        <Products/>
        <Footer></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Hero from "@/components/Hero.vue";
    import Products from "@/sections/Products.vue";

    export default {
        name: "home",
        components: {
            Hero, Products
        }
    };
</script>
