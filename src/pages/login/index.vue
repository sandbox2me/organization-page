<template>
    <div>
        <v-layout>
            <v-flex xs12>
                <v-alert
                    :value="loginError"
                    color="error"
                    icon="check_circle"
                    transition="scale-transition"
                    >
                    Неверный логин или пароль
                </v-alert>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12 sm4 offset-sm4>
                <v-card  class="form">
                    <v-layout>
                        <v-flex xs10 offset-xs1>
                            <v-form v-model="valid" ref="form">
                                <v-text-field
                                    label="Имя пользователя "
                                    v-model="login"
                                    :rules="loginRules"
                                    required
                                ></v-text-field>
                                <v-text-field
                                    label="Пароль "
                                    v-model="password"
                                    :rules="passwordRules"
                                    :append-icon="hidePassword ? 'visibility' : 'visibility_off'"
                                    :append-icon-cb="() => (hidePassword =! hidePassword)"
                                    :type="hidePassword ? 'password' : 'text'"
                                    required
                                ></v-text-field>
                                <div class="text-xs-center">
                                    <v-btn color="success" @click.native="submit()" :disabled="! valid">
                                        Войти
                                    </v-btn>
                                </div>
                            </v-form>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'organizationInfo'
            ])
        },
        data() {
            return {
                valid: false,
                hidePassword: true,
                loginError: false,
                login: '',
                password: '',
                passwordRules: [
                    (v) => !!v || 'Это обязательное поле',
                    (v) => v && v.length >= 5 || 'Пароль введено неверно'
                ],
                loginRules: [
                    (v) => !!v || 'Это обязательное поле',
                    (v) => v && v.length >= 5 || 'Имя пользователя введено неверно'
                ]
            }
        },
        methods: {
            submit() {
                this.$http.get('login').then(response => {
                    if (response.data.result) {
                        this.redirect();
                    } else {
                        this.showErrorMessage();
                    }
                });
            },
            showErrorMessage() {
                this.login = '';
                this.password = '';
                this.loginError = true;
                
                setTimeout(() => {
                    this.loginError = false;
                }, 5000);
            },
            redirect() {
                location.href = this.organizationInfo.app.lkHref;
            }
        }
    } 
</script>

<style lang="stylus" scoped>
    .form {
        margin-top 50px;
        margin-bottom 50px;
        padding-top 20px;
        padding-bottom 20px;  
    }
</style>
