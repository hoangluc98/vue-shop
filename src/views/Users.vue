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
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Doe</td>
                                <td>john@example.com</td>
                                <td>0123456789</td>
                                <td>Male</td>
                                <td>Admin</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: "users",
    };
</script>
