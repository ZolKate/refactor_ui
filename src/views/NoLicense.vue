<template>
    <v-container fill-height class="align-center">
        <v-card
            class="mx-auto"
            width="500"
            height="250"
            prepend-icon="mdi-home"
        >
            <v-card-title>
                Нет валидной лицензии
            </v-card-title >
        
            <v-card-text class="text-h5 py-2">
                Работоспособность ПО ограничена в виду отсутствия действительной лицензии
            </v-card-text>

            <v-card-actions class="justify-end pr-6">
                Дата окончания: {{ expire_date }}
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default{
    computed: mapGetters({expire_date: "getExpireDate"}),
}
</script>