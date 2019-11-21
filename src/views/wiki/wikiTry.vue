<template>
    <div>
        <h1>hahaha</h1>
        <Form ref="formValidateId" :model="frm" :rules="frmValidate" :label-width="150">
            <FormItem label="文本域" prop="textarea1">
                <Input v-model="frm.textarea1" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入XXXX" />
            </FormItem>
            <FormItem label="MarkDown文本" prop="text1">
                <div v-text="text1" style="width: 600px; word-wrap: break-word;
                    height: 200px; overflow-x: hidden; overflow-y: scroll;">
                </div>
            </FormItem>
            <FormItem label="MarkDown结构" prop="text1">
                <div v-html="text1" class="showDown"> </div>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import converter from '@/plugins/showdown'

export default {
    data () {
        return {
            frm: {
                textarea1: ` // 文本域测试
                    # The largest heading
                    ## The second largest heading
                    …
                    ###### The 6th largest heading

                    This is an H1
                    =============
                        
                    This is an H2
                    -------------
                    > A paragraph of text
                    >
                    > Another paragraph
                    >
                    > - A list
                    > - with items
                    *This text will be italic*
                    **This text will be bold**
                    a ~~strikethrough~~ element
                    Here's an idea: why don't we take \`SuperiorProject\` and turn it into \`**Reasonable**Project\`.
                    Check out this neat program I wrote:

                    \`\`\`
                    x = 0
                    x = 2 + 2
                    what is x
                    \`\`\`

                    * Item
                    + Item
                    - Item

                    1. Item 1
                    2. Item 2
                    3. Item 3

                     - [x] checked list item
                     - [ ] unchecked list item

                    link to <http://www.google.com/>

                    this is my email <somedude@mail.com>

                    link to http://www.google.com/

                    this is my email somedude@mail.com

                    this is a [link to google][1] 定义变量

                    [1]: www.google.com

                    ![Alt text](./www.qichacha.com.png =100x40 "企查查")
                    ![Alt text](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l
                    jmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAY
                    SURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=)
                    | Tables        | Are           | Cool  |
                    | ------------- |:-------------:| -----:|
                    | **col 3 is**  | right-aligned | $1600 |
                    | col 2 is      | *centered*    |   $12 |
                    | zebra stripes | ~~are neat~~  |    $1 |
                `.replace(/[ ]{20}/g, '')
            },
            frmValidate: {
                textarea1: [
                    { required: true, message: '文本域不能为空' }
                ]
            }
        }
    },
    computed: {
        text1 () { return converter.makeHtml(this.frm.textarea1) }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
