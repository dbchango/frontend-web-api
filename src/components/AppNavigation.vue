<template>

    <v-navigation-drawer  app>
        <v-list>
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">Username</v-list-item-title>
                    <v-list-item-subtitle class="text-h7">Email</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
         
        </v-list>
        <v-divider></v-divider>
        <v-list nav dense>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-folder</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Files</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    
</template>
<script>
export default {
    name: 'AppNavigation'
}
</script>
<style scoped>

</style>