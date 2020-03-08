<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">微信小程序蓝牙通讯蓝牙模块demo</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/>1.安卓和苹果获取的硬件服务UUID顺序不同 </p>
                <p><Icon type="md-close" style="color:red"/>2.目前用的这一版 “启用低功耗蓝牙设备特征值变化时的 notify 功能”在安卓和苹果的测试机上都返回启动失败，其实是已经启动成功，在我同事安卓手机上返回的正常。 </p>
                <p><img src="/static/img.wx/xcxly/1.png" style="max-width:100%" alt="" /></p>
                <p><img src="/static/img.wx/xcxly/2.png" style="max-width:100%" alt="" /></p>
                <p>index.wxml</p>
                <script type="text/html" v-pre>
                    <view class="content">
                        <text class="status">适配器状态：{{ status }}</text>
                        <text class="sousuo">是否搜索：{{ sousuo }}</text>
                        <text class="msg">消息：{{ msg }} </text>
                        <text class="msg1">消息：{{ msg1 }}</text>
                        <button type="primary" class="button" bindtap="lanya1">1初始化蓝牙适配器</button>
                        <button type="primary" class="button" bindtap="lanya2">2本机蓝牙适配状态</button>
                        <button type="primary" class="button" bindtap="lanya3">3搜索周边设备</button>
                        <button type="primary" class="button" bindtap="lanya4">4获取设备后在列表中连接</button>
                        <button type="primary" class="button" bindtap="lanya5">5停止搜索周边设备</button>
                        <button type="primary" class="button" bindtap="lanya6">6获取连接设备所有service</button>
                        <button type="primary" class="button" bindtap="lanya7">7获取连接设备所有特征值</button>
                        <button type="primary" class="button" bindtap="lanya8">8发送指定消息</button>
                        <button type="primary" class="button" bindtap="lanya9">9启用设备特征值变化时的notify</button>
                        <button type="primary" class="button" bindtap="lanya10">10接收消息</button>
                        <view class="section">
                            <text class="status">接收到消息：{{ jieshou }}</text>
                        </view>
                        <button type="primary" class="button" bindtap="lanya0">0断开蓝牙连接</button>
                    </view>
                    <view class="venues_list">
                        <block wx:for="{{devices}}" wx:key="{{test}}">
                            <view class="venues_item">
                                <text class="status">设备名称:{{item.name}}</text>
                                <text class="status">设备ID:{{item.deviceId}}</text>
                                <text class="status">连接状态:{{connectedDeviceId == item.deviceId?"已连接":"未连接"}}</text>
                                <view class="section">
                                </view>
                                <view class="section">
                                    <button type="warn" class="button" id="{{item.deviceId}}" bindtap="connectTO">连接</button>
                                </view>
                            </view>
                        </block>
                    </view>
                </script>
                <p>index.js</p>
                <script type="text/js">
                    var app = getApp();
                    Page({
                        data: {
                            status: '',
                            sousuo: '',
                            connectedDeviceId: '', // 已连接设备uuid
                            services: '', // 连接设备的服务
                            characteristics: '', // 连接设备的状态值
                            writeServicweId: '', // 可写服务uuid
                            writeCharacteristicsId: '',// 可写特征值uuid
                            readServicweId: '', // 可读服务uuid
                            readCharacteristicsId: '',// 可读特征值uuid
                            notifyServicweId: '', // 通知服务UUid
                            notifyCharacteristicsId: '', // 通知特征值UUID
                            inputValue: '',
                            characteristics1: '', // 连接设备的状态值
                        },
                        onLoad: function () {
                            if (wx.openBluetoothAdapter) {
                                wx.openBluetoothAdapter()
                            } else {
                                // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
                                wx.showModal({
                                    title: '提示',
                                    content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
                                })
                                console.log('当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。')
                            }
                        },
                        // 初始化蓝牙适配器
                        lanya1: function () {
                            var that = this;
                            wx.openBluetoothAdapter({
                                success: function (res) {
                                    that.setData({
                                        msg: '初始化蓝牙适配器1成功！' + JSON.stringify(res),
                                    })
                                    console.log('初始化蓝牙适配器1成功！', res)
                                    // 监听蓝牙适配器状态
                                    wx.onBluetoothAdapterStateChange(function (res) {
                                        that.setData({
                                            sousuo: res.discovering ? '在搜索。' : '未搜索。',
                                            status: res.available ? '可用。' : '不可用。',
                                        })
                                        console.log('监听蓝牙适配器状态', res)
                                    })
                                },
                                fail: function (res) {
                                    console.log('初始化蓝牙适配器失败...', res)
                                }
                            })
                        },
                        // 本机蓝牙适配器状态
                        lanya2: function () {
                            var that = this;
                            wx.getBluetoothAdapterState({
                                success: function (res) {
                                    that.setData({
                                        msg: '本机蓝牙适配器2状态' + '/' + JSON.stringify(res.errMsg),
                                        sousuo: res.discovering ? '在搜索。' : '未搜索。',
                                        status: res.available ? '可用。' : '不可用。',
                                    })
                                    console.log('初始化蓝牙适配器2成功！', res)
                                    // 监听蓝牙适配器状态
                                    wx.onBluetoothAdapterStateChange(function (res) {
                                        that.setData({
                                            sousuo: res.discovering ? '在搜索。' : '未搜索。',
                                            status: res.available ? '可用。' : '不可用。',
                                        })
                                    })
                                },
                                fail: function (res) {
                                    console.log('初始化蓝牙适配器2失败...', res)
                                }
                            })
                        },
                        // 搜索设备
                        lanya3: function () {
                            var that = this;
                            wx.startBluetoothDevicesDiscovery({
                                success: function (res) {
                                    that.setData({
                                        msg: '搜索设备' + JSON.stringify(res),
                                    })
                                    console.log('搜索设备', res)
                                    // 监听蓝牙适配器状态
                                    wx.onBluetoothAdapterStateChange(function (res) {
                                        that.setData({
                                            sousuo: res.discovering ? '在搜索。' : '未搜索。',
                                            status: res.available ? '可用。' : '不可用。',
                                        })
                                    })
                                },
                                fail: function (res) {
                                    console.log('搜索设备失败...', res)
                                }
                            })
                        },
                        // 获取所有已发现的设备
                        lanya4: function () {
                            var that = this;
                            wx.getBluetoothDevices({
                                success: function (res) {
                                    // 是否有已连接设备
                                    wx.getConnectedBluetoothDevices({
                                        success: function (res) {
                                            that.setData({
                                                connectedDeviceId: res.deviceId
                                            })
                                            console.log('是否有已连接设备获取成功！', res);
                                        },
                                        fail: function (res) {
                                            console.log('是否有已连接设备获取失败...', res)
                                        }
                                    })
                                    that.setData({
                                        msg: '搜索设备' + JSON.stringify(res.devices),
                                        devices: res.devices,
                                    })
                                    // 监听蓝牙适配器状态
                                    wx.onBluetoothAdapterStateChange(function (res) {
                                        that.setData({
                                            sousuo: res.discovering ? '在搜索。' : '未搜索。',
                                            status: res.available ? '可用。' : '不可用。',
                                        })
                                    })
                                },
                                fail: function (res) {
                                    console.log('获取所有已发现的设备失败...', res)
                                }
                            })
                        },
                        // 停止搜索周边设备
                        lanya5: function () {
                            var that = this;
                            wx.stopBluetoothDevicesDiscovery({
                                success: function (res) {
                                    that.setData({
                                        msg: '停止搜索周边设备' + '/' + JSON.stringify(res.errMsg),
                                        sousuo: res.discovering ? '在搜索。' : '未搜索。',
                                        status: res.available ? '可用。' : '不可用。',
                                    })
                                },
                                fail: function (res) {
                                    console.log('停止搜索周边设备失败...', res)
                                }
                            })
                        },
                        // 连接设备
                        connectTO: function (e) {
                            var that = this;
                            wx.createBLEConnection({
                                deviceId: e.currentTarget.id,
                                success: function (res) {
                                    that.setData({
                                        connectedDeviceId: e.currentTarget.id,
                                        msg: '连接设备已连接' + e.currentTarget.id,
                                        msg1: '',
                                    })
                                    console.log('连接设备调用成功', res);
                                },
                                fail: function () {
                                    console.log('连接设备调用失败');
                                },
                                complete: function () {
                                    console.log('连接设备调用结束');
                                }
                            })
                            console.log(that.data.connectedDeviceId);
                        },
                        // 获取连接设备的service服务
                        lanya6: function () {
                            var that = this;
                            wx.getBLEDeviceServices({
                                // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
                                deviceId: that.data.connectedDeviceId,
                                success: function (res) {
                                    that.setData({
                                        services: res.services,
                                        msg: JSON.stringify(res.services),
                                    })
                                    console.log('获取连接设备的服务成功', res);
                                },
                                fail: function () {
                                    console.log('获取连接设备的服务失败');
                                }
                            })
                        },
                        // 获取连接设备的所有特征值 for循环获取不到值
                        lanya7: function () {
                            var that = this;
                            wx.getBLEDeviceCharacteristics({
                                // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
                                deviceId: that.data.connectedDeviceId,
                                // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
                                serviceId: that.data.services[0].uuid,
                                success: function (res) {
                                    for (var i = 0; i < res.characteristics.length; i++) {
                                        if (res.characteristics[i].properties.notify) {
                                            console.log('11111111111111111', that.data.services[0].uuid);
                                            console.log('22222222222222222', res.characteristics[i].uuid);
                                            that.setData({
                                                notifyServicweId: that.data.services[0].uuid,
                                                notifyCharacteristicsId: res.characteristics[i].uuid,
                                            })
                                        }
                                        if (res.characteristics[i].properties.write) {
                                            that.setData({
                                                writeServicweId: that.data.services[0].uuid,
                                                writeCharacteristicsId: res.characteristics[i].uuid,
                                            })
                                        } else if (res.characteristics[i].properties.read) {
                                            that.setData({
                                                readServicweId: that.data.services[0].uuid,
                                                readCharacteristicsId: res.characteristics[i].uuid,
                                            })
                                        }
                                    }
                                    console.log('获取连接设备的所有特征值 成功', res);
                                    that.setData({
                                        msg: JSON.stringify(res.characteristics),
                                    })
                                },
                                fail: function () {
                                    console.log('获取连接设备的所有特征值 失败');
                                },
                                complete: function () {
                                    console.log('获取连接设备的所有特征值 完成');
                                }
                            })
                            wx.getBLEDeviceCharacteristics({
                                // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
                                deviceId: that.data.connectedDeviceId,
                                // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
                                serviceId: that.data.services[1].uuid,
                                success: function (res) {
                                    for (var i = 0; i < res.characteristics.length; i++) {
                                        if (res.characteristics[i].properties.notify) {
                                            that.setData({
                                                notifyServicweId: that.data.services[1].uuid,
                                                notifyCharacteristicsId: res.characteristics[i].uuid,
                                            })
                                        }
                                        if (res.characteristics[i].properties.write) {
                                            that.setData({
                                                writeServicweId: that.data.services[1].uuid,
                                                writeCharacteristicsId: res.characteristics[i].uuid,
                                            })
                                        } else if (res.characteristics[i].properties.read) {
                                            that.setData({
                                                readServicweId: that.data.services[1].uuid,
                                                readCharacteristicsId: res.characteristics[i].uuid,
                                            })
                                        }
                                    }
                                    console.log('获取连接设备2的所有特征值 成功', res);
                                    that.setData({
                                        msg1: JSON.stringify(res.characteristics),
                                    })
                                },
                                fail: function () {
                                    console.log('获取连接设备2的所有特征值 失败');
                                },
                                complete: function () {
                                    console.log('获取连接设备2的所有特征值 完成');
                                }
                            })
                        },
                        // 断开设备连接
                        lanya0: function () {
                            var that = this;
                            wx.closeBLEConnection({
                                deviceId: that.data.connectedDeviceId,
                                success: function (res) {
                                    that.setData({
                                        connectedDeviceId: '',
                                    })
                                    console.log('断开设备连接 成功');
                                },
                                fail: function () {
                                    console.log('断开设备连接 失败');
                                }
                            })
                        },
                        // 监听input表单
                        inputTextchange: function (e) {
                            this.setData({
                                inputValue: e.detail.value
                            })
                        },
                        // 发送
                        lanya8: function () {
                            var that = this;
                            // 这里的回调可以获取到 write 导致的特征值改变
                            wx.onBLECharacteristicValueChange(function (characteristic) {
                                console.log('characteristic value changed:1', characteristic)
                            })
                            var buf = new ArrayBuffer(16)
                            var dataView = new DataView(buf)
                            var arr = [1,2,3].split(',');
                            console.log(arr);
                            for (var i = 0; i < arr.length; i++) {
                                dataView.setInt8(i, arr[i]);
                            }
                            console.log('str', buf);
                            console.log('writeServicweId', that.data.writeServicweId);
                            console.log('writeCharacteristicsId', that.data.writeCharacteristicsId);
                            wx.writeBLECharacteristicValue({
                                // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
                                deviceId: that.data.connectedDeviceId,
                                // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
                                serviceId: that.data.writeServicweId,
                                // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
                                characteristicId: that.data.writeCharacteristicsId,
                                // 这里的value是ArrayBuffer类型
                                value: buf,
                                success: function (res) {
                                    console.log('writeBLECharacteristicValue success', res.errMsg)
                                }
                            })
                        },
                        // 启用低功耗蓝牙设备特征值变化时的 notify 功能
                        lanya9: function () {
                            var that = this;
                            wx.notifyBLECharacteristicValueChange({
                                state: true, // 启用 notify 功能
                                // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
                                deviceId: that.data.connectedDeviceId,
                                // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
                                serviceId: that.data.notifyServicweId,
                                // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
                                characteristicId: that.data.notifyCharacteristicsId,
                                success: function (res) {
                                    console.log('notifyBLECharacteristicValueChange success', res.errMsg)
                                },
                                fail: function () {
                                    console.log('shibai');
                                    console.log(that.data.notifyServicweId);
                                    console.log(that.data.notifyCharacteristicsId);
                                },
                            })
                        },
                        // 接收消息
                        lanya10: function () {
                            var that = this;
                            // 必须在这里的回调才能获取
                            wx.onBLECharacteristicValueChange(function (characteristic) {
                                let hex = Array.prototype.map.call(new Uint8Array(characteristic.value), x => ('00' + x.toString(16)).slice(-2)).join('');
                                console.log(hex)
                                wx.request({
                                    url: '***/getDecrypt',
                                    data: {hexString:hex},
                                    method:'POST',
                                    header: {
                                        'content-type': 'application/x-www-form-urlencoded'
                                    },
                                    success:function(data){
                                        // console.log(data)
                                        var res = data.data.data;
                                        that.setData({
                                            jieshou: res,
                                        })
                                    }
                                })
                            })
                            console.log(that.data.readServicweId);
                            console.log(that.data.readCharacteristicsId);
                            wx.readBLECharacteristicValue({
                                // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
                                deviceId: that.data.connectedDeviceId,
                                // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
                                serviceId: that.data.readServicweId,
                                // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
                                characteristicId: that.data.readCharacteristicsId,
                                success: function (res) {
                                    console.log('readBLECharacteristicValue:', res.errMsg);
                                }
                            })
                        },
                    })
                </script>
                <p>index.css</p>
                <script type="text/css">
                    .content {
                        margin: 0 10px;
                    }
                    .status, .sousuo, .msg, .msg1 {
                        display: block;
                        line-height: 35px;
                        margin: 0 10px;
                    }
                    .button {
                        margin: 10px;
                    }
                    .sendto {
                        line-height: 30px;
                        display: block;
                        margin: 10px;
                    }
                </script>
                <p>后台</p>
                <script type="text/js">
                    import java.util.Arrays;
                    import javax.crypto.Cipher;
                    import javax.crypto.spec.SecretKeySpec;
                    public class AesEntryDetry {
                        // 加密秘钥 ，16个字节也就是128 bit
                        private static final byte[] AES_KEY = { 需要和硬件统一 };
                        // 加密方法
                        public static String encrypt(byte[] bs) throws Exception {
                            SecretKeySpec skeySpec = new SecretKeySpec(AES_KEY, "AES");
                            Cipher cipher = Cipher.getInstance("AES/ECB/NoPadding");
                            cipher.init(Cipher.ENCRYPT_MODE, skeySpec);
                            if(bs.length < 16){
                                bs = Arrays.copyOf(bs, 16);
                            }
                            byte[] encrypted = cipher.doFinal(bs);
                            return BytetohexString(encrypted);
                        }
                        // 解密方法
                        public static String decrypt(byte[] bs)throws Exception {
                            SecretKeySpec skeySpec = new SecretKeySpec(AES_KEY, "AES");
                            Cipher cipher = Cipher.getInstance("AES/ECB/NoPadding");
                            cipher.init(Cipher.DECRYPT_MODE, skeySpec);
                            byte[] decrypted = cipher.doFinal(bs);
                            return BytetohexString(decrypted);
                        }
                        // 字节数组按照一定格式转换拼装成字符串
                        private static String BytetohexString(byte[] b) {
                            int len = b.length;
                            StringBuffer sb = new StringBuffer();
                            for (int i = 0; i < len; i++) {
                                if (i < len - 1){
                                    sb.append(b[i]);
                                    sb.append(",");
                                }else{
                                    sb.append(b[i]);
                                }
                            }
                            return sb.toString();
                        }
                        public static byte[] hex2Bytes(String src){
                            byte[] res = new byte[src.length()/2];
                            char[] chs = src.toCharArray();
                            int[] b = new int[2];
                            for(int i=0,c=0; i<chs.length; i+=2,c++){
                                for(int j=0; j<2; j++){
                                    if(chs[i+j]>='0' && chs[i+j]<='9'){
                                        b[j] = (chs[i+j]-'0');
                                    }else if(chs[i+j]>='A' && chs[i+j]<='F'){
                                        b[j] = (chs[i+j]-'A'+10);
                                    }else if(chs[i+j]>='a' && chs[i+j]<='f'){
                                        b[j] = (chs[i+j]-'a'+10);
                                    }
                                }
                                b[0] = (b[0]&0x0f)<<4;
                                b[1] = (b[1]&0x0f);
                                res[c] = (byte) (b[0] | b[1]);
                            }
                            return res;
                        }
                    }
                </script>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
