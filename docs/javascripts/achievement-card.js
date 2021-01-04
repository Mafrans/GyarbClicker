Vue.component('achievement-card', {
    template: `
        <div class="achievement card uk-margin-small-bottom uk-flex uk-flex-middle">
            <img :src="image" class="uk-margin-right">
            <div class="uk-inline-flex uk-flex-between uk-flex-column uk-height-1-1">
                <h3 class="uk-margin-remove">{{ name }}</h3>
                <p class="uk-margin-remove">
                    {{ description }}
                </p>
            </div>
        </div>
    `,
    props: ['name', 'description', 'image']
})