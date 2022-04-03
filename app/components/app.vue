<template>
    <Page style="color:blue;background-color:teal">
        <ActionBar title="CW3 Project" />
        <StackLayout>
            <Label text="Welcome to the Lesson Shop" class="h2 text-center"
                style="color:blue" />
        </StackLayout>
        <TabView>
            <TabViewItem title="Courses" class="h1 text-capitalize">
                <StackLayout>
                    <lessons :lessons="lessons" @addCourse="addToCart" />
                </StackLayout>
            </TabViewItem>
            <TabViewItem title="Checkout" class="h2 text-capitalizae">
                <StackLayout>
                    <checkout :lessons="lessons" :cart="cart"
                        @removeCourse="removeFromCart" />
                </StackLayout>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
    import lessons from "./lessons";
    import checkout from "./checkout";
    export default {
        data() {
            return {
                cart: [],
                lessons: []
            };
        },
        components: {
            lessons,
            checkout
        },
        created: function() {
            fetch("https://kidocw2.herokuapp.com/lessons")
                .then(r => r.json())
                .then(response => {
                    this.lessons = response;
                })
                .catch(e => {});
        },
        methods: {
            addToCart(course) {
                if (course.spaces > 0) {
                    this.cart.push(course);
                    this.total += course.price;
                    course.spaces--;
                }
            },
            removeFromCart(course) {
                let index = this.cart.indexOf(course);
                this.cart.splice(index, 1) 
                course.spaces++;
                this.total = this.total - course.price
            }
        }
    };
</script>

<style>
</style>