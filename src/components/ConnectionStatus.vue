<template>
    <div>
        <v-chip
            color="grey darken-4"
            text-color="white">
            Connected:

            <v-icon right v-if="isConnected" color="success">mdi-check-circle</v-icon>
            <v-icon right v-else color="red">mdi-close-circle</v-icon>
        </v-chip>
    </div>
</template>

<script>
    export default {
        name: "ConnectionStatus",
        data() {
            return {
                isConnected: true,
                connectionText: 'Not Connected'
            }
        }
    }
</script>
