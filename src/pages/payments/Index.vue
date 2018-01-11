<template>
    <v-layout>
        <v-flex xs12 sm4 offset-sm4>
            <v-card  class="form">
                <v-layout>
                    <v-flex xs10 offset-xs1>
                        <v-form v-model="valid" ref="form" lazy-validation>
                            <v-text-field
                                prepend-icon="contact_mail"
                                label="Лицевой счет "
                                append-icon="videocam"
                                v-model="account"
                                :rules="accountRules"
                                :append-icon-cb="() => (getDataFromCam())"
                                required
                            ></v-text-field>
                            <v-dialog
                                v-model="modal"
                                lazy
                                full-width
                                width="290px"
                            >
                                <v-text-field
                                    slot="activator"
                                    label="Период "
                                    v-model="date"
                                    prepend-icon="event"
                                    readonly
                                    required
                                ></v-text-field>
                                <v-date-picker 
                                    type="month" 
                                    v-model="date" 
                                    locale="ru-ru" 
                                    scrollable 
                                    actions
                                >   
                                </v-date-picker>
                            </v-dialog>
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
                account: '',
                valid: false,
                date: null,
                modal: false,
                accountRules: [
                    (v) => !!v || 'Это обязательное поле',
                    (v) => v && v.length === 13 || 'Лицевой счет введено неверно'
                ]
            }
        },
        methods: {
            getDataFromCam() {
                console.log(124);
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
