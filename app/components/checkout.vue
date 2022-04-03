<template>
    <StackLayout>
        <Label class="h1 text-center" text="Cart"
            style="color:white" />
        <Label class="h5 text-center" text="tap to remove from cart"
            style="color:white" />
        <ListView for="lesson in cart" @itemTap="onItemTap"
            style="color:white; height:70%">
            <v-template>
                <StackLayout>
                    <Label :text="`Subject: ${lesson.subject}`" />
                    <Label :text="`price: ${lesson.price}`" />
                    <Label :text="`spaces: ${lesson.spaces}`" />
                </StackLayout>
            </v-template>
        </ListView>
        <TextField style="color:white;" hint=" name"
            v-model="person.name" />
        <TextField style="color:white;" hint=" phone number"
            v-model="person.phone" />
        <Button @tap="checkoutOrder" text="Submit" />
    </StackLayout>
</template>

<script>
    export default {
        props: {
            cart: {
                type: Array
            },
            lessons: {
                type: Array
            }
        },
        data() {
            return {
                person: {
                    name: "",
                    phone: ""
                }
            };
        },

        methods: {
            onItemTap(event) {
                this.$emit("removeCourse", event.item);
            },
            checkoutOrder() {
                    fetch("https://kidocw2.herokuapp.com/orders", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            mode: "cors",
                            cache: "no-store",
                            body: JSON.stringify(this.person)
                        })
                        .then(response => response.json())
                        .then(responseJSON => {})
                        .catch(error => {
                            console.log(error);
                        });
                    alert("checkout complete");
                    //clear cart
                    this.cart.length = 0;
                }
        }
    };
</script>
<style>
</style>