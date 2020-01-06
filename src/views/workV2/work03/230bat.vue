<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">我常用的批处理代码</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <p><Icon type="md-checkmark" style="color:green"/> 常年使用 肯定有效 window专用</p>
                <p><Icon type="md-close" style="color:red"/> ------------------------------------------ </p>
                <p>打开当前文件夹CMD命令面板</p>
                <script type="text/js">
                    @echo off
                    start cmd
                </script>
                <p>获取当前文件夹所有文件名然后生成列表 (不透视 仅一层)</p>
                <script type="text/js">
                    DIR *.*  /B >namelist.txt
                </script>
                <p>合并当前文件夹搜有的文件夹然后将内容<b>复制</b>到新文件夹</p>
                <script type="text/js">
                    @echo off
                    set dd=combin
                    md "%dd%" 2>nul
                    for /d %%a in (*)do if not "%%a"=="%dd%" (
                        echo %%a
                        for /r %%b in ("%%a\*") do (
                            echo ... %%~nxb
                            if exist "%dd%\%%~nxb" (
                                set n=1&set "f=%%b"
                                call :yky "%%~nb" "%%~xb"
                            ) else copy "%%b" "%dd%\">nul
                        )
                        rd/s/q "%%b"
                    )
                    pause
                    goto :eof
                    :yky
                    set/a n+=1
                    if exist "%dd%\%~1_%n%%~2" goto :yky
                    copy "%f%" "%dd%\%~1_%n%%~2">nul
                    goto :eof
                </script>
                <p>将当前js文件代码合并到util.js文件中</p>
                <script type="text/js">
                    @echo off
                    color 0a&title 代码合并器
                    echo 正在合并，请稍后……
                    copy *.js util.js /b
                </script>
                <p>使用什么程序打开什么文件</p>
                <script type="text/js">
                    ##start iexplore "http://www.baidu.com"
                    start D:\xianeditPlus\EditPlus.exe "c:\\a.bat"
                </script>
                <p>根据规则生成文件序列</p>
                <script type="text/js">
                    for /l %%a in (21 1 30) do echo.>page.%%a.html.php
                </script>
                <p>快速生成目录结构树</p>
                <script type="text/js">
                    tree /f > contents.txt
                </script>
                <p>批量替换当前文件夹所有命中的文件名关键字</p>
                <script type="text/js">
                    @echo off
                    title 请按提示输入字符！
                    setlocal EnableDelayedExpansion
                    echo.
                    echo 要把字符"a"替换成字符"b" 请输入a/b
                    echo.
                    set /p wkdxz= 要去掉字符a就直接输入a
                    for /f "usebackq delims=/ tokens=1,2" %%b in ('%wkdxz%') do (
                        for %%a in (*) do (
                            set xz=%%a
                            if "%%c"=="" ren !xz! !xz:%%b=! 2>nul||ren !xz! "!xz:%%b=!(2)" 2>nul
                            ren !xz! !xz:%%b=%%c! 2>nul||ren !xz! "!xz:%%b=%%c!(2)" 2>nul
                        )
                        title 成功！
                        color 0a&cls&echo 重命名成功！
                    )
                    ping /n 3 127.1>nul
                </script>
                <p>删除当前文件夹下空的文件夹</p>
                <script type="text/js">
                    @echo off
                    for /f "tokens=*" %%i in ('dir/s/b/ad^|sort /r') do rd "%%i"
                </script>
                <p>当前文件夹中的某个文件夹里面 搜索某天修改了哪些文件 按照文件目录导出</p>
                <p class="text-danger">注意bat文件必须是ascii格式保存注意bat文件必须是ascii格式保存注意bat文件必须是ascii格式保存</p>
                <script type="text/js">
                    @echo off
                    set "year=%date:~0,4%"
                    set "month=%date:~5,2%"
                    set "day=%date:~8,2%"
                    echo %day%-%month%-%year%
                    xcopy site 本次修改 /D:%month%-%day%-%year% /S /R /Y
                    PAUSE
                </script>
                <table class="api"><tbody><tr><td>XCOPY source [destination]</td><td  rowspan="2">[/A | /M] [/D[:date]] [/P] [/S [/E]] [/V] [/W] [/C] [/I] [/Q] [/F] [/L] [/G] [/H] [/R] [/T] [/U] [/K] [/N] [/O] [/X] [/Y] [/-Y] [/Z] [/EXCLUDE:file1[+file2][+file3]...]</td></tr><tr><td></td></tr><tr><td>source</td><td>指定要复制的文件。</td></tr><tr><td>destination</td><td>指定新文件的位置和/或名称。</td></tr><tr><td>/A</td><td  rowspan="2">只复制有存档属性集的文件， 但不改变属性。</td></tr><tr><td></td></tr><tr><td>/M</td><td>只复制有存档属性集的文件， 并关闭存档属性。</td></tr><tr><td>/D:m-d-y</td><td  rowspan="2">复制在指定日期或指定日期以后更改的文件。 如果没有提供日期，只复制那些源时间 比目标时间新的文件。</td></tr><tr><td></td></tr><tr><td>/EXCLUDE:file1[+file2][+file3]...</td><td rowspan="2">指定含有字符串的文件列表。每一个字符串 必须在文件的单独行中。如果有任何 字符串与要被复制的文件的绝对路径 相符，那个文件将不会得到复制。<br> 例如，指定如 \obj\ 或 .obj 的字符串会排除 目录 obj 下面的所有文件或带有 .obj 扩展名的文件。</td></tr><tr><td></td></tr><tr><td>/P</td><td>创建每个目标文件前提示。</td></tr><tr><td>/S</td><td>复制目录和子目录，除了空的。</td></tr><tr><td>/E</td><td  rowspan="2">复制目录和子目录，包括空的。<div  >与 /S /E 相同。可以用来修改 /T。</div> </td></tr><tr><td></td></tr><tr><td>/V</td><td>验证每个新文件。</td></tr><tr><td>/W</td><td>提示您在复制前按键。</td></tr><tr><td>/C</td><td>即使有错误，也继续复制。</td></tr><tr><td>/I</td><td  rowspan="2">如果目标不存在，又在复制一个以上的文件，<div  >则假定目标一定是一个目录。</div> </td></tr><tr><td></td></tr><tr><td>/Q</td><td>复制时不显示文件名。</td></tr><tr><td>/F</td><td>复制时显示完整的源和目标文件名。</td></tr><tr><td>/L</td><td>显示要复制的文件。</td></tr><tr><td>/G</td><td  rowspan="2">允许将没有经过加密的文件复制到<div  >不支持加密的目标。</div> </td></tr><tr><td></td></tr><tr><td>/H</td><td>也复制隐藏和系统文件。</td></tr><tr><td>/R</td><td>覆盖只读文件。</td></tr><tr><td>/T</td><td  rowspan="2">创建目录结构，但不复制文件。 不包括空目录或子目录。/T /E 包括 空目录和子目录。</td></tr><tr><td></td></tr><tr><td>/U</td><td>只复制已经存在于目标中的文件。</td></tr><tr><td>/K</td><td>复制属性。一般的 Xcopy 会重置只读属性。</td></tr><tr><td>/N</td><td>用生成的短名复制。</td></tr><tr><td>/O</td><td>复制文件所有权和 ACL 信息。</td></tr><tr><td>/X</td><td>复制文件审核设置(隐含 /O)。</td></tr><tr><td colspan="1" rowspan="2">/Y</td><td  rowspan="2">复制文件审核设置(隐含 /O)。 现存目标文件。 【就是直接覆盖——Three~注】</td></tr><tr></tr><tr><td colspan="1" rowspan="2">/-Y</td><td  rowspan="2">导致提示以确认改写一个 现存目标文件。</td></tr><tr></tr><tr><td>/Z</td><td>用重新启动模式复制网络文件。</td></tr><tr><td  colspan="2">命令行开关 /Y 可以预先在 COPYCMD 环境变量中设置。 这可能被命令行上的 /-Y 改写。</td></tr><tr><td align="left" valign="center" colspan="2" rowspan="1">/B 复制符号链接本身与链接目标相对。</td></tr><tr><td align="left" valign="center" colspan="2" rowspan="1">/J 复制时不使用缓冲的 I/O。推荐复制大文件时使用。</td></tr></tbody></table>
                <p>批量修改当前文件夹的文件后缀</p>
                <script type="text/js">
                    @echo off
                    ren *.html *.html.php
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
