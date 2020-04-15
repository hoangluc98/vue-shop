<template>
    <div class="login">
        <!-- Modal -->
        <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Signup</a>
                            </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">

                                <h5 class="text-center">Login Please</h5>
                                <div class="form-group">
                                    <label for="input-email-login">Email address</label>
                                    <input type="email" class="form-control" id="input-email-login" aria-describedby="emailHelp" placeholder="Enter email"
                                        v-model.trim="$v.emailLogin.$model" :class="{
                                            'is-invalid':$v.emailLogin.$error, 'is-valid':!$v.emailLogin.$invalid }">
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.emailLogin.required">Email is required.</span>
                                        </div>
                                </div>
                                <div class="form-group">
                                    <label for="input-password-login">Password</label>
                                    <input type="password" @keyup.enter="login" class="form-control" id="input-password-login" placeholder="Password"
                                        v-model.trim="$v.passwordLogin.$model" :class="{
                                            'is-invalid':$v.passwordLogin.$error, 'is-valid':!$v.passwordLogin.$invalid }">
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.passwordLogin.required">Password is required.  </span>
                                            <span v-if="!$v.passwordLogin.minLength">Password must have at least {{
                                                $v.passwordLogin.$params.minLength.min}} letters.  </span>
                                            <span v-if="!$v.passwordLogin.check">Password is invalid. (E.g Aa@123456)  </span>
                                            <span v-if="!$v.passwordLogin.maxLength">Password must have most {{
                                                $v.passwordLogin.$params.maxLength.max}} letters.  </span>
                                        </div>
                                </div>

                                <div class="form-group">
                                    <button class="btn btn-primary" @click="login">Login</button>
                                </div>

                            </div>
                            <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                                <h5 class="text-center">Create New Account</h5>
                                <div class="form-group">
                                    <label for="input-name-register">Your name</label>
                                    <input type="text" class="form-control" id="input-name-register" placeholder="Your nice name"
                                        v-model.trim="$v.username.$model" :class="{
                                            'is-invalid':$v.username.$error, 'is-valid':!$v.username.$invalid }">
                                        <div class="valid-feedback">Your username is valid!</div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.username.required">Username is required.</span>
                                            <span v-if="!$v.username.minLength">Username must have at least {{
                                                $v.username.$params.minLength.min}} letters.</span>
                                            <span v-if="!$v.username.check">Username is invalid.</span>
                                            <span v-if="!$v.username.maxLength">Username must have most {{
                                                $v.username.$params.maxLength.max}} letters.</span>
                                        </div>
                                </div>
                                <div class="form-group">
                                    <label for="input-email-register">Email address</label>
                                    <input type="email" class="form-control" id="input-email-register" aria-describedby="emailHelp" placeholder="Enter email"
                                        v-model.trim="$v.emailRegister.$model" :class="{
                                            'is-invalid':$v.emailRegister.$error, 'is-valid':!$v.emailRegister.$invalid }">
                                        <div class="valid-feedback">Email is valid!</div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.emailRegister.required">Email is required.</span>
                                        </div>
                                </div>
                                <div class="form-group">
                                    <label for="input-password-register">Password</label>
                                    <input type="password" class="form-control" id="input-password-register" placeholder="Password"
                                        v-model.trim="$v.passwordRegister.$model" :class="{
                                            'is-invalid':$v.passwordRegister.$error, 'is-valid':!$v.passwordRegister.$invalid }">
                                        <div class="valid-feedback">Password is valid!</div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.passwordRegister.required">Password is required.  </span>
                                            <span v-if="!$v.passwordRegister.minLength">Password must have at least {{
                                                $v.passwordRegister.$params.minLength.min}} letters.  </span>
                                            <span v-if="!$v.passwordRegister.check">Password is invalid. (E.g Aa@123456)  </span>
                                            <span v-if="!$v.passwordRegister.maxLength">Password must have most {{
                                                $v.passwordRegister.$params.maxLength.max}} letters.  </span>
                                        </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="input-phone-register">Phone</label>
                                        <input type="number" class="form-control" id="input-phone-register" placeholder="Your nice phone"
                                            v-model.trim="$v.phone.$model" :class="{
                                                'is-invalid':$v.phone.$error, 'is-valid':!$v.phone.$invalid }">
                                            <div class="valid-feedback">Phone is valid!</div>
                                            <div class="invalid-feedback">
                                                <span v-if="!$v.phone.required">Phone is required.  </span>
                                                <span v-if="!$v.phone.check">Phone is invalid.</span>
                                            </div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        Gender: 
                                        <br>
                                        <label class="radio-inline col-md-3">Nam
                                            <input v-model="gender" id="input-male-register" type="radio" name="gender" value="male" required>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="radio-inline col-md-3">Nữ
                                            <input v-model="gender" id="input-fmale-register" type="radio" name="gender" value="female" required>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <button class="btn btn-primary" @click="register">Signup</button>
                                </div>
                            </div>
                        </div>
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
        name: "Login",
        props: {
            msg: String
        },
        data() {
            return {
                username: null,
                emailLogin: null,
                passwordLogin: null,
                emailRegister: null,
                passwordRegister: null,
                phone: null,
                gender: null,
                currentUser: null
            }
        },
        methods: {
            async login() {
                if (!this.emailLogin || !this.passwordLogin) {
                    return Swal.fire({
                        icon: 'error',
                        text: 'You must enter full information!',
                    })
                }

                try {
                    let res = await authService.postLogin(
                        this.emailLogin,
                        this.passwordLogin,
                        "user"
                    );
                } catch (error) {
                    return this.$alertify.warning('Login failed.');
                }
                $('#login').modal('hide');
                // this.$router.replace({ path: `/${res.data.accessToken}` });
            },

            async register() {
                if (    !this.username          || !this.emailRegister
                    ||  !this.passwordRegister  || !this.phone
                    ||  !this.gender
                ) {
                    Swal.fire({
                        icon: 'error',
                        text: 'You must enter full information!',
                    })
                }

                try {
                    await authService.postRegister({
                        username: this.username,
                        email: this.emailRegister,
                        password: this.passwordRegister,
                        phone: this.phone,
                        gender: this.gender
                    });
                } catch (error) {
                    $('#login').modal('hide');
                    this.$alertify.warning('Register failed.');
                    return;
                }
                $('#login').modal('hide');
                this.$alertify.success('Register success.');
            }
        },


        validations: {
            username: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(20),
                check (value) {
                    if (value === '') return true;

                    const name_regex = /^[\s0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;

                    return new Promise((resolve) => {
                        resolve(name_regex.test(value));
                    });
                }
            },
            emailLogin: {
                required,
                email
            },
            passwordLogin: {
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
            },
            emailLogin: {
                required,
                email
            },
            passwordLogin: {
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
            },
            emailRegister: {
                required,
                email
            },
            passwordRegister: {
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
            },
            phone: {
                required,
                check (value) {
                    if (value === '') return true;

                    const phone_regex = /^(0)[0-9]{9,10}$/;

                    return new Promise((resolve) => {
                        resolve(phone_regex.test(value));
                    });
                }
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .radio-check {
        padding-left: 15px;
        padding-right: 15px;
    }
</style>
