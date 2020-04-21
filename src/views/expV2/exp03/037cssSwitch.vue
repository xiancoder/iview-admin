<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">纯CSS开关切换按钮</div>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 有效</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p></p>
                <div id="app-cover">
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button r" id="button-1">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs"></div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button r" id="button-2">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs"></div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button r" id="button-3">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs"></div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button r" id="button-4">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs"></div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button r" id="button-5">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs"><span></span></div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button r" id="button-6">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs">
                                </div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button r" id="button-8">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs">
                                    <span></span>
                                </div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button r" id="button-9">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs">
                                    <span></span>
                                </div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button b2" id="button-10">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs">
                                    <span>YES</span>
                                </div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button b2" id="button-11">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs">
                                    <span></span>
                                </div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button b2" id="button-12">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs">
                                    <span></span>
                                </div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button b2" id="button-13">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs">
                                    <span></span>
                                </div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button b2" id="button-14">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs">
                                    <span></span>
                                </div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button b2" id="button-15">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs"></div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button b2" id="button-16">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs"></div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button b2" id="button-17">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs">
                                    <span></span>
                                </div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button b2" id="button-18">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs">
                                    <span></span>
                                </div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                </div>
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
<style type="text/css">
/* CSS规则保持重复，以便您可以轻松获取每个按钮的CSS规则 :) */
#app-cover { counter-reset: button-counter; }
#app-cover * { user-select: none; -webkit-tap-highlight-color:transparent; }
#app-cover *:focus { outline: none; }
#app-cover .row { display: table-row; }
#app-cover .toggle-button-cover { display: inline-block; position: relative; width: 200px; height: 140px; }
#app-cover .button-cover { height: 100px; margin: 20px; background-color: #fff; box-shadow: 0 10px 20px -8px #c5d6d6; border-radius: 4px; }
#app-cover .button-cover:before { counter-increment: button-counter; content: counter(button-counter); position: absolute; right: 0; bottom: 0; color: #d7e3e3; font-size: 12px; line-height: 1; padding: 5px; }
#app-cover .knobs { z-index: 2; }
#app-cover .knobs:before,
#app-cover .knobs:after{box-sizing: initial;}
#app-cover .knobs span{box-sizing: initial;}
#app-cover .knobs span:before,
#app-cover .knobs span:after{box-sizing: initial;}
#app-cover .button-cover,
#app-cover .knobs,
#app-cover .layer { position: absolute; top: 0; right: 0; bottom: 0; left: 0; }
#app-cover .button { position: relative; top: 50%; width: 74px; height: 36px; margin: -20px auto 0 auto; overflow: hidden; }
#app-cover .button.r,
#app-cover .button.r .layer { border-radius: 100px; }
#app-cover .button.b2 { border-radius: 2px; }
#app-cover .checkbox { position: relative; width: 100%; height: 100%; padding: 0; margin: 0; opacity: 0; cursor: pointer; z-index: 3; }
#app-cover .layer { width: 100%; background-color: #ebf7fc; transition: 0.3s ease all; z-index: 1; }
/* Button 1 */
#app-cover #button-1 .knobs:before { content: 'YES'; position: absolute; top: 4px; left: 4px; width: 20px; height: 10px; color: #fff; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; padding: 9px 4px; background-color: #03A9F4; border-radius: 50%; transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all; }
#app-cover #button-1 .checkbox:checked + .knobs:before { content: 'NO'; left: 42px; background-color: #f44336; }
#app-cover #button-1 .checkbox:checked ~ .layer { background-color: #fcebeb; }
#app-cover #button-1 .knobs, #button-1 .knobs:before, #button-1 .layer { transition: 0.3s ease all; }
/* Button 2 */
#app-cover #button-2 .knobs:before, #button-2 .knobs:after { content: 'YES'; position: absolute; top: 4px; left: 4px; width: 20px; height: 10px; color: #fff; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; padding: 9px 4px; background-color: #03A9F4; border-radius: 50%; transition: 0.3s ease all; }
#app-cover #button-2 .knobs:before { content: 'YES'; }
#app-cover #button-2 .knobs:after { content: 'NO'; }
#app-cover #button-2 .knobs:after { right: -28px; left: auto; background-color: #F44336; }
#app-cover #button-2 .checkbox:checked + .knobs:before { left: -28px; }
#app-cover #button-2 .checkbox:checked + .knobs:after { right: 4px; }
#app-cover #button-2 .checkbox:checked ~ .layer { background-color: #fcebeb; }
/* Button 3 */
#app-cover #button-3 .knobs:before { content: 'YES'; position: absolute; top: 4px; left: 4px; width: 20px; height: 10px; color: #fff; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; padding: 9px 4px; background-color: #03A9F4; border-radius: 50%; transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15); }
#app-cover #button-3 .checkbox:active + .knobs:before { width: 46px; border-radius: 100px; }
#app-cover #button-3 .checkbox:checked:active + .knobs:before { margin-left: -26px; }
#app-cover #button-3 .checkbox:checked + .knobs:before { content: 'NO'; left: 42px; background-color: #F44336; }
#app-cover #button-3 .checkbox:checked ~ .layer { background-color: #fcebeb; }
/* Button 4 */
#app-cover #button-4 .knobs:before,
#app-cover #button-4 .knobs:after { position: absolute; top: 4px; left: 4px; width: 20px; height: 10px; color: #fff; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; padding: 9px 4px; background-color: #03A9F4; border-radius: 50%; transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all; }
#app-cover #button-4 .knobs:before { content: 'YES'; }
#app-cover #button-4 .knobs:after { content: 'NO'; }
#app-cover #button-4 .knobs:after { top: -28px; right: 4px; left: auto; background-color: #F44336; }
#app-cover #button-4 .checkbox:checked + .knobs:before { top: -28px; }
#app-cover #button-4 .checkbox:checked + .knobs:after { top: 4px; }
#app-cover #button-4 .checkbox:checked ~ .layer { background-color: #fcebeb; }
/* Button 5 */
#app-cover #button-5 { perspective: 60px; overflow: visible; }
#app-cover #button-5 .knobs:before,
#app-cover #button-5 .knobs span { content: ''; position: absolute; top: 4px; left: 4px; width: 20px; height: 10px; color: #fff; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; padding: 9px 4px; border-radius: 50%; transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all; }
#app-cover #button-5 .knobs:before { background-color: #03A9F4; }
#app-cover #button-5 .knobs span:before { content: 'YES'; }
#app-cover #button-5 .knobs:before,
#app-cover #button-5 .layer { transform: rotateY(0); transform-origin: center; }
#app-cover #button-5 .checkbox:checked + .knobs:before, #app-cover #button-5 .checkbox:checked + .knobs span { left: 42px; }
#app-cover #button-5 .checkbox:checked + .knobs:before { transform: rotateY(180deg); background-color: #f44336; }
#app-cover #button-5 .checkbox:checked + .knobs span:before { content: 'NO'; left: 42px; }
#app-cover #button-5 .checkbox:checked ~ .layer { background-color: #fcebeb; transform: rotateY(-180deg); }
#app-cover #button-5 .knobs,
#app-cover #button-5 .knobs:before,
#app-cover #button-5 .layer { transition: 0.3s ease all; }
/* Button 6 */
#app-cover #button-6 { overflow: visible; }
#app-cover #button-6 .knobs:before { content: 'YES'; position: absolute; top: 4px; left: 4px; width: 20px; height: 10px; color: #fff; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; padding: 9px 4px; background-color: #03A9F4; border-radius: 50%; }
#app-cover #button-6 .layer,
#app-cover #button-6 .knobs,
#app-cover #button-6 .knobs:before { transform: rotateZ(0); transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all; }
#app-cover #button-6 .checkbox:checked + .knobs { transform: rotateZ(-180deg); }
#app-cover #button-6 .checkbox:checked + .knobs:before { content: 'NO'; background-color: #f44336; transform: rotateZ(180deg); }
#app-cover #button-6 .checkbox:checked ~ .layer { background-color: #fcebeb; transform: rotateZ(180deg); }
/* Button 8 */
#app-cover #button-8 .knobs:before,
#app-cover #button-8 .knobs:after,
#app-cover #button-8 .knobs span { position: absolute; top: 4px; width: 20px; height: 10px; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; padding: 9px 4px; border-radius: 50%; transition: 0.3s ease all; }
#app-cover #button-8 .knobs:before { content: 'YES'; color: #fff; left: 4px; }
#app-cover #button-8 .knobs:after { content: 'NO'; left: 42px; color: #fff; background-color: #f44336; opacity: 0; }
#app-cover #button-8 .knobs:before,
#app-cover #button-8 .knobs:after { z-index: 2; }
#app-cover #button-8 .knobs span { left: 4px; background-color: #03A9F4; z-index: 1; }
#app-cover #button-8 .checkbox:checked + .knobs:before { opacity: 0; }
#app-cover #button-8 .checkbox:checked + .knobs:after { opacity: 1; }
#app-cover #button-8 .checkbox:checked + .knobs span { background-color: #fcebeb; transform: scale(4); }
/* Button 9 */
#app-cover #button-9 .knobs:before,
#app-cover #button-9 .knobs:after,
#app-cover #button-9 .knobs span { position: absolute; top: 4px; width: 20px; height: 10px; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; padding: 9px 4px; border-radius: 50%; transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all; }
#app-cover #button-9 .knobs:before { content: 'YES'; left: 4px; }
#app-cover #button-9 .knobs:after { content: 'NO'; right: -24px; }
#app-cover #button-9 .knobs:before,
#app-cover #button-9 .knobs:after { color: #fff; z-index: 2; }
#app-cover #button-9 .knobs span { left: 4px; background-color: #03a9f4; z-index: 1; }
#app-cover #button-9 .checkbox:checked + .knobs:before { left: -24px; }
#app-cover #button-9 .checkbox:checked + .knobs:after { right: 4px; }
#app-cover #button-9 .checkbox:checked + .knobs span { left: 42px; background-color: #F44336; }
#app-cover #button-9 .checkbox:checked ~ .layer { background-color: #fcebeb; }
/* Button 10 */
#app-cover #button-10 .knobs:before,
#app-cover #button-10 .knobs:after,
#app-cover #button-10 .knobs span { position: absolute; top: 4px; width: 20px; height: 10px; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; padding: 9px 4px; border-radius: 2px; transition: 0.3s ease all; }
#app-cover #button-10 .knobs:before { content: ''; left: 4px; background-color: #03A9F4; }
#app-cover #button-10 .knobs:after { content: 'NO'; right: 4px; color: #4e4e4e; }
#app-cover #button-10 .knobs span { display: inline-block; left: 4px; color: #fff; z-index: 1; }
#app-cover #button-10 .checkbox:checked + .knobs span { color: #4e4e4e; }
#app-cover #button-10 .checkbox:checked + .knobs:before { left: 42px; background-color: #F44336; }
#app-cover #button-10 .checkbox:checked + .knobs:after { color: #fff; }
#app-cover #button-10 .checkbox:checked ~ .layer { background-color: #fcebeb; }
/* Button 11 */
#app-cover #button-11 { overflow: visible; }
#app-cover #button-11 .knobs { perspective: 70px; }
#app-cover #button-11 .knobs:before,
#app-cover #button-11 .knobs:after,
#app-cover #button-11 .knobs span { position: absolute; top: 4px; border-radius: 2px; }
#app-cover #button-11 .knobs:before,
#app-cover #button-11 .knobs:after { width: 20px; height: 10px; color: #4e4e4e; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; padding: 9px 4px; }
#app-cover #button-11 .knobs:before { content: 'YES'; left: 4px; }
#app-cover #button-11 .knobs:after { content: 'NO'; right: 4px; }
#app-cover #button-11 .knobs span { right: 4px; width: 33px; height: 28px; background-color: #03a9f4; transform: rotateY(0); transform-origin: 0% 50%; transition: 0.6s ease all; z-index: 1; }
#app-cover #button-11 .checkbox:checked + .knobs span { transform: rotateY(-180deg); background-color: #f44336; }
#app-cover #button-11 .checkbox:checked ~ .layer { background-color: #fcebeb; }
/* Button 12 */
#app-cover #button-12 .knobs:before,
#app-cover #button-12 .knobs:after,
#app-cover #button-12 .knobs span,
#app-cover #button-12 .knobs span:before,
#app-cover #button-12 .knobs span:after { position: absolute; top: 4px; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; border-radius: 2px; transition: 0.3s ease all; }
#app-cover #button-12 .knobs:before { content: 'YES'; left: 4px; }
#app-cover #button-12 .knobs:after { content: 'NO'; right: 4px; }
#app-cover #button-12 .knobs:before,
#app-cover #button-12 .knobs:after { width: 27px; height: 10px; color: #4e4e4e; padding: 9px 3px; z-index: 1; }
#app-cover #button-12 .knobs span { display: inline-block; z-index: 2; }
#app-cover #button-12 .knobs span,
#app-cover #button-12 .knobs span:before,
#app-cover #button-12 .knobs span:after { width: 20px; height: 10px; padding: 9px 4px; }
#app-cover #button-12 .knobs span:before,
#app-cover #button-12 .knobs span:after { content: ''; top: 0; }
#app-cover #button-12 .knobs span:before { left: -28px; background-color: #F44336; }
#app-cover #button-12 .knobs span:after { right: -42px; background-color: #03A9F4; }
#app-cover #button-12 .checkbox:checked + .knobs span:before { left:4px; }
#app-cover #button-12 .checkbox:checked + .knobs span:after { right: -74px; }
#app-cover #button-12 .checkbox:checked ~ .layer { background-color: #fcebeb; }
/* Button 13 */
#app-cover #button-13 .knobs:before,
#app-cover #button-13 .knobs:after,
#app-cover #button-13 .knobs span { position: absolute; top: 4px; width: 20px; height: 10px; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; padding: 9px 4px; border-radius: 2px; transition: 0.3s ease all; }
#app-cover #button-13 .knobs:before,
#app-cover #button-13 .knobs:after { color: #4e4e4e; z-index: 1; }
#app-cover #button-13 .knobs:before { content: 'YES'; left: 4px; }
#app-cover #button-13 .knobs:after { content: 'NO'; right: 4px; }
#app-cover #button-13 .knobs span { width: 25px; left: 37px; background-color: #03A9F4; z-index: 2; }
#app-cover #button-13 .checkbox:checked + .knobs span { left: 4px; background-color: #F44336; }
#app-cover #button-13 .checkbox:checked ~ .layer { background-color: #fcebeb; }
/* Button 14 */
#app-cover #button-14 .knobs:before,
#app-cover #button-14 .knobs:after,
#app-cover #button-14 .knobs span:before,
#app-cover #button-14 .knobs span:after { position: absolute; top: 4px; width: 20px; height: 10px; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; padding: 9px 4px; border-radius: 2px; transition: 0.3s ease all; }
#app-cover #button-14 .knobs:before,
#app-cover #button-14 .knobs:after { color: #4e4e4e; z-index: 1; }
#app-cover #button-14 .knobs:before { content: 'YES'; left: 4px; }
#app-cover #button-14 .knobs:after { content: 'NO'; right: 4px; }
#app-cover #button-14 .knobs span { top: 0; left: 0; display: block; width: 100%; height: 100%; }
#app-cover #button-14 .knobs span:before { left: 4px; top: -28px; background-color: #F44336; }
#app-cover #button-14 .knobs span:after { top: 4px; left: 39px; background-color: #03A9F4; }
#app-cover #button-14 .knobs span:before,
#app-cover #button-14 .knobs span:after { content: ''; width: 23px; z-index: 2; }
#app-cover #button-14 .checkbox:checked + .knobs span:before { top: 4px; }
#app-cover #button-14 .checkbox:checked + .knobs span:after { top: -28px; }
#app-cover #button-14 .checkbox:checked ~ .layer { background-color: #fcebeb; }
/* Button 15 */
#app-cover #button-15 .knobs:before,
#app-cover #button-15 .knobs:after { position: absolute; top: 4px; width: 20px; height: 10px; color: #fff; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; padding: 9px 4px; opacity: 1; border-radius: 2px; transform: scale(1); transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all; }
#app-cover #button-15 .knobs:before { content: 'YES'; left: 4px; background-color: #03A9F4; }
#app-cover #button-15 .knobs:after { content: 'NO'; right: 4px; opacity: 0; transform: scale(4); background-color: #F44336; }
#app-cover #button-15 .checkbox:checked + .knobs:before { opacity: 0; transform: scale(4); }
#app-cover #button-15 .checkbox:checked + .knobs:after { opacity: 1; transform: scale(1); }
#app-cover #button-15 .checkbox:checked ~ .layer { background-color: #fcebeb; }
/* Button 16 */
#app-cover #button-16 .knobs:before { content: 'YES'; position: absolute; top: 4px; left: 4px; width: 20px; height: 10px; color: #fff; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; padding: 9px 4px; background-color: #03A9F4; border-radius: 2px; transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15); }
#app-cover #button-16 .checkbox:active + .knobs:before { width: 46px; }
#app-cover #button-16 .checkbox:checked:active + .knobs:before { margin-left: -26px; }
#app-cover #button-16 .checkbox:checked + .knobs:before { content: 'NO'; left: 42px; background-color: #F44336; }
#app-cover #button-16 .checkbox:checked ~ .layer { background-color: #fcebeb; }
/* Button 17 */
#app-cover #button-17 .knobs:before,
#app-cover #button-17 .knobs span { content: 'YES'; position: absolute; top: 4px; left: 4px; width: 20px; height: 10px; color: #fff; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; padding: 9px 4px; }
#app-cover #button-17 .knobs:before { transition: 0.3s ease all, left 0.5s cubic-bezier(0.18, 0.89, 0.35, 1.15); z-index: 2; }
#app-cover #button-17 .knobs span { background-color: #03A9F4; border-radius: 2px; transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15); z-index: 1; }
#app-cover #button-17 .checkbox:checked + .knobs:before { content: 'NO'; left: 42px; }
#app-cover #button-17 .checkbox:checked + .knobs span { left: 42px; background-color: #F44336; }
#app-cover #button-17 .checkbox:checked ~ .layer { background-color: #fcebeb; }
/* Button 18 */
#app-cover #button-18 .knobs:before,
#app-cover #button-18 .knobs span { content: 'YES'; position: absolute; top: 4px; left: 4px; color: #fff; font-size: 10px; font-weight: bold; text-align: center; line-height: 1; background-color: #03A9F4; border-radius: 2px; }
#app-cover #button-18 .knobs:before { top: 50%; left: 8px; width: 20px; height: 10px; margin-top: -5px; background-color: transparent; z-index: 2; }
#app-cover #button-18 .knobs span { width: 20px; height: 10px; padding: 9px 4px; transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15); z-index: 1; }
#app-cover #button-18 .checkbox:active + .knobs:before { left: 10px; width: 46px; height: 4px; color: transparent; margin-top: -2px; background-color: #0095d8; transition: 0.3s ease all; overflow: hidden; }
#app-cover #button-18 .checkbox:active + .knobs span { width: 58px; }
#app-cover #button-18 .checkbox:checked:active + .knobs:before { left: auto; right: 10px; background-color: #d80000; }
#app-cover #button-18 .checkbox:checked:active + .knobs span { margin-left: -38px; }
#app-cover #button-18 .checkbox:checked + .knobs:before { content: 'NO'; left: 47px; }
#app-cover #button-18 .checkbox:checked + .knobs span { left: 42px; background-color: #F44336; }
#app-cover #button-18 .checkbox:checked ~ .layer { background-color: #fcebeb; }
</style>
