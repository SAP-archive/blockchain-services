<template>
    <div>
        <v-row>
            <v-col>
                <v-text-field
                        v-model="input"
                        :label="headline"
                        outlined
                        append-outer-icon="mdi-magnify"
                        @click:append-outer="$emit('search', input)"
                        @click:append="$emit('search', input)"
                >
                </v-text-field>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "SearchBar",
        props: ["headline"],
        data: () => {
            return {
                input: ""
            }
        }
    }
</script>

<style scoped>

</style>
