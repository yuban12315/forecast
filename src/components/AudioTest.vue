<template>
    <div>
        <audio id="vid"  autoplay loop controls>
        </audio>
    </div>
</template>

<script>

    export default {
        name: "audio-test",
        methods: {
            async getAudio(city) {
                const url = `${city}`
                const res = await this.$axios.post(`/testApi/audio.action`, {url})
                console.log(res.data)

                var vid = document.getElementById('vid')
                vid.src = res.data
                vid.load()
                vid.play
            }
        },
        async created() {
           await this.getAudio('beijing')
        }
    }

</script>

<style scoped>

</style>