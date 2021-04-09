<template>
  <div class="">
    <div class="wrapper" v-if="!token">
      <div class="login">
        <div class="form">
          <input class="input" placeholder="Login (can be any)" type="text"
              v-model="sender">
          <button type="button" class="buttonLog" @click="login(),isLoggedIn()">Let's start!</button>
        </div>
      </div>
    </div>


    <div class="" v-if="token">
      <div>
        <div  v-for="(messageArr, index) in messages" :key="index" class="chat-body-content">
            <message :user='sender' v-for="(message, index2) in messageArr" :key="index2" v-bind="message"/>
        </div>
      </div>
      <form class="chat-control" @submit.prevent="handleSubmit">
        <button type="submit" class="button" v-if="text.length" @click="sendMessage">
          SEND
        </button>
        <input autofocus class="input" type="text" v-model="text" placeholder="Введите сообщение">
      </form>
    </div>
  </div>
</template>

<script>

  import gql from "graphql-tag";

  import {groupBy, filter, map, each} from 'lodash';
  import Message from "../components/message";
  import PerfectScrollbar from 'perfect-scrollbar';

  const SUBSCRIPTION_CHAT = gql`
  subscription {
  newNote {
    _id
    sender
    text
    created_at
  }
}
`;

  const QUERY_CHAT = gql`
  query AllMessages {
  findNotes {
    items{
    _id
    sender
    text
    created_at
    }
  }
}
`;
const SEND_MESSAGE = gql`
  mutation($sender: String!,$text: String!) {
    createNote(input:{
      sender:$sender
      text:$text
    }){
    _id
    sender
    text
  }
  }
`;

  export default {
    name: "index.vue",
    components: {Message},
    data() {
      return {
        user:'',
        sender_token:'billl',
        messages: [],
        sender: '',
        text: '',
        token:false,
        psContent: null,
        isActive: false,
      };
    },
   beforeCreate(){
      
    }, 
    created(){
      this.$apollo.query({
          query: QUERY_CHAT,

        }).then((res) => {
          if(res.data.findNotes.items.length===0){
          this.$apollo.mutate({
            mutation: SEND_MESSAGE,
            variables: {
              text: "Добро пожаловать в чат",
              sender: "Администрация",
            }
          })}
        })
    },
    mounted() {
      
      this.$apollo.query({
          query: QUERY_CHAT,

        }).then((res) => {
          var chat = res.data;
          console.log(chat.findNotes.items)
          console.log(this.messages)
          this.messages = this.prepareMessages(chat.findNotes.items);
          if (process.client) {
            if (!this.psContent) {
              this.psContent = new PerfectScrollbar('.chat-body-content', {
                suppressScrollX: true
              });

              this.$nextTick(() => {
                let content = this.$el.querySelector('.chat-body-content');
                if (content) {
                  content.scrollTop = content.scrollHeight;
                }
              })
            }
          }
        });
    },

    methods: {

      login() {
          this.$apollo.query({
          query: QUERY_CHAT,

        }).then((res) => {
          var chat = res.data;
          this.user=this.sender
          console.log(this.user)
          console.log(chat.findNotes.items)
          console.log(this.messages)
          this.messages = this.prepareMessages(chat.findNotes.items);
          if (process.client) {

            if (!this.psContent) {
              this.psContent = new PerfectScrollbar('.chat-body-content', {
                suppressScrollX: true
              });

              this.$nextTick(() => {
                let content = this.$el.querySelector('.chat-body-content');
                if (content) {
                  content.scrollTop = content.scrollHeight;
                }
              })
            }
          }
        });
      },
      logout() {
        this.senderToken = '';
      },
      isLoggedIn() {
        this.token=true
        
      },

      sendMessage() {
        if (this.text.length) {
          this.$apollo.mutate({
            mutation: SEND_MESSAGE,
            variables: {
              text: this.text,
              sender: this.sender,
            }
          })
          this.text = '';
        }
      },

      prepareMessages(chat) {
        let collection = [];
        each(chat, (item) => {
          let it = {item}
          let mes ={
            messages: [it.item.text],
            sender: it.item.sender,
          }
          collection.push(mes)
        });
        let groupedResults = groupBy(collection, (result) => {
          }
        );
        return groupedResults;
      }
    },
    apollo: {
      $subscribe: {
        orders: {
          query: SUBSCRIPTION_CHAT,
          result(data) {
            let chat = data.data.newNote;
            this.messages.undefined.push({
              messages:[chat.text],
              sender:chat.sender
            })
          }
        }
      }
    }
  } 
</script>

<style scope>
  .chat-control {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.6);
    background-color: #17374f;
    border-radius: 10px;
  }
  .input {
    height: 100%;
    width: 250px;
    padding: 0 10px;
    box-sizing: border-box;
    flex: 1 0 8em;
    color: rgba(255, 255, 255, 0.6);
    background-color: #17374f;
    margin: 0;
    border: none;
    border-left: 1px solid #1d4462;
    font-size: 1.0rem;
    border-radius: 0 5px 5px 0;
  }
  .button {
    height: 100%;
    width: 30%;
    padding: 0 10px;
    flex: 0 0 auto;
  }
  .input:focus {
    outline: none;
  }
  .input:placeholder {
    color: rgb(85, 94, 102);
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .form {
    margin-top: 20px;
  }
  .login {
    flex: 1;
    padding: 10px;
    max-width: 300px;
  }
  .buttonLog {
    margin-left: 20% ;
    border: 1px ;
    text-align:center;
    padding: 0px;
    background-color: #17374f;
    height: 30px;
    border: 1px solid #1d4463;
    border-radius: 3px;
    width: 60%;
  }
  .buttonLog:hover {
    background: #1d4463;
  }
  .input {
    height: 37px;
    width: 100%;
    box-sizing: border-box;
    display: block;
    margin-bottom: 10px;
    border: 1px solid #1d4463;
    border-radius: 3px;
  }

</style>
