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
                                        v-model.trim="$v.email.$model" :class="{
                                            'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid }">
                                        <div class="valid-feedback">Email is valid!</div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.email.required">Email is required.</span>
                                        </div>
                                </div>
                                <div class="form-group">
                                    <label for="input-password-login">Password</label>
                                    <input type="password" @keyup.enter="login" class="form-control" id="input-password-login" placeholder="Password"
                                        v-model.trim="$v.password.$model" :class="{
                                            'is-invalid':$v.password.$error, 'is-valid':!$v.password.$invalid }">
                                        <div class="valid-feedback">Password is valid!</div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.password.required">Password is required.  </span>
                                            <span v-if="!$v.password.minLength">Password must have at least {{
                                                $v.password.$params.minLength.min}} letters.  </span>
                                            <span v-if="!$v.password.check">Password is invalid. (E.g Aa@123456)  </span>
                                            <span v-if="!$v.password.maxLength">Password must have most {{
                                                $v.password.$params.maxLength.max}} letters.  </span>
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
                                        v-model.trim="$v.name.$model" :class="{
                                            'is-invalid':$v.name.$error, 'is-valid':!$v.name.$invalid }">
                                        <div class="valid-feedback">Your name is valid!</div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.name.required">Name is required.</span>
                                            <span v-if="!$v.name.minLength">Name must have at least {{
                                                $v.name.$params.minLength.min}} letters.</span>
                                            <span v-if="!$v.name.check">Name is invalid.</span>
                                            <span v-if="!$v.name.maxLength">Name must have most {{
                                                $v.name.$params.maxLength.max}} letters.</span>
                                        </div>
                                </div>
                                <div class="form-group">
                                    <label for="input-email-register">Email address</label>
                                    <input type="email" class="form-control" id="input-email-register" aria-describedby="emailHelp" placeholder="Enter email"
                                        v-model.trim="$v.email.$model" :class="{
                                            'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid }">
                                        <div class="valid-feedback">Email is valid!</div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.email.required">Email is required.</span>
                                        </div>
                                </div>
                                <div class="form-group">
                                    <label for="input-password-register">Password</label>
                                    <input type="password" class="form-control" id="input-password-register" placeholder="Password"
                                        v-model.trim="$v.password.$model" :class="{
                                            'is-invalid':$v.password.$error, 'is-valid':!$v.password.$invalid }">
                                        <div class="valid-feedback">Password is valid!</div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.password.required">Password is required.  </span>
                                            <span v-if="!$v.password.minLength">Password must have at least {{
                                                $v.password.$params.minLength.min}} letters.  </span>
                                            <span v-if="!$v.password.check">Password is invalid. (E.g Aa@123456)  </span>
                                            <span v-if="!$v.password.maxLength">Password must have most {{
                                                $v.password.$params.maxLength.max}} letters.  </span>
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
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="input-male-register" name="customRadio" class="custom-control-input">
                                            <label class="custom-control-label" for="input-male-register">Male</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="input-female-register" name="customRadio" class="custom-control-input">
                                            <label class="custom-control-label" for="input-female-register">Female</label>
                                        </div>
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

    export default {
        name: "Login",
        props: {
            msg: String
        },
        data() {
            return {
                name: null,
                email: null,
                password: null,
                phone: null,
                genderMale: null,
                genderFemale: null,
            }
        },
        validations: {
            name: {
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
        methods: {
            login() {

            },
            register() {

            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .radio-check {
        padding-left: 15px;
        padding-right: 15px;
    }
</style>
