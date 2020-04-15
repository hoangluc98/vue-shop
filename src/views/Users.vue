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
                            <tr v-for="user in users">
                                <td>1</td>
                                <td>{{ user.username }}</td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.avatar }}</td>
                                <td>{{ user.phone }}</td>
                                <td>{{ user.gender }}</td>
                                <td>{{ user.role }}</td>
                                <td class="row">
                                    <a class="action text-success" @click="editUser(user)" href="javascript:void(0)"><i class="fas fa-pen"></i>Update</a>
                                    <a class="action text-danger" @click="deleteUser(user)" href="javascript:void(0)"><i class="fas fa-trash-alt"></i>Delete</a>
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
                                                <img src="/img/user.png" id="user-modal-avatar" class="avatar img-circle" alt="avatar">
                                            </div>
                                            <h6>Upload new your image...</h6>
                                            <input type="file" class="form-control" id="input-change-avatar" name="avatar"><br>
                                            <div id="show-button-update-avatar"></div>
                                        </div>
                                    </div>
                                    <!-- edit form column -->
                                    <div class="col-md-9 personal-info">
                                        <div class="form-group row">
                                            <label class="col-md-3 control-label text-label">Email:</label>
                                            <div class="col-md-8">
                                                <input id="input-change-username" class="form-control" type="email" name="username" >
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-md-3 control-label text-label">Password:</label>
                                            <div class="col-md-8">
                                                <input id="input-change-username" class="form-control" type="password" name="username" >
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-md-3 control-label text-label">Username:</label>
                                            <div class="col-md-8">
                                                <input id="input-change-username" class="form-control" type="text" name="username" >
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 control-label text-label">Gender:</label>
                                            <div class="col-lg-8">
                                                <label class="radio-inline col-lg-2">Male
                                                    <input id="input-change-gender-male" type="radio" name="gender" required>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="radio-inline col-lg-2">Female
                                                    <input id="input-change-gender-fmale" type="radio" name="gender" required>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 control-label text-label">Role:</label>
                                            <div class="col-lg-8">
                                                <input id="input-change-address" class="form-control" type="text" name="address" >
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 control-label text-label">Phone:</label>
                                            <div class="col-lg-8">
                                                <input id="input-change-phone" class="form-control" type="text" name="phone" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button  type="button" class="btn btn-primary" v-if="modal == 'edit'">Edit User</button>
                        <button  type="button" class="btn btn-primary" v-if="modal == 'new'">Create User</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import { userService } from "./../services/index";

    export default {
        name: "users",
        data() {
            return {
                users: [],
                modal: null,
            }
        },
        created: async function () {
            this.users = await userService.getUsers();
        },
        methods: {
            addNew() {
                this.modal = 'new';
                $('#modal-user').modal('show');
            },
            editUser(doc) {
                this.modal = 'edit';
                $('#modal-user').modal('show');
            },
            deleteUser(doc) {
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
                        await userService.deleteUser(doc.user_id);
                        this.users = await userService.getUsers();
                        Toast.fire({
                            type: 'success',
                            title: 'Deleted  successfully'
                        })

                    }
                })
            },

        }
    };
</script>
