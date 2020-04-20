<template>
    <div class="users">
        <div class="container mt-0 pt-0">

            <div class="intro">
                <div class="row">
                    <h3>Users Page</h3>
                </div>
            </div>

            <hr>

            <div>
                <h3 class="d-inline-block float-left">Users list</h3>
                <button @click="addNew" class="btn btn-primary float-right">Add User</button>
                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Avatar</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in users">
                                <td>1</td>
                                <td>{{ user.username }}</td>
                                <td>{{ user.email }}</td>
                                <td>
                                    <img :src="user.avatar" style="width: 100px; height: 100px;" class="avatar rounded-circle z-depth-2" alt="avatar">
                                </td>
                                <td>{{ user.phone }}</td>
                                <td>{{ user.gender }}</td>
                                <td>{{ user.role }}</td>
                                <td class="row">
                                    <a class="action text-success" @click="editUser(user, index)" href="javascript:void(0)"><i class="fas fa-pen"></i>Update</a>
                                    <a class="action text-danger" @click="deleteUser(user, index)" href="javascript:void(0)"><i class="fas fa-trash-alt"></i>Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="modal-user" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog" style="max-width: 65%;" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editLabel" v-if="modal == 'edit'">Edit User</h5>
                        <h5 class="modal-title" id="createLabel" v-if="modal == 'new'">Create User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div id="seting-profile" class="tab-pane in active">
                            <form>
                                <div class="form-row">
                                    <!-- left column -->
                                    <div class="col-md-3">
                                        <div class="text-center" id="div-update-avatar">
                                            <div id="image-edit-profile">
                                                <img :src="avatar" id="user-modal-avatar" ref="imgInput" class="avatar rounded-circle z-depth-2" alt="avatar">
                                            </div>
                                            <h6>Upload new your image...</h6>
                                            <button type="button" class="btn btn-primary" @click="onPickFile">Upload image</button>
                                            <input type="file" ref="fileInput" @change="onFileSelected" class="form-control" style="display: none;" id="input-change-avatar" name="avatar"><br>
                                            <div id="show-button-update-avatar"></div>
                                        </div>
                                    </div>
                                    <!-- edit form column -->
                                    <div class="col-md-9 personal-info">
                                        <div class="form-group row">
                                            <label class="col-md-3 control-label text-label">Email:</label>
                                            <div class="col-md-8">
                                                <input id="input-change-email" class="form-control" type="email" name="username" 
                                                    v-model.trim="$v.userModal.email.$model" :class="{
                                                        'is-invalid':$v.userModal.email.$error, 'is-valid':!$v.userModal.email.$invalid }">
                                                    <div class="valid-feedback">Email is valid!</div>
                                                    <div class="invalid-feedback">
                                                        <span v-if="!$v.userModal.email.required">Email is required.</span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-md-3 control-label text-label">Password:</label>
                                            <div class="col-md-8">
                                                <input id="input-change-password" class="form-control" type="password" name="username" 
                                                    v-model.trim="$v.userModal.password.$model" :class="{
                                                        'is-invalid':$v.userModal.password.$error, 'is-valid':!$v.userModal.password.$invalid }">
                                                    <div class="valid-feedback">Password is valid!</div>
                                                    <div class="invalid-feedback">
                                                        <span v-if="!$v.userModal.password.required">Password is required.  </span>
                                                        <span v-if="!$v.userModal.password.minLength">Password must have at least {{
                                                            $v.userModal.password.$params.minLength.min}} letters.  </span>
                                                        <span v-if="!$v.userModal.password.check">Password is invalid. (E.g Aa@123456)  </span>
                                                        <span v-if="!$v.userModal.password.maxLength">Password must have most {{
                                                            $v.userModal.password.$params.maxLength.max}} letters.  </span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-md-3 control-label text-label">Username:</label>
                                            <div class="col-md-8">
                                                <input id="input-change-username" class="form-control" type="text" name="username"
                                                    v-model.trim="$v.userModal.username.$model" :class="{
                                                        'is-invalid':$v.userModal.username.$error, 'is-valid':!$v.userModal.username.$invalid }">
                                                    <div class="valid-feedback">Your username is valid!</div>
                                                    <div class="invalid-feedback">
                                                        <span v-if="!$v.userModal.username.required">Username is required.</span>
                                                        <span v-if="!$v.userModal.username.minLength">Username must have at least {{
                                                            $v.userModal.username.$params.minLength.min}} letters.</span>
                                                        <span v-if="!$v.userModal.username.check">Username is invalid.</span>
                                                        <span v-if="!$v.userModal.username.maxLength">Username must have most {{
                                                            $v.userModal.username.$params.maxLength.max}} letters.</span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 control-label text-label">Gender:</label>
                                            <div class="col-lg-8">
                                                <label class="radio-inline col-lg-2">Male
                                                    <input id="input-change-gender-male" v-model="userModal.gender" value="male" type="radio" name="gender" required>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="radio-inline col-lg-2">Female
                                                    <input id="input-change-gender-fmale" v-model="userModal.gender" value="female" type="radio" name="gender" required>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 control-label text-label">Role:</label>
                                            <div class="col-lg-8">
                                                <select class="custom-select form-control" id="input-change-address" v-model="userModal.role">
                                                    <option value="user">User</option>
                                                    <option value="admin">Admin</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 control-label text-label">Phone:</label>
                                            <div class="col-lg-8">
                                                <input id="input-change-phone" class="form-control" type="text" name="phone" 
                                                    v-model.trim="$v.userModal.phone.$model" :class="{
                                                        'is-invalid':$v.userModal.phone.$error, 'is-valid':!$v.userModal.phone.$invalid }">
                                                    <div class="valid-feedback">Phone is valid!</div>
                                                    <div class="invalid-feedback">
                                                        <span v-if="!$v.userModal.phone.required">Phone is required.  </span>
                                                        <span v-if="!$v.userModal.phone.check">Phone is invalid.</span>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" @click="editUserInfo" class="btn btn-primary" v-if="modal == 'edit'">Edit User</button>
                        <button type="button" @click="uploadUserInfo" class="btn btn-primary" v-if="modal == 'new'">Create User</button>
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
    import { userService } from "./../services/index";

    export default {
        name: "users",
        data() {
            return {
                users: [],
                user: {},
                userModal: {},
                avatar: null,
                modal: null,
                selectedFile: null
            }
        },
        created: async function () {
            try {
                let res = await userService.getUsers();
                this.users = res.data.users;
            } catch (error) {
                await this.$store.dispatch("removeCurrentUser");
                await this.$router.replace('/login-admin');
            }
        },
        methods: {
            addNew() {
                this.userModal = {
                    username: '',
                    email: '',
                    password: '',
                    phone: ''
                };
                this.avatar = '/img/user.png';
                this.modal = 'new';
                $('#input-change-email').prop('readonly', false);
                $('#modal-user').modal('show');
            },
            editUser(doc, index) {
                this.userModal = {
                    email: doc.email,
                    username: doc.username,
                    phone: doc.phone,
                    avatar: doc.avatar,
                    role: doc.role
                }

                this.avatar = this.userModal.avatar;
                this.userModal.role == "male" ? $("#input-change-gender-male").prop("checked", true) : $("#input-change-gender-female").prop("checked", true);
                this.modal = 'edit';
                $('#input-change-email').prop('readonly', true);
                $('#modal-user').modal('show');
            },
            editUserInfo(doc) {
                this.modal = 'edit';
                $('#modal-user').modal('show');
            },
            deleteUser(doc, index) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then(async (result) => {
                    if (result.value) {
                        try {
                            await userService.deleteUser(doc.user_id);
                        } catch (error) {
                            return alertify.notify("Delete user failed!", "error", 7);
                        }
                        this.users.splice(index, 1);
                        alertify.success('Delete user success');
                    }
                })
            },
            onPickFile() {
                this.$refs.fileInput.click();
            },
            onFileSelected(event) {
                let fileData = event.target.files[0];
                let math = ["image/png", "image/jpg", "image/jpeg"];
                let limit = 1048576; // byte = 1MB

                if ($.inArray(fileData.type, math) === -1) {
                    alertify.notify("Kiểu file không hợp lệ, chỉ chấp nhận jpg & png.", "error", 7);
                    $("#input-change-avatar").val(null);
                    return false;
                }
                if (fileData.size > limit) {
                    alertify.notify("Ảnh upload tối đa cho phép là 1MB", "error", 7);
                    $("#input-change-avatar").val(null);
                    return false;
                }

                if (typeof (FileReader) != "undefined") {
                    let fileReader = new FileReader();
                    fileReader.addEventListener('load', () => {
                        this.avatar = fileReader.result;
                    });
                    
                    fileReader.readAsDataURL(fileData);

                    this.selectedFile = fileData;
                } else {
                    alertify.notify("Trình duyệt của bạn không hỗ trợ FileReader", "error", 7);
                }
            },
            async uploadUserInfo() {
                if (    !this.user.username  || !this.user.email
                    ||  !this.user.password  || !this.user.phone
                    ||  !this.user.gender    || !this.user.role
                ) {
                    alertify.notify("You must enter full information!", "error", 7);
                    return false;
                }
                
                let formData = new FormData();
                formData.append("avatar", this.selectedFile);
                formData.append("username", this.user.username);
                formData.append("email", this.user.email);
                formData.append("password", this.user.password);
                formData.append("phone", this.user.phone);
                formData.append("gender", this.user.gender);
                formData.append("role", this.user.role);

                try {
                    let res = await userService.uploadUsers(formData);
                    this.users.push(res.data.user);
                } catch (error) {
                    return alertify.notify("Upload user failed!", "error", 7);
                }
                
                $('#modal-user').modal('hide');
                alertify.success('Upload user success');
            }
        },

        validations: {
            userModal: {
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
            }
        },
    };
</script>
