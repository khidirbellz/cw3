<template>
    <ListView for="lesson in lessons" @itemTap="onItemTap"
        style="color:white; height:100%">
        <v-template>
            <DockLayout height="500" stretchLastChild="false">
                <Image dock="top" height="100"
                    :src="`${lesson.img}`"
                    height="40%" width="100%" />
                <Label :text="`spaces: ${lesson.spaces}`" dock="bottom"
                    width="100%" />
                <Label :text="`price: #${lesson.price}`" dock="bottom"
                    width="100%" />
                <Label :text="lesson.subject" dock="bottom" />
                <Label :text="lesson.location" dock="bottom" />
            </DockLayout>
        </v-template>
    </ListView>
</template>

<script>
    export default {
        // name: "app"
        props: ["lessons"],
        data() {
            return {};
        },
        methods: {
            onItemTap(event) {
                this.$emit("addCourse", event.item);
            }
        }
    };
</script>

<style>
</style>