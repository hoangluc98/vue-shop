<template>
    <div class="admin">
        <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
            <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="javascript:void(0)">
                <i class="fas fa-bars"></i>
            </a>
            <nav id="sidebar" class="sidebar-wrapper">
                <div class="sidebar-content">
                    <!-- sidebar-brand  -->
                    <div class="sidebar-item sidebar-brand">
                        <a href="javascript:void(0)">Vue Shop</a>
                        <div id="close-sidebar" @click="closeMenu">
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                    <!-- sidebar-header  -->
                    <div class="sidebar-item sidebar-header">
                        <div class="user-pic">
                            <img class="img-responsive img-rounded" src="/img/user.png" alt="User picture">
                        </div>
                        <div class="user-info">
                            <span class="user-name">{{ currentUser.username }}</span>
                            <span class="user-role">{{ currentUser.role }}</span>
                            <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                            </span>
                        </div>
                    </div>
                    <!-- sidebar-search  -->
                    <div class="sidebar-item sidebar-search">
                        <div>
                            <div class="input-group">
                                <input type="text" class="form-control search-menu" placeholder="Search...">
                                <div class="input-group-append">
                                    <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- sidebar-menu  -->
                    <div class="sidebar-item sidebar-menu">
                        <ul>
                            <li class="header-menu">
                                <span>Menu</span>
                            </li>

                            <li class="sidebar-item-left">
                                <router-link to="/admin/overview">
                                    <i class="fa fa-chart-line"></i>
                                    <span>Overview</span>
                                </router-link>
                            </li>
                            <li class="sidebar-item-left">
                                <router-link to="/admin/users">
                                    <i class="fa fa-user"></i>
                                    <span>Users</span>
                                </router-link>
                            </li>
                            <li class="sidebar-item-left">
                                <router-link to="/admin/products">
                                    <i class="fab fa-amazon"></i>
                                    <span>Products</span>
                                </router-link>
                            </li>
                            <li class="sidebar-item-left">
                                <router-link to="/admin/orders">
                                    <i class="fa fa-shopping-cart"></i>
                                    <span>Orders</span>
                                </router-link>
                            </li>

                            <li class="sidebar-item-left">
                                <a href="javascript:void(0)" @click="logout">
                                    <i class="fa fa-power-off"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- sidebar-menu  -->
                </div>

            </nav>
            <!-- sidebar-content  -->
            <main class="page-content mt-0 pt-0">
                <router-view/>
            </main>
            <!-- page-content" -->
        </div>
        <!-- page-wrapper -->

    </div>
</template>

<script>
    // @ is an alias to /src
    import AuthService from "./../services/auth.service";
    import { mapState } from 'vuex';

    export default {
        name: "admin",
        mounted(){
            this.$store.dispatch('loadCurrentUser');
        },
        computed: {
            ...mapState(['currentUser'])
        },
        data() {
            return {
                
            }
        },
        methods: {
            closeMenu() {
                $(".page-wrapper").toggleClass("toggled");
            },
            async logout() {
                await this.$store.dispatch("removeCurrentUser");
                await this.$router.replace('login-admin');
            }
        }
    };
</script>

<style>
    .sidebar-item-left {
        float: left;
    }
</style>
