<template>
  <div>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container fluid>
          <v-text-field
            label="コールID"
            v-model="callId"
            required
          />
          <v-btn
            color="blue"
            class="white--text"
            :disabled="computedCallEnable"
            @click="onCall">
            Call
          </v-btn>
          <v-btn
            color="red"
            class="white--text"
            @click="onClose">
            Close
          </v-btn>
        </v-container>
      </v-card>
      <v-card>
        <v-container fluid>
          <h3>相手の画面</h3>
          <v-flex>
            <div v-if="connectingCall">
              通話中 {{ connectingCall.remoteid }}
            </div>
            <v-card-media>
              <video
                id="other_video"
                autoplay
                playsinline
                controls
                class="video"
              />
            </v-card-media>
          </v-flex>
          <v-flex>
            <v-card-media>
              <video
                id="my_video"
                muted="true"
                autoplay
                playsinline
                controls
                class="video__me"
              />
            </v-card-media>
          </v-flex>
        </v-container>
      </v-card>
      <v-card>
        <v-container fluid>
          あなたのID: {{ peerId }}
          <v-select
            :items="audios"
            v-model="selectAudio"
            label="マイク設定"
            @change="setDevice"
          />
          <v-select
            :items="videos"
            v-model="selectVideo"
            label="ビデオ設定"
            @change="setDevice"
          />
        </v-container>
      </v-card>
    </v-flex>
    <v-dialog v-model="dialog" persistent max-width="300px">
      <v-card>
        <v-card-title v-if="call">
          <span class="headline">着信 {{ call.remoteId }}</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="connect">通話する</v-btn>
          <v-btn color="error" @click="disconnect">切断</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Peer from 'skyway-js'

@Component
export default class VideoChat extends Vue {
  private peer: any
  private screenShare: any
  private dialog: boolean = false
  private peerId: string = ''
  private audios: any[] = []
  private videos: any[] = []
  private selectAudio: string = ''
  private selectVideo: string = ''
  private localStream: any
  private callId: string = ''
  private call: any = null
  private connectingCall: any = null
  private videoCodec: string = 'H264'
  get computedCallEnable() {
    return (!this.callId || this.connectingCall) ? true : false
  }

  private mounted() {
    this.peer = new Peer({
      key: process.env.SKYWAY_API_KEY,
      debug: 0,
    })

    // this.screenShare = ScreenShare.create({ debug: true })
    this.peer.on('open', () => {
      this.peerId = this.peer.id
      console.log(this.peerId)
    })

    this.peer.on('close', () => {
       this.onClose()
    })

    this.peer.on('error', () => {
      console.log('error')
      this.onClose()
    })

    this.peer.on('disconnected', (item: any) => {
      console.log('disconnected', item)
      this.onClose()
    })

    this.peer.on('call', (call: any) => {
      console.log('call')
      this.dialog = true
      this.call = call
    })

    // 使用可能なメディアデバイスを取得.
    navigator.mediaDevices.enumerateDevices()
      .then((deviceInfos) => {
        deviceInfos.forEach((item) => {
          if (item.kind === 'audioinput') {
            this.audios.push({
              text: item.label || `Microphone ${this.audios.length + 1}`,
              value: item.deviceId,
            })
          } else if (item.kind === 'videoinput') {
            this.videos.push({
              text: item.label || `Camera ${this.videos.length - 1}`,
              value: item.deviceId,
            })
          }
        })
        console.log(this.audios)
        console.log(this.videos)
        this.selectAudio = this.audios[0].value
        this.selectVideo = this.videos[0].value
        this.setDevice()
      })
  }

  private setDevice() {
    Vue.nextTick(() => {
      console.log(this.selectAudio, this.selectVideo)
      const setting = {
        audio: this.selectAudio ? { deviceId: { exact: this.selectAudio } } : false,
        video: this.selectVideo ? { deviceId: { exact: this.selectVideo } } : false,
      }
      console.log(setting)
      navigator.mediaDevices.getUserMedia(setting)
        .then((stream) => {
          this.replaceStream(stream)
        }).catch((err) => {
          console.error(err)
        })
    })
  }

  private onCall() {
    const call = this.peer.call(this.callId, this.localStream, { videoCodec: this.videoCodec })
    this.receive(call)
  }

  private connect() {
    this.dialog = false
    this.call.answer(this.localStream, {
      videoCodec: this.videoCodec,
    })
    this.receive(this.call)
    // this.call = null
  }

  private disconnect() {
    this.dialog = false
    this.call.close()
    this.call = null
  }

  private receive(call: any) {
    this.onClose()
    call.on('stream', (stream: any) => {
      const element: HTMLMediaElement = document.getElementById('other_video') as HTMLMediaElement
      element.srcObject = stream
      element.play()
    })
    this.connectingCall = call
    this.connectingCall.on('close', () => {
        console.log('connectingCall', 'close')
        this.onClose()
    })
  }

  private onClose() {
    if (this.connectingCall) {
      this.connectingCall.close()
      this.connectingCall = null
    }
  }

  private replaceStream(stream: any) {
    const video: HTMLMediaElement = document.getElementById('my_video') as HTMLMediaElement
    video.srcObject = stream
    this.localStream = stream
    if (this.connectingCall) {
      this.connectingCall.replaceStream(stream)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/main.styl'

.video
    height 300px
    width 300px
    display inline-flex

    &__me
        height 200px
        width 200px

.v-card
    margin 10px 0

</style>