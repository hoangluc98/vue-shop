<template>
    <div class="loginadmin">
        <div class="container">
            <div class="row d-flex justify-content-center rounded-lg" style="margin-top: 50px;">
                <div class="col-md-4 shadow-lg p-4 mb-4 bg-white">
                <h2 class="text-center">Login Admin</h2>
                <div>
                    <div class="form-group">
                        <label for="input-email-login">Email address</label>
                        <input type="email" class="form-control" id="input-email-login" aria-describedby="emailHelp" placeholder="Enter email"
                            v-model.trim="$v.email.$model" :class="{
                                'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid }">
                            <div class="invalid-feedback">
                                <span v-if="!$v.email.required">Email is required.</span>
                            </div>
                    </div>
                    <div class="form-group">
                        <label for="input-password-login">Password</label>
                        <input type="password" @keyup.enter="login" class="form-control" id="input-password-login" placeholder="Password"
                            v-model.trim="$v.password.$model" :class="{
                                'is-invalid':$v.password.$error, 'is-valid':!$v.password.$invalid }">
                            <div class="invalid-feedback">
                                <span v-if="!$v.password.required">Password is required.  </span>
                                <span v-if="!$v.password.minLength">Password must have at least {{
                                    $v.password.$params.minLength.min}} letters.  </span>
                                <span v-if="!$v.password.check">Password is invalid. (E.g Aa@123456)  </span>
                                <span v-if="!$v.password.maxLength">Password must have most {{
                                    $v.password.$params.maxLength.max}} letters.  </span>
                            </div>
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
    import { Vuelidate } from "vuelidate";
    import { required, minLength, maxLength, between, email } from "vuelidate/lib/validators";
    import { authService } from "./../services/index";

    export default {
        name: "loginadmin",
        data() {
            return {
                email: null,
                password: null,
            }
        },
        methods: {
            async login() {
                if (!this.email || !this.password) {
                    return Swal.fire({
                        icon: 'error',
                        text: 'You must enter full information!',
                    })
                }

                try {
                    await authService.postLogin(
                        this.email,
                        this.password,
                        "admin"
                    );
                } catch (error) {
                    return this.$alertify.warning('Login failed.');
                }
                let currentUser = await authService.getCurrentUser();
                await this.$store.dispatch('setCurrentUser', currentUser);

                await this.$router.replace('admin');
                this.$alertify.success('Login success.');
            },
        },

        validations: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(8),
                maxLength: maxLength(20),
                check (value) {
                    if (value === '') return true;

                    const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;

                    return new Promise((resolve) => {
                        resolve(password_regex.test(value));
                    });
                }
            }
        },
    };
</script>
