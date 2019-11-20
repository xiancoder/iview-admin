<template>
     <div class="ipAdress">
        <ul class="ipInput" :class="{isDisabled:isDisabled}" >
            <li :key='index' v-for="(item, index) in ipAdress">
                <input :tabindex="'ipInput'+(index+1)" :class="'ipAdress'+(index+1)"
                    @blur="blurFocus(index)" autocomplete="off" :readonly="isDisabled"
                    :maxlength="3" type="tel" pattern="/[0-9]{1,3}/" @input="checkIpVal(item, index, $event)"
                    :disabled="isDisabled" @keyup="turnIpPOS(item, index, $event)" @keydown="delteIP(item, index, $event)"
                    v-model="item.value" ref="ipInput" />
                <span v-if ="index<3">.</span>
            </li>
        </ul>
        <div v-if ="erroip" style="color: red;">
            ip格式错误!
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            erroip: true,
            ipAdress: [{ value: '' }, { value: '' }, { value: '' }, { value: '' }],
            isWX: navigator.userAgent.toLowerCase().match(/MicroMessenger/i) === 'micromessenger'
        }
    },
    props: {
        ipStr: { trype: String, default: '' },
        ipType: { type: String },
        isDisabled: { type: Boolean, default: false },
        width: { type: String, default: '100%' }
    },
    watch: {
        ipStr: {
            immediate: true,
            handler: function (vall) {
                let val = vall
                let nArr = []
                if (val && val.includes('.') && val.length > 0) {
                    let valArr = val.split('.')
                    let m = valArr.length
                    for (let i = 0; i < 4; i++) {
                        if (valArr[i] === 'null' || valArr[i] === 'undefined') { valArr[i] = ''; }
                        if (i < m) {
                            nArr.push({ value: valArr[i] })
                        } else {
                            nArr.push({ value: '' })
                        }
                    }
                } else {
                    nArr = [{ value: '' }, { value: '' }, { value: '' }, { value: '' }]
                }
                this.ipAdress = nArr
            }
        }
    },
    methods: {
        // methods
        blurFocus (index) {
            if (index === 3) {
                this.$emit('blur')
            }
        },
        checkIpVal (item, index, event) {
            if (this.ipAdress[0].value && this.ipAdress[1].value && this.ipAdress[2].value && this.ipAdress[3].value) {
                this.erroip = false
            } else {
                this.erroip = true
            }
            let self = this
            // wx
            if (this.isWX) {
                let e = event || window.event
                let keyCode = e.data
                // 向右跳转
                if (keyCode === '.') {
                    e.preventDefault()
                    e.returnValue = false
                    item.value = item.value.replace(/[^\d]/g, '').replace(/[\.]/g, '')
                    if (index < 3) { self.$refs.ipInput[index + 1].focus(); }
                    return false
                }
            }
            if (/[^\d]/g.test(item.value)) {
                let cache = JSON.parse(JSON.stringify(self.ipAdress))
                cache[index].value = item.value.replace(/[^\d]/g, '').replace(/[\.]/g, '')
                self.ipAdress = cache
                return false
            }
            if (item.value.replace(/[^\d]/g, '').length >= 3) {
                let val = parseInt(item.value.replace(/[^\d]/g, ''), 10)
                if (isNaN(val)) {
                    val = ''
                } else if (val > 255) {
                    val = 255
                } else {
                    val = val < 0 ? 0 : val
                }
                item.value = String(val)
                this.$set(this.ipAdress, index, item)
                if (index < 3) { self.$refs.ipInput[index + 1].focus() }
            }
            let ns = ''
            this.ipAdress.forEach(item => { ns += '.' + item.value; return ns })
            // 给父组件传值 ip的值
            if (!this.erroip) {
                let ip = ''
                this.ipAdress.map(v => { ip = ip + '.' + v.value })
                this.$emit('getIP', ip.substring(1))
            }
        },
        turnIpPOS (item, index, event) {
            let self = this
            let e = event || window.event
            if (e.keyCode === 37) { if (index !== 0) { self.$refs.ipInput[index - 1].focus(); } }
            // 右箭头、回车键、空格键、冒号均向右跳转，右一不做任何措施
            if (e.keyCode === 39 || e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 110 || e.keyCode === 46 || e.keyCode === 190) {
                e.preventDefault()
                e.returnValue = false
                if (index < 3) { self.$refs.ipInput[index + 1].focus(); }
                return false
            }
        },
        delteIP (item, index, event) {
            let self = this
            let e = event || window.event
            let val = parseInt(item.value.replace(/[^\d]/g, ''), 10)
            val = isNaN(val) ? '' : val
            if (e.keyCode === 8 && index > 0 && val.length === 0) {
                self.$refs.ipInput[index - 1].focus()
            }
        }
    },
    mounted () {
        console.log(this.$props)
        console.log(this.$attrs.index)
    }
}
</script>
<style type="text/css">
.ipInput {
    /* width: 260px; */ height:32px; box-sizing: border-box; line-height: inherit; border: 1px solid #dcdee2;
    background-color: #fff; overflow: hidden; border-radius: 5px; padding: 0; margin: 0;
    display: inline-block; vertical-align: middle; outline: transparent; font-size:0;
    text-indent: 0; background: #fff; display: flex; flex-direction: row;
}
.ipInput.isDisabled {
    background: transparent;
}
.ipInput.isDisabled li{
    cursor:not-allowed; height:32px;
}
.ipInput.isDisabled li input{
    cursor:not-allowed;
}
.ipInput li {
    display: inline-block; width:25%; height:32px; box-sizing: border-box; font-size:0;
    display: flex; flex-direction: row;
}
.ipInput .ivu-input:focus{
    box-shadow: none
}
.ipInput li input {
    appearance: none; padding:10px 5px; width: calc(100% - 3px); text-align: center;
    outline: none; border: none; color: #000; box-sizing: border-box; font-size: 12px;
    height:32px
}
.ipInput li input.disabled {
    background: transparent;
}
.ipInput li span {
    display: inline-block; font-size:18px; width: 3px; height:3px; line-height: 23px !important;
    color: #000;
}
</style>
