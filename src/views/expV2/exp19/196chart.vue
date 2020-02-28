<template>
    <div id="app666">
        <div class="sidebar666">
            <card></card>
            <list></list>
        </div>
        <div class="main666">
            <message></message>
            <textbox></textbox>
        </div>
    </div>
</template>
<script>
import Card from '@C/chat/card';
import List from '@C/chat/list';
import Textbox from '@C/chat/textbox';
import Message from '@C/chat/message';

import { mapActions } from 'vuex'

export default {
    components: { Card, List, Textbox, Message },
    methods: {
        ...mapActions('chat', [
            'initData'
        ])
    },
    created () {
        this.initData();
    }
}
</script>
<style lang="less" scoped>
#app666 {
    margin: 20px auto;
    width: 800px;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;

    .sidebar666, .main666 {
        height: 100%;
    }
    .sidebar666 {
        float: left;
        width: 200px;
        color: #f4f4f4;
        background-color: #2e3238;
    }
    .main666 {
        position: relative;
        overflow: hidden;
        background-color: #eee;
    }
    .text {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
    .message {
        height: ~'calc(100% - 160px)';
    }
}
</style>
