<template>
<div class="player player_audio_rain">
    <div class="player-track-meta">
        <p>Outfoxing the Fox</p>
        <p><span>Kevin MacLeod</span></p>
    </div>
    <div class="player-controls">
        <button class="player-play-btn" role="button" aria-label="Play" data-playing="false">
            <div class="player-icon-play">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <title>play</title>
                    <polygon class="icon-play" points="19.05 12 6 3.36 6 20.64 19.05 12" />
                    <rect class="icon-container" width="24" height="24" />
                </svg>
            </div>

            <div class="player-icon-pause hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <title>pause</title>
                    <g>
                        <rect class="icon-pause" x="6" y="3.26" width="4" height="17.48" />
                        <rect class="icon-pause" x="14" y="3.26" width="4" height="17.48" />
                    </g>
                    <rect class="icon-container" width="24" height="24" />
                </svg>
            </div>
        </button>
        <div class="player-timeline">
            <span class="player-time player-time-current">00:00</span>
            <div class="player-progress">
                <div class="player-progress-filled"></div>
            </div>
            <span class="player-time player-time-duration">00:00</span>
        </div>
        <div class="player-volume-container">
            <input type="range" id="volume" min="0" max="1" value="1" step="0.01" class="player-volume" />
        </div>
    </div>

    <audio src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3" crossorigin="anonymous"></audio>
</div>

</template>

<style>
/*================ Auduio =================*/
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');


.player_audio_rain {
    width: 500px;
    border: solid 2px red;
}

.player_audio_rain .hidden {
    display: none;
    }

    .player_audio_rain .player {
        max-width: 500px;
        margin: 7rem auto;
        background: white;
        padding: 36px 32px 24px 32px;
        border-radius: 14px;
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }

    .player_audio_rain .player-track-meta {
        text-align: center;
    }

    .player_audio_rain .player-track-meta p {
        margin: 0;
        font-size: 20px;
        color: #0e0e0e;
        font-weight: 700;
    }

    .player_audio_rain .player-track-meta span {
        font-size: 16px;
        font-weight: 400;
        padding: 0 2px;
        position: relative;
        top: 1px;
        color: #a3a3a3;
    }

    .player_audio_rain .player-controls {
        display: flex;
        align-items: center;
    }

    .player_audio_rain .player-play-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
    }

    .player_audio_rain .icon-container {
        fill: transparent;
        stroke: none;
    }

    .player_audio_rain .player-play-btn:hover {
        fill: #444444;
    }

    .player_audio_rain .player-play-btn svg {
        color: #0e0e0e;
        position: relative;
        left: 0.5px;
        width: 36px;
        height: 36px;
        display: block;
    }

    .player_audio_rain .player-play-btn:hover svg {
        color: #ffffff;
    }

    .player_audio_rain .player-timeline {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        padding-left: 10px;
    }

    .player_audio_rain .player-progress {
        display: flex;
        postion: relative;
        height: 6px;
        background: #a3a3a3;
        border-radius: 25px;
        margin: 0 5px;
        flex: 10;
        flex-basis: 100%;
        overflow: hidden;
    }

    .player_audio_rain .player-progress-filled {
        height: 6px;
        background: #0e0e0e;
        flex: 0;
        flex-basis: 0%;
        border-radius: 25px;
    }

    .player_audio_rain .player-time {
        padding: 2px 5px;
    }

    .player_audio_rain .player-volume-container {
        width: 15%;
    }

    .player_audio_rain .player-volume {
        height: 28px;
        -webkit-appearance: none;
        margin: 10px 0;
        width: 100%;
        background: transparent;
    }

    .player_audio_rain .player-volume:focus {
        outline: none;
    }

    .player_audio_rain .player-volume::-webkit-slider-runnable-track {
        width: 100%;
        height: 6px;
        cursor: pointer;
        animate: 0.2s;
        background: #0e0e0e;
        border-radius: 10px;
    }

    .player_audio_rain .player-volume::-webkit-slider-thumb {
        height: 16px;
        width: 16px;
        border-radius: 100px;
        border: none;
        background: #0e0e0e;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -4px;
    }

    .player_audio_rain .player-volume:focus::-webkit-slider-runnable-track {
        background: #0e0e0e;
    }

    .player_audio_rain .player-volume::-moz-range-track {
        width: 100%;
        height: 6px;
        cursor: pointer;
        animate: 0.2s;
        background: #0e0e0e;
        border-radius: 10px;
    }

    .player_audio_rain .player-volume::-moz-range-thumb {
        height: 16px;
        width: 16px;
        border-radius: 100px;
        border: none;
        background: #0e0e0e;
        cursor: pointer;
        margin-top: -4px;
    }

    .player_audio_rain .player-volume::-ms-track {
        width: 100%;
        height: 6px;
        cursor: pointer;
        animate: 0.2s;
        background: #0e0e0e;
        border-radius: 10px;
    }

    .player_audio_rain .player-volume::-ms-fill-lower {
        background: #0e0e0e;
        border-radius: 10px;
    }

    .player_audio_rain .player-volume::-ms-fill-upper {
        background: #0e0e0e;
        border-radius: 10px;
    }

    .player_audio_rain .player-volume::-ms-thumb {
        margin-top: 1px;
        height: 15px;
        width: 15px;
        border-radius: 5px;
        border: none;
        background: #0e0e0e;
        cursor: pointer;
    }

    .player_audio_rain .player-volume:focus::-ms-fill-lower {
        background: #38bdf8;
    }

    .player_audio_rain .player-volume:focus::-ms-fill-upper {
        background: #38bdf8;
    }
</style>

<script>
    export default {
        name: 'Rain', 
        methods: {
            onChangeBC(url){
                this.$emit('onChangeBC', {url})
            }
        }
    }

</script>