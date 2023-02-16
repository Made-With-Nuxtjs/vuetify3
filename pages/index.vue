<template>

    <Head>
        <Title>Islam For Mankind</Title>
        <Meta name="description" content="Islam For Mankind" />
        <Style type="text/css" children="body { background-color: green; }" />
    </Head>
    <v-main>
        <!-- <v-container> -->
        <v-row class="">
            <v-col>
                <v-card class="ma-2">
                    <HomeCarousel />
                </v-card>
                <v-card class="ma-2">
                    <HomeTagSlider />
                </v-card>
                <HomeCategoryPostSliderBanner class="my-2" />
                <HomeCategoryPostSliderTitle class="my-2" />
                <HomeCategoryListSlider class="my-2" />
                <HomeCategoryList class="my-2" />
                <HomeCategoryPostAndList class="my-2" />
                <HomeCategoryPostAndListSlider class="my-2" />
            </v-col>
        </v-row>
        <!-- </v-container> -->
    </v-main>
</template>