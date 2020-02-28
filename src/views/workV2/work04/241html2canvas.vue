<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">浏览器 区域截图</div>
            <Divider orientation="right">项目使用的标准或规范</Divider>
            <div class="blogContent" v-highlight>
                <Button @click="jieping()">尝试</Button> | {{headload}} | {{qrcodeload}} | {{html2canvas}}
                <hr />
                <div>
                    <div class="fix_box" id="jieping123123">
                        <div class="qr_container">
                            <img :src="headUrl" class="user_img" @load="headloadok()"/>
                            <div class="title">月野兔活力健身一个月免费健身权</div>
                            <canvas id="canvas44444" style="width: 160px;height: 160px;"></canvas>
                            <!---img :src="qrcodeUrl" alt="" style="width: 160px;height: 160px;" /-->
                        </div>
                    </div>
                </div>
                <hr />
                <canvas id="asdf32424" width="100" height="100"></canvas>
                <img :src="headUrl2" />
                <p>报了这个错误Tainted canvases may not be exported。原因就在于使用了跨域的图片，所以说是被污染的画布。</p>
                <Row>
                    <Col span="12" style=" overflow: hidden; word-break: break-all;">
                        <p>Request URL: http://thirdwx.qlogo.cn/mmopen/vi_32/wdJRwYVsqHicp5icSAv3AL4fVfKcaptqRT8iaBP6MZFO2S6bpo8NtSaicIeTev47V5ELIBJrWPa3RnFj5TdByOGuzw/132</p>
                        <p>Request Method: GET</p>
                        <p>Status Code: 200 OK</p>
                        <p>Remote Address: 111.30.144.28:80</p>
                        <p>Referrer Policy: no-referrer</p>
                        <p>Cache-Control: max-age=2592000</p>
                        <p>chid: 0</p>
                        <p>Connection: keep-alive</p>
                        <p>Content-Length: 4970</p>
                        <p>Content-Type: image/jpeg</p>
                        <p>fid: 0</p>
                        <p>Last-Modified: Fri, 03 May 2019 15:35:21 GMT</p>
                        <p>Server: ImgHttp3.0.0</p>
                        <p>Size: 4970</p>
                        <p>User-ReturnCode: 0</p>
                        <p>Vary: Accept,Origin</p>
                        <p>X-BCheck: 0_1</p>
                        <p>X-Cpt: filename=0</p>
                        <p>X-DataSrc: 0</p>
                        <p>X-Delay: 12 us</p>
                        <p>X-Info: real data</p>
                        <p>X-ReqGue: 0</p>
                        <p>Accept: image/webp,image/apng,image/*,*/*;q=0.8</p>
                        <p>Accept-Encoding: gzip, deflate</p>
                        <p>Accept-Language: zh,zh-CN;q=0.9</p>
                        <p>Cache-Control: no-cache</p>
                        <p>Connection: keep-alive</p>
                        <p>Host: thirdwx.qlogo.cn</p>
                        <p>Pragma: no-cache</p>
                        <p>User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36</p>
                        <p></p>
                    </Col>
                    <Col span="12" style=" overflow: hidden; word-break: break-all;">
                        <p>Request URL: http://q1.qlogo.cn/g?b=qq&nk=123131897&s=100<br>&nbsp;<br>&nbsp;</p>
                        <p>Request Method: GET</p>
                        <p>Status Code: 200 OK</p>
                        <p>Remote Address: 111.30.144.125:80</p>
                        <p>Referrer Policy: no-referrer</p>
                        <p>Cache-Control: max-age=2592000</p>
                        <p>chid: 0</p>
                        <p>Connection: keep-alive</p>
                        <p>Content-Length: 3707</p>
                        <p>Content-Type: image/jpeg</p>
                        <p>fid: 0</p>
                        <p>Last-Modified: Tue, 30 Apr 2019 23:23:19 GMT</p>
                        <p>Server: ImgHttp3.0.0</p>
                        <p>Size: 3707</p>
                        <p>User-ReturnCode: 0</p>
                        <p>Vary: Accept,Origin</p>
                        <p class="text-danger">X-BCheck: 1556637799_0</p>
                        <p>X-Cpt: filename=0</p>
                        <p>X-DataSrc: 0</p>
                        <p>X-Delay: 42713 us</p>
                        <p>X-Info: real data</p>
                        <p>X-ReqGue: 0</p>
                        <p>Accept: image/webp,image/apng,image/*,*/*;q=0.8</p>
                        <p>Accept-Encoding: gzip, deflate</p>
                        <p>Accept-Language: zh,zh-CN;q=0.9</p>
                        <p>Cache-Control: no-cache</p>
                        <p>Connection: keep-alive</p>
                        <p>Host: q1.qlogo.cn</p>
                        <p>Pragma: no-cache</p>
                        <p>User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36</p></p>
                        <p></p>
                    </Col>
                </Row>
                <hr />
                <div v-show="html2canvasUrl">
                    <img :src="html2canvasUrl" style="max-width: 100%"/>
                </div>
                <hr />
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/8flqUs8q1pcVTByLicgFiadibZ8r7w6jryStElZic2TXsFQvD6qmClYUQ7SicHiaZBPbswql7YZKlGibAiamuZOtXIcPicA/132" alt="" />
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoJyWmibEiaEVUF9hEIuMIUeSaVDIX6GraqrGBibVW50Y2A8THFoIhicc9icC7wDic4TBwlm7yfeNvo5dhg/132" alt="" />
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epy80ol9ibyE4icsmao71EDC9JEvBnYicIoWNDHict9NicWdua67icASqLGkpwKEA5LASzVXJf1pH21PMibg/132" alt="" />
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqGic7jW4zZ2hrUQzMj02eYMpSmyhJesjp6pEicRceOVGv4LRDjSGqxlP8aKy31PbOg9bqvfUxp719w/132" alt="" />
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqyqYS7Pg3wCxhkFIvib8jjRiciapeONkSDuQu6QgVaKQDFnGjCk26p64yHZxW83k6Fjv5JxY69G8cmw/132" alt="" />
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erQvtXMNm5hK6xDB8vyibNPhOhBv37B5923VKRox06EGqB86CGVuWWTXXVRUjp6c5wgQm3ziasibHibTw/132" alt="" />
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83errYzcnqaKEicJicD9e5vEhxR6cZj1JWEpUC6ASSnvQCUdDdIPsuCvZEB2Z65wUNN3eq0BogfFDCNSQ/132" alt="" />
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/ojpyD9kF5nniasIe7RTkn73hk8U2dyvVs7qDBCo4m5ciaryia8iaiaIpWfkcjVpQMDnibZzRt9CFrFHGZEfz8vu3xqgg/132" alt="" />
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEKh1viaWEme7ShII00nRbYhUsniaoMVU2W2IhCqzDqovhH2mjWzj8suUK7HExwFduiaYZ6zvzoCaeJFQ/132" alt="" />
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/pSbm4a0Ns1DJ3a8ej7SXibzictznKdod9ribM01ZEA6teibS6QrhfeGJ2gJJxYxBlbNehpfIG4kD3CW1Bw3ibI4DsSg/132" alt="" />
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLCiaNk1T91XCrEKmAFNTqC71aiaBAxNaQbI21WQc4YRRwVib3oQYztg3rPNEGsdsaEMwRaicMHdibRGow/132" alt="" />
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLuic0QNDmJw75ZC2hl5xshkBMeRbmW3f9VhC2ibRJg5JdkyZ8sEPN3WRMYuYjCficbsSsHA9yPXBLicg/132" alt="" />
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/Qw6zl3NUfHuqaDiaMYgn7TXw5nG6ibrnLoJBrUciajlliaYrQYmAdNoaA0kpyQSH1xVFP1s2VuTkQNabVwXaaMV1icw/132" alt="" />
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/wdJRwYVsqHicp5icSAv3AL4fVfKcaptqRT8iaBP6MZFO2S6bpo8NtSaicIeTev47V5ELIBJrWPa3RnFj5TdByOGuzw/132" alt="" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAn8AAABiCAYAAAAhmbWXAAAgAElEQVR4Ae2bDY4syW6rZ//78Tq8DC/Dhq7xARy2FBGZnVX9xwQSkiiKimQPTgWu3/vnv/77f/43z+9y4J9//vnfek+fK1w0r+5gbopX9XZnRo847Q0eB+JAHIgDceCvOfBPLn+/708+XYy4CHXRXZg04O368Cre3bfaseqx08+gdfI4EAfiQByIA3/VgQ+XP36ov8IQdp/8sCt3x/+Kb/mqne5L541jXnN2tKg1TjPKIXcuuicRDY+uuevv+D6fOg7EgTgQB+LAb3Xgw+WvPvSrfyhX+6fehP/WP9z0XeqD5vBPMef7nNfwu+jcVe29Tq8weBWvvJNe8DgQB+JAHIgDf8WBT1/++BF+0rCV5tSb8CfP9d211APN9dzgxOpprlxy+hVXL3yPzIOvau8x45FzOE59qgM/MQ7EgTgQB+LAX3Egl79f9JfmQtTF+ky/EMHbWeBzk9akwx6NcE+0lasamiun8k4XTmIciANxIA7Egb/swI+7/E1/rL/+Y89FCH/UD+2BK8bMFJnRvmNed1znUFecXtXRnNnCdrP0dT55HIgDcSAOxIG/6sDy8sePpv7QYpT2yOkRwbsIp4vFv/Ks+Lp70lQOuXMVJ6+oz2dwZlVPc/oatV959Xh2ufaZ6eLEc9zrndYpf+Ip3uUd1p0pWByIA3EgDsSBv+bAePnTH88yxWuMmvCur1zN4RJXPTgaJ77jXpdGh014cZ2/qznnXd7qLGgTOV8XXYfzwEXDI7wdDo+ofDCPyvEcruPU2u/ywsCJzGpUnuLJ40AciANxIA78VgfGy59/8PQDOuHMa3/K4RKVBzbFidvhp1jtOuWe8E44fN8pd8fTPnlFf9k7xdWsak2eKa78XT6dB5xzoa96ylEeOLGboZcYB+JAHIgDceC3OvCjL3+7H/arfzS9DHTad7FuTs+221tcODrnue7xXGv0fF7r3b5d37VWO/1sOjvlOrPKtddpVX/H6eaCxYE4EAfiQBz4qQ782Mvf7gd719c/WHcB6OZPsdKGS9R95NXzvtdwid2M9+BohEPUPfDoEZUDVlFxzZWjORyi9wrvXuV5rnzvUXf76CXGgTgQB+JAHPirDvzIy1/3o+6Y1/yBHfd64hXecTtMubs++4gd/w6mM5WvXnZ7VA3tKa65cjSHQ9Rel0+8wnmnOfoa4RaWJw7EgTgQB+LAX3fg0ctf9+Oq2JT7H0F5p71uxjGvS7vDFNe+5pyrwz7TQ4+oZ0H3BLszr/onO+DrLjCN9Cvyat9z+I53NXo+Q02/ZsHQoec4/cQ4EAfiQByIA7/RgQ+Xv+4HscPUDPqKVQ5eUWvP/9M0PrP0iOBdhKNReYprrpwuL67izHYYPWa09lznuxz+qgenYvF4przrg3lUjep5rfypVziv8lf5pLWa0Z7Ps9/xmqGn88njQByIA3EgDvxmBz5c/n7zx/7mb5suNvXNq96pJ52Gz3YXqZM5dJi/MsNsReYVI1/14CTGgTgQB+JAHPgLDuTy98v/ytNFasLdjndfmk7P1Z3TsdRxIA7EgTgQB+LARwdy+fvoSZA4EAfiQByIA3EgDvxaB3L5+7V/2nxYHIgDcSAOxIE4EAc+OtBe/l79f3rb6e/6Hz+j/3/X1vGCfd6B+vvc+Rvp5ic0VC95HIgDcSAOxIE4cOZAe/mrUf9xpl5FXzlxVX/Fcb1VXTp53uPAVa87foe95/TZEgfiQByIA3HgbzswXv7KFv2B1hzLOoyex1dx2XNFn5mvjHVe3jpHd376RD8veBedyw641M6j30W41bv6+IzXV/XCjwNxIA7EgTgQB+45sLz8lSQ/0kRd02HaJ1/xul6HoTXFaWbCJ5134H6mqjvMz+Kc6ndYhzuvasd8H7XyNKff7dNe1590fC51HIgDcSAOxIE48KwDty5/9cM9vd3xVj/0Xa/D0J32rnBmv0Ocvs1xr+vsp5hzuznnrLzR+cpX70pHe6qp+Cq/M7PSSy8OxIE4EAfiwF904MPljx92zOAHl1i45s6j1tjx6XvPa3jEqX8VR++dcTqjn2HF857XaCmuOf0rUec1R6PDqlf4Z170idMe+olxIA7EgTgQB+LA3oEPl78a4UeWqJjnrFAuGNzq6Uu/m+kw+OhpTT7NTThz74ynZ1nxvOd1fY9jXl/9ZuYrkqtGh2nf80kH3qQ34cwlxoE4EAfiQByIA3sHbl/++AHX2K2jT09/wDXv+mAau5nqX8GL6/wOYy89jfQ0nvSVP+WlMz3e053k3eyqp3x4XSxe4fp4rb0p3814v2p/O23l0F9hcCrCU4ycXsU8cSAOxIE4EAd+ugPt5Y+P0h+7KYdbUTlaK+551atX9VXzFbieDf272OkcezR2s/S9p7Xm8D0WZ8Vb9dBSjub0d5EZovOv4tO86mhefK9PsW6O/dVb9eElxoE4EAfiQBz4SgfGy5//iGnNj1wXu4/x2Y7jmM5or9u5w3SevNO/i3VztcdxrzmLxxXPe7vatal9bofTr6izmitnyouvM167vuronOKed5odZ4dN+zqcnV3P96SOA3EgDsSBOPCVDly+/PmPm9fdxyhH844LNvFeia+0p16dt3rTy/fA03rKd7t0zrleK9fzjtthq7kTvs53/MIU13w3q33yaZ5+xY7jWNXTq1rkcKkT40AciANxIA58Rwc+XP74AavIo3lhWsOH28WOz1wXfUen6Zju8F5Xd/wO01nOqljluzn4K572NGeW6D2vu/N0nI43YezWWJqTrvI0X/G1p/np/FVet8Mxr3VH8jgQB+JAHIgDP9WBD5c/PkR/+Dz3umYUQ4OoPc3peyzOCU/nnuB3GidYx6mzdXiHddyOdxfr5rqdV7CJW3j31Bmmczh/4k346bzyOi3HvGZ+wuknxoE4EAfiQBz4zg5sL3/+Q7eqvceHF64v+CpOWtPMZ/mcz/U73ROs45R2hz+N+Z7S9x1e892Kd3PKW/XhEVUXrIsrTdXQ3HVWPbjOqdqx4jrmNXpwV33lJo8DcSAOxIE48FUOtJe/+gHjR4xYB9ScAytWudYdB8yjz3ntfK+v8mu+Zni1Vm36GrWv+QlH98BXDc3pE7XnOlMPHnHSYp5+xe6hT89rcI2TlnLId9zVPnoa0e2i86idC15x9cBbcdKLA3EgDsSBOPDVDiwvf/pjp3kd+hU/dGj6rhOT7syc6P41zsrHqVc4r/rVYdonh0cE/4mxviFPHIgDcSAOxIHv7EB7+fvOB87Z3u/AnUvZnUvQnZn3uzFv/Onnn78snTgQB+JAHPhNDuTy95v+mvmWOBAH4kAciANxIA5sHMjlb2NQ2nEgDsSBOBAH4kAc+E0O/PjL353/k+Rv+gPmW36+A9P/udjxz/y3/plZdfgpHdVMHgfiQByIA+914Edf/vyHiHoV32tvtsWBMwfqv1l/uv+OndPVk1bHvYN1+nd0MhMH4kAciANf40B7+Tv50ek4YLtPWf14oEFcaa10VnPeO9nlM6mvO4DPxOsK/554SgfVp/XQPYm12x/HvHa+1s71WrlP5u/a8+SZoxUH4kAc+GsOfLj8Tf94O+71qXE1N812eIfVrgk/PYfySutJPdVO/v8OdP522BW/nv67Pa135Vs6rvvjdTcD5lyv4a1izdx5V5rpxYE4EAfiwNc78NbLHz9ARP/8Dj/BOo5rp/5aB7q/UYd97Sm/z/byxv3x+sppr846v+oO0zN4X3vJ40AciANx4Ps48LbLn/4waI4VHfbZHvPE1Q44ic87sPJ91Xv+JN9X0X3wuk5emL/6Rd67WquW56XVPbqj6weLA3EgDsSB7+fAh8vfdET/x9/raQ5c+Zp3fTBix69e4dqjniJ6ie91QP9GvnnVc+5vrPW/Vb7vaU/Ygb7H3b5dv/R2O3xn6jgQB+JAHPg6B44uf90//mD8o0/dfYr3vK6ZDkNr6hU+9Xaaqr3SoddFNDx23MLuPqrXaXT9DmNWe5VPj/Mm7o43zdVe7akOZ+ow5ujBnSI8j8rXnuKawymMvOITDzoadYfnV3aiOc1MfXZOc45POs5LHQfiQByIA1/rwKcuf/6Pvdd8muNeF6/DpnnlX51D0+OpjvI0R+8Ug7+Lrue1ztMjVk/zrn4H5mfoztxhOqd5x1VM826uw5hZ9YpTfed4jdaV2GmcYrs96BCd3+Ed5nPUxd3xTzjoJcaBOBAH4sBrHdhe/nb/qPvxnO918U8xtJ2vtebwiaseHOKKq70pX+noDLyT2M11GFrV2/XhevQ5r4t/F+vm2N/1CutwZjTueF2/w9Bc9YrT9TsMvdPYaZxiqx2loTpeT9+kmsxMUbldrnNdP1gciANxIA6814Hl5a/+0b76+Iz+w9/l6PsceEXtae49ndn1rnB155Sjp/0VRm8VO63P8Fd6Xa+wDvcz7Hgrja7XYb6Tesft+h32Kj10d3E6k+Ka7/TodzOFKa45c6t4lV9avnOln14ciANxIA681oHx8rf7B37qT7h+RsfpMGZe0UObeLpDeZqjU7FwfbV3JZ/0J40df9Xf9VZ9zlOcjtdhOkNOXPHhEE+4xdGX2S7u9Lp+h3XaK0w1TvKVFj3VASNqT3P6q3iVv9JKLw7EgTgQB97vQHv56/5xd8xrjj7h9CtOnA7vsBOt1R6dJ1/t0d6Un+jAOY26S2eu4sxOc9X3ntcd5xXYpFl493TnVN6ur9zKd/yu32Guu6vRICq/sA5XjudXZu5o+77UcSAOxIE48HMc+HD5m34IHPe6PrnDOismXod3mGqu+queauzOrjpTrnrF8bfrKzbluq84Xuvcqgev43wnbPeNfAexOzs9YnH8pedxp9f1O8x1dzXn63irXscv7PRMr9TWs93Zo/PJ40AciANx4DkH2ssf/1B79LW7/o5f8/7c0XQN6k6fHtH3+Yz2a4ba865mBz1q1QBbRfgVu0f75B0PDA4RXCM9jdon1z45PY/0ibt+8aYHDY3Oped41a4NV6PPdb0O87mTunT8QRvca3CPnZZzqK9wPztzZxc7E+NAHIgDceA5Bz5c/p6Tfr3S9GMI/u4fm9W+Ve/1Tv3NDSvPV73v4NbqfNXr+hPu3wOPuOvDO42uR13zeeJAHIgDceDrHfjxl7+vt/DfJ5h+IP/NSvUuB37S30PPetWfOxerOzNXzwX/nbvYmRgH4kAciAO9Az/68td/UtA4EAfiQByIA3EgDsSByYFc/iZn3oTnfxF5k9FZEwfiQByIA3EgDvzHgVz+LvyHcOeitpup/o5z4Yhb6um+d56pDv3ufVujQogDcSAOxIE48EsdyOXv4h/WL0/UU9zJM7fjPdWvfacPXM64i657ha+7XCd1HIgDcSAOxIE48JwD4+WPH+7nVv0eJS4q/kUT7jytn/AZDY26Q/PdGdGomR13p6vz5B7RAL+6l/nEOBAH4kAciANx4MyBXP7OfPrA0ssKzQ6r3oTT077nVfvLPqLOoEnPo3I1h9dh9Faxm1OM3COa4NSJcSAOxIE4EAfiwGscGC9/r1n3e1TrsnL11a/X2cK9BtOZU0y1TnLdUXx9vD49AxrMa6yc2nnoex9eYhyIA3EgDsSBOPA5B3L5O/RPLyzdxUQxzXfyztVac3ROsI6zmqdX0Wer7l6dWc3BQ0Nr5ugR4STGgTgQB+JAHIgDzzuQy98FT+tyUg+RUa87DlyPPqu15sydYB1nNU+vos963XEmTHV3HN2juWukjgNxIA7EgTgQBz7nQHv5qx9f3k6eXhc7fmEdt7C7T6enWtoH77CTHhyin5uaOPHANa5mvFdzE1a4vuxwvtfwiN73enUGNDTWvGpo7jzqiUM/MQ7EgTgQB+JAHLjvQHv5Q271I6y9KV/p6Ay809jNdljpgRMVY5/2uj48ovKnHB3tM6/R+1przswJppzKvUari8qtPvMefdbn6Puc18pjH1hiHIgDcSAOxIE48LwDf+LyN11Mys6u12FYrz3NV1rFc26n5xrdzAnmHK015wwave+1n5HZiae45swR6RHBE+NAHIgDcSAOxIFnHfiRl7+yoC4JJxeFHWfXd7vZ28055rVr8R2K64zmcE6wjrOap1fRZ73uOB3GXMXp9b3MKJ48DsSBOBAH4kAceNaBt1z+6sh+AXjqM9Cd9HYXil0fXfY4X2tyIt+Nhkfl0VNM864/Yd3cxAUn+qzXxTvFnNvN6d5VH63i7HhoJsaBOBAH4kAciAMfHXjL5e/pH+tOr8PqcyccK6b+Ka68k5y909kmDea0r1jh+tLz2M0rx/uqqbnOVO5z9HXGczjMTxrwtK85/cQ4EAfiQByIA3Fg78BbLn91DP/h9x9v+vsj9xcN10NnwulztlU99fzMumvKJy3w3Zz2u5nCOs7EBSeuZuF0cZpTXHPVAK+ouXIqp+e581LHgTgQB+JAHIgDswPt5Y8fYY0q4Th1cTTvateh9jnwLsLV6DztkTtHazgVpwfOqj/1HGcPmkTlgXlUztW8tFbPrt/Ncr6pB67a5ETlTHrgPsNsYhyIA3EgDsSBOLB3oL387cfOGasf6lXvfMP7mFw+uo2rnvO77+7mJ57rndTod5o6v+srt3J0Haemjy41s/A0Kkfx5HEgDsSBOBAH4sDnHXj55a+OyI+5x88fPwo/1YH6b2H17Pqr2fTiQByIA3EgDsSB2YG3XP7m9enEgTgQB+JAHIgDcSAOvNOBXP7e6XZ2xYE48K//jzux41kH8r+YP+tn1J53IP+NPu/pHcWjy1/9sfwP1mF3DtDNPK19Vc+/tTvjCXZ174nmHU53DsXufu9ubtfvvmU1s+p1Wh1WGiudVW/S6/C/ik3+Ka75HZ9qHg3iHZ2fNjN9q+Ka3/m+mkeDeFVHNe7OorGKV7WVj65i78q73YpVfufZze36V3autFa92lH9HefKWZy70/b+rnZ96prz2ZMenC5Oes495fmc1seXPx2qfPXhyoV3Jeq85lc0lKsaJ3nNPvHsdHb9J85QGt0ex7zW3dXrXrS7HpjqaE6/i8rTvLjT0+l02DQP3s3sMGYT+//WypfykGfK6e8ifw94XoP/tqi+6bcpPuXKX+XupderWXp3ZnSWfIr6jc5h9yrWzErDNZ+uu92Oea1nqF738l1dD0x1NKd/GnXWczQcp67+6YPWnTjtQIu+nkdz+lNccX3HpFG46mh+OrPirXrt5Y+D34mrZdo7/UidmfIntWrHFb07HvnM9F1P4NO3OO71tPuUt/Nx0lFc85Ve8e683Tf6TjhXceb+WsSn07/HHX/Q1ln2KvaKvNv9ij2dJt/IGXax09hhaCqPvYpNuXI1n/iOn8yccEq3eBN3wv08T9fTXse9ns5xysOPSWfCr+irxmpu1VONVV4an9HRWXLiai+9Fbd6vPBXUbU01xnHvVbuad5e/ny4W1RYh/vsVH9mVjWf0jnRvLLrCld3V16zV1/XoNZzTDlcovLAKk741DvlK2/KP7vjM98x7V7huu8v5fz9iHy71prTvxJr3jU67IrmKfdde7rz8M1EOFprTv9KrHnX6LBOs+O5Vjen2An/hFOaK17X6zB0qnfl1W/SXHdMufLZ79gKn3q6r9PrsDszqtPNO1a1Y6rR5Z+ZYfZK9DPoedGB4z3wLjI7RWZUszCv4V2Jly5/HPDOcmZP4uoDTuY7TqfZ8XZYp+MYGo6/u65z6MO5dlFnNHe9Xe+Ur7wpr13aYzdYRX2V7zizXUTPe1dxn//ttXqMV2DTt8Pr+sx2sfiOdxq/Beu+FWz6xupPD7NdrBnHJx3Hp50T7vPdbj8LdTermO/Umhwtos6/Imcv2uzdRfgeXU/7Xa/DdKbL78ygw2zF1Qv/SkTvdIaznPLhdXOOaa35SmPqdfPFddxr9K7Eo8sfgp9ZeDJ7h+Mzu5pvqehceldx5ojTPDtXfTSeiLqncmrN2UOPuosrjve8dj3tn+Q1rzzX6+qrfHbU3JW32/0XMTzTbwebonKv5KX3lx78028Gm6Jyr+R3vN3NcMbdOXY6Oj9xd7j3q3ZM9zyV6w7dqTm7lAvmccXxnteu1dU1c2XO+dPshHdnmDDfNfEK77hgU2TOdYuvD/MTH67yFCMnuv6ETzz4J/HRy9/qQF3PMa+7D3DO1Vo1fZbeVZy5ijW7e5X/qrw7A+fTyH79Zs2175raIyd2GvQqav8k9xnVoqfnAyPS8zmv9Szau4rr7F/J8Vi90tx9WPWc6/VnZl3rJ9T1vbycd+XBqsf8FK/O7vj0K+rb7Yfb9RxDa8Lpeyy+7tHctZ6q/Qzs9Mg+cD+r9l1Te+RE1QOr6BpXa9VSPXLvr/COC+bn55z0r0bXY37Ctc9uYvVWc/SIKy00NXb6roXmlfjh8qdLPecQjlOvFhfHH8e8dn7Vzrlaq6bP0ruK+9w0352f2VdGzkPkHFVPr58HHrhrgRO1D6ZR+yd5zSpPta7mK52pdxXnvDU3zTpn4ipO7pqfwZmdfKSvsePS57uI4F1c6XT8wtDtZl+J6Xm6Pdr3vOMX5jxq5yte+WpWuZMOHI/o+lxXM8sMtUf6aFR/9fj8ql7pVE93odPhO50n+5yJyHk4Xxd9Pxxw1wInah9sF5kh7vjaX82seqqhuc9UPb06N+WuB2/C6WuES6RXtb6FOweux4nnuNeuc1J/uPxNQ59d1s075nV3FudU7a/OOf+kN81MeGlqT3Pd5zzvvarmPMTuHNrzc9Aj+nzhu3fS7LTg6j7nKWe32/vMdtF3wvks3s13WO3r8MIc39XT2X1u4q3OwgwRzSnC0whXMc+L0/E6zGdfVa92a2/KOZf2TzD4HpnVCEcxz4vT8Tqsm3XsHfXJ2fQcyj/JdfZVOecg1h7Nu1rPApfo/MJ3r+pNOfrEidfhzHTnKP6Ed1rwtce8Yldy5rt4olNzTzyuozVnqz2Kd/Wdsxxd/nzxrUWNWa7rdbfHOVdr1azZq6/Ok3dnWOky947Yna32TvjqTDqj+emM8nT+JO/OrHqeq6b3VvU0dwXvuKdYne2Ue8I74eDHKXfF817Vq5fdU2TW+77H+6+sV7u1N+WcTfsnmPOrXr1oTpFZ7/se73+m/qy2zk/n1/M5n96E039V1L21g5rIXq/BNSpHc+V4fsqrObhE11rVq5lVb9L0maodm2Z3+FWdq3z2d3OFrd5pttOCexq3l7/VwbS3W+iHZVbnnKM9cudcrdGp6LP0ruAdt8N22vSfjHUOf9H3M1LDh6cRTmGaK8fziaf4Sb7aWfNXXz8n9VUdPbtqkJ9G3+tzp3uc53Wnq7u9XzX9rkef3mrfqse8x9XuO3quf6de7dXelLNT+xOmHM3hE1c9OB5rZpqb8EkDrV30eerdXNdn1mPHLcwfMKL3n667c7HDz0DNDDyNcArTXDme3+GdzrBrxV/1mO+iz1XtWDfnGHOn8bPzuse1qvZv0HrKu7lOe4ctL38sJ05iu3532G6mw3ync6r2V2ecr70pvzOjWqv5VU81nshXu6rXvau9qtfNOlZaOqPa4ETtkXvP61Oez3mNTsWpdwWfuLqHvLjO93o6V8dT7tSH432vOSOx+icc+B672Z3mqj/pdXs7rvNO65WW9qZc9xRHX+15rnonPXSdS73qd7s6DC3iShPOLq72rHqd7or/xFm7nRN2chbORJy0Clc9+KvoM1e0V1x6uhtMI32wqk8f57rWXZ2ac+0JY0fHp0c84XR7dG7Kuzn2Xonj5W+12Bco13tTrTOaT3xw516t0VlF11xxu17Nr95u5l0Y30Zkr9fgGpWjuXI0L86OR5+o855PHMev1rrHZ+ldwU+5p7w6Q8ftMOXu+nwbseOfYp1Gze5e5qbIvPY5k/fAlVu587x/tZ72sAs95Wne9cFWUTUq370rreoxrzx2eA9cuZ77DDucd1JP+yZ80lzxu/NOOq/COR+RPV6Da1SO5srRvDinPJ/TmnzSuoJPXHYQnVe1Y3BXsZs5xVa62lM9zZVD7n2tNYdPXPXg7OKHy1+JurDXLrrrn/DZu9Py/tXaz9LVrtlxVthqftUrzerffaczqR4cP4fX8DSqzgm/Zlc876GvOzV3Pj3Hr9aTDnhF16R3ine8DtNd2td8t1s14GrstHRG+5qj0WG7ns5oztwUi+uvclVLc+VUvuo5d1evtLQ35apfHH+1r7nqTfjEUT657/VZrTVn3uPEmXCf17pmurkO0znPle+a9Ig+WzUzd2Kn55pw/Axew9PoZ9LelO900dT5aeYKPnFrz6rHOZxTtWNwV7GbOcVclzPovObwO2zqqeaVOfSuxA+Xv254dYji7/qqueNWf8Xx3tVazzLlrjnxJnw1v+pNenfx2jXtc1zraU4505mc4zVzK3zVY16j86/WaPkceMWpN+HMVP+UA1fjpOMcPSszjmmt810Od9WDo7H43eO418z4PvBVZKY4nW6HrfSmHns0Ktdxas5VNY/2wIjKA6t4iq947J04uo+dcInOgdfhYOylvhtXZ1BN9mmkDzbV4E9H36v61dNH62lOOTqruXO8XnHpTTOFe2/CVAuORzhdPNlTc2h2GvS9d6rN/GqHa7HrFJ946BBPefC7eHz5q2WrtxNXjFnFpnz1YegQS4OcOa3Bpl0dfmdGdbp5PZNyX5l352CfngceGJy7ER10XWfC4WlftRSHW9HxqVYtne80dv2Vls/+pbrz3jH8mDyc+Mx18UmtTv9pbPWNU89xvrk7G71upuOvsEmrZrS3yuGu9kw915147Cj+9Ox6q/6keYqvtKunb2lSn+pPPHQqTs+upxqeqya9Dtvt0JnK0WLOa+fAc51dfXfOdfV8Xe78rt6dRXW7+SvY0eXviqBynzyo6l7Jd2Ze0Trh7vbt+ic7fjLn7vev5lY99+oK12e9flLLtX9qXZ7ou/uOpz18Wm93/s/01SfNJ03lnHznCWfa1eGT3oS7xinP56g/M3EaDw0AAACHSURBVF+zn5nnDL8txpeP/+PB3b/xu/77emrPSy9/d03MXByIA3EgDsSBOBAH4sBrHMjl7zW+RjUOxIE4EAfiQByIA9/SgVz+vuWfJYeKA3EgDsSBOBAH4sBrHMjl7zW+RjUOxIE4EAfiQByIA9/SgVz+vuWfJYeKA3EgDsSBOBAH4sBrHPg/p3HoVC9FOmAAAAAASUVORK5CYII=" alt="" />
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
import QRCode from 'qrcode'
import html2canvas from 'html2canvas'

export default {
    data () {
        return {
            headUrl: '',
            headUrl2: '',
            headload: false,
            qrcodeload: false,
            qrcodeUrl: '',
            html2canvasUrl: ''
        }
    },
    computed: { // 计算属性
        html2canvas () {
            if (this.headload && this.qrcodeload) {
                // this.jieping()
                return true
            }
            return false
        }
    },
    methods: {
        jieping () {
            this.html2canvasUrl = ''
            html2canvas(
                document.getElementById('jieping123123'),
                {width: 400, height: 550}
            ).then((canvas) => {
                this.html2canvasUrl = canvas.toDataURL()
            });
        },
        headloadok () {
            this.headload = true
            //
            var cav = document.getElementById('asdf32424')
            var ctx = cav.getContext('2d')
            var img = new Image()
            img.src = this.headUrl
            img.setAttribute('crossOrigin', 'Anonymous') // 解决跨域问题，需在服务器端运行，也可为 anonymous
            img.onload = () => {
                ctx.drawImage(img, 0, 0) // img转换为canvas
                ctx.fillRect(0, 0, 50, 50)
                var base64 = cav.toDataURL('images/png') // 注意是canvas元素才有 toDataURL 方法
                this.headUrl2 = base64 // canvas 转换为 img
            }
        }
    },
    mounted () {
        setTimeout(() => {
            this.headUrl = 'http://thirdwx.qlogo.cn/mmopen/vi_32/wdJRwYVsqHicp5icSAv3AL4fVfKcaptqRT8iaBP6MZFO2S6bpo8NtSaicIeTev47V5ELIBJrWPa3RnFj5TdByOGuzw/132'
            // 'http://thirdwx.qlogo.cn/mmopen/vi_32/wdJRwYVsqHicp5icSAv3AL4fVfKcaptqRT8iaBP6MZFO2S6bpo8NtSaicIeTev47V5ELIBJrWPa3RnFj5TdByOGuzw/132'
            // 'http://q1.qlogo.cn/g?b=qq&nk=123131897&s=100'
        }, 2e3)
        /* QRCode.toDataURL('http://oa-wap.yunxi.cn/#/download', {errorCorrectionLevel: 'H'}, (err, url) => {
            if (err) return false
            this.qrcodeUrl = url
            this.qrcodeload = true
        }) */
        var canvas = this.$el.querySelector('#canvas44444')
        QRCode.toCanvas(canvas, 'http://oa-wap.yunxi.cn/#/download')
    }
}
</script>
<style scoped>
    .fix_box{ width: 400px; height: 525px; padding: 20px 0; background-color: #0094eb; }
    .qr_container{ position: relative; text-align: center; width: 70%; border-radius: 10px; margin: 56px auto; padding: 50px 20px 40px 20px; background-color: #ffffff; }
    .user_img{ position: absolute; top: -35px; left: 50%; width: 70px; height: 70px; border-radius: 35px; margin-left: -35px; }
    .title{ font-size: 24px; font-weight: bold; margin-bottom: 20px; }
</style>
