Vue.component('worker', {
    template: `
        <div class="worker card uk-margin-small-bottom uk-flex uk-flex-middle">
            <div class="uk-flex uk-flex-between uk-flex-column uk-height-1-1">
                <h3 class="uk-margin-remove">{{ name }}</h3>
                <p class="uk-margin-remove">
                    <span v-text="speed"></span> kr / sekund
                </p>
            </div>
            <h3 class="uk-margin-remove-top uk-margin-remove-bottom uk-margin-auto-left">
                <span v-text="cost"></span> :-
            </h3>
        </div>
    `,
    props: ['name', 'speed', 'cost']
})