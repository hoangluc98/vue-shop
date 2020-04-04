<template>
    <div class="loginadmin">
        <div class="container">
            <div class="row d-flex justify-content-center rounded-lg" style="margin-top: 50px;">
                <div class="col-md-4 shadow-lg p-4 mb-4 bg-white">
                <h2 class="text-center">Login Admin</h2>
                <div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="text" v-model="username" class="form-control" id="email" placeholder="Enter email" name="email">
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" v-model="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                    </div>
                    <div class="form-group form-check ">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" name="remember"> Remember me
                        </label>
                    </div>
                    <button @click="login" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import AuthService from "../services/auth.service";

    export default {
        name: "loginadmin",
        data() {
            return {
                username: null,
                password: null,
            }
        },
        methods: {
            async login() {
                // let res = await AuthService.postLogin(this.username, this.password);
                // console.log(res);
                // this.$router.replace('admin');
            }
        }
    };
</script>
