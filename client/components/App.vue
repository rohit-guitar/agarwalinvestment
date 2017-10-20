<template>
    <div id="app">
        <v-app light>
            <v-toolbar class="white">
                <v-toolbar-title v-text="title"></v-toolbar-title>
            </v-toolbar>
            <main>            
                <router-view></router-view>
            </main>
        </v-app>
    </div>
</template>

<<script>

export default {
    data: {
        title: "Agarwal Investment Consultant"
    }
}

</script>

<style></style>