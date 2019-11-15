/* ================================================================================ *\
*  |说明|_sortBubble(改进版本)
*  |说明|冒泡排序(Bubble Sort)
*  |说明|具体算法描述如下:
*  |说明|<1>.比较相邻的元素如果第一个比第二个大 就交换它们两个:
*  |说明|<2>.对每一对相邻元素作同样的工作 从开始第一对到结尾的最后一对 这样在最后的元素应该会是最大的数:
*  |说明|<3>.针对所有的元素重复以上的步骤 除了最后一个:
*  |说明|<4>.重复步骤1~3 直到排序完成
*  |说明|改进
*  |说明|传统冒泡排序中每一趟排序操作只能找到一个最大值或最小值
*  |说明|我们考虑利用在每趟排序中进行正向和反向两遍冒泡的方法一次可以得到两个最终值(最大者和最小者) ,
*  |说明|从而使排序趟数几乎减少了一半
*  |说明|算法分析
*  |说明|最佳情况:T(n) = O(n)
*  |说明|当输入的数据已经是正序时(都已经是正序了 为毛何必还排序呢....)
*  |说明|最差情况:T(n) = O(n2)
*  |说明|当输入的数据是反序时(卧槽 我直接反序不就完了....)
*  |说明|平均情况:T(n) = O(n2)
\* ================================================================================ */
export function sortBubble (arr) {
    var low = 0
    var high = arr.length - 1
    var tmp
    var j
    console.time('冒泡排序耗时');
    while (low < high) {
        for (j = low; j < high; ++j) {// 正向冒泡,找到最大者
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
        --high; // 修改high值, 前移一位
        for (j = high; j > low; --j) {// 反向冒泡,找到最小者
            if (arr[j] < arr[j - 1]) {
                tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
        }
        ++low; // 修改low值,后移一位
    }
    console.timeEnd('冒泡排序耗时');
    return arr;
}
// var sortArray = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// 测试 sortBubble(_sortArray) 结果 2,3,4,5,15,19,26,27,36,38,44,46,47,48,50
/* ================================================================================ *\
*  |说明|_sortSelection
*  |说明|选择排序(Selection Sort)
*  |说明|算法描述和实现
*  |说明|n个记录的直接选择排序可经过n-1趟直接选择排序得到有序结果具体算法描述如下:
*  |说明|<1>.初始状态:无序区为R[1..n] 有序区为空:
*  |说明|<2>.第i趟排序(i=1,2,3...n-1)开始时 当前有序区和无序区分别为R[1..i-1]和R(i..n)
*        该趟排序从当前无序区中-选出关键字最小的记录 R[k] 将它与无序区的第1个记录R交换
*        使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区:
*  |说明|<3>.n-1趟结束 数组有序化了
*  |说明|改进插入排序
*  |说明|查找插入位置时使用二分查找的方式
*  |说明|算法分析
*  |说明|最佳情况:T(n) = O(n2)
*  |说明|最差情况:T(n) = O(n2)
*  |说明|平均情况:T(n) = O(n2)
\* ================================================================================ */
export function sortSelection (arr) {
    var len = arr.length;
    var minIndex, temp;
    console.time('选择排序耗时');
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) { minIndex = j; } // 寻找最小的数//将最小数的索引保存
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.timeEnd('选择排序耗时');
    return arr;
}
// 测试 sortSelection(_sortArray) 结果 2,3,4,5,15,19,26,27,36,38,44,46,47,48,50
/* ================================================================================ *\
*  |说明|_sortInsertion
*  |说明|插入排序(Insertion Sort)
*  |说明|具体算法描述如下:
*  |说明|<1>.从第一个元素开始 该元素可以认为已经被排序:
*  |说明|<2>.取出下一个元素 在已经排序的元素序列中从后向前扫描:
*  |说明|<3>.如果该元素(已排序)大于新元素 将该元素移到下一位置:
*  |说明|<4>.重复步骤3 直到找到已排序的元素小于或者等于新元素的位置:
*  |说明|<5>.将新元素插入到该位置后:
*  |说明|<6>.重复步骤2~5
*  |说明|改进
*  |说明|查找插入位置时使用二分查找的方式
*  |说明|算法分析
*  |说明|最佳情况:输入数组按升序排列T(n) = O(n)
*  |说明|最坏情况:输入数组按降序排列T(n) = O(n2)
*  |说明|平均情况:T(n) = O(n2)
\* ================================================================================ */
export function sortInsertion (array) {
    console.time('插入排序耗时');
    for (var i = 1; i < array.length; i++) {
        var key = array[i]
        var left = 0
        var right = i - 1
        while (left <= right) {
            var middle = parseInt((left + right) / 2);
            if (key < array[middle]) { right = middle - 1; } else { left = middle + 1; }
        }
        for (var j = i - 1; j >= left; j--) { array[j + 1] = array[j]; }
        array[left] = key;
    }
    console.timeEnd('插入排序耗时');
    return array;
}
// 测试 _sortInsertion(_sortArray) 结果 2,3,4,5,15,19,26,27,36,38,44,46,47,48,50
/* ================================================================================ *\
*  |说明|_sortShell
*  |说明|希尔排序(Shell Sort)
*  |说明|具体算法描述:
*  |说明|<1>. 选择一个增量序列t1 t2 … tk 其中ti>tj tk=1:
*  |说明|<2>.按增量序列个数k 对序列进行k 趟排序:
*  |说明|<3>.每趟排序 根据对应的增量ti 将待排序列分割成若干长度为m 的子序列 分别对各子表进行直接插入排序仅增量因子为1 时 整个序列作为一个表来处理 表长度即为整个序列的长度
*  |说明|算法分析
*  |说明|最佳情况:T(n) = O(nlog2 n)
*  |说明|最坏情况:T(n) = O(nlog2 n)
*  |说明|平均情况:T(n) =O(nlog n)
\* ================================================================================ */
export function sortShell (arr) {
    var len = arr.length
    var temp
    var gap = 1;
    console.time('希尔排序耗时');
    while (gap < len / 5) { gap = gap * 5 + 1; } // 动态定义间隔序列
    for (gap; gap > 0; gap = Math.floor(gap / 5)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) { arr[j + gap] = arr[j]; }
            arr[j + gap] = temp;
        }
    }
    console.timeEnd('希尔排序耗时');
    return arr;
}
// 测试 _sortShell(_sortArray) 结果 2,3,4,5,15,19,26,27,36,38,44,46,47,48,50
/* ================================================================================ *\
*  |说明|_sort归并排序(Merge Sort)
*  |说明|具体算法描述如下:
*  |说明|<1>.把长度为n的输入序列分成两个长度为n/2的子序列:
*  |说明|<2>.对这两个子序列分别采用归并排序:
*  |说明|<3>.将两个排序好的子序列合并成一个最终的排序序列
*  |说明|算法分析
*  |说明|最佳情况:T(n) = O(n)
*  |说明|最差情况:T(n) = O(nlogn)
*  |说明|平均情况:T(n) = O(nlogn)
\* ================================================================================ */
export function sortMerge (arr) {
    console.time('归并排序耗时');
    var r = mergeSort(arr);
    console.timeEnd('归并排序耗时');
    return r;
}
export function mergeSort (arr) { // 采用自上而下的递归方法
    var len = arr.length;
    if (len < 2) { return arr; }
    var middle = Math.floor(len / 2)
    var left = arr.slice(0, middle)
    var right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right));
}
export function merge (left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) { result.push(left.shift()); } else { result.push(right.shift()); }
    }
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
    return result;
}
// 测试 _sortMerge(_sortArray) 结果 2,3,4,5,15,19,26,27,36,38,44,46,47,48,50
/* ================================================================================ *\
*  |说明|_sort快速排序(Quick Sort)
*  |说明|具体算法描述如下:
*  |说明|<1>.从数列中挑出一个元素 称为 "基准"(pivot):
*  |说明|<2>.重新排序数列 所有元素比基准值小的摆放在基准前面 所有元素比基准值大的摆在基准的后面(相同的数可以到任一边)在这个分区退出之后 该基准就处于数列的中间位置这个称为分区(partition)操作:
*  |说明|<3>.递归地(recursive)把小于基准值元素的子数列和大于基准值元素的子数列排序
*  |说明|算法分析
*  |说明|最佳情况:T(n) = O(nlogn)
*  |说明|最差情况:T(n) = O(n2)
*  |说明|平均情况:T(n) = O(nlogn)
\* ================================================================================ */
export function sortQuick (arr) {
    console.time('快速排序耗时');
    var r = mergeSort(arr);
    console.timeEnd('快速排序耗时');
    return r;
}
export function quickSort (arr) {
    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = []
    var right = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) { left.push(arr[i]); } else { right.push(arr[i]); }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}
// 测试 _sortQuick(_sortArray) 结果 2,3,4,5,15,19,26,27,36,38,44,46,47,48,50
/* ================================================================================ *\
*  |说明|_Sort计数排序(Counting Sort)
*  |说明|具体算法描述如下:
*  |说明|<1>. 找出待排序的数组中最大和最小的元素:
*  |说明|<2>. 统计数组中每个值为i的元素出现的次数 存入数组C的第i项:
*  |说明|<3>. 对所有的计数累加(从C中的第一个元素开始 每一项和前一项相加):
*  |说明|<4>. 反向填充目标数组:将每个元素i放在新数组的第C(i)项 每放一个元素就将C(i)减去1
*  |说明|算法分析
*  |说明|最佳情况:T(n) = O(n+k)
*  |说明|最差情况:T(n) = O(n+k)
*  |说明|平均情况:T(n) = O(n+k)
\* ================================================================================ */
export function sortCounting (array) {
    var len = array.length
    var B = []
    var C = []
    var min = array[0]
    var max = min
    console.time('计数排序耗时');
    for (var i = 0; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
        C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    }
    for (var j = min; j < max; j++) {
        C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
    }
    for (var k = len - 1; k >= 0; k--) {
        B[C[array[k]] - 1] = array[k];
        C[array[k]]--;
    }
    console.timeEnd('计数排序耗时');
    return B;
}
// 测试 _sortCounting(_sortArray) 结果 2,3,4,5,15,19,26,27,36,38,44,46,47,48,50
/* ================================================================================ *\
*  |说明|_sort桶排序(Bucket Sort)
*  |说明|具体算法描述如下:
*  |说明|<1>.设置一个定量的数组当作空桶:
*  |说明|<2>.遍历输入数据 并且把数据一个一个放到对应的桶里去:
*  |说明|<3>.对每个不是空的桶进行排序:
*  |说明|<4>.从不是空的桶里把排好序的数据拼接起来
*  |说明|最佳情况:T(n) = O(n+k)
*  |说明|最差情况:T(n) = O(n+k)
*  |说明|平均情况:T(n) = O(n2)
\* ================================================================================ */
export function sortBucket (array, num) {
    if (array.length <= 1) { return array; }
    var len = array.length
    var buckets = []
    var result = []
    var min = array[0]
    var max = min
    var regex = '/^[1-9]+[0-9]*$/'
    var space
    var n = 0
    num = num || ((num > 1 && regex.test(num)) ? num : 10);
    console.time('码桶排序耗时');
    for (var i = 1; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
    }
    space = (max - min + 1) / num;
    for (var j = 0; j < len; j++) {
        var index = Math.floor((array[j] - min) / space);
        if (buckets[index]) { //  非空桶 插入排序
            var k = buckets[index].length - 1;
            while (k >= 0 && buckets[index][k] > array[j]) {
                buckets[index][k + 1] = buckets[index][k];
                k--;
            }
            buckets[index][k + 1] = array[j];
        } else { // 空桶 初始化
            buckets[index] = [];
            buckets[index].push(array[j]);
        }
    }
    while (n < num) {
        result = result.concat(buckets[n]);
        n++;
    }
    console.timeEnd('码桶排序耗时');
    return result;
}
// 测试 _sortBucket(_sortArray,4) 结果 2,3,4,5,15,19,26,27,36,38,44,46,47,48,50
/* ================================================================================ *\
*  |说明|_sort基数排序(Radix Sort)
*  |说明|具体算法描述如下:
*  |说明|<1>.取得数组中的最大数 并取得位数:
*  |说明|<2>.arr为原始数组 从最低位开始取每个位组成radix数组:
*  |说明|<3>.对radix进行计数排序(利用计数排序适用于小范围数的特点):
*  |说明|算法分析
*  |说明|最佳情况:T(n) = O(n * k)
*  |说明|最差情况:T(n) = O(n * k)
*  |说明|平均情况:T(n) = O(n * k)
\* ================================================================================ */
export function sortRadix (arr, maxDigit) {
    var mod = 10
    var dev = 1
    var counter = []
    console.time('基数排序耗时');
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for (var j1 = 0; j1 < arr.length; j1++) {
            var bucket = parseInt((arr[j1] % mod) / dev);
            if (counter[bucket] === null) { counter[bucket] = []; }
            counter[bucket].push(arr[j1]);
        }
        var pos = 0;
        for (var j2 = 0; j2 < counter.length; j2++) {
            var value = null;
            if (counter[j2] !== null) {
                while ((value = counter[j2].shift()) !== null) {
                    arr[pos++] = value;
                }
            }
        }
    }
    console.timeEnd('基数排序耗时');
    return arr;
}
// 测试 _sortRadix(_sortArray,2) 结果 2,3,4,5,15,19,26,27,36,38,44,46,47,48,50
