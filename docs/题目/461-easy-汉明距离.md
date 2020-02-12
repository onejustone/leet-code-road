# 461-easy-汉明距离

两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。

注意：
0 ≤ x, y < 231.


示例：

```text
输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
```

## 代码

```typescript
function hammingDistance(x: number, y: number): number {
    return (x ^ y).toString(2).split('').filter(item => item === '1').length
}
```

> 进行数字到字符串的转换时，建议用小括号将要转换的目标括起来，防止出错。

[javascript Number.toString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)

[题解](https://leetcode-cn.com/problems/hamming-distance/solution/javascriptwei-yun-suan-jie-fa-by-zhu-zhu-xia-6/)

## 关于汉明距离

汉明距离是使用在数据传输差错控制编码里面的。汉明距离是以理查德·卫斯里·汉明的名字命名的。它表示两个（**相同长度**）字对应位不同的数量，我们以d（x,y）表示两个字x,y之间的汉明距离。对两个字符串进行异或运算，并统计结果为1的个数，那么这个数就是汉明距离。

1011101 与 1001001 之间的汉明距离是 2。
2143896 与 2233796 之间的汉明距离是 3。
"toned" 与 "roses" 之间的汉明距离是 3。

汉明距离除了在信号处理领域以外，在图像处理领域也有这广泛的应用，是比较二进制图像非常有效的手段。 但是，如果要比较两个不同长度的字符串，不仅要进行替换，而且要进行插入与删除的运算，在这种场合下，通常使用更加复杂的**[编辑距离]()**等算法。

[百度百科-汉明距离](https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB)


