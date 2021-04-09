<template>
  
  <article class='media' v-bind:class="{ system: system}">
      <div class='content' v-bind:class="{ owner: isActive}">
          <div class="name" v-bind:class="{ self: isActive }">
            <strong>{{ sender }}</strong>
          </div>
        <p class="message-box" v-for="(message, index) in messages" :key="index" v-html="message">
          {{ message }}
        </p>
      </div>
  </article>
</template>

<script>

  export default {
    name: "Message",
    props: {
      user:{type:String},
      sender: {type: String},
      messages: {type: Array, default: () => []},
      date: {type: String},
      sender_token: {type: String},
      senderCheck:{type: String},
      isActive: {
        type: Boolean,
        default:false
      },
      system:false
    },
    mounted(){
      console.log(this.user)
        if(this.user===this.sender){
          this.isActive = true
        }
    }
  }
</script>

<style scoped>
  .self{
    background: rgb(114, 141, 14);
    color: #000;
    align-self: flex-end;
    text-align: end;
  }
  .top-line {
    user-select: none;
  }
  .media {
    display: flex;
    flex-direction: column;
  }
  .media-content {
    min-width: 12vw;
  }
  .content {
    background-color: #17374f;
    max-width: 50%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 6px;
    word-wrap: break-word;
    align-self: flex-start;
  }
  .owner{
    background-color: #17374f;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 6px;
    word-wrap: break-word;
    align-self: flex-end;
    text-align: end;
  }
</style>

