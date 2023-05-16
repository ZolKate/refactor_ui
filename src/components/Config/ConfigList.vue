<template>
    <Loading v-if="loading" text="Загрузка настроек..."/>
    <v-container v-else>
        <Toast 
            v-for="notify in notifies"
            :key="notify.id" 
            :item="notify"
        />
        <v-card>
            <v-card-text>
                <v-form ref="form" @submit.prevent="onSubmit">
                    <h2>Настройки RK7</h2>
                    <InputConfig :title="'rk7'" :data = "config.rk7" :isActive = "!isActive" @input="onChange"/>
                    <h2>Настройки сервера</h2>
                    <InputConfig :title="'server'" :data = "config.server" :isActive = "!isActive" @input="onChange"/>
                    <h2>Настройки логирования</h2>
                    <InputConfig :title="'log'" :data = "config.log" :isActive = "!isActive" @input="onChange"/>
                    <v-btn type="submit" v-if="isActive">
                        Сохранить
                    </v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import InputConfig from './InputConfig.vue';
import Loading from '../../views/Loading.vue';
import Toast from '../UI/Toast.vue';

export default {
    data: () => ({
        loading: true
    }),
    computed: mapGetters({ config: "getConfig",  notifies: "getNotifies" ,  isActive: "getFeatureTwo"}),
    methods: {
        ...mapActions(["fetchConfig", "changeConfig","showToast"]),
        ...mapMutations(["updateRk7","updateLog", "updateServer"]),

        onChange(obj){
            switch(obj[0]){
                case 'rk7':
                    this.updateRk7(obj[1]);
                    break

                case 'log':
                    this.updateLog(obj[1]);
                    break

                case 'server':
                    this.updateServer(obj[1]);
                    break
            }    
        },
        
        onSubmit(){
            this.changeConfig();
            this.showToast(
                {
                    message: "Успешно сохранены новые настройки",
                    color: "primary",
                    timeout: 3000
                }
            )
            this.showToast(
                {
                    message: "Конфигурация будет обновлена после перезагрузки сервера",
                    color: "primary",
                    timeout: 3000
                }
            ) 
        }
    },
    async mounted() {
        await this.fetchConfig();
        this.loading = false;
    },
    components: { InputConfig, Loading, Toast }
}
</script>